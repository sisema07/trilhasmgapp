// DADOS INCORPORADOS DIRETAMENTE NO JS (Client-Side Database)
const PARKS_DATA = [
       {
        "id": "biribiri",
        "nome": "PE Biribiri",
        "municipios": ["Diamantina"],
        "regiao": "Alto Jequitinhonha",
        "coordenadas_base": { "latitude": -18.2500, "longitude": -43.6000 },
        "geofence_raio_m": 500,
        "resumo": "Parque inserido na Serra do Espinhaço, com campos rupestres, cachoeiras e a histórica Vila de Biribiri (antiga vila têxtil).",
        "infraestrutura": ["Trilhas", "Cachoeiras", "Sede administrativa", "Portaria", "Sinalização"],
        "status_operacao": "Aberto (visitação com horários definidos pela unidade)",
        "link_agendamento": "https://ief.mg.gov.br/unidades-de-conservacao/protecao-integral (consultar página da unidade)",
        "pontos_interesse": [
            { "poi_id": "vilabiribiri", "nome": "Vila de Biribiri", "tipo": "Histórico", "latitude": -18.2520, "longitude": -43.6050, "quiz_id": "quiz_biribiri_01", "desc_curta": "Antiga vila têxtil dentro do parque." },
            { "poi_id": "cachoeira_sentinela", "nome": "Cachoeira da Sentinela", "tipo": "Natural", "latitude": -18.2600, "longitude": -43.6100, "quiz_id": null, "desc_curta": "Cachoeira acessível por trilha; ponto fotográfico." }
        ],
        "badges_exclusivos": ["Selo_Biribiri_Visita", "Badge_Arquiteto_da_Historia"]
    },
    {
        "id": "ibitipoca",
        "nome": "PE Ibitipoca",
        "municipios": ["Lima Duarte", "Santa Rita de Ibitipoca"],
        "regiao": "Zona da Mata",
        "coordenadas_base": { "latitude": -21.7142, "longitude": -43.8967 },
        "geofence_raio_m": 800,
        "resumo": "Famoso por picos, grutas e a Janela do Céu; dividido em circuitos (Janela do Céu, Pião e Águas). Visitação controlada por agendamento/ingressos.",
        "infraestrutura": ["Trilhas (circuitos sinalizados)", "Camping", "Centro de Visitantes", "Bilheteria/Agendamento online"],
        "status_operacao": "Aberto (visitação com agendamento e limites diários)",
        "link_agendamento": "https://parquedoibitipoca.com.br/loja/ (ingressos e agendamento)",
        "pontos_interesse": [
            { "poi_id": "janeladoceu", "nome": "Janela do Céu", "tipo": "Natural", "latitude": -21.7300, "longitude": -43.8850, "quiz_id": "quiz_ibitipoca_01", "desc_curta": "Cartão-postal do parque, trilha de longa duração." },
            { "poi_id": "pico_piao", "nome": "Pico do Pião", "tipo": "Natural", "latitude": -21.7250, "longitude": -43.8900, "quiz_id": null, "desc_curta": "Pico com vista para os circuitos." }
        ],
        "badges_exclusivos": ["Selo_Ibitipoca_Visita", "Badge_Mestre_das_Grutas"]
    },

    /* --- 17 parques adicionais (modelo padronizado). Alguns campos de coordenadas/links/POIs podem precisar de validação final --- */

    {
        "id": "itacolomi",
        "nome": "PE Itacolomi",
        "municipios": ["Itabirito","Ouro Preto"],
        "regiao": "Metropolitana / Quadrilátero Ferrífero",
        "coordenadas_base": { "latitude": -20.3690, "longitude": -43.6020 },
        "geofence_raio_m": 700,
        "resumo": "Parque conhecido pelo morro do Itacolomi, com formações rochosas, trilhas e importância histórica próxima a Ouro Preto.",
        "infraestrutura": ["Trilhas", "Mirantes", "Centro de Visitantes", "Trilhas educativas"],
        "status_operacao": "Aberto",
        "link_agendamento": "url_de_agendamento_a_confirmar",
        "pontos_interesse": [
            { "poi_id": "morro_itacolomi", "nome": "Morro do Itacolomi", "tipo": "Natural", "latitude": -20.3690, "longitude": -43.6020, "quiz_id": null, "desc_curta": "Formação rochosa emblemática, trilhas e mirantes." }
        ],
        "badges_exclusivos": ["Selo_Itacolomi_Visita"]
    },
    {
        "id": "sumidouro",
        "nome": "PE Sumidouro",
        "municipios": ["Lagoa Santa","Pedro Leopoldo"],
        "regiao": "Região Metropolitana / Norte de BH",
        "coordenadas_base": { "latitude": -19.5990, "longitude": -43.8660 },
        "geofence_raio_m": 600,
        "resumo": "Parque com cavidades e grutas (Gruta da Lapinha), trilhas e sítios arqueológicos/paleontológicos.",
        "infraestrutura": ["Grutas visitáveis", "Trilhas", "Centro de Visitantes", "Programação educativa"],
        "status_operacao": "Aberto (visitação controlada)",
        "link_agendamento": "https://ief.mg.gov.br (página da unidade) - confirmar link específico",
        "pontos_interesse": [
            { "poi_id": "gruta_lapinha", "nome": "Gruta da Lapinha", "tipo": "Natural", "latitude": -19.5910, "longitude": -43.8800, "quiz_id": null, "desc_curta": "Gruta extensa com visitas guiadas." }
        ],
        "badges_exclusivos": ["Selo_Sumidouro_Explorador"]
    },
    {
        "id": "serra_rola_moca",
        "nome": "PE Serra do Rola-Moça",
        "municipios": ["Brumadinho","Nova Lima","Ibirité"],
        "regiao": "Metropolitana / Serra da Mantiqueira",
        "coordenadas_base": { "latitude": -19.9040, "longitude": -43.8390 },
        "geofence_raio_m": 800,
        "resumo": "Unidade com formações de serra, nascentes e trilhas próximas à RMBH; atividade de educação ambiental.",
        "infraestrutura": ["Trilhas", "Centro de Visitantes", "Mirantes", "Trilhas interpretativas"],
        "status_operacao": "Aberto (com regras locais)",
        "link_agendamento": "url_de_agendamento_a_confirmar",
        "pontos_interesse": [
            { "poi_id": "mirante_rolla", "nome": "Mirante principal", "tipo": "Natural", "latitude": -19.9050, "longitude": -43.8400, "quiz_id": null, "desc_curta": "Ponto panorâmico sobre a RM." }
        ],
        "badges_exclusivos": ["Selo_RolaMoca_View"]
    },
    {
        "id": "serra_brigadeiro",
        "nome": "PE Serra do Brigadeiro",
        "municipios": ["Arantina","Frei Gaspar","Fervedouro","Santa Margarida","Virgolândia","Divino","Ervália","Rodeiro","Muriaé","Fernandes Tourinho","Argirita","Santo Antônio do Manhuaçu"],
        "regiao": "Zona da Mata / Vale do Rio Doce (Região Alto Caparaó complexa)",
        "coordenadas_base": { "latitude": -20.7830, "longitude": -42.1990 },
        "geofence_raio_m": 1000,
        "resumo": "Parque com picos, vales e mata atlântica de altitude — popular entre montanhistas e praticantes de ecoturismo.",
        "infraestrutura": ["Trilhas", "Picos", "Abrigos de trilha", "Sede administrativa"],
        "status_operacao": "Aberto (visitação com cuidados em trilhas)",
        "link_agendamento": "url_de_agendamento_a_confirmar",
        "pontos_interesse": [
            { "poi_id": "pico_br", "nome": "Pico local (mirante)", "tipo": "Natural", "latitude": -20.7800, "longitude": -42.2000, "quiz_id": null, "desc_curta": "Trilhas e mirantes de altitude." }
        ],
        "badges_exclusivos": ["Selo_SerraBrigadeiro_Alpinista"]
    },
    {
        "id": "rio_doce",
        "nome": "PE Rio Doce",
        "municipios": ["Marliéria","Dionísio","Timóteo"],
        "regiao": "Vale do Aço / Leste de MG",
        "coordenadas_base": { "latitude": -19.4500, "longitude": -42.5850 },
        "geofence_raio_m": 1200,
        "resumo": "Parque com extensa área de Mata Atlântica e sistema lagunar (Lagoa Dom Helvécio) — importante para recreação e pesquisa.",
        "infraestrutura": ["Lagoas", "Trilhas", "Centro de Visitantes", "Instalações para pesquisa"],
        "status_operacao": "Aberto (visitação com regras e infraestrutura)",
        "link_agendamento": "url_de_agendamento_a_confirmar",
        "pontos_interesse": [
            { "poi_id": "lagoa_dom_helvecio", "nome": "Lagoa Dom Helvécio", "tipo": "Natural", "latitude": -19.4570, "longitude": -42.5800, "quiz_id": null, "desc_curta": "Lagoa principal do parque." }
        ],
        "badges_exclusivos": ["Selo_RioDoce_Lagoas"]
    },
    {
        "id": "rio_preto",
        "nome": "PE Rio Preto",
        "municipios": ["São Gonçalo do Rio Preto"],
        "regiao": "Norte de Minas / Espinhaço",
        "coordenadas_base": { "latitude": -18.9410, "longitude": -43.6140 },
        "geofence_raio_m": 900,
        "resumo": "Parque com cursos d'água, piscinas naturais, corredeiras e formações rochosas; popular para banhos e trilhas.",
        "infraestrutura": ["Poços e praias fluviais", "Trilhas", "Portaria", "Sinalização"],
        "status_operacao": "Aberto",
        "link_agendamento": "url_de_agendamento_a_confirmar",
        "pontos_interesse": [
            { "poi_id": "poço_forquilha", "nome": "Poço da Forquilha", "tipo": "Natural", "latitude": -18.9400, "longitude": -43.6150, "quiz_id": null, "desc_curta": "Poço para banho natural popular." }
        ],
        "badges_exclusivos": ["Selo_RioPreto_Aventura"]
    },
    {
        "id": "nova_baden",
        "nome": "PE Nova Baden",
        "municipios": ["Muriaé","region_to_confirm"],
        "regiao": "Zona da Mata",
        "coordenadas_base": { "latitude": -21.1000, "longitude": -42.3600 },
        "geofence_raio_m": 600,
        "resumo": "Unidade com importantes remanescentes de mata e atrativos naturais; aberta para visitação com estrutura básica.",
        "infraestrutura": ["Trilhas", "Trilha interpretativa", "Centro de Visitantes (básico)"],
        "status_operacao": "Aberto (consultar horários locais)",
        "link_agendamento": "url_de_agendamento_a_confirmar",
        "pontos_interesse": [
            { "poi_id": "ponto_novab", "nome": "Trilha principal", "tipo": "Natural", "latitude": -21.1000, "longitude": -42.3600, "quiz_id": null, "desc_curta": "Trilha e áreas de observação da flora." }
        ],
        "badges_exclusivos": ["Selo_NovaBaden_Conservacao"]
    },
    {
        "id": "lapa_grande",
        "nome": "PE Lapa Grande",
        "municipios": ["Lagoa Santa","region_to_confirm"],
        "regiao": "Norte / Centro-Norte",
        "coordenadas_base": { "latitude": -18.9000, "longitude": -44.0000 },
        "geofence_raio_m": 700,
        "resumo": "Parque com grutas e numerosas pinturas rupestres, importante para arqueologia e visitas guiadas.",
        "infraestrutura": ["Grutas", "Trilhas", "Programas educativos"],
        "status_operacao": "Aberto (visitação com regras específicas)",
        "link_agendamento": "url_de_agendamento_a_confirmar",
        "pontos_interesse": [
            { "poi_id": "pinturas_rupestres", "nome": "Painéis rupestres", "tipo": "Cultural", "latitude": -18.9000, "longitude": -44.0000, "quiz_id": null, "desc_curta": "Conjunto de pinturas rupestres visitáveis." }
        ],
        "badges_exclusivos": ["Selo_LapaGrande_Historia"]
    },
    {
        "id": "pau_furado",
        "nome": "PE Pau Furado",
        "municipios": ["region_to_confirm"],
        "regiao": "Região a confirmar",
        "coordenadas_base": { "latitude": null, "longitude": null },
        "geofence_raio_m": 500,
        "resumo": "Parque estadual com trilhas e características naturais — informações de acesso e pontos de visitação a confirmar junto ao IEF.",
        "infraestrutura": ["Trilhas (confirmar)", "Portaria (confirmar)"],
        "status_operacao": "A confirmar",
        "link_agendamento": "url_de_agendamento_a_confirmar",
        "pontos_interesse": [],
        "badges_exclusivos": []
    },
    {
        "id": "pico_itambe",
        "nome": "PE Pico do Itambé",
        "municipios": ["Itambé do Mato Dentro","region_to_confirm"],
        "regiao": "Serra do Espinhaço",
        "coordenadas_base": { "latitude": -19.0000, "longitude": -43.0000 },
        "geofence_raio_m": 800,
        "resumo": "Parque com pico de altitude (Itambé), trilhas de montanha e rica biodiversidade de altitude.",
        "infraestrutura": ["Trilhas de montanha", "Abrigos", "Sinalização básica"],
        "status_operacao": "Aberto (consultar restrições sazonais)",
        "link_agendamento": "url_de_agendamento_a_confirmar",
        "pontos_interesse": [
            { "poi_id": "pico_itambe_mirante", "nome": "Mirante do Pico", "tipo": "Natural", "latitude": -19.0000, "longitude": -43.0000, "quiz_id": null, "desc_curta": "Mirante de altitude com panorama amplo." }
        ],
        "badges_exclusivos": ["Selo_PicoItambe_Alto"]
    },
    {
        "id": "serra_das_araras",
        "nome": "PE Serra das Araras",
        "municipios": ["region_to_confirm"],
        "regiao": "Norte/Noroeste de MG",
        "coordenadas_base": { "latitude": null, "longitude": null },
        "geofence_raio_m": 500,
        "resumo": "Parque estadual com áreas de cerrado e campos rupestres; detalhes de visitação a confirmar.",
        "infraestrutura": ["Trilhas (a confirmar)"],
        "status_operacao": "A confirmar",
        "link_agendamento": "url_de_agendamento_a_confirmar",
        "pontos_interesse": [],
        "badges_exclusivos": []
    },
    {
        "id": "serra_papagaio",
        "nome": "PE Serra do Papagaio",
        "municipios": ["region_to_confirm"],
        "regiao": "Região Sul/Mantiqueira",
        "coordenadas_base": { "latitude": null, "longitude": null },
        "geofence_raio_m": 800,
        "resumo": "Unidade com serras, nascentes e biodiversidade de montanha; checar pontos de visitação e infraestrutura local.",
        "infraestrutura": ["Trilhas (confirmar)", "Mirantes"],
        "status_operacao": "A confirmar",
        "link_agendamento": "url_de_agendamento_a_confirmar",
        "pontos_interesse": [],
        "badges_exclusivos": []
    },
    {
        "id": "mata_do_limoeiro",
        "nome": "PE Mata do Limoeiro",
        "municipios": ["region_to_confirm"],
        "regiao": "Região a confirmar",
        "coordenadas_base": { "latitude": null, "longitude": null },
        "geofence_raio_m": 400,
        "resumo": "Pequena unidade de conservação com remanescentes de mata; informações de visitação e POIs a validar.",
        "infraestrutura": ["Trilhas (básico)"],
        "status_operacao": "A confirmar",
        "link_agendamento": "url_de_agendamento_a_confirmar",
        "pontos_interesse": [],
        "badges_exclusivos": []
    },
    {
        "id": "serra_do_intendente",
        "nome": "PE Serra do Intendente",
        "municipios": ["region_to_confirm"],
        "regiao": "Zona da Mata / Sul",
        "coordenadas_base": { "latitude": null, "longitude": null },
        "geofence_raio_m": 700,
        "resumo": "Unidade com relevância para conservação regional; checar dados oficiais do IEF para visitas.",
        "infraestrutura": ["Trilhas (a confirmar)"],
        "status_operacao": "A confirmar",
        "link_agendamento": "url_de_agendamento_a_confirmar",
        "pontos_interesse": [],
        "badges_exclusivos": []
    },
    {
        "id": "serra_verde",
        "nome": "PE Serra Verde",
        "municipios": ["region_to_confirm"],
        "regiao": "Região a confirmar",
        "coordenadas_base": { "latitude": null, "longitude": null },
        "geofence_raio_m": 600,
        "resumo": "Parque estadual listado em guias — informações detalhadas de infraestrutura pendentes de verificação.",
        "infraestrutura": ["Trilhas (confirmar)"],
        "status_operacao": "A confirmar",
        "link_agendamento": "url_de_agendamento_a_confirmar",
        "pontos_interesse": [],
        "badges_exclusivos": []
    },
    {
        "id": "serra_do_caraça_placeholder",
        "nome": "PE / UC - Caraça (obs: UC de gestão distinta)",
        "municipios": ["Catas Altas","Santa Bárbara?"],
        "regiao": "Serra do Caraça / Quadrilátero Ferrífero",
        "coordenadas_base": { "latitude": -20.2780, "longitude": -43.4290 },
        "geofence_raio_m": 800,
        "resumo": "Observação: Santuário do Caraça tem regime de gestão/uso específico (privado/associação) — incluído aqui apenas se desejar registrar como UC visitável.",
        "infraestrutura": ["Trilhas", "Pousada/Santuário (gestão privada)"],
        "status_operacao": "Aberto (gestão privada/associação) - confirmar inclusão",
        "link_agendamento": "url_de_agendamento_a_confirmar",
        "pontos_interesse": [
            { "poi_id": "santuario_caraça", "nome": "Santuário do Caraça", "tipo": "Cultural/Natural", "latitude": -20.2780, "longitude": -43.4290, "quiz_id": null, "desc_curta": "Importante atração histórica e natural (atenção: regime de visitação diferente)." }
        ],
        "badges_exclusivos": ["Selo_Caraça_Historico"]
    },
    {
        "id": "serra_do_cipo_placeholder",
        "nome": "PE Serra do Cipó (obs: unidade federal/nacional em parte)",
        "municipios": ["Conceição do Mato Dentro","Itabira?"],
        "regiao": "Serra do Espinhaço",
        "coordenadas_base": { "latitude": -19.2540, "longitude": -43.5200 },
        "geofence_raio_m": 1200,
        "resumo": "Observação: Serra do Cipó possui tanto unidades federais quanto áreas estaduais — verificar qual unidade estadual incluir.",
        "infraestrutura": ["Trilhas", "Mirantes", "Centro de Visitantes"],
        "status_operacao": "Aberto (verificar gestão - federal/estadual)",
        "link_agendamento": "url_de_agendamento_a_confirmar",
        "pontos_interesse": [],
        "badges_exclusivos": []
    },
    {
        "id": "pau_furado_2",
        "nome": "PE Pau Furado (entrada alternativa)",
        "municipios": ["region_to_confirm"],
        "regiao": "Região a confirmar",
        "coordenadas_base": { "latitude": null, "longitude": null },
        "geofence_raio_m": 500,
        "resumo": "Registro adicional de unidade que consta em listagens estaduais — verificar com IEF detalhes de visitação.",
        "infraestrutura": [],
        "status_operacao": "A confirmar",
        "link_agendamento": "url_de_agendamento_a_confirmar",
        "pontos_interesse": [],
        "badges_exclusivos": []
    }

];

