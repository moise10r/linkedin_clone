import { Route, Switch } from "react-router-dom";
import Home from "./components/pages/home";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/" exact component={Home} />
			</Switch>
		</div>
	);
}

export default App;
