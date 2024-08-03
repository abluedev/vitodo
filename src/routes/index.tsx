import {createBrowserRouter,} from "react-router-dom";
import App from "../App.tsx";
import {Error404Page} from "../pages/error404/error404.page.tsx";

export const routes = createBrowserRouter([
    { path: '/dashboard', element: <App />, errorElement: <Error404Page />},
]);
