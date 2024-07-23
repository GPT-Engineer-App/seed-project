import { Home } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 * To add more pages:
 * 1. Create a new page component in the pages directory
 * 2. Import the page component here
 * 3. Add a new object to the navItems array with the following properties:
 *    - title: The text to display in the navigation
 *    - to: The URL path for the page
 *    - icon: An optional icon component
 *    - page: The imported page component
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  // Example of how to add more pages:
  // {
  //   title: "About",
  //   to: "/about",
  //   icon: <Info className="h-4 w-4" />,
  //   page: <About />,
  // },
];