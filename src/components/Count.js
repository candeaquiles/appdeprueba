import { useState } from "react";

const Count = () => {

    const [count, setCount] = useState(0);

    const sumar = () => {
        setCount(count + 1);

    }

    const restar = () => {
        setCount(count - 1);

    }
    return (
        <div>
            <p>El contador va : {count} </p>
            <button onClick={sumar} className="material-icons">add</button>
            <button onClick={restar} className="material-icons">remove</button>
        </div>
    )
}

export default Count
