import { useState, useEffect, useRef } from 'react';


export default function useJsonFetch(url, opts) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    useEffect(() => {
        async function fetchData() {
            try{
                setLoading(true)
                const response = await fetch(`${url}${opts.router}`)
                if (response.status === '500') {
                    throw new Error('ошибка сети')
                }
                const newData = await response.json()
                setData(newData)
            } catch(e) {
                setError(e)
            } finally {
                setLoading(false)
            }

        }

        fetchData()

    }, [])

    return [data, loading, error]
}
