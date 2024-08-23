export function getFinalState(baseState, queue) {
  let computedState = baseState;

  for (const stateUpdate of queue) {
    if (typeof stateUpdate === "function") {
      computedState = stateUpdate(computedState);
    } else {
      computedState = stateUpdate;
    }
  }

  return computedState;
}
