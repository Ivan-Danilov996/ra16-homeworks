import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, addService, clearServiceField, editService } from '../actions/actionCreators';

function ServiceAdd() {
    const item = useSelector(state => state.serviceAdd);
    const dispatch = useDispatch();


    const handleChange = evt => {
        const { name, value } = evt.target;
        dispatch(changeServiceField(name, value));
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        if (item.id) {
            dispatch(editService(item.name, item.price, item.id))
        } else {
            dispatch(addService(item.name, item.price));
        }
        dispatch(clearServiceField())
    }

    const handleCancel = () => {
        dispatch(clearServiceField())
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name='name' onChange={handleChange} value={item.name} />
            <input name='price' onChange={handleChange} value={item.price} />
            <button type='submit'>Save</button>
            <button onClick={() => handleCancel(item.id)} type='button'>Cancel</button>
        </form>
    );
}

export default ServiceAdd;