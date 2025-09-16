# AI Rules for Appoutlet Application

This document outlines the core technologies and best practices for developing the Appoutlet application.

## Tech Stack Description

*   **Framework**: Angular (`^20.3.0`) for building robust and scalable single-page applications.
*   **Language**: TypeScript (`~5.9.2`) for enhanced code quality, maintainability, and type safety.
*   **Styling**: Tailwind CSS (`^4.1.13`) for a utility-first approach to styling, enabling rapid and consistent UI development.
*   **Icons**: Lucide Angular (`^0.544.0`) for a comprehensive and customizable set of SVG icons.
*   **Routing**: Angular Router (`^20.3.0`) for declarative navigation, managing application states, and lazy loading features.
*   **Build System**: Angular CLI (`^20.3.1`) for project scaffolding, development server, and optimized build processes.
*   **Server-Side Rendering (SSR)**: Angular SSR (`^20.3.1`) for improved initial load performance, better SEO, and enhanced user experience.
*   **Package Management**: npm (`10.9.2`) for managing project dependencies and scripts.
*   **Internationalization (i18n)**: Angular's built-in i18n capabilities, integrated with Lingo.dev, for managing multi-language support.
*   **Code Formatting**: Prettier for consistent code style across the project.

## Project Structure

*   `src/app/page`: Contains page-level components that can be navigated to (e.g., `home`).
*   `src/app/component`: Contains reusable components used across different pages (e.g., `footer`, `navigation`).
*   `src/app/app.routes.ts`: Defines the main application routes.
*   `src/locale`: Stores translation files (`messages.en.json`, `messages.pt.json`, etc.).
*   `public`: Contains static assets like `favicon.ico`.

## Library Usage Rules

To maintain consistency and efficiency, please adhere to the following guidelines when developing:

*   **Core Framework**: All application logic, components, services, and directives must be implemented using **Angular**.
*   **Styling**: Use **Tailwind CSS** classes exclusively for all styling. Avoid writing custom CSS in `.css` files unless it's for global styles that cannot be achieved with Tailwind utilities. Every component must have a corresponding CSS file, even if it is empty, to adhere to Angular conventions.
*   **Icons**: For all icon needs, utilize the **Lucide Angular** library. Ensure icons are imported and used consistently across the application.
*   **Routing**: All navigation and URL management should be handled through the **Angular Router**. Define routes in `src/app/app.routes.ts` and use `router-outlet` and `routerLink` as appropriate.
*   **State Management**: For component-level or simple shared state, leverage Angular's built-in features like signals, inputs/outputs, and services.
*   **Forms**: Implement all forms using Angular's **Reactive Forms** or **Template-driven Forms** modules.
*   **HTTP Requests**: Use Angular's **HttpClient** module for all interactions with backend APIs.
*   **Internationalization**: All user-facing text that requires translation must use Angular's i18n features, specifically the `$localize` tag.
*   **Code Formatting**: Ensure all code is formatted with Prettier before committing. The configuration is defined in `package.json`.
*   **Testing**: This is a landing page project, so writing tests is not required. The Angular CLI has been configured to skip test file generation.