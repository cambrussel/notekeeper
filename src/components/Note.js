import React, { Component } from 'react'
import {Card, Collapsible} from 'react-materialize'
import '../css/Note.css'

class Note extends Component{
 render(){
     return (
        <Card className="Note">
            <Collapsible>
            <li>
                <h1 className="collapsible-header card-title">{this.props.title}</h1>
                <p className="collapsible-body">{this.props.content}</p>
            </li>
            </Collapsible>
        </Card>
    )
 }
}

export default Note