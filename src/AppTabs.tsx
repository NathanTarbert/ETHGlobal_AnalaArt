import { IonIcon, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { home as homeIcon, settings as settingsIcon } from 'ionicons/icons';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import EntryPage from './pages/EntryPage';
import { useAuth } from './auth';

// interface Props {
// 	loggedIn: boolean;
// }

const AppTabs: React.FC = () => {
	const { loggedIn } = useAuth();
	if (!loggedIn) {
		return <Redirect to="/login" />;
	}

	return (
		<IonTabs>
			<IonRouterOutlet>
				<Route exact path="/my/images">
					<HomePage />
				</Route>
				<Route exact path="/my/images/:id">
					<EntryPage />
				</Route>

				<Route exact path="/my/settings">
					<SettingsPage />
				</Route>
				
			</IonRouterOutlet>
			<IonTabBar slot="bottom">
				<IonTabButton tab="home" href="/my/images">
					<IonIcon icon={homeIcon} />
				</IonTabButton>
				<IonTabButton tab="settings" href="/my/settings">
					<IonIcon icon={settingsIcon} />
				</IonTabButton>
			</IonTabBar>
		</IonTabs>
	);
};

export default AppTabs;
