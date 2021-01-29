import { useEffect, useState } from 'react'
import Item from './Item'


export default function List({clickHandler}) {

    const [list, setList] = useState([])

    useEffect(() => {

        async function fetchData() {
            const response = await fetch(' https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json');
            const data = await response.json();
            setList(data)
        }

        fetchData()

        return () => {setList([])}

    }, [])

return (
    <ul className="list">
        {list.length > 1 ? list.map(item => <Item key={item.id} item={item} clickHandler={clickHandler}/>) : null}
    </ul>
)
}