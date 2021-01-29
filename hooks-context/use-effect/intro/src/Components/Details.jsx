import { useEffect, useState } from 'react'

export default function Details({ id }) {

    const [info, setInfo] = useState(false)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            try {
                const response = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`);
                const data = await response.json();
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                setInfo(data)
            } catch (e) {
                console.error(e)
            } finally {
                setLoading(false)
            }
        }
        fetchData()

        return () => { setInfo([]) }

    }, [id])

    return (
        <div className="details">
            {isLoading?<p>Loading...</p> : <img src={info.avatar} alt="" />}
            <div className="name">{info.name}</div>
            <div className="city">City: {info.details ? info.details.city : null}</div>
            <div className="company">Company: {info.details ? info.details.company : null}</div>
            <div className="position">Position: {info.details ? info.details.position : null}</div>
        </div>
    )
}