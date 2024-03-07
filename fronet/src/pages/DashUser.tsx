import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFab, IonFabButton, IonFabList, IonGrid, IonIcon, IonMenuButton, IonPage, IonRow, IonText, IonToolbar } from "@ionic/react";
import { useUser } from "../context/UserContext";
import Menuser from "../components/MenuUser";
import { add, storefrontOutline } from "ionicons/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import './pages.css'
import clienteAxios from "./config/axios";
import  ReportCard from '../components/card'

const DashUser: React.FC = () => {
  const { userD, carroData } = useUser();
  const [kilometros, setKilometros] = useState<number>(0);
  const [valor, setDatos] = useState('');
  const [solicitud, setSolictud] = useState([]);
  const token = localStorage.getItem('token')
  const id = userD?.user?.id


  const datos = carroData.filter((item)=> item.placa === userD.user.placa);

  useEffect(()=>{
  
    const datos = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },

      }

      const proceso = await clienteAxios.get('/auth/kilometros', config)
      const dato = proceso.data.filter((item) => item.kilometros_id === id)
      const valorTotal = dato.reduce((total, item) => parseFloat(total) + parseFloat(item.kilometro), 0);
     
      setDatos(valorTotal)
    

      const solicitud = await clienteAxios.get('/auth/soli', config);
      const  datosReal = solicitud.data.filter((item) => item.user_id === id)

       setSolictud(datosReal);
      
  }
  datos();

  },[id])



  useEffect(() => {
      

    const url = '/auth/kilometro';
    const showAlert = async () => {
      const result = await Swal.fire({
        title: 'Ingresar Kilómetros',
        input: 'text',
        inputPlaceholder: 'Ingrese la cantidad de kilómetros',
        confirmButtonText: 'Aceptar',
        allowOutsideClick: false,
        heightAuto: false,
        inputValidator: (value) => {
          if (!value) {
            return 'Debe ingresar una cantidad de kilómetros';
          }
        },
      });

      
       
      if (result.isConfirmed) {
          const respuesta = await clienteAxios.post(url, {
            kilometro: parseInt(result.value || '0', 10),
            kilometros_id: id

          },{
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
          ) 


          Swal.fire({
            title: 'OK',
            text: respuesta.data.message,
            icon: 'success',
            heightAuto: false, 
          });

          localStorage.setItem('alertaMostradaHoy', 'true');
      }
    };

 
  

    setTimeout(() => {
      localStorage.removeItem('alertaMostradaHoy');
    }, 24 * 60 * 60 * 1000);
      
    if (!localStorage.getItem('alertaMostradaHoy')) {
      
      showAlert();
    }

  }, [id]); // Este efecto se ejecuta solo una vez al montar el componente

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
      <IonCardTitle>Hola! {userD && userD?.user?.name} </IonCardTitle>
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
            <IonCard>
      <IonCardHeader>
      <IonCardTitle>{valor}</IonCardTitle>
      <IonCardSubtitle>Kilometros recorridos hoy </IonCardSubtitle>
      </IonCardHeader>
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
         <IonFab   slot="fixed" vertical="bottom" horizontal="end">
        <IonFabButton className="color">
          <IonIcon icon={add}></IonIcon>
        </IonFabButton>
        <IonFabList side="top">
        <Link to={'/reporte'}>
          <IonFabButton
            title="Agregar inventario"
            data-for="addInventoryTooltip"
          >
            <IonIcon icon={storefrontOutline}></IonIcon>
          </IonFabButton>
          </Link>
        </IonFabList>
      </IonFab>
  </IonContent>
      <Menuser />
    </IonPage>
    )
}

export default DashUser;