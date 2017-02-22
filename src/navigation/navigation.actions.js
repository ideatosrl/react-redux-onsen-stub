const NAMESPACE = 'UI/NAVIGATION';

export const ACTION_TYPES = {
  RESET_PAGE: `${NAMESPACE}/RESET_PAGE`,
  RESET_PAGE_STACK: `${NAMESPACE}/RESET_PAGE_STACK`,
  PUSH_PAGE: `${NAMESPACE}/PUSH_PAGE`,
  POP_PAGE: `${NAMESPACE}/POP_PAGE`
};

export default {
  resetPage: (route, options = {}) => ({type: ACTION_TYPES.RESET_PAGE, payload: {route, options}}),
  resetPageStack: (route, options = {}) => ({type: ACTION_TYPES.RESET_PAGE_STACK, payload: {route, options}}),
  pushPage: (route, options = {}) => ({type: ACTION_TYPES.PUSH_PAGE, payload: {route, options}}),
  popPage: (options = {}) => ({type: ACTION_TYPES.POP_PAGE, payload: {options}})
};
