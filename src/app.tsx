import '../styles/main.scss'
import * as React from 'react'
import {render} from 'react-dom'
import * as configureTapEvent from 'react-tap-event-plugin'

import {MuiThemeProvider, getMuiTheme} from 'material-ui/styles'

configureTapEvent()

const container = document.querySelector('#root')

const theme = getMuiTheme({
  appBar: {
    height: 56
  }
})

render(<MuiThemeProvider muiTheme={theme}>
  <div>app</div>
</MuiThemeProvider>, container)
