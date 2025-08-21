import { useState, useEffect } from 'react'
import axios from 'axios';

export default function useApi(url, method = 'get', body = null) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axios({ url, method, data: body })
            .then(response => setData(response.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))

    }, [url, method, body])



    return { data, error, loading }
}
