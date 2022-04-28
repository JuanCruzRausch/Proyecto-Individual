import { Link } from "react-router-dom"

const Landing = () => {
    return(
        <div>
            <h1>Welcome to the Country app</h1>
            <Link to="/home">
                <button>Home</button>
            </Link>
        </div>
    )
}

export default Landing