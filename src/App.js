import React from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import SimilarInterests from './components/SimilarInterests';
import { connect } from 'react-redux';

const App = props => {
  return (
    <div className="App">
        <SearchForm/>
        {props.hasSearched ? <div>Please type in the name of a band or movie</div> : <SimilarInterests/>}
    </div>
  );
}

const mapStateToProps = state => {
  return {
      hasSearched: state.results.hasSearched,
  }
}

export default connect(mapStateToProps)(App);


