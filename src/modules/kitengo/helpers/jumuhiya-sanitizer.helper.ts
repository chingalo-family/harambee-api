export function sanitizeJumuhiya(data: any) {
  return {
    id: data.id,
    name: data.name,
    created: data.created,
    lastUpdated: data.lastUpdated,
    kanda: data.kanda ? data.kanda.name : null,
  };
}
