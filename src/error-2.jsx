import { useRouteError } from "react-router-dom";

export default function ErrorPage2() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>error2.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}