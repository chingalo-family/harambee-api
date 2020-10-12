export function userSanitizer(user: any) {
  return {
    username: user.username,
    created: user.created,
    lastUpdated: user.lastUpdated,
    role: {
      id: user.userRole.id,
      name: user.userRole.name,
    },
  };
}
