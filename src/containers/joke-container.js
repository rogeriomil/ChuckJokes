import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getJoke } from '../actions/index';

class JokeContainer extends React.Component {
    renderJoke() {
        if(!this.props.joke) {
            return 'Select a category first'
        }

        return this.props.joke.value;
    }
    render() {    
        return(            
            <div className="col-md-8 col-sm-8">
                <div className="card text-center">
                    <div className="card-body">
                        <h4 className="card-title">Joke's category: {this.props.joke.category} </h4>                        
                        <p className="card-text">{this.renderJoke()}</p>                                                
                    </div>
                </div>
                
                <p></p>
            </div>
            
        );
    }
}

function mapStateToProps(state) {
    return({joke: state.joke })
}

function mapDispatchToProps(dispatch) {
    return(bindActionCreators({getJoke}, dispatch));
}

export default connect(mapStateToProps, mapDispatchToProps)(JokeContainer);