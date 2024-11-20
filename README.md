# Application Overview

This React application is built using Vite, a tool that provides fast development and hot module replacement (HMR) capabilities. The app is designed to manage shopping lists with features like drag-and-drop reordering and persistent state management using Redux. Users can create, edit, and delete lists, with changes reflected instantly across the application.

The application's infrastructure is managed using Terraform and Ansible, allowing for automated provisioning and configuration of AWS resources. This setup ensures a scalable and reliable environment for deploying and running the application.

## Key Technologies and Configurations

- **Vite**: A build tool with HMR that allows developers to see changes in real-time without the need to refresh the entire page.
- **React**: The core library for building UI components.
- **Redux Toolkit**: Utilized for state management. Simplifies the setup and management of global state in the application, ensuring consistent state across different pages and components.
- **React Router**: Enables client-side routing, providing a seamless single-page application (SPA) experience.
- **TailwindCSS**: A utility-first CSS framework, configured with PostCSS to enable custom configurations and optimizations.
- **Flowbite**: A component library built on top of TailwindCSS, providing pre-designed UI components.
- **IndexedDB**: Used for persistent storage of lists, ensuring data is saved locally and can be retrieved even after a page refresh.
- **PostCSS**: A tool that helps transform CSS with JavaScript plugins.
- **ESLint**: Helps enforce standards and best practices.

## Design and Implementation Decisions

- **Component-Based Architecture**: The application promotes reusability of components and separation of concerns. Each component has a specific functionality, making the code easier to understand and maintain.
- **Performance Optimization**: Vite's fast build process and HMR capabilities significantly reduce development time and improve developer experience.
- **User Experience**: The application provides a simple UI for managing shopping lists. Features like drag-and-drop reordering, real-time validation, and error handling enhance the user experience by providing immediate guidance and feedback.
- **Instant Updates**: Changes to lists, such as updates or deletions, are reflected instantly across the application without the need for a page refresh.
- **UI Components**: Flowbite is used to provide pre-designed UI components, enhancing the design and functionality of the application.

## Application Structure

The application is structured into several components, pages, and state management:

- **Components**: Reusable UI elements that can be used across different pages. These are located in the `src/components` directory.
  - `CreateListCard.jsx`: Component for creating a new list.
  - `Header.jsx`: Component for the application header.
  - `ListCard.jsx`: Component for displaying individual list items, with functionality for editing and deleting lists.

- **Pages**: Main views or screens of the application, often representing a route. These are located in the `src/pages` directory.
  - `CreateAccountPage.jsx`: Page for creating a new account.
  - `CreateListPage.jsx`: Page for creating a new list.
  - `EditListPage.jsx`: Page for editing an existing list.
  - `FullListPage.jsx`: Page for viewing all items in a list.
  - `Home.jsx`: Home page of the application, featuring drag-and-drop reordering of lists.
  - `ListsPage.jsx`: Page for displaying all lists, reflecting the current state from Redux.

- **Redux**: State management for the application. The Redux-related files are located in the `src/redux` directory.
  - `store.js`: Configures the Redux store.
  - `slices/`: Contains Redux slices for different parts of the state.
  - `actions.js`: Defines action types and creators for managing lists.
  - `reducers.js`: Handles state changes based on dispatched actions.

- **Utilities**: Helper functions and utilities used across the application. These are located in the `src/utils` directory.
  - `indexedDB.js`: Utility for handling IndexedDB operations, ensuring persistent storage of lists.

## Infrastructure Setup

The infrastructure for this application is managed using Terraform and Ansible, with setup scripts provided for local environment preparation.

### Setup Scripts

- **Ansible Installation**: `aws-setup/utils/install-ansible.sh` installs Ansible for configuration management.
- **AWS CLI V2 Installation**: `aws-setup/utils/install-aws-cli-v2.sh` installs AWS CLI V2 for interacting with AWS services.
- **Terraform Installation**: `aws-setup/utils/install-terraform.sh` installs Terraform for infrastructure provisioning.

### Infrastructure Provisioning

- **Terraform Configuration**: `aws-setup/main.tf` defines the AWS infrastructure, including VPC, subnets, security groups, and EC2 instances.

### Configuration Management

- **Ansible Playbook**: `aws-setup/ansible/site.yml` configures the EC2 instances, setting up Git SSH, NVM, Node.js, and cloning the Git repository.

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
