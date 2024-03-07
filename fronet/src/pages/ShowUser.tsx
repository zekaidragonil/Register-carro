import React, { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';
import { IonAlert, IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react";
import clienteAxios from "./config/axios";
import Menu from "../components/Menu";

const ShowUser: React.FC = () => {
    const { id} = useParams<{ id: string }>();
    const [datos, setDatos] = useState<any[]>([]);
    const [showGuardarAlert, setShowGuardarAlert] = useState(false);
    const history = useHistory();

    useEffect(() => {
      const fetchReportes = async () => {
        const url = `/auth/users/${id}`;
        const token = localStorage.getItem("token");
        const Config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
  
        const respuesta = await clienteAxios(url, Config);
        setDatos(respuesta.data);
      };
  
      fetchReportes();
    }, [id]);
  
    const completo = () => {
      setShowGuardarAlert(true);
    };
  
    const handleGuardar = async () => {
      const newData = { ...datos };
       newData.activado = 1;
     // Update the estatus field

  // Send the updated data to the Laravel backend using clienteAxios
 const url = `/auth/user/${id}`;
  const token = localStorage.getItem("token");
  const Config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

const respuesta=  await clienteAxios.post(url, newData, Config)
console.log(respuesta)
setShowGuardarAlert(false);
    // .then(() => {
    //  
    //    // Close the alert modal
    //   // history.push('/home')
    // })
    // .catch((error) => {
    //   console.error(error);
    // });
   };
   

    const renderRow = (label: string, value: any) => (
      <IonItem key={label}>
        <IonCol size="5">
          <IonLabel>{label}:</IonLabel>
        </IonCol>
        <IonCol size="7">
          <IonText>{value}</IonText>
        </IonCol>
      </IonItem>
    );
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/Solicitudes" />
            </IonButtons>
            <IonTitle>Resumen de Solicitud</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <React.Fragment>
              {renderRow("Nombre", datos.name)}
              {renderRow("N° de Placa", datos.placa)}
              {renderRow("telefono", datos.telefono)}
            
              {/* Agrega más campos aquí si es necesario */}
            </React.Fragment>
          </IonList>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
          {datos.activado === 0 ? (
       <button className="btn-formulario" onClick={completo}>
        Activar
        </button>
        ) : null}
          </div>
        </IonContent>
        <Menu />
        <IonAlert
          isOpen={showGuardarAlert}
          header="Completar"
          message="Activar usuario"
          buttons={[
            {
              text: "Cancelar",
              role: "cancel",
              handler: () => setShowGuardarAlert(false),
            },
            {
              text: "Aprobado",
              handler:() => handleGuardar(),
            },
          ]}
        />
      </IonPage>
    );
  };
  
  export default ShowUser;

