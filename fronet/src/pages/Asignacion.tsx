import {IonGrid, IonRow, IonCol, IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonInput, IonItem, IonLabel, IonPage, IonSelect, IonSelectOption, IonAlert } from "@ionic/react";
import '../pages/pages.css'
import { useEffect, useState } from "react";
import clienteAxios from "./config/axios";
import Menu from "../components/Menu";
import { useHistory } from "react-router";
import { useUser } from "../context/UserContext";


const  Assginacion: React.FC = () => {
  const { userData, carroData } = useUser();
  const [Dependencia , setDependencia] = useState('');
  const [Resposable , setResposable] = useState('');
  const [UsuarioFinal , setUsuariofinal] = useState('');
  const [fecha , setFecha] = useState('');
  const [duracion , setDuracion] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [placa, setPlaca] = useState('');
  const  history = useHistory();
  

 const store = async () => {

    const url = '/auth/asignacion'
    const token = localStorage.getItem('token');
    
    try {
      const response =  await clienteAxios.post(url, {
        carros_id:placa,
        Cargo: Dependencia,
        fecha: fecha,
        duracion : duracion,
        resposable_id:Resposable,
        final_id :  UsuarioFinal 
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      );

      
      setMostrarAlerta(true);
      setTitulo('succes!!');
    setMensaje(response.data.message);

      
    } catch (error) {

      setMostrarAlerta(true);
      setTitulo('error!!');
      setMensaje(error.response.data.error);
      
    }

  }

    return (
      <IonPage>
      <IonContent>
        <IonCard className="margin">
          <IonCardHeader>
            <IonCardTitle>Registro </IonCardTitle>
            <IonCardSubtitle>Asignacion</IonCardSubtitle>
          </IonCardHeader>
          <IonGrid>
        <IonRow>
        <IonCol size="6">
          <IonItem>
          <IonLabel id="placa" position="stacked">placas</IonLabel>
              <IonSelect  aria-label="placa" onIonChange={(e) => setPlaca(e.target.value)} placeholder="--Seleciones --" >
                {carroData.map((dato) => (
                  <IonSelectOption key={dato.id} value={dato.id}  >
                    {dato.placa}
                  </IonSelectOption>
                ))}
              </IonSelect>
            </IonItem>
          </IonCol>
          <IonCol size="6">
            <IonItem>
            <IonLabel id="cargo" position="stacked">Cargo/Dependencia</IonLabel>
            <IonSelect  aria-label="cargo" onIonChange={(e) => setDependencia(e.detail.value)} placeholder="--Seleciones --">
              <IonSelectOption value="hidropaez">hidropaez</IonSelectOption>
              <IonSelectOption value="Politicas  Publicas">Politicas Publicas</IonSelectOption>
              <IonSelectOption value="Agua potable">Agua Potable y Saneamiento</IonSelectOption>
              <IonSelectOption value="utaa">utaa</IonSelectOption>
              <IonSelectOption value="hidrocaribe">hidrocaribe</IonSelectOption>
              <IonSelectOption value="Comunicación">Comunicación</IonSelectOption>
              <IonSelectOption value="Viceministerio de Gestión Popular ">Viceministerio de Gestión Popular </IonSelectOption>
              <IonSelectOption value="INASA ">INASA </IonSelectOption>
              <IonSelectOption value="Seguridad">Seguridad</IonSelectOption>
              <IonSelectOption value="Dirección General del Despacho del Ministro ">Dirección General del Despacho del Ministro </IonSelectOption>
              <IonSelectOption value="HIDROCAPITAL">HIDROCAPITAL</IonSelectOption>
              <IonSelectOption value="Dirección General de Administración ">Dirección General de Administración </IonSelectOption>
              <IonSelectOption value="Dirección General del Despacho del Ministro ">Dirección General del Despacho del Ministro </IonSelectOption>
              <IonSelectOption value="Cuencas Hidrográficas">Cuencas Hidrográficas</IonSelectOption>
              <IonSelectOption value="Dirección General de Servicios e Infraestructura z">Dirección General de Servicios e Infraestructura </IonSelectOption>
              <IonSelectOption value="Dirección General de RRHH">Dirección General de RRHH</IonSelectOption>
              <IonSelectOption value="Oficina de Servicios e Infraestructura ">Oficina de Servicios e Infraestructura </IonSelectOption>
              <IonSelectOption value=" Atención al Ciudadano "> Atención al Ciudadano </IonSelectOption>
              <IonSelectOption value="HIDROANDES">HIDROANDES</IonSelectOption>
              <IonSelectOption value="HIDROLAGO">HIDROLAGO</IonSelectOption>
              <IonSelectOption value="HIDROSUROESTE">HIDROSUROESTE</IonSelectOption>
              <IonSelectOption value="HIDROCENTRO">HIDROCENTRO</IonSelectOption>
              <IonSelectOption value="HIDROFALCON">HIDROFALCON</IonSelectOption>
              <IonSelectOption value="Asesor del Despacho">Asesor del Despacho</IonSelectOption>
              <IonSelectOption value="MINAGUAS, CARAVANA  ">MINAGUAS, CARAVANA </IonSelectOption>
              <IonSelectOption value="Dirección General de Servicios e Infraestructura  ">Dirección General de Servicios e Infraestructura  </IonSelectOption>
              <IonSelectOption value="Director de analisis estrategicos de seguimiento y evaluación de politicas publicas ">Director de analisis estrategicos de seguimiento y evaluación de politicas publicas </IonSelectOption>
              <IonSelectOption value="Bienestar social ">Bienestar social </IonSelectOption>
              <IonSelectOption value="Dirección de Infraestructura">Dirección de Infraestructura</IonSelectOption>
              <IonSelectOption value="Asesora Despacho ">Asesora Despacho </IonSelectOption>
              <IonSelectOption value="OAC ">OAC </IonSelectOption>
              <IonSelectOption value="Consultoria Juridica">Consultoria Juridica</IonSelectOption>            
            </IonSelect>
            </IonItem>
          </IonCol>
          <IonCol size="6">
            <IonItem>
            <IonLabel   id="fecha" position="stacked">fecha de acta de asignacion</IonLabel>
            <IonInput  onIonChange={(e) => setFecha(e.target.value)} aria-label="fecha" type="date"  />        
            </IonItem>
          </IonCol>
          <IonCol size="6">
            <IonItem>
            <IonLabel  id="fecha" position="stacked">Duracion de comando</IonLabel>
            <IonInput  onIonChange={(e) => setDuracion(e.target.value)} aria-label="fecha" type="date"  />        
            </IonItem>
          </IonCol>
          <IonCol size="6">
          <IonItem>
          <IonLabel id="responsable" position="stacked">Resposable administrativo</IonLabel>
              <IonSelect  aria-label="responsable" onIonChange={(e) => setResposable(e.target.value)} placeholder="--Seleciones --" >
                {userData.map((dato) => (
                  <IonSelectOption key={dato.id} value={dato.id}>
                    {dato.name}
                  </IonSelectOption>
                ))}
              </IonSelect>
            </IonItem>
          </IonCol>
          <IonCol size="6">
          <IonItem>
          <IonLabel id="usuarios" position="stacked">Usuario final</IonLabel>
              <IonSelect aria-lable="usuarios"  onIonChange={(e) => setUsuariofinal(e.target.value)} placeholder="--Seleciones --" >
                {userData.map((dato) => (
                  <IonSelectOption key={dato.id} value={dato.id}>
                    {dato.name}
                  </IonSelectOption>
                ))}
              </IonSelect>
            </IonItem>
          </IonCol>
          </IonRow>
          </IonGrid>
      <div className="ion-text-center">
      <button className="btn-formulario" onClick={store}>Registrar</button>
      </div>
    </IonCard>

    </IonContent>
    <Menu />
    <IonAlert isOpen={mostrarAlerta}  onDidDismiss={() => setMostrarAlerta(false)} header={titulo}  message={mensaje} buttons={[
          {
            text: 'OK',
            handler: () => {
                setMostrarAlerta(false);
              history.push('/home'); // Aquí rediriges hacia atrás cuando se presiona "OK"
            },
          },
        ]} ></IonAlert> 
 </IonPage>
    ) 
}

export default Assginacion;

