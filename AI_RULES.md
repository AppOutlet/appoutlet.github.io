# AI Development Rules

This document outlines the technology stack and coding conventions to be followed by the AI assistant when developing this application.

## Tech Stack

This is an Angular application built with the following technologies:

-   **Framework**: [Angular](https://angular.io/) for building the user interface.
-   **Language**: [TypeScript](https://www.typescriptlang.org/) for type-safe JavaScript.
-   **Styling**: [SCSS](https://sass-lang.com/) for advanced CSS styling, with variables defined in `src/styles/_variables.scss`.
-   **UI Components**: [Angular Material](https://material.angular.io/) is the primary library for UI components like buttons, menus, and toolbars.
-   **Layout**: [Bootstrap Grid System](https://getbootstrap.com/docs/5.3/layout/grid/) is used for creating responsive page layouts.
-   **Data Fetching**: [Apollo Angular](https://apollo-angular.com/) is used to interact with a [GraphQL](https://graphql.org/) API.
-   **Server-Side Rendering (SSR)**: The application uses Angular SSR with an [Express.js](https://expressjs.com/) server.
-   **Testing**: [Jasmine](https://jasmine.github.io/) and [Karma](https://karma-runner.github.io/) are used for unit testing.

## Library Usage Rules

To maintain consistency and code quality, please adhere to the following rules:

1.  **UI Components**:
    -   **DO**: Use components from the `@angular/material` library for all standard UI elements (e.g., buttons, dialogs, menus, icons, toolbars).
    -   **DO NOT**: Introduce other UI component libraries.

2.  **Layout and Grid**:
    -   **DO**: Use the Bootstrap grid classes (e.g., `.container`, `.row`, `.col-*`) for structuring page layouts. The grid system is imported in `src/styles.scss`.
    -   **DO NOT**: Use any other Bootstrap components (like buttons, modals, etc.) or CSS utilities. Styling should be done with custom SCSS and Angular Material.

3.  **Styling**:
    -   **DO**: Write all custom styles in `.scss` files.
    -   **DO**: Leverage the global SCSS variables defined in `src/styles/_variables.scss` for consistent design tokens (e.g., breakpoints, colors).
    -   **DO NOT**: Use inline styles or plain CSS files.

4.  **Data Fetching**:
    -   **DO**: Use `apollo-angular` for all GraphQL queries and mutations. The Apollo client is configured in `src/app/app.config.ts`.
    -   **DO NOT**: Use `fetch` or other HTTP clients to communicate with the GraphQL endpoint.

5.  **Icons**:
    -   **DO**: Use the `<mat-icon>` component from Angular Material with icons from the [Material Icons](https://fonts.google.com/icons) library.
    -   **DO NOT**: Install or use other icon libraries.

6.  **Routing**:
    -   **DO**: Manage all application routes within `src/app/app.routes.ts` using Angular's built-in `RouterModule`.
    -   **DO NOT**: Use `<a>` tags with `href` attributes for internal navigation. Use the `routerLink` directive instead.

7.  **Internationalization (i18n)**:
    -   **DO**: Add the `i18n` attribute to any HTML element that contains text to be translated.
    -   **DO NOT**: Hardcode user-facing strings directly in templates without the `i18n` attribute.