import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { fetchSnackById } from "../utils/api";

function SingleSnack() { 
    const { snack_id } = useParams()
    const [snack, setSnack] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => { 
        fetchSnackById(snack_id).then((snackData) => { 
            setSnack(snackData)
        }).then(() => { 
            setIsLoading(false)
        })
    }, [snack_id])

    if (isLoading) { 
        return <p>Loading...</p>
    }

    return (
        <div className="single-snack">
            <h2>{snack.snack_name}</h2>
            <p>{ snack.snack_description}</p>
        </div>
    )
}

export default SingleSnack