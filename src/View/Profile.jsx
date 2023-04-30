import './css/profile.css'
import { Link } from 'react-router-dom';

function Profile() {
    return(
        <section className="window">
            <div className="main-win">
                <div className="info-user">
                    <img src="https://www.medien-studieren.net/fileadmin/user_upload/Inhalte/medien-studieren.de/studiengaenge/journalismus-karriere.jpg" alt="avatar-user" className='avatar'/>
                    <div className="user-bio">
                        <em className='name-last'>Джон Джекиннсон</em>
                        <br />
                        <em className="exp">Опыт работы: 5 лет</em>
                    </div>
                    <div className="about-user">
                        <p className='texts' contentEditable>Расскажите о себе</p>
                    </div>
                </div>
            </div>
            <div className="publ">
                <h3 className="titles">Ваши публикации</h3>
                <div className="public">
                    <Link to="/News" className='abth'>Технологии изменили правила игры</Link>
                </div>

                <br />
                <br />

                <div className="public">
                    <Link to="/News" className='abth'>ИИ помогает человеку</Link>
                </div>

                <br />
                <br />
                
                <div className="public">
                    <Link to="/News" className='abth'>Компания Intel вернулась в Россию?</Link>
                </div>

                <br />
                <br />
                
                <div className="public">
                    <Link to="/News" className='abth'>Компания Nvidia вернулась в Россию?</Link>
                </div>
            </div>
        </section>
    );
}

export {Profile}