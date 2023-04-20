import { Link, Outlet } from 'react-router-dom'
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
          <Link to="/home" className='bth'>Home</Link>
          <Link to="/News" className='bth'>New news</Link>
          <Link to="/about" className='bth'>About us</Link>
          <Link to="/profile" className='bth'>Profile</Link>
        </div>

      </header>

      <Outlet />
      
      </>
    );
}

export {Layout}