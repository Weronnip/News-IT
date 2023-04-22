import { Link } from 'react-router-dom';
import './css/about.css'

function About() {
    return(
        <section className='infos'>
            <div className="information">
                <h4 className='titles'>About us</h4>
                <div className="block-about">
                    <h4 className="about-title">News IT</h4>
                    <p className="about-text">
                        Мы занимаемся освещением событий,<br /> 
                        происходящия в мире Айти.<br />
                        Так же мы занимаеся,<br /> 
                        обучением программировании,<br /> жмите по ссылке ниже. <br />
                    </p>
                </div>

                <form action="#">
                    <button type='button' className='button'>Обучиться</button>
                </form>

                <div className="top">
                    <br />
                </div>

                <div className="contacts">
                    <h4 className="name-cont">Наши контакты</h4>
                    <label className='cont'>
                        Электронная почта: <Link to="#" className='contbth'>UnicronAcadem@academy.ru</Link></label>
                        <br />
                        <br />
                        <label className="cont">Группа во вконтакте: <Link to="#" className='contbth'> Unicron Academy</Link></label>
                </div>
            </div>
        </section>
    );
}

export {About}