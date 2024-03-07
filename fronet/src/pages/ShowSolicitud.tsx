import { IonButton, IonCol, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { createOutline, eyeSharp } from "ionicons/icons";
import Menu from "../components/Menu";
import clienteAxios from "./config/axios";
import '../pages/pages.css'

const  ShowSolictud: React.FC = () =>{
  const  url = '/auth/soli';
 const [entregado, setEntregado] = useState(false);
 const [recibido, setRecibido] = useState(true);
 const [ solicitud, setSolicitud ] = useState<any[]>([]); 
 const [ completado, setCompletado ] = useState<any[]>([]); 

  useEffect(() =>{
    const  token = localStorage.getItem('token')
    const Config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
 
    const Solicitud = async () => {
     
      const respuesta = await clienteAxios.get(url, Config)
      const recibido = respuesta.data.filter((index)=> index.estatus === 'Recibidos');
      const entregado = respuesta.data.filter((index)=> index.estatus === 'Aprobado');
      setSolicitud(recibido)
      setCompletado(entregado)
    }
     Solicitud();

  },[])



 return(
        <IonPage>
      <IonHeader>
      <IonToolbar>
      <IonTitle>{entregado ? 'Completado' : 'Recibidos'}</IonTitle>
      </IonToolbar>
     </IonHeader>
     <IonContent>
     <IonRow>
    <IonCol size="6" >
    <IonButton color="secondary" expand="full"onClick={() => { setEntregado(false);setRecibido(true);}} >Recibidos </IonButton>
    </IonCol>
    <IonCol size="6" >
    <IonButton  color="secondary" expand="full" onClick={() => { setEntregado(true); setRecibido(false)}}> Completado </IonButton>
    </IonCol>
    </IonRow>
      {recibido && (
         solicitud.map((user) => ( 
          
            <IonItem key={user.id} routerLink={`/showreport/${user.id}/${user.user.placa}/${user.user.name}`} button detail={true} detailIcon={eyeSharp}>
              <IonLabel>
                <h3><span style={{fontWeight:550}}> {user.user.name}  </span>  -  <span style={{fontWeight:550}}> placa : </span>{user.user.placa}  </h3>
                <p> <span style={{fontWeight:550}} >Solicitud :</span> {user.tipo} -    <span style={{ fontWeight: 550 }}>
              {new Date(user.created_at).toLocaleDateString('es-ES', {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric'
              })}
            </span></p>
              </IonLabel>
            </IonItem>
         
          ))
          
        )}

        {entregado && (
           completado.map((user) => (
            <IonItem key={user.id} routerLink={`/showreport/${user.id}/${user.user.placa}/${user.user.name}`} button detail={true} detailIcon={eyeSharp}>
                <IonLabel>
                <h3><span style={{fontWeight:550}}> {user.user.name}  </span>  -  <span style={{fontWeight:550}}> placa : </span>{user.user.placa}  </h3>
                <p> <span style={{fontWeight:550}} >Solicitud :</span> {user.tipo} -    <span style={{ fontWeight: 550 }}>
              {new Date(user.created_at).toLocaleDateString('es-ES', {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric'
              })}
            </span></p>
              </IonLabel>
            </IonItem>
          ))
        )}
       
    </IonContent>
   
    <Menu />
  </IonPage>
    )

} 


export default ShowSolictud;