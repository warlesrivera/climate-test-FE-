export interface IUser {
  id      : string;
  name     : string;
  email    : string;
  password?: string;
  createdAt?: string;
  updatedAt?: string;
}


export interface IUserParam {
  name     : string;
  email    : string;
  password: string;
}