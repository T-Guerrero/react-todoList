import React from 'react'
import './todoitem.css'

const ToDoItem = (props) => {
    const styles = {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start"
    }

    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return (
        <div className="todo-item" style={styles}>
            <input className="field" type="checkbox" onChange={ () => props.handleChange(props.id)} checked={props.completed} />
            <p style={props.completed? completedStyle: null}>{props.text}</p>
        </div>
    )
}

export default ToDoItem;