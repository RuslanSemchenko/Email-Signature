import type { SignatureData } from './types';

// Sanitize user input to prevent HTML injection
const sanitize = (str: string) => {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

export const generateSignatureHTML = (data: SignatureData, imageUrls: Record<string, string>): string => {
  const s = (field: keyof SignatureData) => sanitize(data[field]);

  const cleanWebsite = s('website').replace(/https?:\/\//, '').replace(/\/$/, '');
  
  const logoUrl = data.logoUrl || imageUrls['company-logo'] || '';

  // This HTML is crafted for maximum email client compatibility.
  // It uses tables for layout, inline CSS, and Outlook-specific conditional comments.
  // The total HTML size is kept minimal to avoid being clipped by clients like Gmail.
  return `
<div style="padding: 20px 0;">
  <!--[if mso]>
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="500" align="center">
  <tr>
  <td>
  <![endif]-->
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 500px; font-family: 'Inter', Arial, sans-serif;">
    <tr>
      <td style="border-bottom: 2px solid #1E3A8A; padding: 0 0 20px 0;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
          <tr>
            <td width="130" valign="middle" style="width: 130px; padding-right: 20px;">
              ${logoUrl ? `<a href="${s('website')}" target="_blank" style="text-decoration: none;">
                <img src="${logoUrl}" width="130" alt="Logo" style="display: block; border: 0; max-width: 130px;">
              </a>` : ''}
            </td>
            <td valign="middle">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td style="font-family: 'Inter', Arial, sans-serif; font-size: 18px; font-weight: 700; color: #1E3A8A; line-height: 1.3; padding-bottom: 2px;">
                    ${s('name')}
                  </td>
                </tr>
                <tr>
                  <td style="font-family: 'Inter', Arial, sans-serif; font-size: 14px; color: #4B5563; line-height: 1.4;">
                    ${s('title')}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding: 20px 0 0 0;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
          <tr>
            <td valign="top" style="font-family: 'Inter', Arial, sans-serif; font-size: 13px; color: #4B5563; line-height: 1.6;">
              ${s('address') ? `${s('address')}<br>` : ''}
              ${s('phone') ? `<strong>P:</strong> ${s('phone')}` : ''}
              ${s('phone') && s('email') ? ` &nbsp;&nbsp; ` : ''}
              ${s('email') ? `<strong>E:</strong> <a href="mailto:${s('email')}" style="color: #4B5563; text-decoration: none;">${s('email')}</a>` : ''}
            </td>
            <td width="110" align="right" valign="bottom" style="width: 110px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  ${s('linkedin') ? `<td style="padding: 0 4px;"><a href="${s('linkedin')}" target="_blank" style="color: #0077B5; text-decoration: none; font-size: 12px; font-weight: bold;">LinkedIn</a></td>` : ''}
                  ${s('whatsapp') ? `<td style="padding: 0 4px;"><a href="${s('whatsapp')}" target="_blank" style="color: #25D366; text-decoration: none; font-size: 12px; font-weight: bold;">WhatsApp</a></td>` : ''}
                  ${s('wechat') ? `<td style="padding: 0 4px;"><a href="${s('wechat')}" target="_blank" style="color: #09B83E; text-decoration: none; font-size: 12px; font-weight: bold;">WeChat</a></td>` : ''}
                </tr>
              </table>
            </td>
          </tr>
           ${s('website') ? `<tr><td colspan="2" style="padding-top: 10px; font-family: 'Inter', Arial, sans-serif; font-size: 13px;">
              <a href="${s('website')}" target="_blank" style="color: #34D399; text-decoration: none; font-weight: 600;">${cleanWebsite}</a>
            </td></tr>` : ''}
        </table>
      </td>
    </tr>
  </table>
  <!--[if mso]>
  </td>
  </tr>
  </table>
  <![endif]-->
</div>
`;
};
