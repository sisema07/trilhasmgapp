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
        "id": "serra_do_caraça_placeholder",
        "nome": "PE / UC - Caraça (obs: UC de gestão distinta)",
        "municipios": ["Catas Altas","Santa Bárbara?"],
        "regiao": "Espinhaço Sul",
        "coordenadas_base": { "latitude": -20.1000, "longitude": -43.4800 },
        "geofence_raio_m": 900,
        "resumo": "Unidade de conservação e santuário histórico-natural, administrado por instituição religiosa; incluído aqui para referência geográfica.",
        "infraestrutura": ["Hospedagem", "Trilhas", "Centro histórico"],
        "status_operacao": "Aberto (gestão privada/religiosa)",
        "link_agendamento": "https://www.santuariodocaraca.com.br/",
        "pontos_interesse": [
            { "poi_id": "caraça_santuario", "nome": "Santuário do Caraça", "tipo": "Cultural", "latitude": -20.1000, "longitude": -43.4800, "quiz_id": null, "desc_curta": "Centro histórico e religioso em meio à serra." },
            { "poi_id": "caraça_cascatinha", "nome": "Cascatinha do Caraça", "tipo": "Natural", "latitude": -20.1100, "longitude": -43.4700, "quiz_id": null, "desc_curta": "Cachoeira mais próxima da sede; trilha leve." }
        ],
        "badges_exclusivos": ["Selo_Caraça_Peregrino"]
    },
    {
        "id": "serra_do_rola_moca",
        "nome": "PE Serra do Rola-Moça",
        "municipios": ["Belo Horizonte","Brumadinho","Ibirité","Nova Lima"],
        "regiao": "Região Metropolitana de BH / Quadrilátero Ferrífero",
        "coordenadas_base": { "latitude": -20.0610, "longitude": -44.0190 },
        "geofence_raio_m": 1000,
        "resumo": "Importante unidade de conservação que protege mananciais e áreas de campo rupestre; mirantes e trilhas de fácil acesso.",
        "infraestrutura": ["Mirantes", "Trilhas", "Centro de Visitantes", "Sinalização", "Portarias"],
        "status_operacao": "Aberto (visitação com restrições por área)",
        "link_agendamento": "https://ief.mg.gov.br/ (consultar página do parque)",
        "pontos_interesse": [
            { "poi_id": "mirante_bh", "nome": "Mirante Belo Horizonte", "tipo": "Natural", "latitude": -20.0500, "longitude": -44.0100, "quiz_id": null, "desc_curta": "Vista panorâmica da região metropolitana." },
            { "poi_id": "trilha_manancial", "nome": "Trilha dos Mananciais", "tipo": "Ecológica", "latitude": -20.0650, "longitude": -44.0150, "quiz_id": null, "desc_curta": "Trilha educativa sobre recursos hídricos." }
        ],
        "badges_exclusivos": ["Selo_RolaMoca_Guarda_Agua"]
    },
    {
        "id": "sete_salões",
        "nome": "PE Sete Salões",
        "municipios": ["region_to_confirm"],
        "regiao": "Vale do Rio Doce / Leste de Minas",
        "coordenadas_base": { "latitude": null, "longitude": null },
        "geofence_raio_m": 600,
        "resumo": "Parque com formações rochosas e cavernas, incluindo a Gruta Sete Salões; potencial para visitação ecológica e cultural.",
        "infraestrutura": ["Grutas", "Trilhas (a confirmar)"],
        "status_operacao": "A confirmar (visitação restrita)",
        "link_agendamento": "url_de_agendamento_a_confirmar",
        "pontos_interesse": [],
        "badges_exclusivos": []
    },
    {
        "id": "sumidouro",
        "nome": "PE Sumidouro",
        "municipios": ["Lagoa Santa","Pedro Leopoldo"],
        "regiao": "Região Metropolitana / Carste de Lagoa Santa",
        "coordenadas_base": { "latitude": -19.5850, "longitude": -43.9560 },
        "geofence_raio_m": 800,
        "resumo": "Parque com importância arqueológica e paleontológica, abrigando a Lapa do Sumidouro e trilhas educativas.",
        "infraestrutura": ["Centro de Visitantes", "Trilhas", "Grutas", "Museu Arqueológico"],
        "status_operacao": "Aberto (visitação com acompanhamento obrigatório)",
        "link_agendamento": "https://ief.mg.gov.br/ (consultar página do parque)",
        "pontos_interesse": [
            { "poi_id": "lapa_sumidouro", "nome": "Lapa do Sumidouro", "tipo": "Arqueológico", "latitude": -19.5860, "longitude": -43.9570, "quiz_id": null, "desc_curta": "Gruta com fósseis e vestígios pré-históricos." }
        ],
        "badges_exclusivos": ["Selo_Sumidouro_Explorador"]
    },
    {
        "id": "vale_pereiro",
        "nome": "PE Vale do Pereiro",
        "municipios": ["region_to_confirm"],
        "regiao": "Região a confirmar",
        "coordenadas_base": { "latitude": null, "longitude": null },
        "geofence_raio_m": 400,
        "resumo": "Parque estadual de pequeno porte, com vegetação de transição e cursos d’água — informações complementares a confirmar.",
        "infraestrutura": ["Trilhas (básico)"],
        "status_operacao": "A confirmar",
        "link_agendamento": "url_de_agendamento_a_confirmar",
        "pontos_interesse": [],
        "badges_exclusivos": []
    }

];

