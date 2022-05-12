import { ActCard, ImgAct, BodyAct, DifSpan, SeasonSpan } from "../styles/Detail"


const ActivityCard = ({url, name, difficulty, duration, season}) => {
    console.log(url);
    return(
        <ActCard>
            <div>
                <ImgAct src={url} alt={name}/>
            </div>
                <h3>{name}</h3>
            <BodyAct> 
                <p>Difficulty (1-5): <DifSpan dif = {difficulty}>{difficulty}</DifSpan></p>
                <p>Duration: {duration} min</p>
                <p>Season: <SeasonSpan season={season}>{season}</SeasonSpan></p>
            </BodyAct>
        </ActCard>
    )
}

export default ActivityCard