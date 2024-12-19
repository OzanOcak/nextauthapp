"use server";

import { LoginSchema } from "@/schemas";
import { z } from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  return { success: "Email sent!" };
};

/* server actions are basically rpc server  so we dont need to call api request in the client;
instead ofapi request, only calling function in the client is enough

- server actions(rpc server)  : login(values) function call in client

- rest api (regular server) : axios.post("http://localhost/api/auth/login,values").then() http request
in client and api routes in server

*/
