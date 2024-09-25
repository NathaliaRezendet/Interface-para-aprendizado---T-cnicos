import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DeviceTopics from './DeviceTopics';
import axios from 'axios';

function DeviceDetails() {
  const { id } = useParams(); 
  const [device, setDevice] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchDeviceDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/device/${id}`);
        setDevice(response.data); 
      } catch (err) {
        setError('Erro ao buscar detalhes do dispositivo.'); 
      } finally {
        setLoading(false); 
      }
    };

    fetchDeviceDetails(); 
  }, [id]); 

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">Detalhes do Dispositivo</h1>
      {device ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">{device.name}</h2>
          {device.imageUrl && (
            <img
              src={`${process.env.PUBLIC_URL}/${device.imageUrl}`}
              alt={device.name}
              className="mx-auto shadow-lg border-4 border-gray-300 rounded-lg max-w-full max-h-screen object-contain"
            />
          )}
        </div>
      ) : (
        <p>Dispositivo não encontrado.</p>
      )}

      <h2 className="text-2xl font-semibold mt-8">Tópicos</h2>
      <DeviceTopics deviceId={id} /> 
    </div>
  );
}

export default DeviceDetails;
