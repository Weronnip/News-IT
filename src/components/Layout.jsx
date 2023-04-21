import { NavLink, Outlet } from 'react-router-dom'
import { CustumLink } from './CustomLink';
import './css/App.css'


function Layout() {
    return(
        <>
        <header className='header'>

        <div className="screach">
          <h4 className="name-app">News IT</h4>
          <p className="text">All news IT</p>

          <form action="#">
            <input type="search"
            placeholder='Enter request'
            className='point' />
            <button type="submit" className='bth-sreach'>search</button>
          </form>

        </div>

        <div className="navigate">
          <CustumLink to="/home" className='bth'>Home</CustumLink>
          <CustumLink to="/News" className='bth'>New news</CustumLink>
          <CustumLink to="/about" className='bth'>About us</CustumLink>
          <CustumLink to="/profile" className='bth'>Profile</CustumLink>
        </div>

      </header>

      <Outlet />
      
      </>
    );
}

export {Layout}