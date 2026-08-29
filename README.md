# 🚀 Employee & Contract Management System


# 📋  Overview

## What is the project?

This project is a full-stack employee & contract management application that helps companies track their workers and their work agreements in one place. Using a React frontend, a hapi.js server, and a PostgreSQL database, it replaces messy spreadsheets by linking each employee to all of their past and current contracts. This lets company easily add, update, or remove employee records while keeping a clear history of how every worker's job terms have changed over time.

# 🛠️ Technologies

## Backend + Frontend



```text
TypeScript      |     React
Hapi.js         |     Vite
Node.js         |     TypeScript
Prisma          |     CSS / Tailwind / Material UI
PostgreSQL      |     Axios
Joi             |     TanStack Query (React Query)
```

---


# 🔵 BACKEND

## Backend Responsibilities

The backend is responsible for:

* [ ] Receiving HTTP requests
* [ ] Defining API routes
* [ ] Validating incoming data
* [ ] Running business logic
* [ ] Communicating with the database
* [ ] Returning responses
* [ ] Handling errors

---


# 🟢 FRONTEND

## Frontend Responsibilities

The frontend is responsible for:

* [ ] Displaying the UI
* [ ] User interaction
* [ ] Forms
* [ ] Client-side validation
* [ ] Calling the API
* [ ] Displaying API data
* [ ] Managing application state
* [ ] Handling loading states
* [ ] Handling errors

---


# 📡 API Documentation

| Method | Endpoint                                          | Purpose                               |
| ------ | -----------------------------------------------   | ----------------                      |
| GET    | `/employee`                                       | Get All employees                     |     
| GET    | `/employee/{id}`                                  | Get employee by id                    |     
| GET    | `/employee/{employeeId}/contracts`                | Get All employee's contracts          |     
| GET    | `/employee/{employeeId}/contracts/{contractId}`   | Get one of employee's contract by Id  |     
| POST   | `/employee`                                       | Create employee                       |     
| POST   | `employee/{employeeId}/contracts`                 | Create contract for an employee       |     
| PUT    | `/employee/{id}`                                  | Update employee                       |     
| PUT    | `/employee/{employeeId}/contracts/{contractId}`   | Update one of employee's contract     |     
| DELETE | `/employee/:id`                                   | Delete employee                       |     
| DELETE | `/employee/{employeeId}/contracts/{contractId}`   | Delete contract                       |     
