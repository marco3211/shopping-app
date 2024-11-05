# Application Overview 

**Important**: I only used two files `main.jsx` and `App.jsx` to keep the application simple and easy to understand. However it's possible to decouple the code and have a more robust project code structure. Based on the question, I understood that what was needed is an app without much complexity. 

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

The application is structured into several components and pages: 

- Main Entry Point `main.jsx`: Configures the Redux store and renders the main `App` component into the DOM. 
- Main Application Component `App.jsx`: Contains the core logic and components of the application which would include routing, state management and UI components. 

This overview provides a high-level understanding of the application. 

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
