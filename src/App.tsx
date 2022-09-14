import * as React from "react";
import { Loading } from "./Loading";
import placeholder from "./img/start-using-reducers.png";

export const App: React.FC = () => {
  const API_URL = "https://rickandmortyapi.com/api/character/";

  const [isLoading, setIsLoading] = React.useState(false);
  const [allowFetch, setAllowFetch] = React.useState(false);
  const [uri, setUri] = React.useState(placeholder);

  const fetchImage = async () => {
    if (!allowFetch) {
      return;
    }


    setIsLoading(true);
    const result = await fetch(API_URL + Math.round(Math.random() * 50));
    const response = await result.json();


    //wrong part
    setUri(response.image);
    setIsLoading(false);
  };

  const onAllowFetchChange = () => setAllowFetch((prevState) => !prevState);

  return (
    <div className="card">
      <figure>
        {isLoading ? <Loading /> : <img src={uri} alt="funny image" />}
      </figure>
      <footer>
        <label>
          Allow fetch
          <input
            type="checkbox"
            checked={allowFetch}
            onChange={onAllowFetchChange}
          />
        </label>
        <button onClick={fetchImage} disabled={!allowFetch}>
          Fetch another
        </button>
      </footer>
    </div>
  );
};
