export interface IToken {
  accessToken: string;
  tokenType: string;
  expiresAt: string;
}

export interface IGenericResponse{
  message: string;
  token: IToken;
}
export interface IDataResponse{
  data:IGenericResponse
}
export interface ILoginParams {
  user: string;
  pass: string;
}


