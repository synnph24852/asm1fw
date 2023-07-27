import { useSelector, useDispatch } from "react-redux";
import { decrement, increase, increment} from "@slices/counter";
import { useAppSelector } from "../../app/hook";

const Counter = () => {
    const dispatch = useDispatch();
    const {count} = useAppSelector((state: any) => state.counter.count);
    return (
        <div>
            Value: {count}
            <button onClick={() => dispatch({ type: "counter/increment" })}>Click</button>
            <button onClick={() => dispatch({ type: "counter/decrement" })}>Click 2</button>
            <button onClick={() => dispatch({ type: "counter/increase", payload: 10 })}>
                Click 3
            </button>
        </div>
    );
};

export default Counter;