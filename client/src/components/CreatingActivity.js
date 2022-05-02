import React, { useState } from "react"
import { Link, useNavigate} from "react-router-dom"
import { postActivity } from "../actions/index"
import { useDispatch } from "react-redux"

const CreatingActivity = () => {
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [ formularioAct, setFormularioAct ] = useState({
        name:"",
        difficulty: "",
        duration: 0,
        season: "",
        url: ""
    })

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(postActivity(formularioAct))
        alert("Activity successfully created!")
        setFormularioAct({name:"", difficulty: "", duration: 0, season: "", url: ""})
        navigate("/home")
    }

    const handleChange = e => {
        setFormularioAct({...formularioAct, [e.target.name]: e.target.value})
    }

    return(
        <div>
            <Link to="/home"><button>Back to Home</button></Link>
            <h1>Create an Activity</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <label>Name: </label>
                <input placeholder="name..." type="text" name="name" value={formularioAct.name} onChange={e => handleChange(e)}/>
                <br />
                <br />
                <label>Image url: </label>
                <input placeholder="image url..." type="url" name="url" value={formularioAct.url} onChange={e => handleChange(e)}/>
                <br />
                <br />
                <label>Difficulty: </label>
                <input type="range" name="difficulty" value={formularioAct.difficulty} min="1" max="5" onChange={e => handleChange(e)}/> {formularioAct.difficulty}
                <br />
                <br />
                <label>Diration(minutes): </label>
                <input placeholder="minutes..." type="number" name="duration" value={formularioAct.duration} onChange={e => handleChange(e)}/>
                <br />
                <br />
                <label>Season: </label>
                <select name="season" onChange={e => handleChange(e)}>
                    <option>-- Select Season --</option>
                    <option value="Summer">Summer</option>
                    <option value="Spring">Spring</option>
                    <option value="Winter">Winter</option>
                    <option value="Autumn">Autumn</option>
                </select>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default CreatingActivity