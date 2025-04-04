import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Root = () => {
    return <div>
        <nav>
            <NavLink to="/composers">Composers</NavLink>
            <NavLink to="/addcomposer">Add composer</NavLink>
            <NavLink to="/addwork">Add work</NavLink>
        </nav>
        <Outlet />
    </div>
};