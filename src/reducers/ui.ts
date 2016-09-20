import * as R from 'ramda'
import {Action} from 'redux'
import {UI_SHOW_ALERT, UI_HIDE_ALERT} from '../actions/ui.ts'

const L = {
  showAlert: R.lensProp('showAlert'),
  alertMessage: R.lensProp('alertMessage'),
  alertAction: R.lensProp('alertAction'),
  alertHandler: R.lensProp('alertHandler')
}

export interface UiState {
  showAlert: boolean
  alertMessage: string
  alertAction: string
  alertHandler: () => any
}

const initialState = {
  showAlert: false,
  alertMessage: null,
  alertAction: null,
  alertHandler: null
}

export default (state: UiState = initialState, action: Action) => {
  switch (action.type) {
    case UI_SHOW_ALERT:
      return R.set(L.showAlert, true,
        R.set(L.alertMessage, (action as any).message,
          R.set(L.alertAction, (action as any).action,
            R.set(L.alertHandler, (action as any).handler, state))))

    case UI_HIDE_ALERT:
      return R.set(L.showAlert, false,
        R.set(L.alertMessage, null,
          R.set(L.alertAction, null,
            R.set(L.alertHandler, null, state))))
    default:
      return state
  }
}