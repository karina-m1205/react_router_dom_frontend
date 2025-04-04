import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import { addNewWork } from "../api/api";


export const AddWork = () => {
    const [composerData, setComposerData] = useState({ id: -1, composition: "" });

    const list = useLoaderData();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const foundComposer = list.find(elm => elm.id === composerData.id);
        foundComposer.works.push({ composition: composerData.composition, id: Date.now() });
        await addNewWork(foundComposer.id, foundComposer.works);
        navigate("/composers", { state: { composer: foundComposer.name, work: foundComposer.works.at(-1) } });
    };

    return <form onSubmit={handleSubmit}>
        <label>choose a composer</label>
        <select value={composerData.id}
            onChange={(e) => setComposerData({ ...composerData, id: e.target.value })}
        >
            <option value={-1}>--composer--</option>
            {list.map(elm => <option key={elm.id} value={elm.id}>{elm.name}</option>)}
        </select>
        <label>composition</label>
        <input
            type="text"
            placeholder="Name of the composition"
            value={composerData.composition}
            onChange={(e) => setComposerData({ ...composerData, composition: e.target.value })} />
        <button disabled={composerData.id === -1 || !composerData.composition}>save</button>
    </form>
};