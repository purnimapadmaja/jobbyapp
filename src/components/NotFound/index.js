import './index.css'
import Header from '../Header'

const NotFound = () => (
  <>
    <Header />
    <div className="not-found-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
        className="image"
        alt="not found"
      />
      <h1 className="heading">Page Not Found</h1>
      <p className="description">
        we’re sorry, the page you requested could not be found
      </p>
    </div>
  </>
)
export default NotFound
