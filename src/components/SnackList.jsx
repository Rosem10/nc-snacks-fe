import { useState, useEffect } from "react"
import { fetchSnacks } from "../utils/api";
import SnackCard from "./SnackCard";

function SnackList() { 
    const [snacks, setSnacks] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => { 
        fetchSnacks().then((snacks) => {
            setSnacks(snacks)
        }).then(() => { 
            setIsLoading(false)
        })
    }, [])

    if (isLoading) { 
        return <p>...loading</p>
    }
    return (
        <ul>
            {snacks.map((snack) => { 
                return <SnackCard key={snack.snack_id} snack={snack} />
            })}
        </ul>
    )
}

export default SnackList