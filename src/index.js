import ReactDOM from 'react-dom'
import App from './components/App'
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "primeflex/primeflex.css";
import "./components/Accordion.css"

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
