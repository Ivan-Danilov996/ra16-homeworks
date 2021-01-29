import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

export default function Menu() {
    return (
      <nav className="menu">
        <NavLink activeClassName='menu__item-active' className="menu__item" to="/" exact >Главная</NavLink>
        <NavLink activeClassName='menu__item-active' className="menu__item" to="/drift" exact >Дрифт-такси</NavLink>
        <NavLink activeClassName='menu__item-active' className="menu__item" to="/timeattack" exact >Time Attack</NavLink>
        <NavLink activeClassName='menu__item-active' className="menu__item" to="/forza" exact >Forza Karting</NavLink>
      </nav>
    )
  }