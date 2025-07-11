import { useState, useReducer } from "react";

const initialState = {
  error: null,
  greeting: null
};

function greetingReducer(state, action) {
  switch (action.type) {
    case "SUCCESS":
      return {
        error: null,
        greeting: action.greeting
      };
    case "ERROR":
      return {
        error: action.error,
        greeting: null
      };
    default:
      return state;
  }
}

export function Fetch({ url }) {
  const [{ error, greeting }, dispatch] = useReducer(
    greetingReducer,
    initialState
  );

  const [buttonClicked, setButtonClicked] = useState(false);

  const fetchGreeting = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      dispatch({ type: "SUCCESS", greeting: data.greeting });
      setButtonClicked(true);
    } catch (error) {
      dispatch({ type: "ERROR", error });
    }
  };

  const buttonText = buttonClicked ? "Ok" : "Load Greeting";

  return (
    <div>
      <button onClick={() => fetchGreeting(url)} disabled={buttonClicked}>
        {buttonText}
      </button>
      {greeting && <h1>{greeting}</h1>}
      {error && <p role="alert">Oops, failed to fetch!</p>}
    </div>
  );
}
