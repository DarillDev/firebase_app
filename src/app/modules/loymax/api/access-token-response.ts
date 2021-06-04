export enum ETokenResponseModelKeys {
  accessToken = 'access_token',
  tokenType = 'token_type',
  expiresIn = 'expires_in',
  refreshToken = 'refresh_token',
}

export interface ITokenResponse {
  readonly [ETokenResponseModelKeys.accessToken]: string;
  readonly [ETokenResponseModelKeys.refreshToken]: string;
  readonly [ETokenResponseModelKeys.expiresIn]: number;
  readonly [ETokenResponseModelKeys.refreshToken]: string;
}
