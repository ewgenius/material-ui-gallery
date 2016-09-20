import * as React from 'react'
import {Component, Props} from 'react'

import Flex from '../Layout/Flex.tsx'

export interface AppShellProps extends Props<AppShell> {

}

export interface AppShellState {
  
}

export default class AppShell extends Component<AppShellProps, AppShellState> {
  render() {
    return <Flex></Flex>
  }
}