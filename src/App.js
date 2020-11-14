import React , {Component} from 'react';
import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import HomePage from "./Pages/HomePage/HomePage";


class App extends Component{
  constructor(props) {
    super(props);

  }

  render() {
    return (
        <div className="App">
            <HomePage/>

        </div>
    );
  }

}

export default App;
