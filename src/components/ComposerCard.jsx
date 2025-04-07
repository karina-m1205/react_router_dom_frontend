import { Link } from "react-router-dom";

export const ComposerCard = ({ composer }) => {
    return <div className="composer-card">
        <img src={composer.photo} alt={composer.name} />
        <p>{composer.name}</p>
        <Link to={"/composer/" + composer.id}>compositions</Link>
    </div>
};