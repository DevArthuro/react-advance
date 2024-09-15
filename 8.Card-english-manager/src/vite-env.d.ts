/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_URL: string;
  readonly "x-rapidapi-key": string;
  readonly "x-rapidapi-host": string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
