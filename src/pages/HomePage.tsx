import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem } from '@ionic/react';
  import { useState, useEffect } from 'react';
  import React from 'react';
  import { firestore } from '../firebase';
  
  const Home: React.FC = () => {
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
      })
    }, [])
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Araya Art</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
            {images.map((image) =>
              <IonItem key={image.id}>{image.id}</IonItem>
            )}
          </IonList>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Home;