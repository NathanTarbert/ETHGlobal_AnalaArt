import { IonApp } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthContext } from './auth';
import AppTabs from './AppTabs';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
	const [ loggedIn, setLoggedIn ] = useState(true);
	console.log(`rendering App with loggedIn=${loggedIn}`); // this will let us know for testing purposes if the state changes

	return (
		<IonApp>
			<AuthContext.Provider value={{ loggedIn }}>
				<IonReactRouter>
					<Switch>
						<Route exact path="/login">
							<LoginPage onLogin={() => setLoggedIn(true)} />
						</Route>
						<Route path="/my">
							{/* <AppTabs loggedIn={loggedIn} /> */}
							<AppTabs />
						</Route>
						<Redirect exact path="/" to="/my/images" />
						<Route>
							<NotFoundPage />
						</Route>
					</Switch>
				</IonReactRouter>
			</AuthContext.Provider>
		</IonApp>
	);
};

export default App;
