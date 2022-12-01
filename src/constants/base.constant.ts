
// password pattern
export const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
export const PHONE_PATTEN =
  /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/;
export const PHONE_WITHOUT_PLUS_PATTEN =
  /(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/;
export const NUMBER_STRING_PATTEN = /^\d+$/;
export const SPEC_KEY = 'SPEC';

export const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const DATE_PATTERN = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;

export const PAGE_LIMIT = 10;
export const LIMIT = 10;
export const PAGE = 1;
export const OFFSET = 0;
export const SOFT_TYPE = 'DESC';
export const SOFT_FIELD = 'updated_at';

export const INVESTOR_EXCEL_NAME = 'investors.xlsx';

export const URL_UPLOAD_IMAGE_CK = '/api/clouds/upload-image-ckeditor';

export const MIN_LENGTH_OTP = 6;
export const MAX_LENGTH_OTP = 6;

export const EXPIRE_TIME_OTP_EMAIL = 60 * 60 * 1000;
export const EXPIRE_TIME_CACHE_MESSAGE_ID_PAYMENT = 30 * 1000;

export const CLEAR_XSS = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;

export const jwtConstants = {
  secret: process.env.JWT_SECRET_KEY || 'secret',
};