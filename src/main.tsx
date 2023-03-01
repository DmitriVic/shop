import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "./Layout";
import { Authorization } from "./Pages/Authorization";
import { Home } from "./Pages/Home";
import { Registration } from "./Pages/Registration";
import { Account } from "./Pages/Account";
import { Notfoundpage } from "./Pages/Notfoundpage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="authorization" element={<Authorization />} />
      <Route path="registration" element={<Registration />} />
      <Route path="account" element={<Account />}>
        <Route path="contacts" element={<p>Our contact</p>} />
        <Route path="team" element={<p>Our team</p>} />
      </Route>
		<Route path="*" element={<Notfoundpage />} />
    </Route>
	 
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
