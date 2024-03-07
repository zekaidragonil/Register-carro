// UserContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import clienteAxios from '../pages/config/axios'; // Asegúrate de importar tu instancia de Axios

interface UserContextType {
  userData: any; // Reemplaza 'any' con el tipo correcto de tus datos de usuario
  setUserData: React.Dispatch<React.SetStateAction<any>>;
  carroData: any; // Reemplaza 'any' con el tipo correcto de tus datos de carro
  setCarroData: React.Dispatch<React.SetStateAction<any>>;
  userD: any; // Reemplaza 'any' con el tipo correcto de tus datos de carro
  setUser: React.Dispatch<React.SetStateAction<any>>;
  asignacion: any; // Reemplaza 'any' con el tipo correcto de tus datos de carro
  setAsignacion: React.Dispatch<React.SetStateAction<any>>;

}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<any | null>([]); // Reemplaza 'any' con el tipo correcto
  const [carroData, setCarroData] = useState<any | null>([]); // Reemplaza 'any' con el tipo correcto
  const [userD, setUser] = useState<any | null>([]); // Reemplaza 'any' con el tipo correcto
  const [asignacion, setAsignacion] = useState<any | null>([]); // Reemplaza 'any' con el tipo correcto

  useEffect(() => {
    const  Datos = async () =>{
      const token = localStorage.getItem('token');
    if (token) {
      await clienteAxios
        .get('/auth/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
  
        });
      }
    }
    Datos();
  }, []); 

  useEffect(() => {
    const DatosuSer = async () =>{
      const token = localStorage.getItem('token');
      if (token) {
       await  clienteAxios
          .get('/auth/users', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            setUserData(response.data);
    
          })
          .catch((error) => {  
          });
      }
    }
    DatosuSer();
  }, []); 

  useEffect( () =>  {
    const Carros = async () =>{
      const token =  localStorage.getItem('token');
    if (token) {
     await clienteAxios
        .get('/auth/carros', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
            setCarroData(response.data);
        })
        .catch((error) => {
       });
      }
     }  
    Carros();
  }, []); 

  useEffect( () =>  {
    const Asignacion = async () =>{
      const token =  localStorage.getItem('token');
    if (token) {
     await clienteAxios
        .get('/auth/asignaciones', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setAsignacion(response.data);
        })
        .catch((error) => {
       });
      }
     }  
     Asignacion();
  }, []); 

  return (
    <UserContext.Provider value={{ asignacion, setAsignacion, userData, setUserData, carroData, setCarroData , userD, setUser  }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser debe ser usado dentro de un UserProvider');
  }
  return context;
};
