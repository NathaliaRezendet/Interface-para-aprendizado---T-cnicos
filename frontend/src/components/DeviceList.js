import React from 'react';
import { Link } from 'react-router-dom';

const devices = [
  { id: 1, name: 'Maxprint-Branca(MAXFIBER 1200G2)' },
  { id: 2, name: 'Maxprint Preta(MAXFIBER 1200GM FXS)' },
  { id: 3, name: 'Raisecom DualBand' },
  { id: 4, name: 'Nokia G-140W(AZUL)' },
  { id: 5, name: 'Nokia G-240w-c (VERDE)' },
  { id: 6, name: 'Shoreline' },
  { id: 7, name: 'Intelbras' },
  { id: 8, name: 'Huawei PRETA(HG8145)' },
  { id: 9, name: 'AC Unee by Stavix MP-G421R' },
  { id: 10, name: 'D-Link' },
  { id: 11, name: 'Tp-link' },
  { id: 12, name: 'ZTE 670L' },
  { id: 13, name: 'ZTE AX3000 F6600p' },
];

function DeviceList() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">Dispositivos</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {devices.map(device => (
          <li key={device.id} className="flex justify-center">
            <Link to={`/device/${device.id}`}>
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-4 px-6 rounded shadow-lg w-64 h-32 flex items-center justify-between">
                <span>{device.name}</span>
                <span className="ml-2">→</span>
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DeviceList;
