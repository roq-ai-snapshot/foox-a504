interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Owner', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Foox',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage freelancer_profile', 'Manage worklog', 'Read job', 'Read company'],
  ownerAbilities: ['Manage hiring', 'Manage freelancer profiles', 'Manage worklogs', 'Manage companies'],
  getQuoteUrl: 'https://app.roq.ai/proposal/bd639902-a20c-47d6-9881-87699854df13',
};
