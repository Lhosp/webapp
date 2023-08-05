export type User = {
  name?: string;
  email: string;
  password: string;
  isAuth?: boolean;
};

export type AuthUser = {
  stetus: boolean;
  message: string;
  token: string;
};
