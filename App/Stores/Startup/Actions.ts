import { Dispatch } from 'redux';

export enum StartupTypes {
  STARTUP = 'STARTUP',
  STARTUP_LOADING = 'STARTUP_LOADING',
  STARTUP_SUCCESS = 'STARTUP_SUCCESS',
  STARTUP_FAILURE = 'STARTUP_FAILURE',
}

interface StartupAction {
  type: typeof StartupTypes.STARTUP;
}

const startup = (): StartupAction => ({
  type: StartupTypes.STARTUP,
});

// const startup = () => {
//   return (dispatch: Dispatch<StartupAction>) => {
//     dispatch(startUpAction());
//   };
// };

export { startup }


