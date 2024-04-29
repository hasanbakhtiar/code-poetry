import React from 'react'
import ReactDOM from 'react-dom/client'
import CompoOne from './components/CompoOne'
import CompoTwo from './components/CompoTwo'
import HoverCompo from './example/HoverCompo'
import ClickCompo from './example/ClickCompo'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{ margin: "100px" }}>
      <HoverCompo title="Doing hover" />
      <ClickCompo title="Doing click"/>
    </div>
  </React.StrictMode>,
)
