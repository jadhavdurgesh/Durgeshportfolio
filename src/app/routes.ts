import { createBrowserRouter } from "react-router";
import { Root } from "./components/layout/Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Portfolio } from "./pages/Portfolio";
import { Services } from "./pages/Services";
import { Products } from "./pages/Products";
import { Team } from "./pages/Team";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "portfolio", Component: Portfolio },
      { path: "services", Component: Services },
      { path: "products", Component: Products },
      { path: "team", Component: Team },
      { path: "contact", Component: Contact },
    ],
  },
]);
