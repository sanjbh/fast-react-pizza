import { useNavigate, useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function NotFound() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      {/* <button onClick={() => navigate(-1)}>&larr; Go back</button> */}
      <LinkButton onClick={() => navigate(-1)}>⬅️ Go back</LinkButton>
    </div>
  );
}

export default NotFound;
