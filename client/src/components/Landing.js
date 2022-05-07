import { Link } from "react-router-dom"
import bgVideo from "../video/flags.mp4"
import { Video, Div, H1, DivH1, Button } from "../styles/Landing"
const Landing = () => {
    return(
        <Div>
            <DivH1>
                <H1>Welcome to <br/> the Country app</H1>
                <Link to="/home">
                    <Button>Home</Button>
                </Link>
            </DivH1>
            <Video autoPlay loop muted>
                <source src={bgVideo} type="video/mp4"/>
            </Video>
        </Div>
    )
}

export default Landing