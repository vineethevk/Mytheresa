import { useEffect, useState } from "react";
import axios from "axios";
export const Test = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8080/womensdata1/1`).then(({ data }) => {
            setData(data)
        })
    }, [])
    console.log(data)
    return (
        <h1>Vineeth</h1>
    )
}