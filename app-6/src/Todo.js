import React from "react";

export default function Todo(props) {
    const { todos } = props;
    let listToDisplay = todos.map((el, i) => {
        return <h3 key={i}>{el}</h3>
    })
    return (
        <div>
            {listToDisplay}
        </div>
    )
}





















// import React from "react";

// export default function Todo(props) {
//     return (
//         <p> { props.task } </p>
//     )
// }