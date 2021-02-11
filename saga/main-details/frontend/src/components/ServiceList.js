import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchServicesRequest } from '../actions/actionCreators';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Loader from "react-loader-spinner";

function ServiceList() {
  const { items, error, loading, errorText } = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    redirect: false,
    id: undefined,
    reload: false
  })

  const handleClick = (id) => {
    setState(prevState => ({ ...prevState, redirect: true, id }))
  }

  const handleBtnClick = () => {
    setState(prevState => ({ ...prevState, reload: true}))
  }

  useEffect(() => {
    dispatch(fetchServicesRequest())
  }, [dispatch, state.reload])

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

  if (error) {
    return (
      <div>
        <p>{errorText}</p>
        <button onClick={handleBtnClick}>Повторить запрос</button>
      </div>
    )
  }

  return (
    <>
      {state.redirect ? <Redirect to={`/${state.id}`} /> :
        <ul>
          {items.map(item =>
            <div key={item.id}>
              <li >{item.name} {item.price}</li>
              <button onClick={() => handleClick(item.id)}>details</button>
            </div>
          )}
        </ul>
      }
    </>
  )
}

export default ServiceList
