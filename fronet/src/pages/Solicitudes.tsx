import {IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonInput, IonItem, IonLabel, IonPage, IonSelect, IonSelectOption, IonAlert } from "@ionic/react";
import '../pages/pages.css'
import { useState } from "react";
import clienteAxios from "./config/axios";
import { useHistory } from "react-router";
import { useUser } from '../context/UserContext'
import Menuser from "../components/MenuUser";


const Solicitudes: React.FC = () =>{
    const { userD } = useUser();
    const url = '/auth/solicitud';
    const [tipo , setTipo] = useState('');
    const [tipoMantenimiento , setTipoMantenimiento] = useState('');
    const [tipoCombustible , setTipoCombustible] = useState('');
    const [cantidadCombustible , setCantidadCombustible] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [mostrarAlerta, setMostrarAlerta] = useState(false);
    const [titulo, setTitulo] = useState('');
   const  history = useHistory();


   

   const   store = async () =>
    {

      const fechaActual = new Date();
        const dia = fechaActual.getDate();
        const mes = fechaActual.getMonth();
        const ano = fechaActual.getFullYear();
        const fechaClave = `${dia}-${mes}-${ano}`;


    
      const token = localStorage.getItem('token');
    const respuesta  = await clienteAxios.post(url,{
        user_id :userD.user.id,
        tipo:tipo,
        solicitud: tipo === "Mantenimiento" ? tipoMantenimiento : tipoCombustible,
        cantidad: cantidadCombustible,
        estatus : 'Recibidos',
        fecha : fechaClave,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      

      setMostrarAlerta(true);
      setTitulo('succes!!');
      setMensaje(respuesta.data.message);
    }
  
   

    return(
        <IonPage>
      <IonContent>
        <IonCard className="margin">
          <IonCardHeader>
            <IonCardTitle>Registro</IonCardTitle>
            <IonCardSubtitle>Solictud</IonCardSubtitle>
          </IonCardHeader>
          <IonGrid>
        <IonRow>
          <IonCol size="6">
            <IonItem>
            <IonLabel id="tipo" position="stacked">Tipo </IonLabel>
            <IonSelect  aria-label="tipo" onIonChange={(e) => setTipo(e.detail.value)} placeholder="--Seleciones --">
              <IonSelectOption value="Mantenimiento">Mantenimiento</IonSelectOption>
              <IonSelectOption value="Combustible">Combustible</IonSelectOption>
              <IonSelectOption value="Espera">Espera</IonSelectOption>
            </IonSelect>
            </IonItem>
          </IonCol>
          {tipo === 'Mantenimiento' && (
               <IonCol size="6">
               <IonItem>
               <IonLabel id="mantenimiento" position="stacked">solictud</IonLabel>
               <IonSelect  aria-label="mantenimiento" onIonChange={(e) => setTipoMantenimiento(e.detail.value)}
                placeholder="--Seleciones --">
               <IonSelectOption value="Preventivo">Preventivo</IonSelectOption>
            <IonSelectOption value="Correctivo">Correctivo</IonSelectOption>
               </IonSelect>
               </IonItem>
             </IonCol>
      )}
       {tipo === 'Combustible' && (
        <>
           <IonCol size="6">
               <IonItem>
               <IonLabel id="Combustible" position="stacked">Tipo de solictud</IonLabel>
               <IonSelect  aria-label="Combustible" onIonChange={(e) => setTipoCombustible(e.detail.value)}
                placeholder="--Seleciones --">
             <IonSelectOption value="Gasolina">Gasolina</IonSelectOption>
              <IonSelectOption value="Diesel">Diesel</IonSelectOption>
               </IonSelect>
               </IonItem>
            </IonCol>
            <IonCol size="6">
            <IonItem>
              <IonLabel id="Cantidad"  position="stacked">Cantidad de Combustible</IonLabel>
              <IonInput aria-labelledby="Cantidad"  onIonInput={(e) => setCantidadCombustible(e.detail.value)} placeholder="Cantidad" />
            </IonItem>
          </IonCol>
        </>
      )}
          </IonRow>
          </IonGrid>
      <div className="ion-text-center">
      <button onClick={store} className="btn-formulario" >Registrar</button>
      </div>
    </IonCard>

    </IonContent>
    <Menuser />
    <IonAlert isOpen={mostrarAlerta}  onDidDismiss={() => setMostrarAlerta(false)} header={titulo}  message={mensaje} buttons={[
          {
            text: 'OK',
            handler: () => {
                setMostrarAlerta(false);
              history.push('/home-user'); // Aquí rediriges hacia atrás cuando se presiona "OK"
            },
          },
        ]} ></IonAlert> 
 </IonPage>
    )

}

export default Solicitudes;


