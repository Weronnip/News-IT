import './css/index.css'

function Smi() {
    return (
        <section className='lastest-new'>
        <div className="block-info">
          <div className="name-new">
            <h4 className="title-new">Технологии изменили правила игры</h4>
          </div>
          <div className="news-imag">
            <img src="#" alt="News image" className='image'/>
          </div>
          <div className="block-news">
            <p className="news-text">
            Носимые технологии изменили правила игры в сфере информационных технологий.
            Это относится к носимым технологиям, таким как умные часы, фитнес-трекеры и умные очки.<br />
            Популярность носимых технологий в последние годы возросла, поскольку
            они предоставляют пользователям множество преимуществ, таких как простота, 
            мобильность и подключение к интернету.<br />
            В этом посте мы рассмотрим, как носимые технологии влияют на ИТ-бизнес.
            Развитие носимых технологий оказало значительное влияние на ИТ-индустрию.<br />
            Носимые гаджеты становятся все более сложными и многофункциональными,
            позволяет пользователям отслеживать уровень своей физической подготовки,<br />
            а также контролировать частоту сердечных сокращений и привычки ко сну.
            В результате спрос на носимые технологии резко возрос.
            </p>
          </div>
        </div>

        {/* news */}

        <div className="block-fast-news">
          <div className="name-news">
            <h4 className="title-news">ИИ был установлен в мозг человека</h4>
          </div>
          <div className="fast-news">
            <aside className='mini-title'>ИИ помогает человеку</aside>
              <p className="news-texts">
                ИИ - помог решить многие проблемы, у людей
              </p>
          </div>
        </div>

        <div className="top">
        <br />
        </div>

        <div className="block-fast-news">
          <div className="name-news">
            <h4 className="title-news">Компания Intel вернулась в Россию?</h4>
          </div>
          <div className="fast-news">
            <aside className='mini-title'>Чем это грозит компании?</aside>
              <p className="news-texts">
                Да действительно, компания вернулась в Россию, а если быть точнее,
                теперь главное здание теперь в городе казань
              </p>
          </div>
        </div>

        <div className="top">
          <br />
        </div>

        <div className="block-fast-news">
          <div className="name-news">
            <h4 className="title-news">Компания Nvidia вернулась в Россию?</h4>
          </div>
          <div className="fast-news">
            <aside className='mini-title'>Чем это грозит компании</aside>
              <p className="news-texts">
                Компания Nvidia разместило своё здание в городе
              </p>
          </div>
        </div>

      </section>
    );
}

export {Smi}