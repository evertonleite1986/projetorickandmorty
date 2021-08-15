import { BrowserRouter, Switch, Route } from "react-router-dom";
import Info from './Info';
import CardList from './CardList';
import About from './About';
import './Styles/main.css';

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Switch>
					<Route path="/" exact={true} component={CardList} />
					<Route path="/Info/:id" component={Info} /> 
					<Route path="/About" component={About} />
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default App;
