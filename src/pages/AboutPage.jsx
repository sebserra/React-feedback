import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'

function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>This is a React app to leave feedback about a product  or a service</h1>
                <p>Version: 1.0.0</p>
            </div>
            <p>
                <Link to="/">Back to Home</Link>
            </p>
        </Card>
    )
}

export default AboutPage
