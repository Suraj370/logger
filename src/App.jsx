
import './App.css'
import { withLogging } from './component/Logger'

const Button = () => {
  return (
    <>
    <button>This is button</button>
    </>
  )
}
const Menu = () => {
  return (
    <>
    <div>This is menu</div>
    </>
  )
}


const LogingButton =  withLogging(Button)
const LogingMenu = withLogging(Menu)
 
function App() {

  return (
    <>
      <div>
      <LogingButton/>
      <LogingMenu/>
      </div>
    </>
  )
}

export default App
