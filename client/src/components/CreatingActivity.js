import React, { useState } from "react"
import { Link, useNavigate} from "react-router-dom"
import { postActivity } from "../actions/index"
import { useDispatch } from "react-redux"
import "../styles/FormActivity.css"
import { Formulario, Button, ButtonCenter, Success, ErrorDiv, Select, Label, Range, DivRange, ButtonHome, HomeDiv } from "../styles/FormActStyled"
import InputForm from "./InputForm"
import NavBar from "./NavBar"

const CreatingActivity = () => {
    const dispatch = useDispatch()
    
    const navigate = useNavigate()

    const [ name, setName ] = useState({field: "", validate: null})
    const [ url, setUrl ] = useState({field: "", validate: null})
    const [ duration, setDuration ] = useState({field: "", validate: null})
    const [ difficultyAndSeason, setDifficulyAndSeason ] = useState({difficulty: null, season: ""})
    const [ validate , setValidate ] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(name.validate === 'true' && url.validate === 'true' && duration.validate === 'true' && difficultyAndSeason.season && difficultyAndSeason.difficulty){
            setValidate(true)
            dispatch(postActivity({
                name: name.field,
                difficulty: difficultyAndSeason.difficulty,
                duration: duration.field,
                season: difficultyAndSeason.season,
                image: url.field
            }))
            setName({field: "", validate: null})
            setUrl({field: "", validate: null})
            setDuration({field: "", validate: null})
            setTimeout( () => {
                navigate("/home")
            },2000)
        }else{
            setValidate(false)
        }
    }

    const handleChange = (e) => {
        e.preventDefault()
        setDifficulyAndSeason({...difficultyAndSeason, [e.target.name]: e.target.value})
    }

    return(
        <div className="formActDiv">
            <NavBar />
            <div className="container">
                <Formulario onSubmit={handleSubmit}>
                    <InputForm 
                        type="text" 
                        state={name} 
                        changeState={setName} 
                        name="name" 
                        placeholder="name..." 
                        label="Name" 
                        error="Type 4 to 40 characters, only letters"
                        regularExpresion={/^[a-zA-ZÀ-ÿ\s]{4,40}$/}
                    />
                    <InputForm 
                        type="text" 
                        state={url}  
                        changeState={setUrl} 
                        name="url" 
                        placeholder="image url..." 
                        label="Image url" 
                        error="Insert an image adress"
                        regularExpresion={/(https?:\/\/.*\.(?:png|jpg))/i}
                        />
                    <InputForm 
                        tpye="number" 
                        state={duration}  
                        changeState={setDuration} 
                        name="duration" 
                        placeholder="minutes..." 
                        label="Duration (min)" 
                        error="Type only numbers from 10 to 999"
                        regularExpresion={/^\d{2,3}$/}
                    />
                    <div>
                        <Label htmlFor="season">Season</Label>
                        <Select name="season" id="season" onChange={e => handleChange(e)}>
                            <option>-- Select Season --</option>
                            <option value="Summer">Summer</option>
                            <option value="Spring">Spring</option>
                            <option value="Winter">Winter</option>
                            <option value="Autumn">Autumn</option>
                        </Select>
                    </div>
                    <DivRange>
                        <Label htmlFor="difficulty">Difficulty ( {difficultyAndSeason.difficulty} )</Label>
                        <Range name="difficulty" id="difficulty" type="range" min={1} max={5} onChange={e => handleChange(e)}/>
                    </DivRange>
                    {validate === false && <ErrorDiv>
                        <p>
                            <ion-icon name="warning-outline"></ion-icon>
                            <b>Error:</b> Please complete the form correctly!
                        </p>
                    </ErrorDiv>}
                    <ButtonCenter>
                        <Button type="submit"><ion-icon name="chevron-up-circle-outline"></ion-icon>Save</Button>
                        {validate === true && <Success>Successfully saved, redirecting to home</Success>}
                    </ButtonCenter>
                    <HomeDiv>
                        <Link to="/home"><ButtonHome><ion-icon name="home-outline"></ion-icon>Home</ButtonHome></Link>
                    </HomeDiv>
                </Formulario>
            </div>
        </div>
    )
}

export default CreatingActivity
