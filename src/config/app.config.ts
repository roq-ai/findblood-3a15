interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: ['Guest'],
  tenantRoles: ['Admin', 'Staff Member'],
  tenantName: 'Hospital',
  applicationName: 'Findblood',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Search for a nearby Hospital',
    'View Hospital details',
    "View Hospital's blood bank inventory",
    'Request for blood from a Hospital',
  ],
  ownerAbilities: [
    'Manage Hospital profile',
    'Invite Staff Members to join the application',
    'View all blood requests',
  ],
};
