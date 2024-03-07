import { IonButtons, IonContent, IonFab, IonFabButton, IonFabList, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonSearchbar, IonToolbar } from "@ionic/react";
import { add, eyeOutline, storefrontOutline } from "ionicons/icons";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import { useEffect, useState } from "react";
import clienteAxios from "./config/axios";


const Inspecciones: React.FC = () =>{
 const [Inspecciones, setInspeccion] = useState([]);
 const [searchTerm, setSearchTerm] = useState('');
 

  useEffect(() => {
    const  Datos = async () =>{
      const token = localStorage.getItem('token');
      if (token) {
      await clienteAxios
        .get('/auth/inspeccion', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setInspeccion(response.data);
        })
        .catch((error) => {
  
        });
      }
    }
    Datos();
  }, []); 

  const handleSearchChange = (e: CustomEvent) => {
    const term = e.detail.value;
    setSearchTerm(term || '');
  };

 
  const filteredUsers = Inspecciones.filter(user => {
    const regex = new RegExp(searchTerm, 'i');
    return regex.test(user.placa) || user.placa.toLowerCase().startsWith(searchTerm.toLowerCase());
  });


    return (
      
    <IonPage>
           <IonToolbar>
      <IonButtons slot="end">
              <IonMenuButton />
            </IonButtons>
            </IonToolbar>
        <IonToolbar>
          <IonSearchbar
            placeholder='Buscar'
            value={searchTerm}
            onIonInput={handleSearchChange}
          ></IonSearchbar>
        </IonToolbar>
        <IonContent>
          <IonList>
            {filteredUsers.map(item => (
              <IonItem key={`${item.id}`} routerLink={`/inspecciones/${item.id}`} button detail={true} detailIcon={eyeOutline}>
                <IonLabel>
                  <h3>{item.Date} --<span>{item.dependencia}</span> </h3>
                  <p>N de placa: {item.placa}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
          <IonFab   slot="fixed" vertical="bottom" horizontal="end">
        <IonFabButton className="color">
          <IonIcon icon={add}></IonIcon>
        </IonFabButton>
        <IonFabList side="top">
        <Link to={'/registroinsp'}>
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
       
        <Menu />
      </IonPage>


    )
}


export default Inspecciones;