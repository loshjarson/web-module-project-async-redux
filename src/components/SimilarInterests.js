import { connect } from "react-redux"

const SimilarInterests = (props) => {
    console.log("running")
    return(<div>
        {props.hasResults ? (<div>
            {props.similarInterests.map(object => {
                let name = object.Name;
                let alteredName = name.split(' ').join('+');
                console.log(alteredName)
                return (
                <div className="similar-interest-card">
                    <a href={`http://www.google.com/search?q=${alteredName}`}>{name}</a>
                </div>
                )
            })}
        </div>) : (<div>There are no results for this {props.interest}</div>)}
    </div>)
}

const mapStateToProps = state => {
    console.log(state.results.similarInterests)
    return {
        hasResults: state.results.hasResults,
        similarInterests: state.results.similarInterests,
        interest: state.form.interest
    }
}

export default connect(mapStateToProps)(SimilarInterests);