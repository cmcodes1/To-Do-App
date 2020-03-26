import React from "react"

function TodoItem(props) {
    const completedStyle = {
        // fontStyle: "italic",
        fontWeight: "300",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    
    return (

        <div className="card">         
            <div className="checkbox-container circular-container">
                <label className="checkbox-label">
                    <input type="checkbox" checked={props.item.completed} onChange={() => props.handleChange(props.item.id)} />
                    <span className="checkbox-custom circular"></span>
                    <p className="input-title" style={props.item.completed ? completedStyle: null}>{props.item.text}</p>
                </label>
            </div>
        </div>
    )
}

export default TodoItem