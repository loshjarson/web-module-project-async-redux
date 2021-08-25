import { connect } from "react-redux"

const SimilarInterests = (props) => {
    return(<div>
        {props.hasResults ? (<div>
            {props.similarInterests.map(name => {
                let alteredName = name.split(' ').join('+');
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
    return {
        hasResults: state.results.hasResults,
        similarInterests: state.results,
        interest: state.form.interest
    }
}

export default connect(mapStateToProps, {})(WeatherInfo);