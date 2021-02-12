import {
  CombinedError,
  dedupExchange,
  errorExchange,
  fetchExchange,
  Operation,
} from "urql";
import Router from "next/router";

export const createUrqlClient = (ssrExchange: any) => ({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include" as const,
  },
  exchanges: [
    dedupExchange,
    errorExchange({
      onError: (error: CombinedError, operation: Operation) => {
        if (error.message.includes("not authenticated")) {
          Router.replace("/login");
        } else {
          console.log(error);
        }
      },
    }),
    ssrExchange,
    fetchExchange,
  ],
});
