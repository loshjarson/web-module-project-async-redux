import { connect } from "react-redux"
import { updateInterest, getSimilarInterests } from "../actions"

const SearchForm = (props) => {
    return (<div>
        <input type="text" value={props.interest} onChange={(e) => props.updateInterest(e.target.value)} />
        <button onClick={() => props.getSimilarInterests(props.interest)}>Submit</button>
    </div>)
}

const mapStateToProps = state => {
    return {
        interest: state.form.interest
    }
}

export default connect(mapStateToProps, { updateInterest, getSimilarInterests })(SearchForm);