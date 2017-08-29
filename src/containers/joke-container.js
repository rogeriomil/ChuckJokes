import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class JokeContainer extends React.Component {    
    render() {    
        return(            
            <div className="col-md-8 col-sm-8">
                <div className="card text-center">
                    <div className="card-body">
                        <h4 className="card-title">Joke's category: {this.props.joke.category} </h4>                        
                        <p className="card-text">{this.props.joke.value}</p>                                                
                    </div>
                </div>
                
                <p></p>
            </div>
            
        );
    }
}

function mapStateToProps(state) {
    return({joke: state.joke });
}

export default connect(mapStateToProps)(JokeContainer);