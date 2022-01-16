import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonImg, IonThumbnail } from '@ionic/react';
  import { useState, useEffect } from 'react';
  import React from 'react';
  import './Card.css';
  import { firestore } from '../firebase';
  import Card from './Card';
  
  const HomePage: React.FC = ( ) => {
    //import firestore entries into useState
    const [ images, setImages ] = useState([]);
  
    useEffect(() => {
      const imagesRef = firestore.collection('images');
      imagesRef.get().then((snapshot) => {
        const images = snapshot.docs.map((image) => ({
          id: image.id,
          ...image.data(),
        }));
        setImages(images);
        console.log("images", images);
      })
    }, [])
    return (
      <IonPage >
        <IonHeader>
          <IonToolbar>
            <IonTitle>Anala Art</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <Card />
        <IonList>
         
          {images.map((image) => 
            <IonItem  button key={image.id} routerLink={`/my/images/${image.id}`}>
              <IonThumbnail slot="end">
                <IonImg className='image' src={image.public_jpg} />
              </IonThumbnail>
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