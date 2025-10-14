// VARIÁVEL GLOBAL PARA ARMAZENAR OS DADOS DOS PARQUES
let PARKS_DATA = [];
let html5QrCode = null; // Instância global para o leitor de QR Code

// ====================================================================
// PARTE 1: NAVEGAÇÃO E CONTROLE DE TELA
// ====================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Referências para os elementos DOM
    const views = document.querySelectorAll('.view');
    const navItems = document.querySelectorAll('.nav-item');
    const btnBack = document.querySelector('.btn-back');
    const fab = document.querySelector('.fab');
    const qrReaderDiv = document.getElementById('reader');
    const qrReaderCloseBtn = document.getElementById('reader-close-btn');

    /**
     * Função para mostrar a view correta e atualizar a navegação inferior.
     */
    function navigateTo(viewId) {
        views.forEach(view => {
            view.classList.add('hidden');
        });
        document.getElementById(viewId).classList.remove('hidden');

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(viewId)) {
                item.classList.add('active');
            }
        });
    }

    // Event Listeners para Navegação
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const viewId = item.getAttribute('href').substring(1); 
            navigateTo(viewId);
        });
    });
    
    if (btnBack) {
        btnBack.addEventListener('click', () => {
            navigateTo('home-view');
        });
    }

    // Simulação de clique para ir para a tela de Detalhes
    const featuredCard = document.querySelector('.featured-card .btn-secondary');
    if (featuredCard) {
        featuredCard.addEventListener('click', () => {
            navigateTo('detail-view');
        });
    }

    // ====================================================================
    // LÓGICA DO QR CODE
    // ====================================================================

    /**
     * Inicia o leitor de QR Code (chamado pelo FAB)
     */
    function startQrScanner() {
        qrReaderDiv.style.display = 'flex'; // Torna a tela do scanner visível
        document.getElementById('reader-status').innerText = "Aguardando leitura do QR Code...";

        // Cria a instância do leitor se ainda não existir
        if (!html5QrCode) {
            html5QrCode = new Html5Qrcode("qr-reader-container");
        }

        const config = { fps: 10, qrbox: { width: 250, height: 250 } };

        html5QrCode.start(
            { facingMode: "environment" }, // Usa a câmera traseira (ideal para celulares)
            config,
            onScanSuccess, // Função chamada ao ler um QR Code
            (errorMessage) => {
                // Erro (muitas vezes apenas que o código não foi detectado)
                // console.log("QR Code not detected:", errorMessage);
            }
        ).catch((err) => {
            document.getElementById('reader-status').innerText = `Erro ao acessar câmera: ${err}. Certifique-se de estar em HTTPS ou em localhost.`;
            console.error("Erro ao iniciar câmera:", err);
        });
    }

    /**
     * Fecha o leitor de QR Code
     */
    function stopQrScanner() {
        if (html5QrCode && html5QrCode.isScanning) {
            html5QrCode.stop().then(() => {
                qrReaderDiv.style.display = 'none';
            }).catch(err => {
                console.error("Erro ao parar a câmera:", err);
                qrReaderDiv.style.display = 'none'; // Força o fechamento visual
            });
        } else {
            qrReaderDiv.style.display = 'none';
        }
    }

    /**
     * Callback de sucesso após a leitura de um QR Code
     * @param {string} decodedText - O texto lido do QR Code.
     */
    function onScanSuccess(decodedText) {
        // Interrompe a leitura assim que um código for detectado
        stopQrScanner(); 
        
        // Formato esperado: TRILHASMG_CHECKIN_[ID_DO_PARQUE]
        if (decodedText.startsWith("TRILHASMG_CHECKIN_")) {
            const parkId = decodedText.split("_")[2].toLowerCase(); // Ex: 'ibitipoca'
            const park = PARKS_DATA.find(p => p.id === parkId);

            if (park) {
                processSuccessfulCheckin(park);
            } else {
                alert("❌ QR Code válido, mas o ID do parque é desconhecido.");
            }
        } else {
            alert("❌ QR Code Inválido. Escaneie apenas códigos oficiais do Trilhas de Minas.");
        }
    }

    // Event Listeners para o Scanner
    if (fab) {
        fab.addEventListener('click', startQrScanner);
    }
    if (qrReaderCloseBtn) {
        qrReaderCloseBtn.addEventListener('click', stopQrScanner);
    }


    // ====================================================================
    // PARTE 2: CARREGAMENTO DE DADOS (JSON LOCAL)
    // ====================================================================

    async function loadParkData() {
        try {
            const response = await fetch('./pe_minas_data.json'); 
            if (!response.ok) {
                 throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const parks = await response.json();
            PARKS_DATA = parks; 
            
            console.log('✅ Dados dos Parques carregados com sucesso (JSON Local). Total:', PARKS_DATA.length);
            
        } catch (error) {
            console.error('❌ Erro ao carregar os dados do arquivo pe_minas_data.json:', error);
            // Aviso de erro para o usuário (mantido da etapa anterior para diagnóstico)
            alert('Erro fatal: Arquivo de dados dos parques não encontrado ou inválido. Use um servidor local (Live Server).'); 
        }
    }


    // ====================================================================
    // PARTE 4: PROCESSAMENTO DE CONQUISTA (USANDO localStorage)
    // ====================================================================

    /**
     * Processa as recompensas e atualiza o estado do app após o Check-in.
     */
    function processSuccessfulCheckin(park) {
        // 1. Armazenamento Local (simula o Back-end)
        const visits = JSON.parse(localStorage.getItem('userVisits') || '[]');
        const xp = parseInt(localStorage.getItem('userXP') || '0');
        
        if (visits.includes(park.id)) {
            alert(`🎉 Bem-vindo de volta ao ${park.nome}! Visita registrada anteriormente.`);
            return;
        }
        
        // Se for a primeira visita, registra
        visits.push(park.id);
        localStorage.setItem('userVisits', JSON.stringify(visits));
        
        // 2. Recompensa
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
        
        // Atualiza a interface (header XP)
        updateProfileDisplay(newXP);
    }
    
    /**
     * Atualiza o XP e o perfil na tela inicial.
     */
    function updateProfileDisplay(currentXP) {
        const xpScoreElement = document.querySelector('.xp-score');
        if (xpScoreElement) {
            xpScoreElement.innerText = `${currentXP} XP`;
        }
        // Futuramente, a lista de badges e visitas seria atualizada aqui
    }

    // ====================================================================
    // PARTE 5: INICIALIZAÇÃO E CARREGAMENTO DE DADOS
    // ====================================================================
    
    // Carrega o XP inicial do localStorage
    const initialXP = parseInt(localStorage.getItem('userXP') || '0');
    updateProfileDisplay(initialXP);
    
    // Carrega os dados dos parques
    loadParkData();
});