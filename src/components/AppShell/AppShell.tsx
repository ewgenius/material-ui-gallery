import * as React from 'react'
import {Component, Props} from 'react'
import {connect, Dispatch} from 'react-redux'

import Flex from '../Layout/Flex.tsx'
import AppBar from 'material-ui/AppBar'
import Snackbar from 'material-ui/Snackbar'

import {hideAlert} from '../../actions/ui.ts'

export interface AppShellProps extends Props<AppShell> {
  showAlert?: boolean
  alertMessage?: string
  alertAction?: string
  alertHandler?: () => any
  dispatch?: Dispatch<any>
}

export interface AppShellState {

}

function mapProps(state): AppShellProps {
  return {
    showAlert: state.ui.showAlert,
    alertMessage: state.ui.alertMessage,
    alertAction: state.ui.alertAction,
    alertHandler: state.ui.alertHandler
  }
}

export class AppShell extends Component<AppShellProps, AppShellState> {
  hideNotification() {

  }

  render() {
    const {showAlert, alertMessage, alertAction, alertHandler} = this.props

    return <Flex>
      <AppBar title='mui gallery' style={{
        fontSize: 20,
        textTransform: 'uppercase'
      }}/>

      { alertMessage && alertAction ?
        <Snackbar
          open={showAlert}
          message={alertMessage}
          autoHideDuration={4000}
          action={alertAction}
          onActionTouchTap={() => alertHandler() }
          onRequestClose={() => this.hideNotification() }/>
        :
        null
      }
    </Flex>
  }
}

export default connect(mapProps)(AppShell)