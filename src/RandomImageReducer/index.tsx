export interface RandomImageState {
  isLoading: boolean;
  uri: string;
  allowFetch: boolean;
}

export enum RandomImageActions {
  FETCH_START = "FETCH_START",
  FETCH_END = "FETCH_END",
  TOGGLE = "TOGGLE",
}

export interface RandomImageAction {
  type: RandomImageActions;
  payload?: {
    uri: string;
  };
}

export const RandomImageReducer = (
  state: RandomImageState,
  action: RandomImageAction
): RandomImageState => {
  switch (action.type) {
    case RandomImageActions.FETCH_START:
      return { ...state, isLoading: true };
    case RandomImageActions.FETCH_END:
      return { ...state, isLoading: false, uri: action?.payload?.uri ?? "" };
    case RandomImageActions.TOGGLE:
      return { ...state, allowFetch: !state.allowFetch };
  }
};
