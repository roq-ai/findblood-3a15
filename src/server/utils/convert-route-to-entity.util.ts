const mapping: Record<string, string> = {
  'blood-banks': 'blood_bank',
  'blood-requests': 'blood_request',
  hospitals: 'hospital',
  'staff-members': 'staff_member',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
