// DADOS INCORPORADOS DIRETAMENTE NO JS (Client-Side Database)
// ATENÇÃO: ESTA LISTA DEVE SER COMPLETA. Se necessário, adicione o restante dos 19 parques.
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
        "id": "mata_do_krambeck",
        "nome": "PE Mata do Krambeck",
        "municipios": ["Juiz de Fora"],
        "regiao": "Zona da Mata / Metropolitana de Juiz de Fora",
        "coordenadas_base": { "latitude": -21.7700, "longitude": -43.3500 },
        "geofence_raio_m": 500,
        "resumo": "Parque Estadual criado para preservar remanescentes de Mata Atlântica em ambiente urbano, incorporando o Jardim Botânico e a Mata da Remonta. Área de cerca de 291,98 ha.",
        "infraestrutura": ["Trilhas (a definir)", "Educação ambiental", "Conexão com jardins/botânica"],
        "status_operacao": "Em processo de implantação / criação oficial (visitação ainda em fase de regulamentação)",
        "link_agendamento": "url_de_agendamento_a_confirmar",
        "pontos_interesse": [
            { "poi_id": "jardim_botanico_ufjf", "nome": "Jardim Botânico da UFJF", "tipo": "Cultural/Natural", "latitude": -21.7700, "longitude": -43.3500, "quiz_id": null, "desc_curta": "Parte incorporada ao parque, importante para educação ambiental." }
        ],
        "badges_exclusivos": ["Selo_Krambeck_Reserva"]
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
        "resumo": "Parque estadual com trilhas e características naturais — dados de acesso, infraestrutura e pontos de visitação devem ser confirmados junto ao IEF.",
        "infraestrutura": ["Trilhas (a confirmar)", "Portaria (a confirmar)"],
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
        "id": "serra_do_intendente",
        "nome": "PE Serra do Intendente",
        "municipios": ["region_to_confirm"],
        "regiao": "Zona da Mata / Sul de MG",
        "coordenadas_base": { "latitude": null, "longitude": null },
        "geofence_raio_m": 700,
        "resumo": "Parque estadual com finalidade de conservar ecossistemas regionais; informações detalhadas de infraestrutura, visitas e pontos de interesse precisam ser validadas.",
        "infraestrutura": ["Trilhas (a confirmar)"],
        "status_operacao": "A confirmar",
        "link_agendamento": "url_de_agendamento_a_confirmar",
        "pontos_interesse": [],
        "badges_exclusivos": []
    },
    {
        "id": "serra_do_papagaio",
        "nome": "PE Serra do Papagaio",
        "municipios": ["Aiuruoca","Alagoa","Baependi","Itamonte","Pouso Alto"],
        "regiao": "Mantiqueira / Sul de MG",
        "coordenadas_base": { "latitude": -21.6800, "longitude": -44.7000 },
        "geofence_raio_m": 1200,
        "resumo": "Parque estadual que protege remanescentes de Mata Atlântica e campos de altitude, interligando-se ao Parque Nacional do Itatiaia na divisa, com inúmeras trilhas e cachoeiras.",
        "infraestrutura": ["Trilhas (diversos roteiros)", "Centro de visitantes (administrativo)", "Sinalização básica", "Portarias regionais"],
        "status_operacao": "Aberto (visitação com regime próprio do IEF)",
        "link_agendamento": "url_de_agendamento_a_confirmar",
        "pontos_interesse": [
            { "poi_id": "pico_papagaio", "nome": "Pico do Papagaio", "tipo": "Natural", "latitude": -21.7000, "longitude": -44.7000, "quiz_id": null, "desc_curta": "Pico icônico do parque, bastante visitado." },
            { "poi_id": "cachoeira_dos_garcias", "nome": "Cachoeira dos Garcias", "tipo": "Natural", "latitude": -21.6800, "longitude": -44.6800, "quiz_id": null, "desc_curta": "Uma das quedas de água de destaque no parque." }
        ],
        "badges_exclusivos": ["Selo_Papagaio_Trilhas"]
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
        "id": "serra_nova_talhado",
        "nome": "PE Serra Nova e Talhado",
        "municipios": ["Rio Pardo de Minas","Serranópolis de Minas","Mato Verde","Porteirinha","Riacho dos Machados"],
        "regiao": "Norte / Vale do Jequitinhonha / Norte de MG",
        "coordenadas_base": { "latitude": -15.8700, "longitude": -42.7200 },
        "geofence_raio_m": 900,
        "resumo": "Parque estadual florestal criado para proteger ecossistemas da região norte de Minas Gerais, com cerca de 12.658,29 ha.",
        "infraestrutura": ["Trilhas (a confirmar)", "Educação ambiental (a confirmar)"],
        "status_operacao": "Aberto (ou a confirmar modalidade de visitação)",
        "link_agendamento": "url_de_agendamento_a_confirmar",
        "pontos_interesse": [
            { "poi_id": "mirante_serra_nova", "nome": "Mirante da Serra Nova", "tipo": "Natural", "latitude": -15.8700, "longitude": -42.7200, "quiz_id": null, "desc_curta": "Ponto de observação panorâmica dentro da unidade." }
        ],
        "badges_exclusivos": ["Selo_SerraNova_Reserva"]
    },
    {
        "id": "serra_verde",
        "nome": "PE Serra Verde",
        "municipios": ["region_to_confirm"],
        "regiao": "Região a confirmar",
        "coordenadas_base": { "latitude": null, "longitude": null },
        "geofence_raio_m": 600,
        "resumo": "Parque estadual listado em guias de MG; dados de infraestrutura, visitas e pontos de interesse ainda precisam ser coletados.",
        "infraestrutura": ["Trilhas (a confirmar)"],
        "status_operacao": "A confirmar",
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
    }
];

