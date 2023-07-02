import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as ReactDOM from "react-dom";
import * as React from "react";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import { action as destroyAction } from "./routes/destroy";

import ErrorPage from "./error-page";
/* existing code */
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "./routes/contact";

import EditContact, { action as editAction } from "./routes/edit";
import Index from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
            errorElement: <div>Oops! There was an error.</div>,
          },
        ],
      },
    ],
  },
]);

function App() {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
