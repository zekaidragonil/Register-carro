import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonPage, IonRow } from "@ionic/react";
import Header from "../components/header";
import Menu from "../components/Menu";
import { useParams } from "react-router";
import clienteAxios from "./config/axios";
import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";
import Menuser from "../components/MenuUser";

const DashUser: React.FC = () => {
  
  const { userD } = useUser();
  const [datos, setDatos] = useState<any[]>([]);

  useEffect(()=>{
    const users = async () =>{

      const url = `/auth/showCarros/${id}`;
      const token = localStorage.getItem("token");
      const Config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const respuesta = await clienteAxios(url, Config)
       setDatos(respuesta.data);      
    }

  
   users();
  },[])


    return(
        <IonPage  >
        <Header />
      <IonContent  >
         <IonGrid>
          <IonRow>
            <IonCol size="12">
            <IonCard>
      <IonCardHeader>
      <IonCardTitle>Hola! </IonCardTitle>
      <IonCardSubtitle>Bienvenido </IonCardSubtitle>
      </IonCardHeader>
         <IonCardContent>
          <IonGrid>
             <IonRow>
               <IonCol size="6">
               <p >Marca : <span style={{fontWeight: 'bold'}} > {datos.marca}</span></p>
               </IonCol>
               <IonCol size="6">
               <p > N° Placa : <span style={{fontWeight: 'bold'}} > {datos.placa}</span></p>
               </IonCol>
               <IonCol size="6">
               <p >Modelo : <span style={{fontWeight: 'bold'}} > {datos.modelo}</span></p>
               </IonCol>
               <IonCol size="6">
               <p >Año : <span style={{fontWeight: 'bold'}} > {datos.ano}</span></p>
               </IonCol>
             </IonRow>
          </IonGrid>
           
         </IonCardContent>
     </IonCard>
            </IonCol>
          </IonRow>
         </IonGrid>
  </IonContent>
      <Menuser />
    </IonPage>
    )
}

export default DashUser;