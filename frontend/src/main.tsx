import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Employee from "./pages/Employee.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import EmployeeForm from "./pages/EmployeeForm.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/employee", element: <Employee /> },
  { path: "/employee-form", element: <EmployeeForm /> },
  { path: "*", element: <NotFoundPage /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
