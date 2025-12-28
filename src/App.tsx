import type React from "react";
import { I18nextProvider } from "react-i18next";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import i18n from "./i18n";
import Customers from "./pages/Customers/Customers";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory/Inventory";
import Reports from "./pages/Reports/Reports";
import Sales from "./pages/Sales/Sales";
import Settings from "./pages/Settings/Settings";

import "./styles/globals.css";

const appRoutes = [
	{ path: "/", element: <Dashboard /> },
	{ path: "/dashboard", element: <Dashboard /> },
	{ path: "/sales", element: <Sales /> },
	{ path: "/inventory", element: <Inventory /> },
	{ path: "/customers", element: <Customers /> },
	{ path: "/reports", element: <Reports /> },
	{ path: "/settings", element: <Settings /> },
];

const App: React.FC = () => {
	return (
		<I18nextProvider i18n={i18n}>
			<Router>
				<Layout>
					<Routes>
						{appRoutes.map(({ path, element }) => (
							<Route key={path} path={path} element={element} />
						))}
					</Routes>
				</Layout>
			</Router>
		</I18nextProvider>
	);
};

export default App;
