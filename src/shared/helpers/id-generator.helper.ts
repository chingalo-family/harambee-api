export function generateId(): string {
  let uuid = '';
  const uuidLength = 11;
  const randomAlphaNumeric =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let index = 0; index < uuidLength; index++) {
    uuid += randomAlphaNumeric.charAt(
      Math.floor(Math.random() * randomAlphaNumeric.length),
    );
  }
  return uuid;
}
