import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="home">
            <h1>glassnote</h1>

            <p>
                A modern handbook for learning computer vision.
            </p>

            <Link to="/m01c01" className="home-btn">
                Open Docs
            </Link>
        </div>
    )
}