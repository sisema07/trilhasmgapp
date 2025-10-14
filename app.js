// VARIÁVEL GLOBAL PARA ARMAZENAR OS DADOS DOS PARQUES
// **DADOS INCORPORADOS DIRETAMENTE NO JS (SOLUÇÃO FINAL PARA O ERRO 404)**
const PARKS_DATA = [
    {
        "id": "biribiri",
        "nome": "Biribiri",
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
        "nome": "Ibitipoca",
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

// ====================================================================
// O RESTANTE DO CÓDIGO (PARTE 1, 3, 4, 5) SEGUE ABAIXO...
// ... (Toda a sua lógica de Navegação, QR Code e Armazenamento Local)
// ====================================================================

document.addEventListener('DOMContentLoaded', () => {
    const views = document.querySelectorAll('.view');
    const navItems = document.querySelectorAll('.nav-item');
    const btnBack = document.querySelector('.btn-back');
    const fab = document.querySelector('.fab');
    const qrReaderDiv = document.getElementById('reader');
    const qrReaderCloseBtn = document.getElementById('reader-close-btn');
    let html5QrCode = null;
    
    // Funções de Navegação
    function navigateTo(viewId) {
        views.forEach(view => { view.classList.add('hidden'); });
        document.getElementById(viewId).classList.remove('hidden');
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(viewId)) { item.classList.add('active'); }
        });
    }

    navItems.forEach(item => { item.addEventListener('click', (e) => { e.preventDefault(); const viewId = item.getAttribute('href').substring(1); navigateTo(viewId); }); });
    if (btnBack) { btnBack.addEventListener('click', () => { navigateTo('home-view'); }); }
    const featuredCard = document.querySelector('.featured-card .btn-secondary');
    if (featuredCard) { featuredCard.addEventListener('click', () => { navigateTo('detail-view'); }); }

// ... dentro de app.js (Funções de QR Code)

    // ESTE É O BLOCO CORRIGIDO PARA SUBSTITUIR A FUNÇÃO startQrScanner:
    function startQrScanner() {
        const qrContainer = document.getElementById('qr-reader-container');

        // 1. CHECAGEM DE SEGURANÇA: Se o container não for encontrado, alerta e para a execução.
        if (!qrContainer) {
            alert("Erro fatal: Contêiner do QR Code não encontrado no HTML.");
            console.error("ID #qr-reader-container não encontrado.");
            return; 
        }

        qrReaderDiv.style.display = 'flex'; // Torna a tela do scanner visível
        document.getElementById('reader-status').innerText = "Aguardando leitura do QR Code...";

        // 2. Cria a instância do leitor se ainda não existir
        if (!html5QrCode) {
            html5QrCode = new Html5Qrcode("qr-reader-container");
        }

        const config = { fps: 10, qrbox: { width: 250, height: 250 } };

        html5QrCode.start(
            { facingMode: "environment" }, // Usa a câmera traseira
            config,
            onScanSuccess, // Função de sucesso
            (errorMessage) => {
                // Mensagens de erro de detecção não são mostradas
            }
        ).catch((err) => {
            // Se houver erro de permissão da câmera (mais comum no celular)
            document.getElementById('reader-status').innerText = `Erro: Câmera inacessível. Verifique as permissões de site ou use HTTPS.`;
            console.error("Erro ao iniciar câmera (Verifique as permissões):", err);
            stopQrScanner(); // Fecha a tela de erro
        });
    }

// ...
    function stopQrScanner() {
        if (html5QrCode && html5QrCode.isScanning) { html5QrCode.stop().then(() => { qrReaderDiv.style.display = 'none'; }).catch(err => { qrReaderDiv.style.display = 'none'; }); } else { qrReaderDiv.style.display = 'none'; }
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
    if (fab) { fab.addEventListener('click', startQrScanner); }
    if (qrReaderCloseBtn) { qrReaderCloseBtn.addEventListener('click', stopQrScanner); }
    
    // Processamento de Conquista
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
    }
    
    function updateProfileDisplay(currentXP) {
        const xpScoreElement = document.querySelector('.xp-score');
        if (xpScoreElement) { xpScoreElement.innerText = `${currentXP} XP`; }
    }

    // Inicialização
    navigateTo('home-view');
    const initialXP = parseInt(localStorage.getItem('userXP') || '0');
    updateProfileDisplay(initialXP);
    console.log(`✅ Projeto iniciado. Dados dos Parques carregados (incorporados). Total: ${PARKS_DATA.length}`);
});

