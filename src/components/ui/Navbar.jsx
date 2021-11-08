import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
			<Link className="navbar-brand" to="/dashboard/">
				HeroesApp
			</Link>

			<div className="navbar-collapse">
				<div className="navbar-nav">
					<NavLink
						className={({ isActive }) =>
							isActive ? "active nav-item nav-link" : "nav-item nav-link"
						}
						to="/dashboard/marvel"
					>
						Marvel
					</NavLink>

					<NavLink
						className={({ isActive }) =>
							isActive ? "active nav-item nav-link" : "nav-item nav-link"
						}
						to="/dashboard/dc"
					>
						DC
					</NavLink>

					{/* NavLink para Search */}
					<NavLink
						className={({ isActive }) =>
							isActive ? "active nav-item nav-link" : "nav-item nav-link"
						}
						to="/dashboard/search"
					>
						Search
					</NavLink>
				</div>
			</div>

			<div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
				<div className="navbar-nav ms-auto">
					<NavLink
						className={({ isActive }) =>
							isActive ? "active nav-item nav-link" : "nav-item nav-link"
						}
						to="/login"
					>
						Logout
					</NavLink>
				</div>
			</div>
		</nav>
	);
};
