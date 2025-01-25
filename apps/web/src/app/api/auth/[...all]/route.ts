import { toNextJsHandler } from '@flow/auth';
import { auth } from '@flow/auth'; // path to your auth file

export const { POST, GET } = toNextJsHandler(auth);
