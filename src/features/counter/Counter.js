import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";


export const Counter = () => {

    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState(0)

    const amount = Number(incrementAmount) || 0 
    return (
        <div>
            <p>{count}</p>
            <button onClick={()=> dispatch(increment())}>+</button>
            <button onClick={()=> dispatch(reset())}>reset</button>
            <button onClick={()=> dispatch(decrement())}>-</button>
            <div>
                <input type="text" value={amount} onChange={(e)=> setIncrementAmount(e.target.value)}/>
                <button onClick={()=> dispatch(incrementByAmount(amount))}>Add Amount</button>
            </div>
        </div>
    )
}
