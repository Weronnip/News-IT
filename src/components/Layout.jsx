import { NavLink, Outlet } from 'react-router-dom'
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
          <NavLink to="/home" className='bth'>Home</NavLink>
          <NavLink to="/News" className='bth'>New news</NavLink>
          <NavLink to="/about" className='bth'>About us</NavLink>
          <NavLink to="/profile" className='bth'>Profile</NavLink>
        </div>

      </header>

      <Outlet />
      
      </>
    );
}

export {Layout}