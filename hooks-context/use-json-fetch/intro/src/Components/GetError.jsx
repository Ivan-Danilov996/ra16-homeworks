import useJsonFetch from '../hooks/useJsonFetch'


export default function GetError() {

    const url = 'http://localhost:7070'
    const opts = {
        router: '/error'
    }

    const [data, loading, error] = useJsonFetch(url, opts);

    console.log(error)

    return (
        <p>{error? error : null}</p>
    )
}