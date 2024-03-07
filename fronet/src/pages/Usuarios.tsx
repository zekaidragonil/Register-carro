import React, { useState, useEffect } from 'react';
import { createOutline, eyeSharp, personAddSharp } from 'ionicons/icons';
import { IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import clienteAxios from './config/axios';
import Menu from '../components/Menu';


const Users: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const Datos =  async () =>{
        const token = localStorage.getItem('token');
        const config = {
         headers: {
           "Content-Type": "application/json",
           Authorization: `Bearer ${token}`
         }
       } 
        const respose = await clienteAxios.get('/auth/users', config)
        setUsers(respose.data)
      }
      Datos();
    },[]);

  const handleSearchChange = (e: CustomEvent) => {
    const term = e.detail.value;
    setSearchTerm(term || '');
  };

 
  const filteredUsers = users.filter(user => {
    const regex = new RegExp(searchTerm, 'i');
    return regex.test(user.name) || user.name.toLowerCase().startsWith(searchTerm.toLowerCase());
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
        {filteredUsers.map((user, index) => (
 <IonItem key={user.id} routerLink={`/showuser/${user.id}`} button detail={true} detailIcon={eyeSharp}>
    <IonLabel>
      <h3>Usuarios: {user['name']} - {user['activado'] === 1 ? 'Activado' : 'No autorizado'}</h3>
      <p>Placa: {user['placa']}</p>
    </IonLabel>
  </IonItem>
))}
        </IonList>
      </IonContent>
      <Menu />
    </IonPage>
  );
}

export default Users;
