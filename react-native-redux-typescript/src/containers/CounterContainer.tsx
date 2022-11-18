import React from 'react';
import { useDispatch } from 'react-redux';

import { increase } from '../modules/counter';
import Counter from '../components/Counter';

export default function CounterContainer() {
    const dispatch = useDispatch();
    const onIncrease = () => { dispatch(increase()); }
    
    return <Counter onIncrease={onIncrease} />;
};