import {useState, useEffect} from "react";
import axios from "axios";

function NewMot(){
    const [msg,setMsg] = useState("");
    const [author,setAuthor]= useState("");

    useEffect( () => {
        gm();
        setInterval(gm,5000);
    },[]);

    const gm = (event) => {
        let url = "https://api.quotable.io/random";
        axios.get(url)
        .then(res => {
            setMsg(res.data.content);
            setAuthor(res.data.author);
        })
        .catch(err => setMsg("issue" + err));
    }

    return(
        <>
        <center>
            <div class="div">
                <h1>New Motivation Msg App</h1>
                <h2>{msg}</h2>
                <h2>- {author}</h2>
            </div>
        </center>
        </>
    );
}

export default NewMot;