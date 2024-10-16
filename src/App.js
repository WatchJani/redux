import { Provider } from "react-redux"

import store from "./state/store"

export const App = () => {
  return (
    <Provider store={store}>
      <h1>cao</h1>
    </Provider>
  );
}

