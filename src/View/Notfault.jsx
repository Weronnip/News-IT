import './css/Notinfo.css'
import { Link } from 'react-router-dom';

function Notfald() {
    return(
        <div className='wargin'>
            <h4 className='title'>The page does not exist, <Link to="/home" className='bther'>Back on homepage</Link></h4>
        </div>
    );
}
export {Notfald}