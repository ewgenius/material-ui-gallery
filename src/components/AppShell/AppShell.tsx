import * as React from 'react'
import {Component, Props} from 'react'
import {connect, Dispatch} from 'react-redux'

import Flex from '../Layout/Flex.tsx'
import AppBar from 'material-ui/AppBar'
import Snackbar from 'material-ui/Snackbar'
import Paper from 'material-ui/Paper'
import FontIcon from 'material-ui/FontIcon'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import {hideAlert} from '../../actions/ui.ts'

const homeIcon = <FontIcon className="material-icons">home</FontIcon>
const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>


export interface AppShellProps extends Props<AppShell> {
  showAlert?: boolean
  alertMessage?: string
  alertAction?: string
  alertHandler?: () => any
  dispatch?: Dispatch<any>
}

export interface AppShellState {
  selectedState?: number
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
  constructor() {
    super()

    this.state = {
      selectedState: 0
    }
  }

  hideNotification() {
    this.props.dispatch(hideAlert())
  }

  render() {
    const {showAlert, alertMessage, alertAction, alertHandler} = this.props

    return <Flex>
      <AppBar title='mui gallery' style={{
        fontSize: 20,
        textTransform: 'uppercase'
      }}/>

      <Flex>content</Flex>

      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedState}>
          <BottomNavigationItem
            label="Recents"
            icon={homeIcon}
            onTouchTap={() => this.setState({ selectedState: 0 }) }
            />
          <BottomNavigationItem
            label="Favorites"
            icon={recentsIcon}
            onTouchTap={() => this.setState({ selectedState: 1 }) }
            />
          <BottomNavigationItem
            label="Favorites"
            icon={recentsIcon}
            onTouchTap={() => this.setState({ selectedState: 2 }) }
            />
          <BottomNavigationItem
            label="Favorites"
            icon={recentsIcon}
            onTouchTap={() => this.setState({ selectedState: 3 }) }
            />
          <BottomNavigationItem
            label="Nearby"
            icon={favoritesIcon}
            onTouchTap={() => this.setState({ selectedState: 4 }) }
            />
        </BottomNavigation>
      </Paper>

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