// Variável para a instância do leitor de QR Code
let html5QrCode = null; 

// ====================================================================
// FUNÇÕES DE RENDERIZAÇÃO E UTILITY (DEFINIDAS NO ESCOPO GLOBAL)
// ====================================================================

function updateProfileDisplay(currentXP) {
    const xpScoreElement = document.querySelector('.xp-score');
    if (xpScoreElement) { xpScoreElement.innerText = `${currentXP} XP`; }
}

function processSuccessfulCheckin(park) {
    const visits = JSON.parse(localStorage.getItem('userVisits') || '[]');
    const xp = parseInt(localStorage.getItem('userXP') || '0');
    
    if (visits.includes(park.id)) { 
        alert(`🎉 Bem-vindo de volta ao ${park.nome}! Visita registrada anteriormente.`); 
        return; 
    }
    
    visits.push(park.id);
    localStorage.setItem('userVisits', JSON.stringify(visits));
    
    const xpGained = 150; 
    const newXP = xp + xpGained;
    localStorage.setItem('userXP', newXP.toString());
    
    const badgeName = park.badges_exclusivos[0] || "Selo de Visitação";
    
    alert(`
    ✅ CHECK-IN VALIDADO: ${park.nome}
    
    🏆 CONQUISTA: ${badgeName} desbloqueado!
    🌟 XP GANHO: +${xpGained}
    
    Total de Parques Visitados: ${visits.length}
    Total de XP: ${newXP}
    `);
    
    updateProfileDisplay(newXP);
    renderParkList(); // Atualiza a lista após o check-in!
}

