import './css/index.css'

function Homes() {
    return(
        <section className='window'>
            <br />
      {/* Section News */}
      <section className='lastest-new'>

        <h4 className="best-news">Bests News</h4>

        {/* Block-news 1 */}
        <div className="block-info">
          <div className="name-new">
            <h4 className='title-new'>News Ones</h4>
          </div>
          <div className="news-imag">
            <img src="#" alt="News image" className='image'/>
          </div>
          <div className="block-news">
            <p className="news-text" contentEditable>
              Tex
            </p>
          </div>
        </div>
        {/* block-news 2 */}
        <div className='block-info1'>
          <div className="name-new1">
            <h4 className="title-news1">News Twos</h4>
          </div>
          <div className="news-imag">
            <img src="" alt="News image" className='image'/>
          </div>
          <div className="block-news1">
            <p className="news-text" contentEditable>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> 
              Doloribus maiores assumenda consequuntur distinctio dolorum pariatur<br /> 
              eveniet repudiandae debitis ratione,<br /> 
              consectetur voluptatum enim beatae ipsa ad quod quam sit aliquam error.<br />
            </p>
          </div>
        </div>

      </section>
        </section>
    );
}

export {Homes}