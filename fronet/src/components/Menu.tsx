import { IonIcon, IonLabel, IonTabBar, IonTabButton } from "@ionic/react";
import { clipboard, homeOutline, library, peopleOutline, radio, sadOutline, search } from "ionicons/icons";

const Menulateral:  React.FC = () => {
    
  return(
    <IonTabBar slot="bottom" >
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={homeOutline} />
          <IonLabel>Inicio</IonLabel>
        </IonTabButton>

        <IonTabButton tab="solicitudes" href="/Solicitudes">
          <IonIcon icon={clipboard} />
          <IonLabel>Solicitudes</IonLabel>
        </IonTabButton>
        <IonTabButton tab="inspeciones" href="/inspeccion">
          <IonIcon icon={clipboard} />
          <IonLabel>Inspeciones</IonLabel>
        </IonTabButton>

        <IonTabButton tab="Carros" href="/Carros">
          <IonIcon icon={library} />
          <IonLabel>Carros</IonLabel>
        </IonTabButton>

        <IonTabButton tab="search" href="/usuario">
          <IonIcon icon={peopleOutline} />
          <IonLabel>Usuarios</IonLabel>
        </IonTabButton>
      </IonTabBar>
  );

}

export default Menulateral;