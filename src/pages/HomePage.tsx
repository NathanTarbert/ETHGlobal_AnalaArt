import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonImg, IonCard } from '@ionic/react';
  import React from 'react';
  import './Component.css';
  import { images } from '../data';
  
  const HomePage: React.FC = ( ) => {
  
    return (
      <IonPage className='home-page'>
        <IonHeader>
          <IonToolbar>
            <IonTitle className="title">Anala Art</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          {/* <Card /> */}
        <IonList>
         
          {images.map((image) => 

            <IonItem  button key={image.id} routerLink={`/my/images/${image.id}`}>
             <IonCard>
						<IonImg src={image.public_jpg} />
               
          </IonCard>
              {/* <IonLabel color="danger">
                <h2 >Likes {image.likes}</h2>
                <h2>Downloads {image.downloads}</h2>
                <h2>Tags{image.tags}</h2>
              </IonLabel> */}
              
            </IonItem>
          )}
        </IonList>
        </IonContent>
      </IonPage>
    );
  };
  
  export default HomePage;