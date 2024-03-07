import { IonIcon, IonLabel, IonTabBar, IonTabButton } from "@ionic/react";
import { clipboard, homeOutline, library, peopleOutline, radio, sadOutline, search } from "ionicons/icons";

const Menuser:  React.FC = () => {
    
  return(
    <IonTabBar slot="bottom" >
        <IonTabButton tab="home" href="/home-user">
          <IonIcon icon={homeOutline} />
          <IonLabel>Inicio</IonLabel>
        </IonTabButton>
        <IonTabButton tab="search" href="/infouser">
          <IonIcon icon={peopleOutline} />
          <IonLabel>Usuarios</IonLabel>
        </IonTabButton>
      </IonTabBar>
  );

}

export default Menuser;