// Variável para a instância do leitor de QR Code
let html5QrCode = null; 


// ====================================================================
// FUNÇÃO DE NAVEGAÇÃO MOVIDA PARA O ESCOPO GLOBAL (CORREÇÃO DE ERRO)
// ====================================================================
function navigateTo(viewId) {
    const views = document.querySelectorAll('.view');
    const navItems = document.querySelectorAll('.nav-item');
    
    views.forEach(view => { view.classList.add('hidden'); });
    
    const targetView = document.getElementById(viewId);
    if (targetView) { targetView.classList.remove('hidden'); } 
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${viewId}`) { item.classList.add('active'); }
    });
}

function updateProfileDisplay(currentXP) {
    const xpScoreElement = document.querySelector('.xp-score');
    if (xpScoreElement) { xpScoreElement.innerText = `${currentXP} XP`; }
}

function processSuccessfulCheckin(park) {
    const visits = JSON.parse(localStorage.getItem('userVisits') || '[]');
    const xp = parseInt(localStorage.getItem('userXP') || '0');
    
    if (visits.includes(park.id)) { alert(`🎉 Bem-vindo de volta ao ${park.nome}! Visita registrada anteriormente.`); return; }
    
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
    renderParkList(); 
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


// ====================================================================
// FUNÇÕES DE RENDERIZAÇÃO E EVENTOS DE DETALHE (ESCOPO GLOBAL)
// ====================================================================

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

/**
 * Função que ativa os event listeners para o botão 'Ver Detalhes'.
 * ESTA FUNÇÃO PRECISA ESTAR NO ESCOPO GLOBAL PARA SER CHAMADA POR renderParkList()
 */
function setupCardListeners() {
    const detailButtons = document.querySelectorAll('.view-details');
    
    detailButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const parkId = e.currentTarget.getAttribute('data-park-id');
            const selectedPark = PARKS_DATA.find(p => p.id === parkId);
            
            if (selectedPark) {
                renderParkDetail(selectedPark);
            }
        });
    });

    // Adiciona listener para o card de destaque na Home (também usa a função global)
    const featuredCardButton = document.querySelector('.featured-card .btn-secondary');
    if (featuredCardButton) {
        featuredCardButton.addEventListener('click', () => {
            const ibitipocaPark = PARKS_DATA.find(p => p.id === 'ibitipoca');
            if (ibitipocaPark) {
                renderParkDetail(ibitipocaPark);
            }
        });
    }
}

function renderParkDetail(park) {
    const detailView = document.getElementById('detail-view');
    
    const heroImage = detailView.querySelector('.hero-image');
    if (heroImage) {
        heroImage.style.backgroundImage = `url('/trilhasmgapp/assets/img/${park.id}_hero.jpg')`; 
    }

    detailView.querySelector('.park-title').innerText = park.nome;

    const tabContent = detailView.querySelector('.tab-content.active');
    if (tabContent) {
        tabContent.innerHTML = `
            <h3>Resumo</h3>
            <p>${park.resumo}</p>
            <h3>Infraestrutura</h3>
            <ul class="infra-list">
                ${park.infraestrutura ? park.infraestrutura.map(item => `<li><i class="fas fa-check-circle"></i> ${item}</li>`).join('') : '<li>Nenhuma informação de infraestrutura detalhada.</li>'}
            </ul>
            <p style="margin-top: 10px;">Status: <strong>${park.status_operacao || 'Não informado'}</strong></p>
        `;
    }
    
    navigateTo('detail-view');
}

function renderParkList() {
    const listView = document.getElementById('list-view');
    if (!listView) { console.error("ERRO: Elemento #list-view não encontrado no DOM."); return; }

    let listHTML = '<h1 class="park-title" style="padding: 15px 15px 0;">Todos os Parques</h1>';
    
    PARKS_DATA.forEach(park => {
        listHTML += createParkCardHTML(park);
    });

    listView.innerHTML = listHTML;
    setupCardListeners(); // Chama a função global que ativa o clique nos cards
    console.log(`✅ ${PARKS_DATA.length} Parques renderizados na Lista. Listeners Ativados.`);
}


// ====================================================================
// LÓGICA DE INICIALIZAÇÃO E EVENT HANDLERS (DENTRO DO DOMContentLoaded)
// ====================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Referências do DOM (Variáveis que só existem aqui dentro)
    const fab = document.querySelector('.fab');
    const qrReaderDiv = document.getElementById('reader');
    const qrReaderCloseBtn = document.querySelector('#reader-close-btn');

    // Funções do QR Code (Dependem das referências DOM)
    function stopQrScanner() {
        if (html5QrCode && html5QrCode.isScanning) { 
            html5QrCode.stop().then(() => { qrReaderDiv.style.display = 'none'; }).catch(err => { qrReaderDiv.style.display = 'none'; }); 
        } else { qrReaderDiv.style.display = 'none'; }
    }

    function startQrScanner() {
        const qrContainer = document.getElementById('qr-reader-container');
        if (!qrContainer) { alert("Erro fatal: Contêiner do QR Code não encontrado no HTML."); console.error("ID #qr-reader-container não encontrado."); return; }

        qrReaderDiv.style.display = 'flex';
        document.getElementById('reader-status').innerText = "Aguardando leitura do QR Code...";

        setTimeout(() => {
            if (!html5QrCode) { html5QrCode = new Html5Qrcode("qr-reader-container"); }
            const config = { fps: 10, qrbox: { width: 250, height: 250 } };
            html5QrCode.start({ facingMode: "environment" }, config, onScanSuccess, (errorMessage) => {}).catch((err) => {
                document.getElementById('reader-status').innerText = `Erro: Câmera inacessível. Verifique as permissões.`;
                console.error("Erro ao iniciar câmera (Verifique as permissões):", err);
                stopQrScanner();
            });
        }, 100);
    }
    
    // Event Listeners de Navegação (Usam a função global navigateTo)
    const navItems = document.querySelectorAll('.nav-item');
    const btnBack = document.querySelector('.btn-back');

    navItems.forEach(item => { item.addEventListener('click', (e) => { e.preventDefault(); const viewId = item.getAttribute('href').substring(1); navigateTo(viewId); }); });
    if (btnBack) { 
        btnBack.addEventListener('click', () => { 
            // CORREÇÃO UX: Volta para a lista de parques (#list-view)
            navigateTo('list-view'); 
        }); 
    }
    if (fab) { fab.addEventListener('click', startQrScanner); }
    if (qrReaderCloseBtn) { qrReaderCloseBtn.addEventListener('click', stopQrScanner); }


    // ====================================================================
    // BLOCO FINAL DE INICIALIZAÇÃO E RENDERIZAÇÃO
    // ====================================================================
    
    // 1. Renderiza a lista de parques na View (e ativa os listeners)
    renderParkList(); 

    // 2. Navega para a Home View
    navigateTo('home-view');
    
    // 3. Inicia o Perfil
    const initialXP = parseInt(localStorage.getItem('userXP') || '0');
    updateProfileDisplay(initialXP);
    
    console.log(`✅ Projeto iniciado e totalmente funcional. Total de parques carregados: ${PARKS_DATA.length}`);
});

