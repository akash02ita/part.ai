import { useState } from "react";

const Create = () => {
    const [name, setName] = useState(null);
    const [start, setStart] = useState(null);
    const [end, setEnd] = useState(null);
    const [url, setUrl] = useState(null);
    const [address, setAddress] = useState(null);
    const [description, setDescription] = useState(null);
    
    const handleSubmit = () => {
        console.log("params are ", name, start, end, url, address, description)
        if (!name || !start || !end || !url || !address || !description) {
            alert("Ensure all fields are filled!");
            return
        }
        
        console.log("data is non-empty");   
    }

    return (
        <>
            <div>
                <label> Name: <input type="text"  onChange={(e) => setName(e.target.value)} /></label>
                <label> Description <input type="text" onChange={(e) => setDescription(e.target.value)}/> </label>
                <label> Start Date <input type="date" onChange={(e) => setStart(e.target.value)}/> </label>
                <label> End Date <input type="date" onChange={(e) => setEnd(e.target.value)}/> </label>
                <label> URL <input type="url" onChange={(e) => setUrl(e.target.value)}/> </label>
                <label> Address <input type="text" onChange={(e) => setAddress(e.target.value)}/> </label>
                <button onClick={() => handleSubmit()}> Submit </button>
            </div>
        </>
    );
}

export default Create;