import {IonGrid, IonRow, IonCol, IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonInput, IonItem, IonLabel, IonPage, IonSelect, IonSelectOption, IonAlert } from "@ionic/react";
import '../pages/pages.css'
import { useState } from "react";
import clienteAxios from "./config/axios";
import Menu from "../components/Menu";
import { useHistory } from "react-router";


const  Registro: React.FC = () => {
  const url = '/auth/carro';
  const [Bien , setBien] = useState('');
  const [tipo , setTipo] = useState('');
  const [marca , setMarca] = useState('');
  const [condicion , setCondicion] = useState('');
  const [modelo , setModelo] = useState('');
  const [ano , setAno] = useState('');
  const [Vin , setVin] = useState('');
  const [carroseria, setCarroseria] = useState('');
  const [motor , setMotor] = useState('');
  const [placa , setPlaca] = useState('');
  const [color , setColor] = useState('');
  const [estatus , setEstatus] = useState('');
  const [origen , setOrigenes] = useState('');
  const [img , setImg] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [titulo, setTitulo] = useState('');
 const  history = useHistory();

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files && e.target.files[0];
  //   if (file) {
  //     // Puedes hacer algo con el archivo, como cargarlo o mostrar una vista previa.
  //     setImg(file.name);
  //   }
  // };


  const store = async () => {
    const token = localStorage.getItem('token');

    try {
      const response =  await clienteAxios.post(url, {
        Bien: Bien,
        tipo: tipo,
        marca: marca,
        condicion: condicion,
        modelo: modelo,
        ano: ano,
        Vin: Vin,
        carroseria: carroseria,
        motor: motor,
        placa: placa,
        color: color,
        estatus: estatus,
        origen: origen,
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

    setBien('');
    setTipo('');
    setMarca('');
    setCondicion('');
    setModelo('');
    setAno('');
    setVin('');
    setCarroseria('');
    setMotor('');
    setPlaca('');
    setColor('');
    setEstatus('');
    setOrigenes('');
   
  
  }


    return (
      <IonPage>
      <IonContent>
        <IonCard className="margin">
          <IonCardHeader>
            <IonCardTitle>Registro</IonCardTitle>
            <IonCardSubtitle>Vehiculos</IonCardSubtitle>
          </IonCardHeader>
          <IonGrid>
        <IonRow>
          <IonCol size="6">
            <IonItem>
              <IonLabel id="bien"  position="stacked">N° de Bien</IonLabel>
              <IonInput aria-labelledby="bien"  onIonInput={(e) => setBien(e.detail.value)} placeholder="Bien" />
            </IonItem>
          </IonCol>
          <IonCol size="6">
            <IonItem>
            <IonLabel id="tipo" position="stacked">Tipo</IonLabel>
            <IonSelect  aria-label="tipo" onIonChange={(e) => setTipo(e.detail.value)} placeholder="--Seleciones --">
              <IonSelectOption value="Pick up /Cabina">Pick up /Cabina</IonSelectOption>
              <IonSelectOption value="Acta">Sport Wagon</IonSelectOption>
              <IonSelectOption value="Motocicleta">Motocicleta</IonSelectOption>
              <IonSelectOption value="Mini bus">Mini bus</IonSelectOption>
              <IonSelectOption value="Chuto">Chuto</IonSelectOption>
              <IonSelectOption value="Caminon Chuto">Caminon Chuto</IonSelectOption>
              <IonSelectOption value="Ambulancia">Ambulancia</IonSelectOption>
              <IonSelectOption value="Sedan">Sedan</IonSelectOption>
              <IonSelectOption value="Sporwagon">Sporwagon</IonSelectOption>
              <IonSelectOption value="Pick UP D/Cabina">Pick UP D/Cabina</IonSelectOption>
              <IonSelectOption value="Tanque Cisterna">Tanque Cisterna</IonSelectOption>
              <IonSelectOption value="Chasis Largo">Chasis Largo</IonSelectOption>
              <IonSelectOption value="Camioneta">Camioneta</IonSelectOption>
              <IonSelectOption value="Vehiculo">Vehiculo</IonSelectOption>
            </IonSelect>
            </IonItem>
          </IonCol>
          <IonCol size="6">
            <IonItem>
            <IonLabel  id="marca" position="stacked">Marca</IonLabel>
            <IonSelect aria-label="marca" onIonChange={(e) => setMarca(e.detail.value)} placeholder="--Seleciones --">
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
            <IonLabel id="origen" position="stacked">Origen</IonLabel>
            <IonInput aria-label="origen" onIonInput={(e) => setOrigenes(e.detail.value)} placeholder="Origen" />
            </IonItem>
          </IonCol>
          <IonCol size="6">
            <IonItem>
            <IonLabel  id="modelo" position="stacked">Modelo</IonLabel>
            <IonInput  aria-label="modelo" onIonInput={(e) => setModelo(e.detail.value)} placeholder="Modelo" />
            </IonItem>
          </IonCol>
          <IonCol size="6">
            <IonItem>
            <IonLabel id="año" position="stacked">Año</IonLabel>
            <IonSelect aria-label="año" onIonChange={(e) => setAno(e.detail.value)} placeholder="--Seleciones --">
              <IonSelectOption value="2023">2023</IonSelectOption>
              <IonSelectOption value="2022">2022</IonSelectOption>
              <IonSelectOption value="2021">2021</IonSelectOption>
              <IonSelectOption value="2020">2020</IonSelectOption>
              <IonSelectOption value="2019">2019</IonSelectOption>
              <IonSelectOption value="2018">2018</IonSelectOption>
              <IonSelectOption value="2017">2017</IonSelectOption>
              <IonSelectOption value="2016">2016</IonSelectOption>
              <IonSelectOption value="2015">2015</IonSelectOption>
              <IonSelectOption value="2014">2014</IonSelectOption>
              <IonSelectOption value="2013">2013</IonSelectOption>
              <IonSelectOption value="2012">2012</IonSelectOption>
              <IonSelectOption value="2011">2011</IonSelectOption>
              <IonSelectOption value="2010">2010</IonSelectOption>
              <IonSelectOption value="2009">2009</IonSelectOption>
              <IonSelectOption value="2008">2008</IonSelectOption>
              <IonSelectOption value="2007">2007</IonSelectOption>
              <IonSelectOption value="2006">2006</IonSelectOption>
              <IonSelectOption value="2005">2005</IonSelectOption>
              <IonSelectOption value="2004">2004</IonSelectOption>
              <IonSelectOption value="2004">2004</IonSelectOption>
              <IonSelectOption value="2003">2003</IonSelectOption>
            </IonSelect>
            </IonItem>
          </IonCol>
          <IonCol size="6">
            <IonItem>
            <IonLabel id="placa" position="stacked">Placa</IonLabel>
            <IonInput aria-label="placa" onIonInput={(e) => setPlaca(e.detail.value)} placeholder="Placa" />
            </IonItem>
          </IonCol>
          <IonCol size="6">
            <IonItem>
            <IonLabel id="vin" position="stacked">Vin</IonLabel>
            <IonInput aria-label="vin" onIonInput={(e) => setVin(e.detail.value)} placeholder="Vin" />
            </IonItem>
          </IonCol>
          <IonCol size="6">
            <IonItem>
            <IonLabel id="carroseria" position="stacked">N° carroseria</IonLabel>
            <IonInput aria-label="carroseria" onIonInput={(e) => setCarroseria(e.detail.value)} placeholder="N° carroseria" />
            </IonItem>
          </IonCol>
          <IonCol size="6">
            <IonItem>
            <IonLabel id="serial" position="stacked">Serial del motor</IonLabel>
            <IonInput aria-label="serial" onIonInput={(e) => setMotor(e.detail.value)} placeholder="Serial del motor" />
            </IonItem>
          </IonCol>
          <IonCol size="6">
            <IonItem>
            <IonLabel id="color" position="stacked">Color</IonLabel>
            <IonInput aria-label="color" onIonInput={(e) => setColor(e.detail.value)} placeholder="Color" />
            </IonItem>
          </IonCol>
          <IonCol size="6">
            <IonItem>
            <IonLabel id="estatus" position="stacked">Estatus</IonLabel>
            <IonSelect aria-label="estatus" onIonChange={(e) => setEstatus(e.detail.value)} placeholder="--Seleciones --">
              <IonSelectOption value="Operativo">Operativo</IonSelectOption>
              <IonSelectOption value="inactivo">inactivo</IonSelectOption>
         
            </IonSelect>
            </IonItem>
          </IonCol>
          <IonCol size="6">
            <IonItem>
            <IonLabel id="condicion" position="stacked">Condicion actual</IonLabel>
            <IonSelect  aria-label="condicion" onIonChange={(e) => setCondicion(e.detail.value)} placeholder="--Seleciones --">
              <IonSelectOption value="comando">Comando</IonSelectOption>
              <IonSelectOption value="Acta">Acta de asignacion</IonSelectOption>
              <IonSelectOption value="Disponible">Disponible</IonSelectOption>
            </IonSelect>
            </IonItem>
          </IonCol>
          </IonRow>
          </IonGrid>
      {/* <IonItem>
      <input type="file" onChange={handleFileChange} />
      </IonItem>    */}
      <div className="ion-text-center">
      <button className="btn-formulario" onClick={store}>Registrar</button>
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

export default Registro;

