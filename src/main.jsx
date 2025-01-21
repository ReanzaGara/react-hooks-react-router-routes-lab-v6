import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes"; // Import the routes configuration

// Create the browser router using the routes configuration
const router = createBrowserRouter(routes);

// Render the app using RouterProvider to manage the routing
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);