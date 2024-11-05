# Application Overview 

This React application is built using Vite, a tool which provides fast development and hot module replacement (HMR) capabilities. The app is leveraging key technologies and configurations to enhance its development effeciency and long-term maintenance. 

## Key Technologies and Configurations

- Vite: A build tool with HMR which allows developers to see changes in real-time without the need to refresh the entire page.
- React: The core library allowing us to build UI Components.
- Redux Toolkit: Utilized for state management. Simplifies the setup and management of global state in the application. 
- React Router: Enables client-side routing. Provides a similar experience to a single-page application (SPA).
- TailwindCSS: A utility-first CSS framework, configured with PostCSS to enable custom configurations and optimizations.
- PostCSS: A tool that helps transforming CSS with JavaScript plugins. 
- ESLint: Helps enforcing standards and best practices. 

## Design and Implementation Decisions

- Component-Based Architecture: The application promotes reusability of components and separations of concerns. Each component has a specific functionality, making the code easier to understand and maintain. 
- State Management: Redux Toolkit was chosen for its simplicity in managing global state.
- Performance Optimization: Vite's fast build process and HMR capabilities significantly reduces developement time and improves developer experience. 
- User Experience: The application provides simple UI for managing shopping lists. Features like real-time validation and error handling enhances the user experience by providing immediate guidance and feedback. 

## Application Structure

The application is structured into several components, pages, and state management:

- **Components**: Reusable UI elements that can be used across different pages. These are located in the `src/components` directory.
  - `CreateListCard.jsx`: Component for creating a new list.
  - `Header.jsx`: Component for the application header.
  - `ListCard.jsx`: Component for displaying individual list items.
  - // Add descriptions for other components as needed.

- **Pages**: Main views or screens of the application, often representing a route. These are located in the `src/pages` directory.
  - `CreateAccountPage.jsx`: Page for creating a new account.
  - `CreateListPage.jsx`: Page for creating a new list.
  - `Home.jsx`: Home page of the application.
  - `ListsPage.jsx`: Page for displaying all lists.

- **Redux**: State management for the application. The Redux-related files are located in the `src/redux` directory.
  - `store.js`: Configures the Redux store.
  - `slices/`: Contains Redux slices for different parts of the state.

- **Utilities**: Helper functions and utilities used across the application. These are located in the `src/utils` directory.
  - `indexedDB.js`: Utility for handling IndexedDB operations.

## How to Run the Application

Make sure to have `node` installed.

### Installation Steps 

Clone the Repository: 

```bash
git clone https://github.com/marco3211/shopping-app.git
```

Navigate to the directory: 

```bash
cd shopping-app
```

Install the dependencies: 

```bash
npm install 
```

### Running the Application

To start the development server with HMR, run: 

```bash
npm run dev
```

To build the application for production, run: 

```bash
npm run build
```

To preview the production build locally, run: 

```bash
npm run preview
```

To check the code for any linting errors with ESLint, run:

```bash
npm run lint
```
