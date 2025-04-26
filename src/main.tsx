// Strict mode from react helps catch bugs in the app, for development only
import { StrictMode } from "react";
// React DOM for rendering the app
import ReactDOM from "react-dom/client";
// RouterProvider gives the router context, createRouter create a new router instance
import { RouterProvider, createRouter } from "@tanstack/react-router";
//QueryClientProvider provides the query client context, QueryClient is the client instance
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Import the generated route tree
import { routeTree } from "./routeTree.gen";
// Import the App component
import App from "./App";

// Needed for react-query to work, will be used to cache data and make requests
const queryClient = new QueryClient();

// Create a new router instance and pass the route tree
const router = createRouter({ routeTree });

// Register the router instance for type safety and will enable the Register type to be used in router context
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("root")!;
// If the root element is empty, render the app otherwise do nothing
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      {/* Provide the queryClient to all children */}
      <QueryClientProvider client={queryClient}>
        <App />
        {/* Provide the router to all children */}
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>
  );
}
