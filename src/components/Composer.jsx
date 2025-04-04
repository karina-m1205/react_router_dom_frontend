
export const Composer = ({ composer }) => {
    return <div className="composer-card">
        <img src={composer.photo} alt={composer.name}/>
        <p>{composer.name}</p>
    </div>
};