# Login Specification

This document outlines the specifications for the user login functionality and the structure of the associated source code.

## `src/pages/Login` Folder Structure

The `src/pages/Login` directory contains the components and logic related to the main user login page.

-   `Login.tsx`: The primary React component for the login page. It handles form rendering, state management, validation, and user authentication logic.

## User Authentication

Standard users can log in to the system using their email and password through the main login page.

-   **URL:** `/login`

### Credentials

For demonstration and testing purposes, the following mock credentials can be used:

-   **Email:** `test@test.com`
-   **Password:** `password`

Upon successful authentication, users will be redirected to their dashboard view, which includes modules for sales, inventory, customers, and reports.
