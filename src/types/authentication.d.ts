export interface IToken {
  accessToken: string;
  tokenType: string;
  expiresAt: string;
}

export interface ITokenResponse{
  messsage: string;
  token:IToken
}

export interface ILoginParams {
  user: string;
  pass: string;
}