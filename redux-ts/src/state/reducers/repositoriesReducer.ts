import type { Action } from "../actions";
import { ActionType } from "../action-types";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState: RepositoriesState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.FETCH_REPOSITORIES:
      return { ...state, loading: true, error: null };
    case ActionType.FETCH_REPOSITORIES_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case ActionType.FETCH_REPOSITORIES_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
