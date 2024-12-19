"use server";

export const login = async (values: unknown) => {
  console.log(values);
};

/* server actions are basically rpc server  so we dont need to call api request in the client;
instead ofapi request, only calling function in the client is enough

- server actions(rpc server)  : login(values) function call in client

- rest api (regular server) : axios.post("http://localhost/api/auth/login,values").then() http request
in client and api routes in server

*/
