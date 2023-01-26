export interface IApiError extends Error {
  message: string;
  status: number;
  name?: string;
}
