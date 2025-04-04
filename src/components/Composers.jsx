import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { Composer } from "./Composer";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

export const Composers = () => {
    const list = useLoaderData();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const info = location.state;
        if (info) {
            toast.success(`${info.work.composition} added to ${info.composer}`);
            navigate(location.pathname, { replace: true });
        };
    }, []);
    return <div>
        <ToastContainer />
        <div className="gallery">
            {list.map(elm => {
                return <Composer key={elm.id} composer={elm} />
            })}
        </div>
    </div>
};