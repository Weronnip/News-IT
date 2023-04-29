import { NavLink, Outlet } from 'react-router-dom'
import { CustumLink } from './CustomLink';
import './css/App.css'


function Layout() {
    return(
        <>
        <header className='header'>

        <div className="screach">
          <h4 className="name-app">Новости Айти</h4>
          <p className="text">Все новости про Айти</p>

          <form action="#">
            <input type="search"
            placeholder='Поиск'
            className='point' />
            <button type="submit" className='bth-sreach'>Поиск</button>
          </form>

        </div>

        <div className="navigate">
          <CustumLink to="/home" className='bth'>Главная страница</CustumLink>
          <CustumLink to="/News" className='bth'>Последние новости</CustumLink>
          <CustumLink to="/about" className='bth'>О нас</CustumLink>
          <CustumLink to="/profile" className='bth'>Профиль</CustumLink>
        </div>

      </header>

      <Outlet />
      
      </>
    );
}

export {Layout}