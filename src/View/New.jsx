import './css/index.css'

function Smi() {
    return (
        <section className='lastest-new'>
        <div className="block-info">
          <div className="name-new">
            <h4 className="title-new">Name News One</h4>
          </div>
          <div className="news-imag">
            <img src="#" alt="News image" className='image'/>
          </div>
          <div className="block-news">
            <p className="news-text">
            Wearable technology has emerged as a game changer in the realm of information technology.<br /> 
            It refers to wearable technology such as smartwatches, fitness trackers, and smart eyewear.<br /> 
            Wearable technology has grown in popularity in recent years because<br /> 
            it provides users with a variety of benefits such as ease, mobility, and connectivity.<br /> 
            In this post, we will look at how wearable technology is affecting the IT business.<br />
            The rise of wearable technology has had a significant impact on the IT industry.<br /> 
            Wearable gadgets have become increasingly complex and feature-rich,<br /> 
            allowing users to track their fitness levels as well as monitor their heart rate and sleep habits.<br /> 
            As a result, the demand for wearable technology has risen dramatically.<br />
            </p>
          </div>
        </div>

        {/* news */}

        <div className="block-fast-news">
          <div className="name-news">
            <h4 className="title-news">Frist Fast News</h4>
          </div>
          <div className="fast-news">
            <aside className='mini-title'>PO in Humen</aside>
              <p className="news-texts">
                PO install in humen
              </p>
          </div>
        </div>

        <div className="top">
        <br />
        </div>

        <div className="block-fast-news">
          <div className="name-news">
            <h4 className="title-news">Fast News</h4>
          </div>
          <div className="fast-news">
            <aside className='mini-title'>Intel in Russia</aside>
              <p className="news-texts">
                Intel moved to Russia
              </p>
          </div>
        </div>

        <div className="top">
          <br />
        </div>

        <div className="block-fast-news">
          <div className="name-news">
            <h4 className="title-news">Fast News</h4>
          </div>
          <div className="fast-news">
            <aside className='mini-title'>Nvidia in Russia</aside>
              <p className="news-texts">
                Nvidia moved to Russia
              </p>
          </div>
        </div>

      </section>
    );
}

export {Smi}