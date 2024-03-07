import React, { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';
import { IonAlert, IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react";
import clienteAxios from "./config/axios";
import Menu from "../components/Menu";

const ShowReport: React.FC = () => {
    const { id, name , placa} = useParams<{ placa: string, name: string, id: string }>();
    const [datos, setDatos] = useState<any[]>([]);
    const [showGuardarAlert, setShowGuardarAlert] = useState(false);
    const history = useHistory();
    useEffect(() => {
      const fetchReportes = async () => {
        const url = `/auth/reporte/${id}`;
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
     newData.estatus = "Aprobado";
     // Update the estatus field

  // Send the updated data to the Laravel backend using clienteAxios
 const url = `/auth/reporte/${id}`;
  const token = localStorage.getItem("token");
  const Config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  clienteAxios.post(url, newData, Config)
    .then(() => {
      setShowGuardarAlert(false); // Close the alert modal
      history.push('/home')
    })
    .catch((error) => {
      console.error(error);
    });


    };

     
  
    const fecha = new Date(datos.created_at).toLocaleDateString("es-ES", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
  
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
   
    const renderButton = () => {
      if (datos.estatus === "Recibidos") {
        return (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button className="btn-formulario" onClick={completo}>
              Completado
            </button>
          </div>
        );
      }
      return null; // Don't render the button if estatus is not "Solicitado"
    };
  
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
              {renderRow("Nombre", name)}
              {renderRow("N° de Placa", placa)}
              {renderRow("Requerimiento", datos.tipo)}
              {renderRow("Solicitud", datos.solicitud)}
              {renderRow("Cantidad", datos.cantidad)}
              {renderRow("Estatus", datos.estatus)}
              {renderRow("Fecha de emision", fecha)}
  
              {/* Agrega más campos aquí si es necesario */}
            </React.Fragment>
          </IonList>

           {renderButton()}
         
        </IonContent>
        <Menu />
        <IonAlert
          isOpen={showGuardarAlert}
          header="Completar"
          message="Si la solicutd esta completada pulse Aprobado"
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
  
  export default ShowReport;