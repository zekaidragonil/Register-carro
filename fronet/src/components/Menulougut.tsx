import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonLoading,
    IonMenu,
  } from '@ionic/react';
  
import './Menu.css'
  import {useState } from 'react';
import { logOutOutline } from 'ionicons/icons';
import { useHistory } from 'react-router';
import clienteAxios from '../pages/config/axios';

  const Menulateral: React.FC = () => {
    const [busy, setBusy] = useState<boolean>(false)

    const history = useHistory();

    const Cerrar = async () => {

      setBusy(true);

      try {
        const url = 'auth/logout';
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
        clienteAxios.post(url, config);
    
         localStorage.removeItem('token');
         history.push('login')
      } catch (error) {
        
      }finally {
        setBusy(false);
      }
    
    }
      
    return (
      <IonMenu contentId="main" type="push">
        <IonLoading message={'Cerrando sesión'} duration={0} isOpen={busy} />
        <IonContent>
          <IonList id="inbox-list">
          <IonItem style={{marginTop: '40px'}} lines="none">
            <IonLabel>
              Somos una empresa dedicada a...
              <br />
              Teléfono: +123456789
              <br />
              Correo: info@empresa.com
            </IonLabel>
          </IonItem>


            <IonItem style={{marginTop: '100px'}} lines="none" onClick={Cerrar}>
              <IonIcon aria-hidden="true" slot="start" icon={logOutOutline} />
              <IonLabel>Cerrar sesión</IonLabel>
            </IonItem>
          </IonList>
      </IonContent>
    </IonMenu>
    )
};
  
  export default Menulateral;
  