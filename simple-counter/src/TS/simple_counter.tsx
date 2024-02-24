import { useState } from "react"

const simple_counter = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [count, setCount] = useState(0);

  return (
    <div className="d-flex flex-column gap-2 justify-content-center align-items-center">
        <h1 className="text-center alert">simple counter</h1>
        <div className="gap-2 d-flex">
            <button onClick={() => setCount(count + 1)} className="w-50 btn btn-primary">+</button>
            <button onClick={() => setCount(count - 1)} className="w-50 btn btn-danger">-</button>
        </div>
        <h3>{count}</h3>
    </div>
  )
}

export default simple_counter