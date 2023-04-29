import './css/Notinfo.css'
import { Link } from 'react-router-dom';

function Notfald() {
    return(
        <div className='wargin'>
            <h4 className='title'>Страницы не существует, <Link to="/home" className='bther'>Вернуться на главную</Link></h4>
        </div>
    );
}
export {Notfald}