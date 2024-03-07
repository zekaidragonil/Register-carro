import {
  IonAlert,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonInput,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonRow,
  IonToolbar,
} from "@ionic/react";
import Menuser from "../components/MenuUser";
import { useState } from "react";
import { useUser } from "../context/UserContext";
import clienteAxios from "./config/axios";
import { useHistory } from "react-router";

const Infouser: React.FC = () => {
  const { userD } = useUser();
  const id = userD?.user?.id;
  const [showGuardarAlert, setShowGuardarAlert] = useState(false);
  const history = useHistory();
  // Estados individuales para cada campo de entrada
  const [name, setName] = useState(userD?.user?.name);
  const [telefono, setTelefono] = useState(userD?.user?.telefono);
  const [cedula, setCedula] = useState(userD?.user?.cedula);
  const [dependencia, setDependencia] = useState(userD?.user?.dependencia);


  const completo = () => {
    setShowGuardarAlert(true);
  };


  const handleSave = async () => {

    const url = `/auth/user/${id}`;
    const token = localStorage.getItem("token");
    const Config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      // Utiliza el estado individual para cada campo
      const userData = {
        name,
        telefono,
        cedula,
        dependencia,
      };

       clienteAxios.post(url, userData, Config)
      .then(() => {
        setShowGuardarAlert(false); // Close the alert modal
        history.push('/home-user')
      })
      .catch((error) => {
        console.error(error);
      });
    } catch (error) {
      console.error("Error al guardar los cambios:", error);
    }
  };

  return (
    <IonPage>
       <IonToolbar>
      <IonButtons slot="end">
              <IonMenuButton />
            </IonButtons>
            </IonToolbar>
      <IonContent>
        <IonGrid>
          <IonRow className="">
            <IonCol size="12">
              <div style={{ textAlign: "center" }}>
                <img src="/descarga.png" alt="" style={{ height: "170px" }} />
              </div>
            </IonCol>

            <IonCol size="6" style={{ marginTop: "10px" }}>
             
                <IonLabel>Nombre</IonLabel>
                <IonInput
                  style={{ marginBottom: "15px" }}
                  value={name}
                  onIonChange={(e) => setName(e.detail.value!)} // Utiliza el estado individual
                />
             </IonCol>
             <IonCol size="6" style={{ marginTop: "10px" }}>
                <IonLabel>Teléfono</IonLabel>
                <IonInput
                  style={{ marginBottom: "15px" }}
                  value={telefono}
                  onIonChange={(e) => setTelefono(e.detail.value!)} // Utiliza el estado individual
                />
           </IonCol>
           <IonCol size="6" >
                <IonLabel>Cédula</IonLabel>
                <IonInput
                  style={{ marginBottom: "15px" }}
                  value={cedula}
                  onIonChange={(e) => setCedula(e.detail.value!)} // Utiliza el estado individual
                />
           </IonCol>
           <IonCol size="6">
                <IonLabel>Dependencia</IonLabel>
                <IonInput
                  style={{ marginBottom: "15px" }}
                  value={dependencia}
                  onIonChange={(e) => setDependencia(e.detail.value!)} // Utiliza el estado individual
                />
                </IonCol>        
          </IonRow>
        </IonGrid>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <button className="btn-formulario" onClick={completo}>
                    Guardar Cambios
                  </button>
                </div>


      </IonContent>
      <Menuser />
      <IonAlert
          isOpen={showGuardarAlert}
          header="Completar"
          message="Guardar cambiso"
          buttons={[
            {
              text: "Cancelar",
              role: "cancel",
              handler: () => setShowGuardarAlert(false),
            },
            {
              text: "Aprobado",
              handler:() => handleSave(),
            },
          ]}
        />
    </IonPage>
  );
};

export default Infouser;
