import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { decreseAsync, increseAsync } from '../modules/counter';

function CounterContainer() {
  const number = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const onIncrese = () => dispatch(increseAsync());
  const onDecrese = () => dispatch(decreseAsync());

  return (
    <Counter number={number} onIncrese={onIncrese} onDecrese={onDecrese} />
  );
}

export default CounterContainer;
