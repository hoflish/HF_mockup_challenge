export const loadState = () => {
  try {
    const serializeState = localStorage.getItem('state');
    return serializeState === null ? undefined : JSON.parse(serializeState);
  } catch (err) {
    return undefined
  }
};

export const saveState = state => {
  try {
    const serializeState = JSON.stringify(state);
    localStorage.setItem('state', serializeState);
  } catch(err) {
    console.log(err)
  }
};
