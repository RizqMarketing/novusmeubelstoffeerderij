const ODOO_URL = 'https://meubelfabriek-mj.odoo.com';

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body);

    // Stap 1: Haal de Odoo contactus pagina op om CSRF token te pakken
    const pageRes = await fetch(`${ODOO_URL}/contactus`);
    const html = await pageRes.text();

    // Haal session cookie op
    const setCookie = pageRes.headers.get('set-cookie') || '';
    const sessionMatch = setCookie.match(/session_id=([^;]+)/);
    const sessionId = sessionMatch ? sessionMatch[1] : '';

    // Haal CSRF token op uit HTML (zit in JavaScript variabele)
    const csrfMatch = html.match(/csrf_token:\s*['"]([^'"]+)['"]/);
    if (!csrfMatch) {
      return { statusCode: 500, body: JSON.stringify({ error: 'CSRF token niet gevonden' }) };
    }
    const csrfToken = csrfMatch[1];

    // Stap 2: Verstuur het formulier naar Odoo via multipart/form-data
    const formData = new FormData();
    formData.append('contact_name', data.naam || '');
    formData.append('phone', data.telefoon || '');
    formData.append('email_from', data.email || '');
    formData.append('partner_name', data.naam || '');
    formData.append('name', data.typeMeubel
      ? `Offerte aanvraag - ${data.typeMeubel}`
      : 'Offerte aanvraag via website'
    );
    formData.append('description', data.bericht || '');
    formData.append('team_id', '0');
    formData.append('user_id', '5');
    formData.append('csrf_token', csrfToken);

    // Voeg foto's toe als bijlagen (worden als ir.attachment aan de lead gekoppeld)
    if (Array.isArray(data.fotos)) {
      for (const foto of data.fotos) {
        const buffer = Buffer.from(foto.data, 'base64');
        const blob = new Blob([buffer], { type: foto.type });
        formData.append('ufile', blob, foto.naam);
      }
    }

    const submitRes = await fetch(`${ODOO_URL}/website/form/crm.lead`, {
      method: 'POST',
      headers: {
        'Cookie': `session_id=${sessionId}`,
        'Referer': `${ODOO_URL}/contactus`,
      },
      body: formData,
    });

    if (!submitRes.ok) {
      const text = await submitRes.text();
      return { statusCode: 500, body: JSON.stringify({ error: `Odoo fout: ${submitRes.status}`, detail: text.slice(0, 200) }) };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
