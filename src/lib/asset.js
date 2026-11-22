// Builds a URL that works on localhost AND on https://user.github.io/repo/
export const asset = (path) =>
  `${import.meta.env.BASE_URL}${String(path).replace(/^\/+/, '')}`
