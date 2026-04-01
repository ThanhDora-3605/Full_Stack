import * as z from "zod";
import validateMessage from "../languages/vi/validate.json";
export const userSchema = z.object({
  name: z.string().min(1, {
    message: validateMessage.users["name.required"],
  }),
  email: z
    .string()
    .min(1, {
      message: validateMessage.users["email.required"],
    })
    .pipe(
      z.email({
        message: "Email không đúng định dạng",
      }),
    ),
  age: z.number().optional().nullable(),
});
