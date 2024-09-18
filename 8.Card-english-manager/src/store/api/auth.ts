import {
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { ENV_API } from "../../utils/variables_env";
import { User } from "../../models";
import { v4 } from "uuid";

type LOGIN_TYPE = Pick<User, "token"> & { refreshToken: string };
export type LOGIN_RETURN_ERROR = {
  data: {
    succeeded: boolean;
    errors: string[];
  };
  status: number;
};

export const loginUserApi = createApi({
  reducerPath: "loginUser",
  baseQuery: fetchBaseQuery({
    baseUrl: ENV_API.BASE_URL,
    headers: {
      "x-rapidapi-key": ENV_API.KEY,
      "x-rapidapi-host": ENV_API.HOST,
      "Content-Type": "application/json",
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<User, { email: string; password: string }>({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data,
      }),
      transformResponse: (response: LOGIN_TYPE, _, args): User => {
        const { token, refreshToken } = response;

        return {
          email: args.email,
          token,
          refresh: refreshToken,
          name: args.email,
          isLogged: true,
        };
      },
      transformErrorResponse: (
        response
      ): LOGIN_RETURN_ERROR | FetchBaseQueryError => response,
    }),
    register: builder.mutation<boolean, { email: string; password: string }>({
      query: (data) => ({
        url: "register",
        method: "POST",
        body: { ...data, role: v4() },
      }),
      transformResponse: (): boolean => true,
      transformErrorResponse: (
        response
      ): LOGIN_RETURN_ERROR | FetchBaseQueryError => response,
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = loginUserApi;
