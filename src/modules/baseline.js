export const BASELINE_ENABLE = 'BASELINE_ENABLE';
export const BASELINE_DISABLE = 'BASELINE_DISABLE';

export function enableBaseline (value = true) {
  return {
    type    : BASELINE_ENABLE,
    payload : value
  };
}

export function disableBaseline (value = false) {
  return {
    type    : BASELINE_DISABLE,
    payload : value
  };
}

export const actions = {
  enableBaseline,
  disableBaseline
};

const ACTION_HANDLERS = {
  [BASELINE_ENABLE]  : (state, action) => action.payload,
  [BASELINE_DISABLE] : (state, action) => action.payload
};

const initialState = false;
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
