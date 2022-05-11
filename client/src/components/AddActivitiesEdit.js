import React, { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getAllActivities, getCountry, editCountry } from "../actions"
import { Formulario, Label, NameDiv, ActivitiesDiv, CheckInput, Button, ButtonCenter, ButtonHome, Success, HomeDiv, H1div } from "../styles/FormActStyled";
import "../styles/FormActivity.css"

const AddActivitiesEdit = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const state = useSelector( state => state)
    const { activities } = state

    const [ formulario, setFormulario ] = useState({activities:[]})

    const [ validate , setValidate ] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        setValidate(true)
        dispatch(editCountry({activities: formulario.activities}, params.id))
        setTimeout( () => {
            navigate("/home")
        },2000)
    }

    const handleChecked = e => {
        if(e.target.checked){
            setFormulario({...formulario, activities: [...formulario.activities, e.target.value]})
        }
    }

    useEffect( () => {
        dispatch(getCountry(params.id))
        dispatch(getAllActivities())
    }, [dispatch, params.id])

    return(
        <div className="formActDiv">
            <H1div>
                <h1>Adding activities</h1>
            </H1div>
            <div className="container">
                <Formulario onSubmit={handleSubmit}>
                    <NameDiv>
                        <Label>Activities</Label>
                        <p>¡If this country already has one or more of the activities below, and you don't want to delete them, check them again!</p>
                        <ActivitiesDiv>
                            {activities?.map(a => <label className="label"><CheckInput type="checkbox" name={a.name} value={a.name} onChange={e => handleChecked(e)}/>{a.name}</label>)}
                        </ActivitiesDiv>
                    </NameDiv>
                    <ButtonCenter>
                        <Button type="submit"><ion-icon name="chevron-up-circle-outline"></ion-icon>Save</Button>
                        {validate === true && <Success>Successfully edited, redirecting to home</Success>}
                    </ButtonCenter>
                    <HomeDiv>
                        <Link to="/home"><ButtonHome><ion-icon name="home-outline"></ion-icon>Home</ButtonHome></Link>
                    </HomeDiv>
                </Formulario>
            </div>
        </div>
    )
}

export default AddActivitiesEdit