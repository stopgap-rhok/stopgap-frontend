import React from "react";
import {
  action,
  createStore,
  StoreProvider as EPStoreProvider,
} from "easy-peasy";

export const store = createStore({
  context: {
    user: null,
    setUser: action((state, user) => {
      state.context.user = user;
    }),
  },
});

export default function StoreProvider({ children }) {
  return <EPStoreProvider store={store}>{children}</EPStoreProvider>;
}
