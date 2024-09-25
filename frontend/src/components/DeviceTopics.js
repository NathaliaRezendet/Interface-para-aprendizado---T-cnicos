import React, { useState } from "react";

function DeviceTopics() {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentSubtopics, setCurrentSubtopics] = useState([]);
  const [selectedSubgroup, setSelectedSubgroup] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const topics = [
    {
      id: 1,
      name: "STATUS",
      Subgroups: [
        {
          id: 101,
          name: "INFORMAÇÕES DE DISPOSITIVO",
          imageUrl: "/images/ac-unee.png",
          Subtopics: [],
        },
        {
          id: 102,
          name: "INFORMAÇÕES DE REDE",
          Subtopics: [
            {
              id: 1021,
              name: "Conexão WAN",
              imageUrl: "/images/ac-unee.png",
            },
            {
              id: 1022,
              name: "Informação PON",
              imageUrl: "/images/ac-unee.png",
            },
          ],
        },
        {
          id: 103,
          name: "INFORMAÇÕES DE USUÁRIO",
          Subtopics: [
            {
              id: 1031,
              name: "WLAN Radio2.4G",
              imageUrl: "/images/wlan2.4.png",
            },
            { id: 1032, name: "WLAN Radio5G", imageUrl: "/images/wlan5g.png" },
            { id: 1033, name: "Ethernet", imageUrl: "/images/ethernet.png" },
          ],
        },
        {
          id: 104,
          name: "STATUS DE VOIP",
          imageUrl: "/images/device_info.png",
          Subtopics: [],
        },
        {
          id: 105,
          name: "TOPOLOGIA",
          imageUrl: "/images/device_info.png",
          Subtopics: [],
        },
      ],
    },
    {
      id: 2,
      name: "REDE",
      Subgroups: [
        {
          id: 201,
          name: "WAN",
          Subtopics: [
            {
              id: 2011,
              name: "Conexão WAN",
              imageUrl: "/images/wan_connection.png",
            },
            {
              id: 2012,
              name: "Configuração Comum de WLAN",
              imageUrl: "/images/wlan_common_config.png",
            },
          ],
        },
        {
          id: 202,
          name: "WLAN Radio2.4G",
          Subtopics: [
            { id: 2021, name: "Básico", imageUrl: "/images/wlan2.4_basic.png" },
            {
              id: 2022,
              name: "Configurações de SSID",
              imageUrl: "/images/wlan2.4_ssid.png",
            },
            {
              id: 2023,
              name: "Segurança",
              imageUrl: "/images/wlan2.4_security.png",
            },
            {
              id: 2024,
              name: "Lista de Controle de Acesso",
              imageUrl: "/images/wlan2.4_acl.png",
            },
            {
              id: 2025,
              name: "Dispositivos Associados",
              imageUrl: "/images/wlan2.4_associated_devices.png",
            },
            { id: 2026, name: "WMM", imageUrl: "/images/wlan2.4_wmm.png" },
            { id: 2027, name: "WPS", imageUrl: "/images/wlan2.4_wps.png" },
            {
              id: 2028,
              name: "WIFIs Vizinhos",
              imageUrl: "/images/wlan2.4_neighbors.png",
            },
          ],
        },
        {
          id: 203,
          name: "WLAN Radio5G",
          Subtopics: [
            { id: 2031, name: "Básico", imageUrl: "/images/wlan5g_basic.png" },
            {
              id: 2032,
              name: "Configurações de SSID",
              imageUrl: "/images/wlan5g_ssid.png",
            },
            {
              id: 2033,
              name: "Segurança",
              imageUrl: "/images/wlan5g_security.png",
            },
            {
              id: 2034,
              name: "Lista de Controle de Acesso",
              imageUrl: "/images/wlan5g_acl.png",
            },
            {
              id: 2035,
              name: "Dispositivos Associados",
              imageUrl: "/images/wlan5g_associated_devices.png",
            },
            { id: 2036, name: "WMM", imageUrl: "/images/wlan5g_wmm.png" },
            { id: 2037, name: "WPS", imageUrl: "/images/wlan5g_wps.png" },
            {
              id: 2038,
              name: "WIFIs Vizinhos",
              imageUrl: "/images/wlan5g_neighbors.png",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "LAN",
      Subgroups: [
        {
          id: 301,
          name: "ISOLAMENTO LAN-LAN",
          imageUrl: "/images/lan_isolation.png",
        },
        { id: 302, name: "SERVIDOR DHCP", imageUrl: "/images/dhcp_server.png" },
        {
          id: 303,
          name: "SERVIDOR DHCP (IPv6)",
          imageUrl: "/images/dhcpv6_server.png",
        },
      ],
    },
    {
      id: 4,
      name: "SEGURANÇA",
      Subgroups: [
        {
          id: 401,
          name: "CONTROLE DE SERVIÇOS",
          imageUrl: "/images/service_control.png",
        },
      ],
    },
    {
      id: 5,
      name: "APLICATIVO",
      Subgroups: [
        {
          id: 501,
          name: "VOIP",
          Subtopics: [
            { id: 5011, name: "CONEXÃO WAN", imageUrl: "/images/voip_wan.png" },
            {
              id: 5012,
              name: "AVANÇADO",
              imageUrl: "/images/voip_advanced.png",
            },
            { id: 5013, name: "SIP", imageUrl: "/images/voip_sip.png" },
            {
              id: 5014,
              name: "CONTAS SIP",
              imageUrl: "/images/voip_sip_accounts.png",
            },
            {
              id: 5015,
              name: "SERVIÇOS VOIP",
              imageUrl: "/images/voip_services.png",
            },
            { id: 5016, name: "MÍDIA", imageUrl: "/images/voip_media.png" },
            {
              id: 5017,
              name: "IDENTIFICADOR DE CHAMADAS",
              imageUrl: "/images/voip_caller_id.png",
            },
          ],
        },
        {
          id: 502,
          name: "ENCAMINHAMENTO DE PORTA",
          imageUrl: "/images/port_forwarding.png",
        },
        { id: 503, name: "PORT TRIGGER", imageUrl: "/images/port_trigger.png" },
      ],
    },
    {
      id: 6,
      name: "ADMINISTRAÇÃO",
      Subgroups: [
        {
          id: 601,
          name: "GESTÃO DE USUÁRIOS",
          imageUrl: "/images/user_management.png",
        },
        {
          id: 602,
          name: "ADM DE SISTEMA",
          Subtopics: [
            {
              id: 6021,
              name: "ADM DE SISTEMA",
              imageUrl: "/images/system_admin.png",
            },
          ],
        },
        {
          id: 603,
          name: "DIAGNÓSTICO",
          Subtopics: [
            {
              id: 6031,
              name: "DIAGNÓSTICO DE PING",
              imageUrl: "/images/ping_diagnosis.png",
            },
            { id: 6032, name: "TABELA MAC", imageUrl: "/images/mac_table.png" },
          ],
        },
      ],
    },
  ];

  const handleSubgroupClick = (subgroup) => {
    setSelectedSubgroup(subgroup);
    if (subgroup.Subtopics && subgroup.Subtopics.length > 0) {
      setCurrentSubtopics(subgroup.Subtopics);
      setModalVisible(true);
    } else {
      handleImageClick(subgroup.imageUrl);
    }
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setModalVisible(false);
    setCurrentSubtopics([]);
    setSelectedSubgroup(null);
  };

  return (
    <div className="p-4">
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative max-w-full max-h-full">
            <img
              src={selectedImage}
              alt="Imagem Ampliada"
              className="max-w-full max-h-screen object-contain rounded-lg shadow-lg border-4 border-white"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-red-500 text-white font-bold py-1 px-3 rounded"
            >
              X
            </button>
          </div>
        </div>
      )}

      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded shadow-lg relative max-h-96 overflow-auto">
            <span
              className="absolute top-2 right-2 text-black cursor-pointer"
              onClick={closeModal}
            >
              &times;
            </span>
            <h2 className="text-xl font-semibold mb-4">
              {selectedSubgroup.name}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {currentSubtopics.length > 0 ? (
                currentSubtopics.map((subtopic) => (
                  <button
                    key={subtopic.id}
                    className="bg-[#cc063e] hover:bg-[#a50a32] text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                      handleImageClick(subtopic.imageUrl);
                      closeModal();
                    }}
                  >
                    {subtopic.name}
                  </button>
                ))
              ) : (
                <p>Nenhum subtema disponível.</p>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4">
        {topics.map((topic) => (
          <div key={topic.id} className="p-4 border rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{topic.name}</h3>
            {topic.Subgroups.length > 0 && (
              <div className="mt-4">
                {topic.Subgroups.map((subgroup) => (
                  <button
                    key={subgroup.id}
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-full mb-2"
                    onClick={() => handleSubgroupClick(subgroup)}
                  >
                    {subgroup.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeviceTopics;
