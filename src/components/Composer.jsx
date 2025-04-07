import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getComposerById } from "../api/api";

export const Composer = () => {
    const [composer, setComposer] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getComposerById(id)
            .then(res => setComposer(res));
    }, []);

    return <div>
        {composer && <div className="composer-profile">
            <img src={composer.photo} />
            <div className="composer-details">
                <h1>{composer.name}</h1>
                <div className="music">
                    {composer.works.map(elm => <div key={elm.id}>
                        <p>{elm.composition}</p>
                    </div>)
                    }
                </div>
            </div>
        </div>}
    </div>
};