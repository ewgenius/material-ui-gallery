import * as React from 'react'
import {Component, Props} from 'react'

import Flex from '../Layout/Flex.tsx'
import AppBar from 'material-ui/AppBar'

export interface AppShellProps extends Props<AppShell> {

}

export interface AppShellState {
  
}

export default class AppShell extends Component<AppShellProps, AppShellState> {
  render() {
    return <Flex>
      <AppBar title='mui gallery' style={{
        fontSize: 20,
        textTransform: 'uppercase'
      }}/>
    </Flex>
  }
}