// ====================================================================
// CATÁLOGO CENTRAL DE BADGES (MOSTRAR TUDO NA TELA DE CONQUISTAS)
// ====================================================================
const BADGES_CATALOG = [
    // BADGES DE VISITA INDIVIDUAL (Baseado nos IDs que você já tem)
    { code: "Selo_Biribiri_Visita", nome: "Biribiri Desvendada", tipo: "Visita", descricao: "Primeira visita ao PE Biribiri.", xp: 150, icon: "tree" },
    { code: "Selo_Ibitipoca_Visita", nome: "Ibitipoca Desvendada", tipo: "Visita", descricao: "Primeira visita ao PE Ibitipoca.", xp: 150, icon: "mountain" },
    { code: "Selo_Itacolomi_Visita", nome: "Itacolomi Desvendado", tipo: "Visita", descricao: "Primeira visita ao PE Itacolomi.", xp: 150, icon: "flag" },
    { code: "Selo_LapaGrande_Historia", nome: "Guardião da Lapa Grande", tipo: "Visita", descricao: "Primeira visita ao PE Lapa Grande.", xp: 150, icon: "cave" },
    // (ADICIONE AQUI MAIS 15 BADGES DE VISITA, um para cada parque restante, usando o formato "Selo_[ID_PARQUE]_Visita")

    // BADGES DE COLEÇÃO / MARCO
    { code: "Badge_Primeiro_Passo", nome: "Primeiro Check-in", tipo: "Marco", descricao: "Primeira visita registrada no aplicativo.", xp: 50, icon: "shoe-prints" },
    { code: "Badge_Cinco_Parques", nome: "Aventureiro Nível 5", tipo: "Coleção", descricao: "Visite 5 Parques Estaduais diferentes.", xp: 500, icon: "star" },
    { code: "Badge_Lenda_das_Minas", nome: "Lenda dos 19 PE's", tipo: "Coleção", descricao: "Visite todos os Parques Estaduais.", xp: 5000, icon: "crown" }
];

let html5QrCode = null; 

// ====================================================================
// FUNÇÕES DE NAVEGAÇÃO E UTILITY (ESCOPO GLOBAL)
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

// ====================================================================
// FUNÇÃO DE CÁLCULO DE PROGRESSO
// ====================================================================

function calculateProgress() {
    const totalParks = PARKS_DATA.length;
    const visits = JSON.parse(localStorage.getItem('userVisits') || '[]');
    const visitsCount = visits.length;
    
    const percentage = (visitsCount / totalParks) * 100;
    
    return {
        total: totalParks,
        completed: visitsCount,
        percent: Math.round(percentage)
    };
}

// ====================================================================
// FUNÇÃO DE RENDERIZAÇÃO DA HOME VIEW (BARRA DE PROGRESSO CLEAN)
// ====================================================================

