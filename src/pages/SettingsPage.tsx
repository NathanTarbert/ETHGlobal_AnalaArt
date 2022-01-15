import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { Link } from 'react-router-dom';
// import { auth } from '../firebase';

const SettingsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton color="medium" expand="block"
         >
          Log Out
        </IonButton>
        <Link to='/my/images'>Back to Home</Link>
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;
