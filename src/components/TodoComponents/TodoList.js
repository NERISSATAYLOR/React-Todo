// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';



const TodoList = (props) => {
    const items = props.items;
    const listItems = items.map(item => {
        return <div className="list" key="item.id">
            <p>{item.task}</p>
            <p>{item.id}</p>
            <p>{item.completed}</p>
        </div>
    })
    return (
        <div>
            {listItems}
        </div>
    )
}
export default TodoList;