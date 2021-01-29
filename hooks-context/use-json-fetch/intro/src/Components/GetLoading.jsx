import useJsonFetch from '../hooks/useJsonFetch'


export default function GetLoading() {

    const url = 'http://localhost:7070'
    const opts = {
        router: '/loading'
    }

    const [data, loading, error] = useJsonFetch(url, opts);


    return (
        <p>{loading? 'loading': null}</p>
    )
}