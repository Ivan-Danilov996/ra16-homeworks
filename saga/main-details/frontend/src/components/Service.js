import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { fetchServiceRequest } from '../actions/actionCreators'
import Loader from "react-loader-spinner";


export default function Service({ match }) {

    const { item, error, loading, errorText } = useSelector(state => state.serviceReducer);
    const dispatch = useDispatch();

    const [reload, setReload] = useState(false)

    const handleBtnClick = () => {
        setReload(true)
      }

    useEffect(() => {
        dispatch(fetchServiceRequest(match.params.id))
    }, [dispatch, reload])

    if (error) {
        return (
          <div>
            <p>{errorText}</p>
            <button onClick={handleBtnClick}>Повторить запрос</button>
          </div>
        )
      }

    if (loading) {
        return (
            <Loader
                type="Puff"
                color="#00BFFF"
                height={50}
                width={50}
            />
        )
    }

    return (
        <div>
            {
                item ? <div>{item.name} {item.price} {item.content}</div> : null
            }
        </div>
    )
}