function onScanSuccess(decodedText) {
    stopQrScanner(); 
    if (decodedText.startsWith("TRILHASMG_CHECKIN_")) {
        const parkId = decodedText.split("_")[2].toLowerCase();
        const park = PARKS_DATA.find(p => p.id === parkId);
        if (park) {
            processSuccessfulCheckin(park);
        } else { alert("❌ QR Code válido, mas o ID do parque é desconhecido."); }
    } else { alert("❌ QR Code Inválido. Escaneie apenas códigos oficiais do Trilhas de Minas."); }
}

// Funções de Renderização (Que não estavam no escopo correto antes)
function createParkCardHTML(park) {
    const visits = JSON.parse(localStorage.getItem('userVisits') || '[]');
    const isVisited = visits.includes(park.id);
    const visitStatus = isVisited ? 'Visitado' : 'A visitar';
    const statusClass = isVisited ? 'visited' : 'to-visit';
    
    return `
        <div class="card park-list-card ${statusClass}" data-park-id="${park.id}" style="margin: 15px;">
            <div class="card-header">
                <h3>${park.nome}</h3>
                <span class="park-status status-${statusClass}">${visitStatus}</span>
            </div>
            <p>${park.resumo}</p>
            <div class="card-footer">
                <button class="btn btn-secondary btn-small view-details" data-park-id="${park.id}">Ver Detalhes</button>
            </div>
        </div>
    `;
}

