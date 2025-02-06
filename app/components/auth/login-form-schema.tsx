import {
  msgEmail,
  msgMin,
  msgPassword,
  msgRequiredZod,
} from '@/app/shared/messages/validations';
import { regexValidatePassword } from '@/app/shared/regex/regex';
import { z } from 'zod';

export const signInSchemaZod = z.object({
  email: z.string(msgRequiredZod).email(msgEmail()),
  password: z
    .string()
    .min(6, { message: msgMin({ min: 6 }) })
    .regex(regexValidatePassword, { message: msgPassword }),
});
