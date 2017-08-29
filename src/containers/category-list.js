import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCategories } from '../actions/index';
import { getJoke } from '../actions/index';


class CategoryList extends React.Component {    
    renderList() {        
        return this.props.categories.map((cat) => {
            return (
                <li 
                    onClick={() => this.props.getJoke(cat)}
                    key={cat} 
                    className="list-group-item">
                    {cat}
                </li>
            );
        });
    }
    componentDidMount() {
        this.props.fetchCategories();
    }

    render() {        
        return(
            <div className="col-md-4 col-sm-4">                                 
                <ul className="list-group">
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return({categories: state.categories});
}

function mapDispatchToProps(dispatch) {
    return(bindActionCreators({fetchCategories, getJoke}, dispatch));
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);