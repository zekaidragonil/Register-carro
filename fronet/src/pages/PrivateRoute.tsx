import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const PrivateRoute = ({ roles, ...rest }: any) => {
  const { userD } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      const token = localStorage.getItem('token');
      const isAuthenticated = !!token;

      // Verifica si el usuario tiene al menos uno de los roles requeridos
      const hasRequiredRole =
        userD &&
        userD.roleNames &&
        roles &&
        roles.some((role: string) => userD.roleNames.includes(role));

      // Establece el estado de carga como falso una vez que se ha realizado la verificación
      setLoading(false);

      if (!isAuthenticated || !userD || !hasRequiredRole) {
        // Redirige al usuario al inicio de sesión si no está autenticado o no tiene los roles requeridos
        return <Redirect to="/login" />;
      }
    };

    checkAuthentication();
  }, [userD, roles]);

  if (loading) {
    // Muestra un indicador de carga o cualquier contenido que desees mientras se verifica la autenticación
    return <div>Loading...</div>;
  }

  // Si no está cargando, renderiza la ruta protegida
  return <Route {...rest} />;
};

export default PrivateRoute;
