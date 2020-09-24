import {COUNTER_CHANGE} from '../constants/index';

export function changeCount(count) {
  return {
    type: COUNTER_CHANGE,
    payload: count,
  };
}
