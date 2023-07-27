import { createContext, useReducer,useState } from "react";

export const CounterContext = createContext({} as any);

const initiaState ={
    count:10,
};

const couterReducer = (state:any, action:any) =>{
    console.log("action", action);
    switch (action.type) {
        case "INCREMENT":
            return { count:state.count +1};
        case "DECREMENT":
            return { count: state.count -1};
        case "INCREASE":
            return { count: state.count + action.payload};
        default:
            return state;
    }
    
};

const CounterProvider = ({children}: any) =>{
    const [state, dispath] = useReducer(couterReducer,initiaState);
    return (
        <CounterContext.Provider value={{state, dispath}}>{children}</CounterContext.Provider>
    );
};

export default CounterProvider;