import useJsonFetch from '../hooks/useJsonFetch'


export default function GetData() {

    const url = 'http://localhost:7070'
    const opts = {
        router: '/data'
    }

    const [data, loading, error] = useJsonFetch(url, opts);

    console.log(data)

    return (
        <p>{data? data.status : null}</p>
    )

}
