import { Link } from "react-router-dom";

const Card = ({flag, name, continent, id}) => {
    return(
        <div>
            <img src={flag} alt={name}/>
            <h3>{name}</h3>
            <h5>{continent}</h5>
            <Link to={`/detail/${id}`}>
                <button>Detail</button>
            </Link>
        </div>
    )
}

export default Card;