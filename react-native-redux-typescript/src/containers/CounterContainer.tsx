import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../App';
import { increase } from '../modules/counter';
import Counter from '../components/Counter';

export default function CounterContainer() {
    const dispatch = useDispatch();
    const onIncrease = () => { dispatch(increase()); }
    
    return <Counter onIncrease={onIncrease} />;
};