import { useState, useEffect } from 'react'
import axios from 'axios';

export default function useApi(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axios.get(url)
            .then(response => setData(response.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))

    }, [url])



    return { data, error, loading }
}
