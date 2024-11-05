import { content, plugin } from 'flowbite-react/tailwind'

/**
 * Tailwind CSS configuration file
 * 
 * This file configures Tailwind CSS for the project, including:
 * - Specifying the paths to all of the template files in the project
 * - Extending the default theme with custom configurations
 * - Adding plugins, such as Flowbite, to extend Tailwind's functionality
 * 
 * Flowbite is a UI component library that works with Tailwind CSS. 
 * The `content` and `plugin` functions from Flowbite are used to 
 * integrate Flowbite's components and utilities into the project.
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ...content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(),
  ],
}
