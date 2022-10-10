import './App.css';
import Search from "./containers/Search"
import Found from './containers/Found';
import {UseProvider} from './components/context';


function App() {
  return (
    <UseProvider>
      <Search />
      <Found/>
    </UseProvider>
  );
}

export default App;
