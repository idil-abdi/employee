import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./pages/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Employee from "./pages/Employee";
import NotFoundPage from "./pages/NotFoundPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import EmployeeForm from "./pages/EmployeeForm";
import EditEmployeePage from "./pages/EditEmployeePage";
import ContractFormPage from "./pages/ContractFormPage";
import EditContractPage from "./pages/EditContractPage";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/employee", element: <Employee /> },
  { path: "/employee-form", element: <EmployeeForm /> },
  { path: "/employee/:employeeId", element: <EditEmployeePage /> },
  { path: "/employee/:employeeId/contracts", element: <ContractFormPage /> },
  {
    path: "/employee/:employeeId/contracts/:contractId",
    element: <EditContractPage />,
  },
  { path: "*", element: <NotFoundPage /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
