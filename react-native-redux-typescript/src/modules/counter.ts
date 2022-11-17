// State types
type CounterState = {
    count: number;
}

// Action types
type CounterAction = | ReturnType<typeof increase>

// State initialized 
const initialState: CounterState = {
    count: 0
}

// Actions
const INCREASE = 'counter/INCREASE' as const;

// Action Creators
export const increase = () => ({ type: INCREASE });

// Export Reducer, side effects
export default function counter(state: CounterState = initialState, action: CounterAction): CounterState {
    switch (action.type) {
        case INCREASE:
            return { count: state.count + 1 };
        default:
            return state
    }
}