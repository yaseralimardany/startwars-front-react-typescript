export type Config = {
  baseUrl: string,
}

const config: Config = {
  baseUrl: 'http://localhost:3005/'
}

export function getConfig(): Config {
  return config;
}