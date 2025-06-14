import axios from 'axios';
import { ActionType } from '../action-types';
import type { Dispatch } from 'redux';
import type { Action } from '../actions';

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.FETCH_REPOSITORIES });

    try {
      const { data } = await axios.get(
        `https://registry.npmjs.org/-/v1/search`,
        {
          params: {
            text: term,
          },
        }
      );
      const names = (data.objects = data.objects.map(
        (result: any) => result.package.name
      ));

      dispatch({
        type: ActionType.FETCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (error) {
      dispatch({
        type: ActionType.FETCH_REPOSITORIES_ERROR,
        payload: error.message,
      });
    }
  };
};
