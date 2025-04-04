import { Form, redirect } from "react-router-dom";
import { addNewComposer } from "../api/api";
import { useState } from "react";

export const AddComposer = () => {
    const [composer, setComposer] = useState({ name: "", url: "" });

    return <Form method="post">
        <label>name</label>
        <input
            type="text"
            name="name"
            placeholder="composer's name"
            value={composer.name}
            onChange={(e) => setComposer({ ...composer, name: e.target.value })}
        />
        <label>photo</label>
        <input
            type="text"
            name="photo"
            placeholder="composer's photo url"
            value={composer.url}
            onChange={(e) => setComposer({ ...composer, url: e.target.value })}
        />
        <button disabled={!composer.name || !composer.url}>save</button>
    </Form>
};

export const AddComposerAction = async ({ request }) => {
    const formData = await request.formData();
    const forms = Object.fromEntries(formData);
    console.log(forms);
    await addNewComposer(forms);
    return redirect("/composers");
};