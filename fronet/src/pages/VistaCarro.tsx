import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFab, IonFabButton, IonFabList, IonGrid, IonIcon, IonMenuButton, IonPage, IonRow, IonText, IonToolbar } from "@ionic/react";
import { useUser } from "../context/UserContext";
import Menu from "../components/Menu";
import { useEffect, useState } from "react";
import './pages.css'
import clienteAxios from "./config/axios";
import  ReportCard from '../components/card'
import { useParams } from "react-router";

const VistaCarro: React.FC = () => {
    const { id} = useParams<{ id: string }>();
  const { userData, carroData } = useUser();
  const [solicitud, setSolictud] = useState([]);
  const token = localStorage.getItem('token')

 
 const datos = carroData.filter((item)=> item.placa === id);



  useEffect(()=>{ 
    const datos = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },

      }    

      const solicitud = await clienteAxios.get('/auth/soli', config);
      
      const  datosReal = solicitud.data.filter((item)=> item?.user?.placa === id)
       setSolictud(datosReal);
      
  }
  datos();

  },[])

    return(
        <IonPage  >
         <IonToolbar>
      <IonButtons slot="end">
              <IonMenuButton />
            </IonButtons>
            </IonToolbar>
      <IonContent  >
         <IonGrid>
          <IonRow>
            <IonCol size="12">
            <IonCard>
      <IonCardHeader>
      {/* <IonCardTitle>Hola! {userD && userD?.user?.name} </IonCardTitle> */}
      <IonCardSubtitle>Bienvenido </IonCardSubtitle>
      </IonCardHeader>
         <IonCardContent>
          <IonGrid>
             <IonRow>
               <IonCol size="6">
               <p >Marca : <span style={{fontWeight: 'bold'}} > { datos[0]?.marca}</span></p>
               </IonCol>
               <IonCol size="6">
               <p > N° Placa : <span style={{fontWeight: 'bold'}} > {datos[0]?.placa}</span></p>
               </IonCol>
               <IonCol size="6">
               <p >Modelo : <span style={{fontWeight: 'bold'}} > {datos[0]?.modelo}</span></p>
               </IonCol>
               <IonCol size="6">
               <p >Año : <span style={{fontWeight: 'bold'}} > {datos[0]?.ano}</span></p>
               </IonCol>
             </IonRow>
          </IonGrid>
           
         </IonCardContent>
     </IonCard>
            </IonCol>

          </IonRow>
          <IonRow>
            <IonCol size="12">

      <ReportCard
              title="Reporte de solictud"
              data={solicitud}
              keys={["fecha", "solicitud", "estatus"]}
              />
            </IonCol>
            
          </IonRow>
         </IonGrid>
  </IonContent>
      <Menu />
    </IonPage>
    )
}

export default VistaCarro;