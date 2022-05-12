import axios from "axios"
import { useEffect } from "react"

export const Test = () => {
    useEffect(() => {
        axios.get("https://54.167.67.179:8080/womensdata1").then((data) => {
            console.log(data);
        }).catch((err) => { console.log(err) });
    }, [])
    return (
        <div>Vineeth</div>
    )
}