import type { ActionType } from "../action-types";

interface FetchRepositoriesAction {
  type: ActionType.FETCH_REPOSITORIES;
}
interface FetchRepositoriesSuccessAction {
  type: ActionType.FETCH_REPOSITORIES_SUCCESS;
  payload: string[];
}
interface FetchRepositoriesErrorAction {
  type: ActionType.FETCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | FetchRepositoriesAction
  | FetchRepositoriesSuccessAction
  | FetchRepositoriesErrorAction;

