export const ACTION_TYPES = {
  DUMMY_ON: 'DUMMY_ON',
  DUMMY_OFF: 'DUMMY_OFF'
};

export const DUMMY_ON = () => ({
  type: ACTION_TYPES.DUMMY_ON
});

export const DUMMY_OFF = () => ({
  type: ACTION_TYPES.DUMMY_OFF
});
