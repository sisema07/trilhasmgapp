// DADOS INCORPORADOS DIRETAMENTE NO JS (Client-Side Database)
const PARKS_DATA = [
    {
        "id": "biribiri",
        "nome": "PE Biribiri",
        "municipios": ["Diamantina"],
        "regiao": "Alto Jequitinhonha",
        "coordenadas_base": { "latitude": -18.2500, "longitude": -43.6000 },
        "geofence_raio_m": 500,
        "resumo": "Antiga vila têxtil, com cachoeiras e paisagens do Cerrado e Campos Rupestres.",
        "infraestrutura": ["Trilhas", "Cachoeiras", "Antiga Vila Histórica"],
        "status_operacao": "Aberto",
        "link_agendamento": "url_do_site_do_IEF_ou_concessionaria",
        "pontos_interesse": [
            { "poi_id": "vilabiribiri", "nome": "Vila de Biribiri", "tipo": "Historico", "latitude": -18.2520, "longitude": -43.6050, "quiz_id": "quiz_biribiri_01", "desc_curta": "O coração histórico do parque." },
            { "poi_id": "cachoeira_sentinela", "nome": "Cachoeira da Sentinela", "tipo": "Natural", "latitude": -18.2600, "longitude": -43.6100, "quiz_id": null, "desc_curta": "Um belo ponto para a foto de conquista." }
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
        "resumo": "Famoso por picos, grutas e a Janela do Céu.",
        "infraestrutura": ["Trilhas (Circuitos)", "Camping", "Centro de Visitantes"],
        "status_operacao": "Aberto (com limite de visitação)",
        "link_agendamento": "url_de_agendamento_ibitipoca",
        "pontos_interesse": [
            { "poi_id": "janeladoceu", "nome": "Janela do Céu", "tipo": "Natural", "latitude": -21.7300, "longitude": -43.8850, "quiz_id": "quiz_ibitipoca_01", "desc_curta": "A vista mais icônica do parque." },
            { "poi_id": "pico_piao", "nome": "Pico do Pião", "tipo": "Natural", "latitude": -21.7250, "longitude": -43.8900, "quiz_id": null, "desc_curta": "Ponto de maior altitude do Circuito do Pião." }
        ],
        "badges_exclusivos": ["Selo_Ibitipoca_Visita", "Badge_Mestre_das_Grutas"]
    }
    // NOTA: Os outros 17 parques devem ser adicionados aqui no futuro.
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
