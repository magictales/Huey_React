import { formatStore, updateStore } from "./tools";
const initialState = { isDark: false };

const app = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case "SET_APP":
      return formatStore(updateStore(state, payload));
    case "UPDATE_APP":
      return formatStore(updateStore(state, payload));
    case "RESET_APP":
      return initialState;
    default:
      return state;
  }
};

export default app;
