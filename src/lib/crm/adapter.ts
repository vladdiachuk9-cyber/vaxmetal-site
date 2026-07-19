export interface CrmLead {
  name: string;
  email: string;
  company?: string;
  message?: string;
  material?: string;
  quantity?: string;
  finish?: string;
  tolerance?: string;
  locale: string;
}

export interface CrmResult {
  delivered: boolean;
  provider: string;
}

/**
 * Single entry point for lead delivery, regardless of which CRM the owner
 * ends up using. Selected via CRM_PROVIDER; each branch reads its own
 * provider-specific env vars. If CRM_PROVIDER is unset, this is a plain
 * no-op (CRM integration simply hasn't been configured yet) — but if it IS
 * set and the required keys are missing, it fails loudly rather than
 * silently dropping the lead.
 */
export async function sendLeadToCrm(lead: CrmLead): Promise<CrmResult> {
  const provider = process.env.CRM_PROVIDER;

  switch (provider) {
    case undefined:
      return { delivered: false, provider: "none" };
    case "hubspot":
      return sendToHubspot(lead);
    case "pipedrive":
      return sendToPipedrive(lead);
    case "bitrix":
      return sendToBitrix(lead);
    default:
       
      console.error(`Unknown CRM_PROVIDER "${provider}" — no lead sent.`);
      return { delivered: false, provider: "unknown" };
  }
}

async function sendToHubspot(lead: CrmLead): Promise<CrmResult> {
  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formGuid = process.env.HUBSPOT_FORM_GUID;
  if (!portalId || !formGuid) {
    throw new Error(
      "CRM_PROVIDER=hubspot but HUBSPOT_PORTAL_ID/HUBSPOT_FORM_GUID are not set."
    );
  }

  const res = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields: [
          { name: "email", value: lead.email },
          { name: "firstname", value: lead.name },
          { name: "company", value: lead.company ?? "" },
          { name: "message", value: lead.message ?? "" },
        ],
      }),
    }
  );

  return { delivered: res.ok, provider: "hubspot" };
}

async function sendToPipedrive(lead: CrmLead): Promise<CrmResult> {
  const apiToken = process.env.PIPEDRIVE_API_TOKEN;
  const domain = process.env.PIPEDRIVE_COMPANY_DOMAIN;
  if (!apiToken || !domain) {
    throw new Error(
      "CRM_PROVIDER=pipedrive but PIPEDRIVE_API_TOKEN/PIPEDRIVE_COMPANY_DOMAIN are not set."
    );
  }

  const res = await fetch(
    `https://${domain}.pipedrive.com/api/v1/leads?api_token=${apiToken}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: `RFQ — ${lead.name}${lead.company ? ` (${lead.company})` : ""}`,
        person_id: undefined,
        note: [lead.material, lead.quantity, lead.finish, lead.message]
          .filter(Boolean)
          .join(" | "),
      }),
    }
  );

  return { delivered: res.ok, provider: "pipedrive" };
}

async function sendToBitrix(lead: CrmLead): Promise<CrmResult> {
  const webhookUrl = process.env.BITRIX_WEBHOOK_URL;
  if (!webhookUrl) {
    throw new Error("CRM_PROVIDER=bitrix but BITRIX_WEBHOOK_URL is not set.");
  }

  const res = await fetch(`${webhookUrl}/crm.lead.add.json`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fields: {
        TITLE: `RFQ — ${lead.name}${lead.company ? ` (${lead.company})` : ""}`,
        NAME: lead.name,
        EMAIL: [{ VALUE: lead.email, VALUE_TYPE: "WORK" }],
        COMPANY_TITLE: lead.company ?? "",
        COMMENTS: [lead.material, lead.quantity, lead.finish, lead.message]
          .filter(Boolean)
          .join(" | "),
      },
    }),
  });

  return { delivered: res.ok, provider: "bitrix" };
}