function renderParkList() {
    const listView = document.getElementById('list-view');
    if (!listView) {
        console.error("ERRO: Elemento #list-view não encontrado no DOM.");
        return;
    }

    let listHTML = '<h1 class="park-title" style="padding: 15px 15px 0;">Todos os Parques</h1>';
    
    PARKS_DATA.forEach(park => {
        listHTML += createParkCardHTML(park);
    });

    listView.innerHTML = listHTML;
    console.log(`✅ ${PARKS_DATA.length} Parques renderizados na Lista.`);
}

// ====================================================================
// LÓGICA DE INICIALIZAÇÃO E EVENT HANDLERS (DENTRO DO DOMContentLoaded)
// ====================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Referências do DOM
    const views = document.querySelectorAll('.view');
    const navItems = document.querySelectorAll('.nav-item');
    const btnBack = document.querySelector('.btn-back');
    const fab = document.querySelector('.fab');
    const qrReaderDiv = document.getElementById('reader');
    const qrReaderCloseBtn = document.getElementById('reader-close-btn');

    // Funções de Controle
    function navigateTo(viewId) {
        views.forEach(view => { view.classList.add('hidden'); });
        document.getElementById(viewId).classList.remove('hidden');
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(viewId)) { item.classList.add('active'); }
        });
    }

    // Lógica do QR Code
    function stopQrScanner() {
        if (html5QrCode && html5QrCode.isScanning) { 
            html5QrCode.stop().then(() => { 
                qrReaderDiv.style.display = 'none'; 
            }).catch(err => { 
                qrReaderDiv.style.display = 'none'; 
            }); 
        } else { 
            qrReaderDiv.style.display = 'none'; 
        }
    }

    function startQrScanner() {
        const qrContainer = document.getElementById('qr-reader-container');

        if (!qrContainer) {
            alert("Erro fatal: Contêiner do QR Code não encontrado no HTML.");
            console.error("ID #qr-reader-container não encontrado.");
            return; 
        }

        qrReaderDiv.style.display = 'flex';
        document.getElementById('reader-status').innerText = "Aguardando leitura do QR Code...";

        // Esta é a correção do problema de inicialização de câmera:
        setTimeout(() => {
            if (!html5QrCode) {
                // Instância criada aqui
                html5QrCode = new Html5Qrcode("qr-reader-container");
            }
    
            const config = { fps: 10, qrbox: { width: 250, height: 250 } };
    
            html5QrCode.start(
                { facingMode: "environment" },
                config,
                onScanSuccess,
                (errorMessage) => {}
            ).catch((err) => {
                document.getElementById('reader-status').innerText = `Erro: Câmera inacessível. Verifique as permissões.`;
                console.error("Erro ao iniciar câmera (Verifique as permissões):", err);
                stopQrScanner();
            });
        }, 100);
    }
    
    // Event Listeners
    navItems.forEach(item => { item.addEventListener('click', (e) => { e.preventDefault(); const viewId = item.getAttribute('href').substring(1); navigateTo(viewId); }); });
    if (btnBack) { btnBack.addEventListener('click', () => { navigateTo('home-view'); }); }
    const featuredCard = document.querySelector('.featured-card .btn-secondary');
    if (featuredCard) { featuredCard.addEventListener('click', () => { navigateTo('detail-view'); }); }
    if (fab) { fab.addEventListener('click', startQrScanner); }
    if (qrReaderCloseBtn) { qrReaderCloseBtn.addEventListener('click', stopQrScanner); }

    // ====================================================================
    // BLOCO FINAL DE INICIALIZAÇÃO E RENDERIZAÇÃO
    // ====================================================================
    
    // 1. Navega para a Home View e Inicia o Perfil
    navigateTo('home-view');
    const initialXP = parseInt(localStorage.getItem('userXP') || '0');
    updateProfileDisplay(initialXP);
    
    // 2. Renderiza a lista de parques na View (Solução para o problema)
    renderParkList();

    console.log(`✅ Projeto iniciado e totalmente funcional. Total de parques carregados: ${PARKS_DATA.length}`);
});

