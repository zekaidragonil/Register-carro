import { IonAlert, IonButton, IonCol, IonContent, IonGrid, IonIcon, IonInput, IonLabel, IonLoading, IonPage, IonRow } from '@ionic/react';
import { eyeOffOutline, eyeOutline } from 'ionicons/icons';
import { useState } from 'react';
import './pages.css'
import { Redirect, useHistory } from 'react-router-dom';
import clienteAxios from './config/axios';
import { useUser } from "../context/UserContext";
  
    const Login: React.FC = () => {
      const { userD } = useUser();
        const history = useHistory();
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [mostrarAlerta, setMostrarAlerta] = useState(false);
        const [busy, setBusy] = useState<boolean>(false);
        const [titulo, setTitulo] = useState('');
        const [name, setName] = useState('');
        const [repetir, setRepetirPassword] = useState('');
        const [phone, setPhone] = useState('');
        const [placa, setPlaca] = useState('');
        const [mensaje, setMensaje] = useState('');
        const [showPassword, setShowPassword] = useState(false);
        const [register , setRegister] = useState(true);
 
        
        const togglePasswordVisibility = () => {
          setShowPassword(!showPassword);
        };
      
        const hadleRegistro = () => {
          setRegister(false)
        } 
      
        const hadlelogin = () => {
          setRegister(true)
        } 
    
 
    async function handleLogin (){
          //condicion que comprueba si los campos esta vacios      
         if (email.trim() === '' || password === '') {
              setMostrarAlerta(true);
              setTitulo('Error!!');
              setMensaje('Los campos no puede ir vacios, porfavor verifiquelos o intente nueva mente  ');
             
             }else{
                
                try {
               
                   setBusy(true);
                    const url = '/auth/login'
                  const response =  await clienteAxios.post(url,{email, password}); 
                 if (response) {     
                  localStorage.setItem('token', response.data.access_token);
                
                 if(userD.roleNames['0'] === 'admin'){
                  history.push('/home'); 
                 }else if(userD.roleNames['0'] === 'user'){
                   history.push('/home-user'); 
                 }
                
            
                 }
                          
               } catch (error) {
                 setMostrarAlerta(true);
                 setTitulo('Error!!');
                  setMensaje(error.response.data.error);
             
               } finally {
                 setBusy(false);
              }
             }
    
      } 
      

      
 const handleRegistro =   async () => {

    if(password !== repetir){
      setMostrarAlerta(true);
      setTitulo('Error!!');
      setMensaje('La contraseñas no coinciden');
     return
  }

  try{
    const response = await clienteAxios.post('/auth/registro', {
      email: email,
      password: password,
      name: name,
      telefono: phone,
      placa: placa,
    });
    setMostrarAlerta(true);
    setTitulo('succes!!');
  setMensaje(response.data.message);

    

  }catch(error){
    setMostrarAlerta(true);
        setTitulo('Error!!');
      setMensaje(error.response.data.error);
    
  }
                
}        
         return(
          <IonPage>
          <IonLoading message={'Por favor espere...'} duration={0} isOpen={busy} /> 
          {register  ? (
          <IonContent style={{ background: 'white',}}>
              <div style={{height: '45%'}}>
                <img src='/perra.png' alt="" />
              </div>
            <div className='bg' style={{ height: '55%' , borderTopLeftRadius: '20px', borderTopRightRadius: '20px'  }}>
              <div className='content'>
                <div className='mt'>
                <IonLabel color={'light'} className='bold' position='floating'>Correo</IonLabel>
                <IonInput
                 color={'light'}
                 className="border"
                 style={{ '--ion-color-base': 'white', color: 'white' }}
                 type="text"
                  placeholder="correo Electronico"
                  onInput={(e)=> setEmail(e.target.value)}
                   />
                </div>
                <div className='mt'>
                <IonLabel color={'light'} className='bold' position='floating'>Contraseña</IonLabel>
                <IonInput
                   color={'light'}
                  className="border"
                  style={{ '--ion-color-base': 'white', color: 'white' }}
                   placeholder="Contraseña"
                   type={showPassword ? 'text' : 'password'}   
                   onInput={(e)=> setPassword(e.target.value)}
               />
                 <IonButton className='ojo' fill="clear" onClick={togglePasswordVisibility}>
                 <IonIcon color={'light'} icon={showPassword ? eyeOffOutline : eyeOutline} />
                </IonButton>
                </div>
                 <div className='d-flex'>
                  <div>
                  </div>
                  <div className='mt'>
                 
                  </div>
                  
                 </div>
                 <div  className='flex'>
                    <button onClick={handleLogin} className='btn'>login</button>
                   </div>
                   <h1 className='font'>No tienes cuenta ? <button onClick={hadleRegistro} className='cambio bold'>Registrate</button></h1>
              </div>
              
            </div>
          </IonContent>       
             ):(
              <IonContent style={{ background: 'white',}}>
              <div style={{height: '45%'}}>
                <img src='/perra.png' alt="" />
              </div>
            <div className='bg' style={{ height: '55%' , borderTopLeftRadius: '20px', borderTopRightRadius: '20px'  }}>
              <div className='content' style={{paddingTop : '20px'}}>
                <IonGrid>
                  <IonRow>
                    <IonCol size='6'>
                    <IonLabel color={'light'} className='bold' position='floating'>nombre</IonLabel>
                   <IonInput
                    color={'light'}
                   className="border"
                    style={{ '--ion-color-base': 'white', color: 'white' }}
                   type="text"
                  placeholder="Nombre"
                  onInput={(e)=> setName(e.target.value)}
                   />

                    </IonCol>
                    <IonCol size='6'>
                    <IonLabel color={'light'} className='bold' position='floating'>Correo</IonLabel>
                   <IonInput
                   color={'light'}
                 className="border"
                 style={{ '--ion-color-base': 'white', color: 'white' }}
                 type="text"
                  placeholder="correo Electronico"
                  onInput={(e)=> setEmail(e.target.value)}
                   />
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size='6'>
                    <IonLabel color={'light'} className='bold' position='floating'>password</IonLabel>
                   <IonInput
                    color={'light'}
                   className="border"
                    style={{ '--ion-color-base': 'white', color: 'white' }}
                   type="password"
                  placeholder="password"
                  onInput={(e)=> setPassword(e.target.value)}
                   />

                    </IonCol>
                    <IonCol size='6'>
                    <IonLabel color={'light'} className='bold' position='floating'>Repetir password</IonLabel>
                   <IonInput
                   color={'light'}
                 className="border"
                 style={{ '--ion-color-base': 'white', color: 'white' }}
                 type="password"
                  placeholder="Repetir password"
                  onInput={(e)=> setRepetirPassword(e.target.value)}
                   />
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size='6'>
                    <IonLabel color={'light'} className='bold' position='floating'>Telefono</IonLabel>
                   <IonInput
                    color={'light'}
                   className="border"
                    style={{ '--ion-color-base': 'white', color: 'white' }}
                   type="text"
                  placeholder="telefono"
                  onInput={(e)=> setPhone(e.target.value)}
                   />

                    </IonCol>
                    <IonCol size='6'>
                    <IonLabel color={'light'} className='bold' position='floating'>N° Placa</IonLabel>
                   <IonInput
                   color={'light'}
                 className="border"
                 style={{ '--ion-color-base': 'white', color: 'white' }}
                 type="text"
                  placeholder="N° Placa"
                  onInput={(e)=> setPlaca(e.target.value)}
                   />
                    </IonCol>
                  </IonRow>

                </IonGrid>
                 <div  className='flex '>
                    <button onClick={handleRegistro} className='btn'>Registrate</button>
                   </div>
                   <h1 className='font'>tienes cuenta ? <button onClick={hadlelogin} className='cambio bold'>login</button></h1>
              </div>
              
            </div>
          </IonContent>

              
             )}
           <IonAlert isOpen={mostrarAlerta}  onDidDismiss={() => setMostrarAlerta(false)} header={titulo}  message={mensaje} buttons={['OK']} ></IonAlert> 
        </IonPage>
         )
    }
    
    export default Login