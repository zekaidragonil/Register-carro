
import React, { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';
import { IonAlert, IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonText, IonTitle, IonToolbar } from "@ionic/react";
import clienteAxios from "./config/axios";
import Menu from "../components/Menu";
import { useUser} from '../context/UserContext'

const ShowInpeccion: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [datos, setDatos] = useState<any[]>([]);
    const { userData , carroData} = useUser();   
    const history = useHistory();

    useEffect(() => {
      const fetchReportes = async () => {
        const url = `/auth/inspeccion/${id}`;
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
  
    const usuario = userData.filter(item =>item.placa === datos.placa)
    const carroo = carroData.filter(item => item.placa === datos.placa)


    // const fecha = new Date(datos.created_at).toLocaleDateString("es-ES", {
    //   day: "numeric",
    //   month: "numeric",
    //   year: "numeric",
    // });
  
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
            <IonTitle>Resumen de la inspeccion</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <React.Fragment>
            {usuario.length > 0 && renderRow("Nombre", usuario['0'].name)}
            {usuario.length > 0 && renderRow("Cedula", usuario['0'].cedula)}
            {usuario.length > 0 && renderRow("telefono", usuario['0'].telefono)}
            {carroo.length > 0 && renderRow("Marca",  carroo['0'].marca)}
            {carroo.length > 0 && renderRow("Modelo",  carroo['0'].modelo)}
            {carroo.length > 0 && renderRow("Color",  carroo['0'].color)}
            {carroo.length > 0 && renderRow("Placa",  carroo['0'].placa)}
            {carroo.length > 0 && renderRow("S.Carroseria",  carroo['0'].carroseria)}
            {carroo.length > 0 && renderRow("S.motor",  carroo['0'].motor)}
            {renderRow("Dependencia", datos.dependencia)}
            {renderRow("Kilometraje", datos.Kilometraje)}
            {renderRow("Lugar de pernocta", datos.pernota)}
            {renderRow("M. neumatico", datos.Neumaticos)}
            {renderRow("Tipo de aceite", datos.aceite)}
            {renderRow("vidrio delantero y trasero", datos.vidrio)}
            {renderRow("vidrio lateral", datos.vidrioLa)}
            {renderRow("Retrovisores", datos.retrovisor)}
            {renderRow("Molduras", datos.Moldura)}
            {renderRow("Tapa de gasolina", datos.gasolina)}
            {renderRow("Carroceria Sin golpes", datos.Carroseria)}
            {renderRow("Antena", datos.Antena)}
            {renderRow("Luces delanteras bajas", datos.LucesDelanterasBa)}
            {renderRow("Luces delanteras altas", datos.LucesDelanterasAl)}
            {renderRow("Luces intermitentes", datos.LucesIntermitente)}
            {renderRow("Luces de cruces traseras", datos.LucesCruceT)}
            {renderRow("Luces de cruces delantero", datos.LucesCruceD)}
            {renderRow("Instrumento de tablero", datos.instrumento)}
            {renderRow("Calefaccion", datos.calefacion)}
            {renderRow("Luz interna", datos.LuzInterna)}
            {renderRow("Equipo reproductor de sonido", datos.reproductor)}
            {renderRow("Bocina", datos.Bocina)}
            {renderRow("Encendedor de cigarrillos", datos.Encededor)}
            {renderRow("Espejo retrovisor", datos.Espejo)}
            {renderRow("Ceniceros", datos.Ceniceros)}
            {renderRow("Cinturones", datos.Cinturones)}
            {renderRow("Botones de interiores", datos.Botones)}
            {renderRow("Manijas", datos.Manijas)}
            {renderRow("Herramientas generales o estuche", datos.Herramienta)}
            {renderRow("Gato", datos.Gato)}
            {renderRow("Llave de cruz", datos.llave)}
            {renderRow("Triangulo de emergencia", datos.Triangulo)}
            {renderRow("Caucho de repuesto", datos.Caucho)}
            {renderRow("Extintor", datos.Extintor)}
            {renderRow("Asientos", datos.Asientos)}
            {renderRow("Luz de retroceso", datos.LuzRetro)}
            {renderRow("Limpiaparabrisas", datos.Limpiaparabrisas)}
            {renderRow("Alfombras", datos.Alfombras)}
            {renderRow("Estado fisico de la bateria", datos.bateria)}
            {renderRow("Combustible", datos.Combustible)}
            {renderRow("Descripcion", datos.descripcion)}
            
            
            
  
              {/* Agrega más campos aquí si es necesario */}
            </React.Fragment>
          </IonList>
        </IonContent>
        <Menu />
       
      </IonPage>
    );
  };
  
  export default ShowInpeccion;
