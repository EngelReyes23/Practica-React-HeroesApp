import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const Navbar = () => {
	const {
		users: { name },
		dispatch,
	} = useContext(authContext);

	const navigate = useNavigate();

	// handleLogout
	const handleLogout = () => {
		dispatch({
			type: types.logout,
		});
		navigate("/login", { replace: true });
	};

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
					<span className="nav-link nav-item text-info">{name}</span>
					<button className="nav-item nav-link btn" onClick={handleLogout}>
						Logout
					</button>
				</div>
			</div>
		</nav>
	);
};
