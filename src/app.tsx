import '../styles/main.scss'
import * as React from 'react'
import {render} from 'react-dom'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import * as configureTapEvent from 'react-tap-event-plugin'
import worker from './services/worker.ts'

import {showAlert} from './actions/ui.ts'
import ui from './reducers/ui.ts'
import {MuiThemeProvider, getMuiTheme} from 'material-ui/styles'

import Appshell from './components/AppShell/AppShell.tsx'

const container = document.querySelector('#root')

// init store
const store = createStore(combineReducers({
  ui
}))

// init sw

function updateReady(worker) {
  console.log('update is ready')
  store.dispatch(showAlert('New version is ready', 'reload', () => {
    worker.postMessage({ action: 'skipWaiting' })
  }))
}

function trackInstalling(worker) {
  console.log('installing')
  worker.addEventListener('statechange', () => {
    updateReady(worker)
  })
}

worker(updateReady, trackInstalling)

// init material ui

configureTapEvent()

const theme = getMuiTheme({
  appBar: {
    height: 56
  }
})

render(<Provider store={store}>
  <MuiThemeProvider muiTheme={theme}>
    <Appshell />
  </MuiThemeProvider>
</Provider>, container)
