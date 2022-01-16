import {
  IonGrid, IonRow, IonCol, IonContent, IonImg, 
} from '@ionic/react';
import React from 'react';
import { images } from '../data';
// import { auth } from '../firebase';

const Card: React.FC = () => {
  return (
    <IonContent className='card'>
    <IonGrid>
      <IonRow>
        <IonCol className='col' size='3'></IonCol>
        <IonImg src={images[1].public_jpg} />
        <IonCol></IonCol>
        <IonCol></IonCol>
        <IonCol></IonCol>
      </IonRow>
    </IonGrid>
    </IonContent>
  );
};

export default Card;
