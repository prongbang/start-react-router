import React, {Component} from 'react'
import {Link} from 'react-router'
import API from '../../api'
import './style.css'
import Const from '../../utils/const'

export default class Member extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: null,
            loading: true
        }
    }

    componentWillMount() {
        API.findUserAll()
        .then((res)=>{
            if (res.status === 200) {
                this.setState({loading: false})
                if (!!res.data) {
                    console.log(res.data)
                    this.setState({users: res.data})
                    sessionStorage.setItem(Const.KEY_USERS, JSON.stringify(this.createIndex(res.data)))
                }
            } else {
                this.setState({loading: false})
            }
        })
        .catch((e)=>{
            this.setState({loading: false})
            console.error(e)
        })
    }

    createIndex(users) {
        let usersData = {
            data:[],
            index:{}
        };
        users.map((v,i)=>{
            usersData.data.push(v)
            usersData.index[v.id] = i
            return usersData
        })
        console.log(usersData)
        return usersData
    }

    render() {

        const {users} = this.state;

        return (
            <div>
                <h1>Member</h1>
                <h3>
                    <Link to={"/"} className="link">Back</Link>
                </h3>
                {
                    !!users ?
                    (
                        <table className="center">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Avatar</th>
                                    <th>Username</th>
                                    <th>Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((v,i)=>(
                                        <tr>
                                            <td>{v.id}</td>
                                            <td><img className="avatar" src={v.avatar_url} alt={v.login}/></td>
                                            <td><Link to={`/member/${v.id}`} className="link">{v.login}</Link></td>
                                            <td>{v.type}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    )
                    :
                    (
                        <div className="center">
                            <h2>Loading...</h2>
                        </div>   
                    )
                }
            </div>
        )
    }

}