export function formatDate(dt) {
  return new Date(dt).toUTCString().substring(0, 16);
}
