import { IonBackButton, IonButtons, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonSearchbar, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState, useEffect } from 'react';
import { add, car, eyeOutline, fileTrayFullOutline, storefrontOutline } from 'ionicons/icons';
import Menu from "../components/Menu";
import { useUser } from '../context/UserContext'
import { Link } from "react-router-dom";


const Carros: React.FC = () => {
    const { carroData } = useUser();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e: CustomEvent) => {
      const term = e.detail.value;
      setSearchTerm(term || '');

    };
  
    const filteredPlants = carroData.filter(carro => {
      const regex = new RegExp(searchTerm, 'i');
      return regex.test(carro.placa) || carro.placa.toLowerCase().startsWith(searchTerm.toLowerCase());
    });

    return(
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
            {filteredPlants.map(carro => (
              <IonItem key={`${carro.name}`} routerLink={`/showCarro/${carro.placa}`} button detail={true} detailIcon={eyeOutline}>
                <IonLabel>
                  <h3>{carro.marca} --<span>{carro.ano}</span> </h3>
                  <p>N de placa: {carro.placa}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
          <IonFab   slot="fixed" vertical="bottom" horizontal="end">
        <IonFabButton className="color">
          <IonIcon icon={add}></IonIcon>
        </IonFabButton>
        <IonFabList side="top">
        <Link to={'/Registro'}>
          <IonFabButton
            title="Agregar inventario"
            data-for="addInventoryTooltip"
          >
            <IonIcon icon={storefrontOutline}></IonIcon>
          </IonFabButton>
          </Link>
           <Link to={'/asignacion'}>
          <IonFabButton title="Reporte del dia">
            <IonIcon icon={fileTrayFullOutline}></IonIcon>
          </IonFabButton>
          </Link>
        </IonFabList>
      </IonFab>
        </IonContent>
       
        <Menu />
      </IonPage>


    )
}

export default Carros;