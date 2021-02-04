import { useSelector, useDispatch } from 'react-redux';
import { changeFilterField } from '../actions/actionCreators';

export default function Filter() {
    const filter = useSelector(state => state.serviceFilter);
    const dispatch = useDispatch();

    function handleChange(e) {
        dispatch(changeFilterField(e.target.value))
    }

    return (
        <form>
            <input onChange={handleChange} value={filter} type="text" />
        </form>
    )
}