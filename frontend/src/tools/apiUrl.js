export function getApiUrl(path) {
  if (import.meta.env.DEV) {
    return `/api${path}`;
  }
  return `${import.meta.env.VITE_API_BASE_URL}/api${path}`;
}
