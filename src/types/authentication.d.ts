export interface IToken {
  accessToken: string;
  tokenType: string;
  expiresAt: string;
}

export interface IGenericResponse{
  message: string;
  token: IToken;
  user: IUser;
}
export interface IDataResponse{
  data:IGenericResponse
}
export interface ILoginParams {
  user: string;
  pass: string;
}


