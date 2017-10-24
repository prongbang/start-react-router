import React, {Component} from 'react'
import {Link} from 'react-router'

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <li className="link">
                    <Link to={"/member"}>Member List</Link>
                </li>
            </div>
        )
    }

}