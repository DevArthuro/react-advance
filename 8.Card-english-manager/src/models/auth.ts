export interface User {
  name: string | null;
  email: string | null;
  isLogged: boolean;
  token: string | null;
  refresh: string | null;
}
