# Application Overview 

This React application is built using Vite, a tool which provides fast development and hot module replacement (HMR) capabilities. The app is leveraging key technologies and configurations to enhance its development effeciency and long-term maintenance. 

## Key Technologies and Configurations

- **Vite**: A build tool with HMR which allows developers to see changes in real-time without the need to refresh the entire page.
- **React**: The core library allowing us to build UI Components.
- **Redux Toolkit**: Utilized for state management. Simplifies the setup and management of global state in the application.
- **React Router**: Enables client-side routing. Provides a similar experience to a single-page application (SPA).
- **TailwindCSS**: A utility-first CSS framework, configured with PostCSS to enable custom configurations and optimizations.
- **Flowbite**: A component library built on top of TailwindCSS, providing pre-designed UI components.
- **PostCSS**: A tool that helps transform CSS with JavaScript plugins.
- **ESLint**: Helps enforce standards and best practices.

## Design and Implementation Decisions

- **Component-Based Architecture**: The application promotes reusability of components and separation of concerns. Each component has a specific functionality, making the code easier to understand and maintain.
- **State Management**: Redux Toolkit was chosen for its simplicity in managing global state.
- **Performance Optimization**: Vite's fast build process and HMR capabilities significantly reduce development time and improve developer experience.
- **User Experience**: The application provides a simple UI for managing shopping lists. Features like real-time validation and error handling enhance the user experience by providing immediate guidance and feedback.
- **UI Components**: Flowbite is used to provide pre-designed UI components, enhancing the design and functionality of the application.

## Application Structure

The application is structured into several components, pages, and state management:

- **Components**: Reusable UI elements that can be used across different pages. These are located in the `src/components` directory.
  - `CreateListCard.jsx`: Component for creating a new list.
  - `Header.jsx`: Component for the application header.
  - `ListCard.jsx`: Component for displaying individual list items.

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

## Swap Setup Script

The `setup_swap.sh` script is a utility to create and manage a swap file on your system. This can be useful for improving performance on systems with limited RAM.

### Features

- Checks if a swap file is already enabled and removes it before creating a new one.
- Sets appropriate permissions and configures the swap file.
- Makes the swap file permanent by adding it to `/etc/fstab`.
- Adjusts system settings for swappiness and cache pressure to optimize performance.

Ensure you have the necessary permissions to run the script, as it requires `sudo` access for certain operations.

### Usage

To use the script, run the following command:

```bash
./setup_swap.sh -s <swap_size>
```