import { createAction, handleActions } from 'redux-actions';

const INCRMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

export const increse = createAction(INCRMENT);
export const decrese = createAction(DECREMENT);

export const increseAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(increse());
  }, 1000);
};

export const decreseAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(decrese());
  }, 1000);
};

const intialState = 0;

const counter = handleActions(
  {
    [INCRMENT]: state => state + 1,
    [DECREMENT]: state => state - 1,
  },
  intialState
);

export default counter;
