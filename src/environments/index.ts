import * as dotenv from 'dotenv';
dotenv.config();

const NEED_TO_CONFIGURED = 'NEED TO CONFIGURED';

// environment
const NODE_ENV: string = process.env.NODE_ENV || 'dev';

// application
const SERVER_PORT: number = +process.env.SERVER_PORT || 3000;

export { NODE_ENV, SERVER_PORT };

export const SMTP_SERVER = process.env.SMTP_SERVER || NEED_TO_CONFIGURED;
export const SMTP_PORT: number = Number(process.env.SMTP_PORT) || 587;
export const SMTP_USER = process.env.SMTP_USER || NEED_TO_CONFIGURED;
export const SMTP_PASSWORD = process.env.SMTP_PASSWORD || NEED_TO_CONFIGURED;