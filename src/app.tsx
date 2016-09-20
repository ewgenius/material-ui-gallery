import * as React from 'react'
import {render} from 'react-dom'
import * as configureTapEvent from 'react-tap-event-plugin'

configureTapEvent()

const container = document.querySelector('#root')

render(<div>app</div>, container)
