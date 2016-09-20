import '../styles/main.scss'
import * as React from 'react'
import {render} from 'react-dom'
import * as configureTapEvent from 'react-tap-event-plugin'

import {MuiThemeProvider, getMuiTheme} from 'material-ui/styles'

const container = document.querySelector('#root')

// init sw

function updateReady(worker) {
  console.log('update is ready')
  /*store.dispatch(showAlert('New version is ready', 'reload', () => {
    worker.postMessage({ action: 'skipWaiting' })
  }))*/
}

function trackInstalling(worker) {
  console.log('installing')
  worker.addEventListener('statechange', () => {
    updateReady(worker)
  })
}

if ('serviceWorker' in navigator) {
  const serviceWorker = navigator['serviceWorker']

  serviceWorker.register('/sw.js')
    .then(reg => {
      if (!serviceWorker.controller) {
        return
      }

      if (reg.waiting) {
        updateReady(reg.waiting)
        return
      }

      if (reg.installing) {
        trackInstalling(reg.installing)
        return
      }

      reg.addEventListener('updatefound', () => {
        trackInstalling(reg.installing)
      })
    })

  let refreshing = false
  serviceWorker.addEventListener('controllerchange', () => {
    if (refreshing) return
    window.location.reload()
    refreshing = true
  })
}

// init material ui

configureTapEvent()

const theme = getMuiTheme({
  appBar: {
    height: 56
  }
})

render(<MuiThemeProvider muiTheme={theme}>
  <div>app</div>
</MuiThemeProvider>, container)
