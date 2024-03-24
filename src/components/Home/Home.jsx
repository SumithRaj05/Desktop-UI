import { Link, useNavigate } from 'react-router-dom';
import './Home.css'

function Home() {

  const navigator = useNavigate()

  return (
    <div className="box">
      <div className="home-background-overlay"></div>

      {/* <!-- center circle --> */}
      <div className="center-circle">
        <div className="center-circle-c1"></div>
        <div className="center-circle-c2"></div>
        <div className="center-circle-c3"></div>
        <div className="center-circle-c4"></div>
        <div className="center-circle-c5">
          <Link to="cmd://konsole">
            <p className="center-circle-text"><strong>SR</strong></p>
          </Link>
        </div>
      </div>

      {/* <!-- social button --> */}
      <div className="social-circle">
        <div className="social-circle-c1"></div>
        <div className="social-circle-c2">
          <button className="social-button" onClick={() => navigator("/social")}>
            <div className="code11">
              <p className="code12">social</p>
            </div>
          </button>
        </div>
      </div>

      {/* <!-- coding button --> */}
      <div className="coding-circle">
        <div className="coding-circle-c1"></div>
        <div className="coding-circle-c2">
          <button className="coding-button">
            <div className="code21"></div>
            <div className="code22"></div>
            <div className="code23"></div>
          </button>
        </div>
      </div>

      {/* <!-- gaming button --> */}
      <div className="gaming-circle">
        <div className="gaming-circle-c1"></div>
        <div className="gaming-circle-c2">
          <button className="gaming-button">
            <div className="code31">
              <div className="code32"></div>
              <div className="code33"></div>
              <div className="code34"></div>
              <div className="code35"></div>
              <div className="code36"></div>
            </div>
          </button>
        </div>
      </div>

      {/* <!-- settings button --> */}
      <div className="settings-circle">
        <div className="settings-circle-c1"></div>
        <div className="settings-circle-c2">
          <button className="settings-button">
            <div className="code46"></div>
            <div className="code45"></div>
            <div className="code44"></div>
            <div className="code43"></div>
            <div className="code42"></div>
            <div className="code41"></div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
