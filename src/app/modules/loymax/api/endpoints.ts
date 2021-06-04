import { environment } from '../../../../environments/environment';

export const HOST = environment.loymaxPublicAPI;

export enum ELoymaxProcessingEndPoints {
  TOKEN = '/token',
  OAUTH_AUTHORIZE = '/oauth/authorize',
}
