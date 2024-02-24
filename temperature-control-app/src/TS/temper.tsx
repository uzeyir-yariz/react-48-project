import { useState } from "react";

const temper = () => {

  const [count, setCount] = useState(10);

  return (
    <div className="gap-4 d-flex flex-column justify-content-center align-items-center">
        <h1 className="alert alert-info w-100 text-center">temper</h1>
        <div className="rounded h-25 w-25 bg-dark display-4 text-light d-flex justify-content-center align-items-center">
            {count}
        </div>
        <div className="d-flex gap-4">
            <button onClick={() => count < 25 && setCount(count + 1)} className="w-50 btn btn-primary">+</button>
            <button onClick={() => count > 0 && setCount(count - 1)} className="w-50 btn btn-danger">-</button>
        </div>
    </div>
  )
}

export default temper
