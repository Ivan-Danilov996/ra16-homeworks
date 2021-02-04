import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {removeService, editService, clearServiceField} from '../actions/actionCreators';

function ServiceList() {
  const state = useSelector(state => state.serviceList);
  const filter = useSelector(state => state.serviceFilter)
  const dispatch = useDispatch();

  const filterState = state.filter(service => service.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));

  const handleRemove = id => {
    dispatch(removeService(id));
    dispatch(clearServiceField())
  }

  const handleEdit = (name, price, id) => {
    dispatch(editService(name, price, id))
  }

  return (
    <ul>
      {filterState.map(o => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleEdit(o.name, o.price, o.id)} >edit</button>
          <button onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      ))}
    </ul>
  )
}

export default ServiceList