import { Link } from "react-router-dom";
import { CardFB, FrontDiv, BackDiv, ImgDiv } from "../styles/Card";

const Card = ({flag, name, continent, id, code}) => {
    return(
        <CardFB>
            <FrontDiv className="face front">
                <img src={flag} alt={name}/>
                <h3>{code}</h3>
            </FrontDiv>
            <BackDiv className="face back">
                <ImgDiv>
                    <img src={flag} alt={name}/>
                </ImgDiv>
                <div>
                    <p>Name</p>
                    <h3>{name}</h3>
                    <p>Continent</p>
                    <h3>{continent}</h3>
                    <Link to={`/detail/${id}`}>
                        <button>Detail</button>
                    </Link>
                </div>
            </BackDiv>
        </CardFB>
    )
}

export default Card;