function renderHomeProgress() {
    const progressBarContainer = document.getElementById('progress-bar-container');
    const progress = calculateProgress();
    
    // HTML para a barra horizontal e o status
    progressBarContainer.innerHTML = `
        <h4 style="margin-bottom: 5px; color: var(--color-text-dark);">
            🗺️ Progresso da Expedição: ${progress.completed} de ${progress.total} Parques
        </h4>
        <div style="background-color: var(--color-gray); border-radius: 4px; height: 12px; overflow: hidden;">
            <div style="
                width: ${progress.percent}%; 
                height: 100%; 
                background-color: var(--color-primary); 
                transition: width 0.5s;
            "></div>
        </div>
        <p style="text-align: right; font-size: 0.9em; margin-top: 5px; color: var(--color-primary); font-weight: bold;">
            ${progress.percent}% Completo
        </p>
    `;
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

/**
 * Funções auxiliares para criar o HTML dos cards e das abas
 */
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

function renderTabContent(park, tabName) {
    const tabContent = document.querySelector('#detail-view .tab-content.active');
    if (!tabContent) return;

    let contentHTML = '';

    if (tabName === 'Informações') {
        contentHTML = `
            <h3>Resumo</h3>
            <p>${park.resumo}</p>
            <h3>Infraestrutura</h3>
            <ul class="infra-list">
                ${park.infraestrutura ? park.infraestrutura.map(item => `<li><i class="fas fa-check-circle"></i> ${item}</li>`).join('') : '<li>Nenhuma informação de infraestrutura detalhada.</li>'}
            </ul>
            <p style="margin-top: 10px;">Status: <strong>${park.status_operacao || 'Não informado'}</strong></p>
        `;
    } else if (tabName === 'Trilhas/POIs') {
        contentHTML = `
            <h3>Pontos de Interesse (POIs)</h3>
            ${park.pontos_interesse && park.pontos_interesse.length > 0
                ? park.pontos_interesse.map(poi => `
                    <div class="poi-card" style="border-left: 5px solid var(--color-primary); padding: 10px; margin-bottom: 10px; background-color: #f9f9f9;">
                        <h4>${poi.nome} <i class="fas fa-mountain" style="color: var(--color-primary); margin-left: 5px;"></i></h4>
                        <p>${poi.desc_curta}</p>
                        <p style="font-size: 0.8em; color: #888;">Tipo: ${poi.tipo}</p>
                    </div>
                `).join('')
                : '<p>Nenhuma trilha ou POI detalhado para este parque.</p>'
            }
        `;
    } else if (tabName === 'Quizzes') {
        contentHTML = `
            <h3>Desafios de Conhecimento</h3>
            <p>Responda a um quiz sobre o parque para ganhar o Badge de Conhecimento!</p>
            <button class="btn btn-primary btn-full-width" style="margin-top: 15px;">
                <i class="fas fa-question-circle"></i> Iniciar Quiz (${park.id})
            </button>
            <p style="margin-top: 10px; font-size: 0.9em; color: var(--color-secondary);">Recompensa: Badge de Conhecimento!</p>
        `;
    }

    tabContent.innerHTML = contentHTML;
}

function renderParkDetail(park) {
    const detailView = document.getElementById('detail-view');
    
    const heroImage = detailView.querySelector('.hero-image');
    if (heroImage) {
        heroImage.style.backgroundImage = `url('/trilhasmgapp/assets/img/${park.id}_hero.jpg')`; 
    }

    detailView.querySelector('.park-title').innerText = park.nome;
    
    // CORREÇÃO FASE 6 (Troca de Abas): Define o conteúdo padrão (Informações) e depois navega
    renderTabContent(park, 'Informações');
    
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
    setupCardListeners(); 
console.log(`✅ ${PARKS_DATA.length} Parques renderizados na Lista. Listeners Ativados.`);
} // <-- Fim da função renderParkList

// ====================================================================
// FUNÇÃO DE RENDERIZAÇÃO DA TELA DE BADGES
// ====================================================================

function renderBadgesView() {
    const badgesView = document.getElementById('badges-view');
    const visits = JSON.parse(localStorage.getItem('userVisits') || '[]');
    let badgesHTML = '<h1 class="park-title" style="padding: 15px 15px 0;">Galeria de Conquistas</h1>';
    
    // ATENÇÃO: VOCÊ DEVE INCLUIR AQUI O ARRAY 'BADGES_CATALOG' NO SEU CÓDIGO FINAL
    const BADGES_CATALOG = [
        { code: "Selo_Biribiri_Visita", nome: "Biribiri Desvendada", tipo: "Visita", descricao: "Primeira visita ao PE Biribiri.", xp: 150, icon: "tree" },
        { code: "Selo_Ibitipoca_Visita", nome: "Ibitipoca Desvendada", tipo: "Visita", descricao: "Primeira visita ao PE Ibitipoca.", xp: 150, icon: "mountain" },
        { code: "Badge_Primeiro_Passo", nome: "Primeiro Check-in", tipo: "Marco", descricao: "Primeira visita registrada no aplicativo.", xp: 50, icon: "shoe-prints" },
        { code: "Badge_Lenda_das_Minas", nome: "Lenda dos 19 PE's", tipo: "Coleção", descricao: "Visite todos os Parques Estaduais.", xp: 5000, icon: "crown" }
    ];

    // Adiciona o estilo de grid para os itens (temporariamente inline)
    badgesHTML += '<div class="badges-grid" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 10px 15px;">';

    BADGES_CATALOG.forEach(badge => {
        const isConquered = visits.includes(badge.code) || 
                            (badge.code === "Badge_Lenda_das_Minas" && visits.length === PARKS_DATA.length) ||
                            (visits.includes(badge.code) || visits.length >= 10 && badge.code === "Badge_Aventureiro_Nivel10"); // Lógica expandida
                            
        const opacity = isConquered ? 1.0 : 0.3;
        const statusText = isConquered ? 'Conquistado!' : 'Bloqueado';

        badgesHTML += `
            <div class="badge-item" style="width: 150px; text-align: center; margin: 10px; opacity: ${opacity};">
                <i class="fas fa-${badge.icon}" style="font-size: 3em; color: ${isConquered ? 'var(--color-secondary)' : 'var(--color-gray)'};"></i>
                <h4 style="margin: 5px 0 2px;">${badge.nome}</h4>
                <p style="font-size: 0.8em; color: #666;">${statusText}</p>
                <p style="font-size: 0.7em; color: var(--color-primary);">${badge.xp} XP</p>
            </div>
        `;
    });

    badgesHTML += '</div>';
    badgesView.innerHTML = badgesHTML;
}

// ====================================================================
// FUNÇÃO DE ATIVAÇÃO DE ABAS (FOI DEFINIDA DE FORMA INCORRETA ANTES)
// ====================================================================
function setupTabListeners() {
    const tabsContainer = document.querySelector('.tabs-container');
    if (!tabsContainer) return; 

    tabsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('tab')) {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');

            const activeTab = e.target.innerText.trim(); 
            const parkName = document.querySelector('#detail-view .park-content .park-title').innerText;
            const currentPark = PARKS_DATA.find(p => p.nome === parkName); 
            
            if (currentPark) {
                renderTabContent(currentPark, activeTab);
            }
        }
    });
}

