import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchweather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchweather(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <div className="myDiv">
                <form className="input-group" onSubmit={this.onFormSubmit}>
                    <div className="input-group-addon primary" >
                        <i className="fa fa-search"></i>
                    </div>
                    <input
                        className="form-control primary"
                        onChange={this.onInputChange}
                        placeholder="Get a 5 day forecast in your favourite city"
                        value={this.state.term}
                    />
                    <span className="input-group-btn">
                        <button
                            className="btn btn-primary"
                            type="submit"
                        >
                            Search
                        </button>
                    </span>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchweather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);