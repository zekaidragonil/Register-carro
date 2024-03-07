import {IonGrid, IonRow, IonCol, IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonInput, IonItem, IonLabel, IonPage, IonSelect, IonSelectOption, IonAlert, IonCheckbox, IonTitle, IonTextarea } from "@ionic/react";
import '../pages/pages.css'
import { useState } from "react";
import clienteAxios from "./config/axios";
import Menu from "../components/Menu";
import { useHistory } from "react-router";
import { useUser } from '../context/UserContext'


const  Registroinspe: React.FC = () => {
  const { carroData } = useUser();
  const url = '/auth/inspecciones';
  const [date , setDate] = useState('');
  const [dependencia , setDependencia] = useState('');
  const [Kilometraje , setKilometraje] = useState('');
  const [pernota , setPernota] = useState('');
  const [neutmatico , setNeumatico] = useState('');
  const [aceite , setAceite] = useState('');
  const [Combustible , setCombustible] = useState('');
  const [Neumaticos , setNeumaticos] = useState('');
  const [placa , setPlaca] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [vidrio, setVidrio] = useState('');
  const [vidrioLa, setVidrioLa] = useState('');
  const [retrovisor, setRetrovisor] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [Moldura, setMoldura] = useState('');
  const [Carroseria, setCarroseria] = useState('');
  const [Antena, setAntena] = useState('');
  const [LucesDelanterasAl, setLucesDelanterasAL] = useState('');
  const [LucesDelanterasBa, setLucesDelanterasBa] = useState('');
  const [LucesIntermitente, setLucesIntermitente] = useState('');
  const [LucesCruceD, setLucesCruceD] = useState('');
  const [LucesCruceT, setLucesCruceT] = useState('');
  const [instrumento, setInstrumento] = useState('');
  const [calefacion, setCalefacion] = useState('');
  const [LuzInterna, setLuzInterna] = useState('');
  const [reproductor, setReproductor] = useState('');
  const [Bocina, setBocina] = useState('');
  const [Encededor, setEncededor] = useState('');
  const [Espejo, setEspejo] = useState('');
  const [Ceniceros, setCeniceros] = useState('');
  const [Cinturones, setCinturones] = useState('');
  const [Botones, setBotones] = useState('');
  const [Manijas, setManijas] = useState('');
  const [Herramienta, setHerramienta] = useState('');
  const [Gato, setGato] = useState('');
  const [llave, setllave] = useState('');
  const [Triangulo, setTriangulo] = useState('');
  const [Caucho, setCaucho] = useState('');
  const [Extintor, setExtintor] = useState('');
  const [Asientos, setAsientos] = useState('');
  const [LuzRetro, setLuzRetro] = useState('');
  const [Limpiaparabrisas, setLimpiaparabrisas] = useState('');
  const [Alfombras, setAlfombras] = useState('');
  const [bateria, setBateria] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const  history = useHistory();

  const store = async () => {

 const token = localStorage.getItem('token');

    try {
      const response =  await clienteAxios.post(url, {
        Date: date,
        dependencia: dependencia,
        Kilometraje: Kilometraje,
        pernota: pernota,
        placa: placa,
        aceite : aceite,
        Combustible : Combustible,
        Neumaticos : Neumaticos,
         vidrio : vidrio,
         vidrioLa : vidrioLa,
         retrovisor :  retrovisor,
         gasolina : gasolina,
         Moldura : Moldura,
         Carroseria, Carroseria,
         Antena : Antena,
         LucesDelanterasAl : LucesDelanterasAl,
         LucesDelanterasBa : LucesDelanterasBa,
         LucesIntermitente : LucesIntermitente,
         LucesCruceD : LucesCruceD,
         LucesCruceT : LucesCruceT,
         instrumento : instrumento,
         calefacion : calefacion,
         LuzInterna : LuzInterna,
         reproductor : reproductor,
         Bocina : Bocina,
         Encededor : Encededor,
         Espejo : Espejo,
         Ceniceros : Ceniceros,
         Cinturones : Cinturones,
         Botones : Botones,
         Manijas : Manijas,
         Herramienta : Herramienta,
         Gato : Gato,
         llave : llave,
         Triangulo : Triangulo,
         Caucho : Caucho,
         Extintor : Extintor,
         Asientos, Asientos,
         LuzRetro, LuzRetro,
         Limpiaparabrisas : Limpiaparabrisas,
         Alfombras : Alfombras,
         bateria : bateria,
         descripcion : descripcion,
         neutmatico : neutmatico

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
            <IonCardTitle>Registro</IonCardTitle>
            <IonCardSubtitle>Inspecciones</IonCardSubtitle>
          </IonCardHeader>
          <IonGrid>
        <IonRow>
          <IonCol size="6">
            <IonItem>
              <IonLabel id="fecha"  position="stacked">fecha</IonLabel>
              <IonInput aria-labelledby="fecha"  onIonInput={(e) => setDate(e.detail.value)} type="date" />
            </IonItem>
          </IonCol>
          <IonCol size="6">
            <IonItem>
            <IonLabel id="Placa" position="stacked">Placa</IonLabel>
            <IonSelect  aria-label="placa" onIonChange={(e) => setPlaca(e.detail.value)} placeholder="--Seleciones --">
             {carroData.map((item => 
                <IonSelectOption value="{item.placa}">{item.placa}</IonSelectOption>
            ))}   
            </IonSelect>
            </IonItem>
          </IonCol>
          <IonCol size="6">
            <IonItem>
            <IonLabel  id="Dependencia" position="stacked">Dependencia</IonLabel>
            <IonSelect aria-label="Dependencia" onIonChange={(e) => setDependencia(e.detail.value)} placeholder="--Seleciones --">
              <IonSelectOption value="toyota">toyota</IonSelectOption>
              <IonSelectOption value="Suzuki">Suzuki</IonSelectOption>
              <IonSelectOption value="Sanny">Sanny</IonSelectOption>
              <IonSelectOption value="Jac">Jac</IonSelectOption>
              <IonSelectOption value="Chevrolet">Chevrolet</IonSelectOption>
              <IonSelectOption value="Don Feng">Don Feng </IonSelectOption>
              <IonSelectOption value="kia">kia</IonSelectOption>
              <IonSelectOption value="Chery">Chery</IonSelectOption>
              <IonSelectOption value="Saipa">Saipa</IonSelectOption>
              <IonSelectOption value="Daihatsu">Daihatsu</IonSelectOption>
              <IonSelectOption value="Ford">Ford</IonSelectOption>
              <IonSelectOption value="Chasis Largo">Chasis Largo</IonSelectOption>
              <IonSelectOption value="Camioneta">Camioneta</IonSelectOption>
              <IonSelectOption value="Vehiculo">Vehiculo</IonSelectOption>
            </IonSelect>
            </IonItem>
          </IonCol>
          <IonCol size="6">
            <IonItem>
            <IonLabel id="Kilometraje" position="stacked">Kilometraje</IonLabel>
            <IonInput aria-label="Kilometraje" onIonInput={(e) => setKilometraje(e.detail.value)} placeholder="Kilometraje" type="number" />
            </IonItem>
          </IonCol>
          <IonCol size="6">
            <IonItem>
            <IonLabel  id="pernota" position="stacked">Lugar pernocta</IonLabel>
            <IonInput  aria-label="pernota" onIonInput={(e) => setPernota(e.detail.value)} placeholder="pernocta" />
            </IonItem>
          </IonCol>
          <IonCol size="6">
            <IonItem>
            <IonLabel id="Neumatico" position="stacked">M. Neumatico</IonLabel>
            <IonInput aria-label="Neumatico" onIonInput={(e) => setNeumaticos(e.detail.value)} placeholder="Neumatico" />
            </IonItem>
          </IonCol>
          <IonCol size="6">
            <IonItem>
            <IonLabel id="aceite" position="stacked">Tipo de aceite</IonLabel>
            <IonSelect aria-label="aceite" onIonChange={(e) => setAceite(e.detail.value)} placeholder="--Seleciones --">
              <IonSelectOption value="Operativo">Operativo</IonSelectOption>
            </IonSelect>
            </IonItem>
          </IonCol>
          </IonRow>
          </IonGrid>

    </IonCard>
    <IonCard className="margin">
          <IonCardHeader>
            <IonCardTitle>Guia de verificacion</IonCardTitle>
          </IonCardHeader>
             <IonGrid>
                <IonRow>
                    <IonCol size="6">
                      <IonCardSubtitle>Inspecciones</IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCardSubtitle >Si</IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCardSubtitle>No</IonCardSubtitle>
                 </IonCol>
                    <IonCol size="2">
                    <IonCardSubtitle>obs</IonCardSubtitle>
                 </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="6">
                      <IonCardSubtitle>vidrio delantero y traseros</IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setVidrio('DLSI')}
                      checked={vidrio === 'DLSI'} />
                    </IonCol>
                    <IonCol  size="2">
                    <IonCheckbox  onIonChange={(e) => setVidrio('DLNO')}
                      checked={vidrio === 'DLNO'}/>
                 </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  
                      onIonChange={(e) => setVidrio('DLOBS')}
                      checked={vidrio === 'DLOBS'}
                    />
                 </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="6">
                      <IonCardSubtitle>Vidrios laterales</IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setVidrioLa('si')}
                      checked={vidrioLa === 'si'} />
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setVidrioLa('no')}
                      checked={vidrioLa === 'no'} />
                 </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setVidrioLa('obs')}
                      checked={vidrioLa === 'obs'} />
                 </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="6">
                      <IonCardSubtitle>Retrovisores</IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setRetrovisor('si')}
                      checked={retrovisor === 'si'} />
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setRetrovisor('no')}
                      checked={retrovisor === 'no'} />
                 </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setRetrovisor('obs')}
                      checked={retrovisor === 'obs'} />
                 </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="6">
                      <IonCardSubtitle>Molduras</IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setMoldura('si')}
                      checked={Moldura === 'si'} />
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setMoldura('no')}
                      checked={Moldura === 'no'} />
                 </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setMoldura('obs')}
                      checked={Moldura === 'obs'} />
                 </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="6">
                      <IonCardSubtitle>Tapa de gasolina</IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setGasolina('si')}
                      checked={gasolina === 'si'} />
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setGasolina('no')}
                      checked={gasolina === 'no'} />
                 </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setGasolina('obs')}
                      checked={gasolina === 'obs'} />
                 </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="6">
                      <IonCardSubtitle>Carroseria sin golpes</IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setCarroseria('si')}
                      checked={Carroseria === 'si'} />
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setCarroseria('no')}
                      checked={Carroseria === 'no'} />
                 </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setCarroseria('obs')}
                      checked={Carroseria === 'obs'} />
                 </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="6">
                      <IonCardSubtitle>Antena</IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setAntena('si')}
                      checked={Antena === 'si'} />
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setAntena('no')}
                      checked={Antena === 'no'} />
                 </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setAntena('obs')}
                      checked={Antena === 'obs'} />
                 </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="6">
                      <IonCardSubtitle>luces delanteras bajas</IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setLucesDelanterasBa('si')}
                      checked={LucesDelanterasBa === 'si'} />
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setLucesDelanterasBa('no')}
                      checked={LucesDelanterasBa === 'no'} />
                 </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setLucesDelanterasBa('obs')}
                      checked={LucesDelanterasBa === 'obs'} />
                 </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="6">
                      <IonCardSubtitle>luces delanteras altas</IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setLucesDelanterasAL('si')}
                      checked={LucesDelanterasAl === 'si'} />
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setLucesDelanterasAL('no')}
                      checked={LucesDelanterasAl === 'no'} />
                 </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setLucesDelanterasAL('obs')}
                      checked={LucesDelanterasAl === 'obs'} />
                 </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="6">
                      <IonCardSubtitle>luces intermitentes</IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setLucesIntermitente('si')}
                      checked={LucesIntermitente === 'si'} />
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setLucesIntermitente('no')}
                      checked={LucesIntermitente === 'no'} />
                 </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setLucesIntermitente('obs')}
                      checked={LucesIntermitente === 'obs'} />
                 </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="6">
                      <IonCardSubtitle>luces de cruces delanteras</IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setLucesCruceD('si')}
                      checked={LucesCruceD === 'si'} />
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setLucesCruceD('no')}
                      checked={LucesCruceD === 'no'} />
                 </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setLucesCruceD('obs')}
                      checked={LucesCruceD === 'obs'} />
                 </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="6">
                      <IonCardSubtitle>luces de cruces traseras</IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setLucesCruceT('si')}
                      checked={LucesCruceT === 'si'} />
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setLucesCruceT('no')}
                      checked={LucesCruceT === 'no'} />
                 </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setLucesCruceT('obs')}
                      checked={LucesCruceT === 'obs'} />
                 </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="6">
                      <IonCardSubtitle>Instrumento de tablero</IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setInstrumento('si')}
                      checked={instrumento === 'si'} />
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setInstrumento('no')}
                      checked={instrumento === 'no'} />
                 </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setInstrumento('obs')}
                      checked={instrumento === 'obs'} />
                 </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol size="6">
                      <IonCardSubtitle>Calefaccion</IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setCalefacion('si')}
                      checked={calefacion === 'si'} />
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setCalefacion('no')}
                      checked={calefacion === 'no'} />
                 </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setCalefacion('obs')}
                      checked={calefacion === 'obs'} />
                 </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol size="6">
                      <IonCardSubtitle>luz interna</IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setLuzInterna('si')}
                      checked={LuzInterna === 'si'} />
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setLuzInterna('no')}
                      checked={LuzInterna === 'no'} />
                 </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setLuzInterna('obs')}
                      checked={LuzInterna === 'obs'} />
                 </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol size="6">
                      <IonCardSubtitle>Equipo reproductor</IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setReproductor('si')}
                      checked={reproductor === 'si'} />
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setReproductor('no')}
                      checked={reproductor === 'no'} />
                 </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setReproductor('obs')}
                      checked={reproductor === 'obs'} />
                 </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="6">
                      <IonCardSubtitle>Bocina</IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setBocina('si')}
                      checked={Bocina === 'si'} />
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setBocina('no')}
                      checked={Bocina === 'no'} />
                 </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setBocina('obs')}
                      checked={Bocina === 'obs'} />
                 </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="6">
                      <IonCardSubtitle>Encededor de cigarrillos</IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setEncededor('si')}
                      checked={Encededor === 'si'} />
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setEncededor('no')}
                      checked={Encededor === 'no'} />
                 </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setEncededor('obs')}
                      checked={Encededor === 'obs'} />
                 </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="6">
                      <IonCardSubtitle>Espejo retrovisor</IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setEspejo('si')}
                      checked={Espejo === 'si'} />
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setEspejo('no')}
                      checked={Espejo === 'no'} />
                 </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setEspejo('obs')}
                      checked={Espejo === 'obs'} />
                 </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol size="6">
                      <IonCardSubtitle>Ceniceros</IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setCeniceros('si')}
                      checked={Ceniceros === 'si'} />
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setCeniceros('no')}
                      checked={Ceniceros === 'no'} />
                 </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setCeniceros('obs')}
                      checked={Ceniceros === 'obs'} />
                 </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol size="6">
                      <IonCardSubtitle>Cinturones</IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setCinturones('si')}
                      checked={Cinturones === 'si'} />
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setCinturones('no')}
                      checked={Cinturones === 'no'} />
                 </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setCinturones('obs')}
                      checked={Cinturones === 'obs'} />
                 </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol size="6">
                      <IonCardSubtitle>Botones de interiores</IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setBotones('si')}
                      checked={Botones === 'si'} />
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setBotones('no')}
                      checked={Botones === 'no'} />
                 </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setBotones('obs')}
                      checked={Botones === 'obs'} />
                 </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol size="6">
                      <IonCardSubtitle>Manijas </IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setManijas('si')}
                      checked={Manijas === 'si'} />
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setManijas('no')}
                      checked={Manijas === 'no'} />
                 </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setManijas('obs')}
                      checked={Manijas === 'obs'} />
                 </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol size="6">
                      <IonCardSubtitle>Herramienta generales </IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setHerramienta('si')}
                      checked={Herramienta === 'si'} />
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setHerramienta('no')}
                      checked={Herramienta === 'no'} />
                 </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setHerramienta('obs')}
                      checked={Herramienta === 'obs'} />
                 </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol size="6">
                      <IonCardSubtitle>Gato </IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setGato('si')}
                      checked={Gato === 'si'} />
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setGato('no')}
                      checked={Gato === 'no'} />
                 </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setGato('obs')}
                      checked={Gato === 'obs'} />
                 </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="6">
                      <IonCardSubtitle>llave de cruz </IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setllave('si')}
                      checked={llave === 'si'} />
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setllave('no')}
                      checked={llave === 'no'} />
                 </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setllave('obs')}
                      checked={llave === 'obs'} />
                 </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="6">
                      <IonCardSubtitle>Triangulo de emergencia </IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setTriangulo('si')}
                      checked={Triangulo === 'si'} />
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setTriangulo('no')}
                      checked={Triangulo === 'no'} />
                 </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setTriangulo('obs')}
                      checked={Triangulo === 'obs'} />
                 </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="6">
                      <IonCardSubtitle>Caucho de repuesto </IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setCaucho('si')}
                      checked={Caucho === 'si'} />
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setCaucho('no')}
                      checked={Caucho === 'no'} />
                 </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setCaucho('obs')}
                      checked={Caucho === 'obs'} />
                 </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol size="6">
                      <IonCardSubtitle>Extintor</IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setExtintor('si')}
                      checked={Extintor === 'si'} />
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setExtintor('no')}
                      checked={Extintor === 'no'} />
                 </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setExtintor('obs')}
                      checked={Extintor === 'obs'} />
                 </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol size="6">
                      <IonCardSubtitle>Asientos</IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setAsientos('si')}
                      checked={Asientos === 'si'} />
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setAsientos('no')}
                      checked={Asientos === 'no'} />
                 </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setAsientos('obs')}
                      checked={Asientos === 'obs'} />
                 </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol size="6">
                      <IonCardSubtitle>Luz de retroceso</IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setLuzRetro('si')}
                      checked={LuzRetro === 'si'} />
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setLuzRetro('no')}
                      checked={LuzRetro === 'no'} />
                 </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setLuzRetro('obs')}
                      checked={LuzRetro === 'obs'} />
                 </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="6">
                      <IonCardSubtitle>Limpiaparabrisas</IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setLimpiaparabrisas('si')}
                      checked={Limpiaparabrisas === 'si'} />
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setLimpiaparabrisas('no')}
                      checked={Limpiaparabrisas === 'no'} />
                 </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setLimpiaparabrisas('obs')}
                      checked={Limpiaparabrisas === 'obs'} />
                 </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="6">
                      <IonCardSubtitle>Alfombras</IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setAlfombras('si')}
                      checked={Alfombras === 'si'} />
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setAlfombras('no')}
                      checked={Alfombras === 'no'} />
                 </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setAlfombras('obs')}
                      checked={Alfombras === 'obs'} />
                 </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="6">
                      <IonCardSubtitle>Estado de la bateria</IonCardSubtitle>
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setBateria('si')}
                      checked={bateria === 'si'} />
                    </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setBateria('no')}
                      checked={bateria === 'no'} />
                 </IonCol>
                    <IonCol size="2">
                    <IonCheckbox  onIonChange={(e) => setBateria('obs')}
                      checked={bateria === 'obs'} />
                 </IonCol>
                </IonRow>

                <IonRow>
                <IonCol size="6">
                <IonItem>
                <IonLabel id="Combustible" position="stacked">Combustible</IonLabel>
                <IonSelect aria-label="Combustible" onIonChange={(e) => setCombustible(e.detail.value)} placeholder="--Seleciones --">
               <IonSelectOption value="E">E</IonSelectOption>
               <IonSelectOption value="1/4">1/4</IonSelectOption>
               <IonSelectOption value="1/2">1/2</IonSelectOption>
               <IonSelectOption value="3/4">3/4</IonSelectOption>
               <IonSelectOption value="F">F</IonSelectOption>
               <IonSelectOption value="I">I</IonSelectOption>
               </IonSelect>
            </IonItem>
          </IonCol>
                <IonCol size="6">
                <IonItem>
                <IonLabel id="Neumatico" position="stacked">Neumatico</IonLabel>
                <IonSelect aria-label="Neumatico" onIonChange={(e) => setNeumatico(e.detail.value)} placeholder="--Seleciones --">
               <IonSelectOption value="100">100%</IonSelectOption>
               <IonSelectOption value="80">80%</IonSelectOption>
               <IonSelectOption value="60">60%</IonSelectOption>
               <IonSelectOption value="40">40%</IonSelectOption>
               <IonSelectOption value="20">20%</IonSelectOption>
               <IonSelectOption value="0">0%</IonSelectOption>
               </IonSelect>
              </IonItem>
            </IonCol>
                </IonRow>
                <IonRow>
                <IonTextarea onIonInput={(e) => setDescripcion(e.detail.value)} label="Descripcion" labelPlacement="floating" fill="solid" placeholder="Enter text"></IonTextarea>
                </IonRow>
             </IonGrid>
        <div className="ion-text-center">
        <button className="btn-formulario" onClick={store}>Finalizar</button>
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

export default Registroinspe;
