import { Expose, Transform } from 'class-transformer';
import { ETokenResponseModelKeys } from '../api/access-token-response';

export class AccessToken {
  @Expose({ name: ETokenResponseModelKeys.accessToken })
  public readonly token!: string;

  @Expose({ name: ETokenResponseModelKeys.tokenType })
  public readonly type!: string;

  @Expose({ name: ETokenResponseModelKeys.expiresIn })
  @Transform(({ value }: { value: number }) => new Date(value * 1000))
  public readonly expiresDate!: Date;

  @Expose({ name: ETokenResponseModelKeys.refreshToken })
  public readonly refreshToken!: string;
}