// ====================================================================
// LÓGICA DE INICIALIZAÇÃO E EVENT HANDLERS (O BLOCO DOMContentLoaded)
// ====================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Referências do DOM (Variáveis que só existem aqui dentro)
    const fab = document.querySelector('.fab');
    const qrReaderDiv = document.getElementById('reader');
    const qrReaderCloseBtn = document.querySelector('#reader-close-btn');

    // Funções Locais de QR Code (MANTIDAS)
    function stopQrScanner() { /* ... */ }
    function startQrScanner() { /* ... */ }

    // Event Listeners de Navegação (Usam a função global navigateTo)
    const navItems = document.querySelectorAll('.nav-item');
    const btnBack = document.querySelector('.btn-back');

    navItems.forEach(item => { item.addEventListener('click', (e) => { e.preventDefault(); const viewId = item.getAttribute('href').substring(1); navigateTo(viewId); }); });
    if (btnBack) { btnBack.addEventListener('click', () => { navigateTo('list-view'); }); }
    if (fab) { fab.addEventListener('click', startQrScanner); }
    if (qrReaderCloseBtn) { qrReaderCloseBtn.addEventListener('click', stopQrScanner); }


    // BLOCO FINAL DE EXECUÇÃO
    // ------------------------------------------------------------------
    
    // 1. Renderiza a lista de parques (e ativa os listeners dos Cards)
    renderParkList(); 

    // 2. Ativa os listeners de troca de abas
    setupTabListeners(); // <-- AGORA ESTÁ CHAMANDO A FUNÇÃO CORRETA

    // 3. Renderiza o Progresso na Home View (Isso injeta o HTML da barra)
    renderHomeProgress();

    // 4. Navega para a Home View (Visão Inicial do Usuário)
    navigateTo('home-view');

    // 5. Inicia o Perfil
    const initialXP = parseInt(localStorage.getItem('userXP') || '0');
    updateProfileDisplay(initialXP);
    
    // 6. Renderiza a Galeria de Badges
    renderBadgesView();

    console.log(`✅ Projeto iniciado e totalmente funcional. Total de parques carregados: ${PARKS_DATA.length}`);
});
