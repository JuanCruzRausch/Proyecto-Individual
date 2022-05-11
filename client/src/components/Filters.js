import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllContinents, getAllActivities, filter, setFilters, deleteFilters, resetPage} from "../actions/index"
import { FormFil, ButtonFil, SelectFil, LabelFil, DivSel } from "../styles/Filters";

const Filters = () => {
    const dispatch = useDispatch()
    
    const state = useSelector(state => state)
    const { continents, activities, filters } = state

    let [ filtersParam, setFiltersParam ] = useState({order: "", continent: "", activity: ""})

    useEffect(() => {
        dispatch(filter(filters))
        dispatch(getAllContinents())
        dispatch(getAllActivities())
        return () => {dispatch(deleteFilters())}
    },[dispatch, filters])

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setFilters(filtersParam))
        dispatch(resetPage())
    }
    
    const handleChange = e => {
        setFiltersParam({...filtersParam, [e.target.name]: e.target.value})
    }

    return(
        
        <FormFil onSubmit={e => handleSubmit(e)}>
                    <DivSel>
                        <LabelFil htmlFor="order">Order by alphabet</LabelFil>
                        <SelectFil name="order" id="order" onChange={e => handleChange(e)}>
                            <option value="">-- Select Order --</option>
                            <option value="asc-a">Ascending</option>
                            <option value="desc-a">Descending</option>
                        </SelectFil>
                    </DivSel>
                    <DivSel>
                        <LabelFil htmlFor="order2">Order by population</LabelFil>
                        <SelectFil name="order" id="order2" onChange={e => handleChange(e)}>
                            <option value="">-- Select Order --</option>
                            <option value="asc-p">Ascending</option>
                            <option value="desc-p">Descending</option>
                        </SelectFil>
                    </DivSel>
                    <DivSel>
                        <LabelFil htmlFor="continent">Continent</LabelFil>
                        <SelectFil name="continent" id="continent" onChange={e => handleChange(e)}>
                            <option value="">-- Select continent --</option>
                            {continents?.map(c => <option key={c} value={c}>{c}</option>)}
                        </SelectFil>
                    </DivSel>
                    <DivSel>
                        <LabelFil htmlFor="activity">Activity</LabelFil>
                        <SelectFil name="activity" id="activity" onChange={e => handleChange(e)}>
                            <option value="">-- Select Activity --</option>
                            {activities.length > 0 ? activities?.map(a => <option key={a.name} value={a.name}>{a.name}</option>) : <option>No activities found</option>}
                        </SelectFil>
                    </DivSel> 
                    <ButtonFil type="submit">Apply</ButtonFil>
                </FormFil>
        
    )
}
export default Filters