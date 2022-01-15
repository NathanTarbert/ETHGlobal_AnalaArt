import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRouterLink, IonButtons, IonBackButton } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';

interface RouteParams { //TypeScript allows us to set the data type
	id: string;
}

const EntryPage: React.FC = () => {
	const { id } = useParams<RouteParams>();

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton />
                        </IonButtons>
					<IonTitle>{id}</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">
				This is the entry page Go to <IonRouterLink routerLink="/my/images">Home</IonRouterLink>
			</IonContent>
		</IonPage>
	);
};

export default EntryPage;
