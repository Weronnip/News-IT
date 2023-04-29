import './css/index.css'

function Homes() {
    return(
        <section className='window'>
            <br />
      {/* Section News */}
      <section className='lastest-new'>

        <h4 className="best-news">Лучшие новости</h4>

        {/* Block-news 1 */}
        <div className="block-info">
          <div className="name-new">
            <h4 className='title-new'>Название новости</h4>
          </div>
          <div className="news-imag">
            <img src="#" alt="News image" className='image'/>
          </div>
          <div className="block-news">
            <p className="news-text" contentEditable>
              Текст
            </p>
          </div>
        </div>
        {/* block-news 2 */}
        <div className='block-info1'>
          <div className="name-new1">
            <h4 className="title-news1">Название новости</h4>
          </div>
          <div className="news-imag">
            <img src="#" alt="News image" className='image'/>
          </div>
          <div className="block-news1">
            <p className="news-text" contentEditable>
              Текст
            </p>
          </div>
        </div>

      </section>
        </section>
    );
}

export {Homes}