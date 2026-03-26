export interface LeadData {
  naam?: string;
  telefoon?: string;
  email?: string;
  typeMeubel?: string;
  bericht?: string;
}

export async function submitLead(data: LeadData): Promise<void> {
  const res = await fetch('/.netlify/functions/submit-lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || `HTTP ${res.status}`);
  }
}
