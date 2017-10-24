import React, {Component} from 'react'
import {Link} from 'react-router'
import Const from '../../utils/const'

export default class MemberEdit extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: null,
            typeUser: ""
        }
    }

    componentWillMount() {
        const {id} = this.props.params;
        if (!!id) {
            let user = this.getUserById(id)
            this.setState({user: user})
            this.updateForm(user)
        }
    }

    getUserById(id) {
        let users = JSON.parse(sessionStorage.getItem(Const.KEY_USERS))
        return !!users ? users.data[users.index[id]] : null
    }

    updateForm(user) {
        this.setState({typeUser: user.type})
    }

    handleUserType(event) {
        this.setState({typeUser: event.target.value})
    }

    updateUser() {
        
    }

    render() {

        const {user, typeUser} = this.state;

        return (
            <div className="App">
                <h1>Member/{user.id}/Edit</h1>
                <h3>
                    <Link to={"/member"} className="link">Back</Link>
                </h3>
                {
                    !!user ?
                    (
                        <div>
                            <img src={user.avatar_url} alt={user.login}/>
                            <h3>{user.login}</h3>
                            <table className="center">
                                <tbody>
                                    <tr>
                                        <td>Type</td>
                                        <td>
                                        <input 
                                            className="input"
                                            type="text" 
                                            placeholder="Enter type..."
                                            onChange={(event)=> this.handleUserType(event)} 
                                            value={typeUser} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                            <button className="btn" onClick={this.updateUser}>Update</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                    :
                    (
                        <div className="center">
                            <h1>Loading...</h1>
                        </div> 
                    )
                }
            </div>
        )
    }

}