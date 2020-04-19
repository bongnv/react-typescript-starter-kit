export const SOME_APP_ACTION = "SOME_APP_ACTION";

export type AppState = Readonly<{
}>

interface AppAction {
    type: typeof SOME_APP_ACTION;
}

export default function app(state: AppState, _action: AppAction): AppState {
  return {
    ...state,
  };
}
