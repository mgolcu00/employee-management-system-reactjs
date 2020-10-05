import React, { Component } from 'react';
import PropTypes from 'prop-types'
import UserConsumer from '../context'
import axios from 'axios';
import {Link} from 'react-router-dom';

class User extends Component {

    state = {
        isVisible: false
    }
    // constructor(props){
    //     super(props);

    //     this.onClickEvent = this.onClickEvent.bind(this);
    // }
    onClickEvent = (number, e) => {
        if (this.state.isVisible)
            this.setState({ isVisible: false });
        else
            this.setState({ isVisible: true });
    }
    onDeleteUser = async (dispatch,e) => {
        const {id}=this.props;
        //Delete Request
         await axios.delete(`http://localhost:3004/users/${id}`);

        dispatch({type:"DELETE_USER",payload:id});
    }
    render() {
        //Destructing
        const { id,name, department, salary } = this.props;
        const isVisible = this.state.isVisible;
        return (
            <UserConsumer>
                {
                    value => {
                        const { dispatch } = value;
                        return (
                            <div className="col-md-8 mb-4" >
                                <div className="card" style={isVisible ? {backgroundColor:"#1874cd",color:"white"}:null}>
                                    <div className="card-header d-flex justify-content-between" >
                                        <h4 className="d-inline" onClick={this.onClickEvent.bind(this)} >{name}</h4>
                                        <i className="far fa-trash-alt" style={{ cursor: "pointer" }} onClick={this.onDeleteUser.bind(this,dispatch)}></i>
                                    </div>
                                    {
                                        isVisible ? <div className="card-body">
                                            <p className="card-text">Maaş : {salary}</p>
                                            <p className="card-text">Departman : {department}</p>
                                            <Link to={`edit/${id}`} className="btn btn-dark btn-block">Update User</Link>
                                        </div> : null
                                    }
                                </div>
                            </div>
                        )
                    }
                }
            </UserConsumer>)

    }
}
User.propTypes = {
    name: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    id:PropTypes.string.isRequired
}
User.defaultProps = {
    name: "Bilgi yok",
    department: "Bilgi yok",
    salary: "Bilgi yok",
    id:"null"
}
export default User;
