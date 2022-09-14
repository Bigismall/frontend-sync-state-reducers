import * as React from "react";
import { Loading } from "./Loading";
import placeholder from "./img/start-using-reducers.png";
import { RandomImageActions, RandomImageReducer } from "./RandomImageReducer";

export const AppReducer: React.FC = () => {
  const API_URL = "https://rickandmortyapi.com/api/character/";

  // const [isLoading, setIsLoading] = React.useState(true);
  // const [allowFetch, setAllowFetch] = React.useState(false);
  // const [uri, setUri] = React.useState(placeholder);

  const [appState, appStateDispatch] = React.useReducer(RandomImageReducer, {
    isLoading: false,
    uri: placeholder,
    allowFetch: false,
  });

  const fetchImage = async () => {
    if (!appState.allowFetch) {
      return;
    }

    appStateDispatch({ type: RandomImageActions.FETCH_START });

    const result = await fetch(API_URL + Math.round(Math.random() * 50));
    const response = await result.json();

    appStateDispatch({
      type: RandomImageActions.FETCH_END,
      payload: { uri: response.image },
    });
  };

  const onAllowFetchChange = () =>
    appStateDispatch({ type: RandomImageActions.TOGGLE });

  return (
    <div className="card">
      <figure>
        {appState.isLoading ? <Loading /> : <img src={appState.uri} alt="funny image" />}
      </figure>
      <footer>
        <label>
          Allow fetch
          <input
            type="checkbox"
            checked={appState.allowFetch}
            onChange={onAllowFetchChange}
          />
        </label>
        <button onClick={fetchImage} disabled={!appState.allowFetch}>
          Fetch another
        </button>
      </footer>
    </div>
  );
};
