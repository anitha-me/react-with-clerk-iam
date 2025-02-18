export interface User {
  userId: string | number | null;
  email: string | null;
  userName: string | null;
  firstName: string | null;
  lastName: string | null;
  picture: string | URL | null;
  accessToken: string | number | null;
}
