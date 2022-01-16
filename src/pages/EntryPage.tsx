import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
	IonImg,
	IonCard,
	IonCardContent,
	IonCardTitle,
	IonCardHeader,
	IonCardSubtitle,
	IonButtons,
	IonBackButton,
	IonFab,
	IonFabButton,
	IonIcon,
	IonButton
} from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import { images } from '../data';
import { arrowDownCircle, heart } from 'ionicons/icons';

interface RouteParams {
	//TypeScript allows us to set the data type
	id: string;
}

const EntryPage: React.FC = () => {
	const { id } = useParams<RouteParams>();
	const image = images.find((image) => image.id === id);
	const tags = image.tags;
	// const jpg = image.public_jpg;

	// console.log('img', jpg)
	if (!image) {
		throw new Error(`No such image: ${id}`);
	}
	return (
		<IonPage className='entry-page'>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonBackButton />
					</IonButtons>
						<IonTitle className='title'>Anala Art</IonTitle>
				</IonToolbar>
			</IonHeader>
					<IonContent className="ion-padding content">
						<IonCard>
						<IonImg src={image.public_jpg} />
							<IonFab  vertical='top' horizontal='end' >
								<IonFabButton size='small' href={`${image.public_jpg}`} >
									<IonIcon icon={arrowDownCircle} />
								</IonFabButton>
							</IonFab>
						<IonCardHeader>
							<IonCardSubtitle>Artist</IonCardSubtitle>
							<IonCardTitle>{image.artist}</IonCardTitle>
						</IonCardHeader>
					<IonCardContent ><IonIcon icon={heart}/> {image.likes} 
					<br></br>Tags:  	
					{tags.map((tag) => {
					return ` ${tag}, `}
					)}
					</IonCardContent>
					<IonButton expand='block' href={`https://kovan.etherscan.io/tx/${image.trans_hash}`}>Validate NFT</IonButton>
				</IonCard>
			</IonContent>
		</IonPage>
	);
};

export default EntryPage;
