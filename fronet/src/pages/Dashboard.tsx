import {  IonPage, IonContent, IonGrid, IonCol, IonIcon, IonFabButton, IonFab, IonFabList, IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonicSlides, IonButtons, IonMenuButton, IonToolbar } from "@ionic/react"
import { add,  body,  bus,  calendar,  car,  clipboard,  fileTrayFullOutline, storefrontOutline } from "ionicons/icons"
import './pages.css'
import { Link, useHistory } from "react-router-dom";
import Menu from "../components/Menu";
import Header from "../components/header";
import { useUser } from "../context/UserContext";
import { useEffect, useState } from "react";
import clienteAxios from "./config/axios";
import Menulateral from "../components/Menulougut";



const  Dashboard: React.FC = () => {
  const { userData, carroData, asignacion } = useUser();
  const [progreso, setProgreso] = useState(0);
  const [asigna, setAsignacion] = useState(0);
  const [users, setUsers] = useState(0);
  const [soli, setSolicitud] = useState(0);


  useEffect(() => {
    if (carroData === null) {
      setProgreso(0);
    } else {
      setProgreso(carroData.length);
    }
   
    if (asignacion === null) {
      setAsignacion(0);
    } else {
      setAsignacion(asignacion.length);
    }
    if (userData === null) {
      setUsers(0);
    } else {
      setUsers(userData.length);
    }

    const solictud = async () => {
      const url = 'auth/soli';
      const token = localStorage.getItem('token');
     
      const Config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

    const respuesta = await  clienteAxios.get(url,Config)
    setSolicitud(respuesta.data.length)
    }
    solictud();
    
  }, [carroData]);




    return(
        <IonPage  >
   
        <IonToolbar>
      <IonButtons slot="end">
              <IonMenuButton />
            </IonButtons>
            </IonToolbar>
        <IonContent>
           <IonGrid>
            <IonRow>
              <IonCol size="12">
              <IonCard>
        <IonCardHeader>
        <IonCardTitle>Hola! Administrador</IonCardTitle>
        <IonCardSubtitle>Bienvenido </IonCardSubtitle>
        </IonCardHeader>
       </IonCard>
              </IonCol>
              <IonCol size="12">
              <IonCard>
        <IonCardHeader>
        <IonCardTitle>Cantidad de usuarios</IonCardTitle>
        <IonCardSubtitle className="numer">{users} </IonCardSubtitle>
        <IonIcon className="icon" icon={body} />
        </IonCardHeader>
       </IonCard>
              </IonCol>
              <IonCol size="12">
              <IonCard>
        <IonCardHeader>
        <IonCardTitle>Cantidad de Carros</IonCardTitle>
        <IonCardSubtitle className="numer">{progreso} </IonCardSubtitle>
        <IonIcon className="icon" icon={bus} />
        </IonCardHeader>
       </IonCard>
              </IonCol>
              <IonCol size="12">
              <IonCard>
        <IonCardHeader>
        <IonCardTitle>Cantidad de asignaciones</IonCardTitle>
        <IonCardSubtitle className="numer">{asigna} </IonCardSubtitle>
        <IonIcon className="icon" icon={calendar} />
        </IonCardHeader>
       </IonCard>
              </IonCol>
              <IonCol size="12">
              <IonCard>
        <IonCardHeader>
        <IonCardTitle>Cantidad de solicitudes</IonCardTitle>
        <IonCardSubtitle className="numer">{soli} </IonCardSubtitle>
        <IonIcon className="icon" icon={clipboard} />
        </IonCardHeader>
       </IonCard>
              </IonCol>
  
            </IonRow>
           </IonGrid>
    </IonContent>
        <Menu />
      </IonPage>
      
    )
}

export default Dashboard