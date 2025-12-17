/* =============================================
   MR Imports - E-commerce de Eletrônicos
   Main JavaScript File
   ============================================= */

// =============================================
// CONFIGURAÇÃO - ALTERE AQUI O NÚMERO DO WHATSAPP
// =============================================
// Formato: código do país + DDD + número (apenas números)
// Exemplo: 5511999999999
const WHATSAPP_NUMBER = "5511999999999";
// =============================================

// =============================================
// Dados dos Produtos (Catálogo)
// =============================================
const produtos = [
  {
    id: 1,
    nome: "Fone Bluetooth NovaSound Pro X",
    marca: "NovaSound",
    categoria: "Áudio",
    preco: 349.90,
    precoOriginal: 499.90,
    desconto: 30,
    rating: 4.8,
    reviewsCount: 234,
    estoque: 45,
    badges: ["novo", "oferta"],
    imagens: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&q=80",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=600&q=80"
    ],
    variacoes: {
      cor: ["Preto", "Branco", "Azul"]
    },
    descricao: "O NovaSound Pro X oferece qualidade de áudio excepcional com cancelamento de ruído ativo de última geração. Design ergonômico para uso prolongado e bateria com até 40 horas de duração.",
    specs: {
      "Tipo": "Over-ear",
      "Conectividade": "Bluetooth 5.3",
      "Bateria": "40 horas",
      "Cancelamento de Ruído": "ANC Ativo",
      "Driver": "40mm",
      "Peso": "250g"
    }
  },
  {
    id: 2,
    nome: "Smartwatch Voltix Series 5",
    marca: "Voltix",
    categoria: "Smartwatch",
    preco: 899.90,
    precoOriginal: 1199.90,
    desconto: 25,
    rating: 4.7,
    reviewsCount: 189,
    estoque: 28,
    badges: ["oferta"],
    imagens: [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&q=80",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&q=80"
    ],
    variacoes: {
      cor: ["Preto", "Prata", "Rose Gold"],
      pulseira: ["Silicone", "Aço", "Couro"]
    },
    descricao: "O Voltix Series 5 é o smartwatch mais avançado da linha. Monitor cardíaco, GPS integrado, resistência à água 5ATM e tela AMOLED sempre ativa.",
    specs: {
      "Tela": "1.9\" AMOLED",
      "Bateria": "7 dias",
      "Resistência": "5ATM",
      "GPS": "Integrado",
      "Sensores": "SpO2, ECG, FC",
      "Compatibilidade": "iOS/Android"
    }
  },
  {
    id: 3,
    nome: "Carregador Wireless Orbit 15W",
    marca: "Orbit",
    categoria: "Acessórios",
    preco: 149.90,
    precoOriginal: null,
    desconto: null,
    rating: 4.5,
    reviewsCount: 312,
    estoque: 120,
    badges: ["novo"],
    imagens: [
      "https://images.unsplash.com/photo-1622957404458-cbf1c3e0e6e8?w=600&q=80",
      "https://images.unsplash.com/photo-1600490036275-35f5f1656861?w=600&q=80"
    ],
    variacoes: {
      cor: ["Preto", "Branco"]
    },
    descricao: "Carregador wireless rápido com 15W de potência. Compatível com todos os smartphones com carregamento sem fio. Design minimalista e elegante.",
    specs: {
      "Potência": "15W",
      "Compatibilidade": "Qi",
      "Input": "USB-C",
      "Proteção": "Sobreaquecimento",
      "Material": "Alumínio + Silicone"
    }
  },
  {
    id: 4,
    nome: "Webcam PixelPro 4K Ultra HD",
    marca: "PixelPro",
    categoria: "Computadores",
    preco: 459.90,
    precoOriginal: 599.90,
    desconto: 23,
    rating: 4.6,
    reviewsCount: 156,
    estoque: 35,
    badges: ["oferta"],
    imagens: [
      "https://images.unsplash.com/photo-1640437892652-a1f2bf9d7bb4?w=600&q=80",
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80"
    ],
    variacoes: {},
    descricao: "Webcam profissional 4K com microfone integrado de alta definição. Perfeita para videoconferências, streaming e criação de conteúdo.",
    specs: {
      "Resolução": "4K Ultra HD",
      "FPS": "60fps",
      "FOV": "90°",
      "Microfone": "Dual integrado",
      "Foco": "Autofoco",
      "Conexão": "USB-C"
    }
  },
  {
    id: 5,
    nome: "Teclado Mecânico NeonWare RGB",
    marca: "NeonWare",
    categoria: "Games",
    preco: 389.90,
    precoOriginal: 489.90,
    desconto: 20,
    rating: 4.9,
    reviewsCount: 445,
    estoque: 52,
    badges: ["hot"],
    imagens: [
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&q=80",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=600&q=80",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=600&q=80"
    ],
    variacoes: {
      switch: ["Red", "Blue", "Brown"]
    },
    descricao: "Teclado mecânico gamer com switches premium, iluminação RGB personalizável por tecla e construção em alumínio. Anti-ghosting completo.",
    specs: {
      "Switch": "Mecânico",
      "Layout": "ABNT2",
      "Iluminação": "RGB per-key",
      "Anti-Ghosting": "Full N-Key",
      "Material": "Alumínio",
      "Conexão": "USB-C destacável"
    }
  },
  {
    id: 6,
    nome: "Lâmpada Inteligente HomeIQ Color",
    marca: "HomeIQ",
    categoria: "Smart Home",
    preco: 79.90,
    precoOriginal: null,
    desconto: null,
    rating: 4.4,
    reviewsCount: 267,
    estoque: 200,
    badges: [],
    imagens: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      "https://images.unsplash.com/photo-1550831858-a87c2a9c6ec9?w=600&q=80"
    ],
    variacoes: {},
    descricao: "Lâmpada inteligente com 16 milhões de cores. Controle por app ou voz via Alexa e Google Home. Economize energia com automações.",
    specs: {
      "Potência": "9W (60W equiv.)",
      "Lumens": "800lm",
      "Cores": "16 milhões",
      "Conectividade": "WiFi 2.4GHz",
      "Compatível": "Alexa, Google Home",
      "Vida útil": "25.000 horas"
    }
  },
  {
    id: 7,
    nome: "Mouse Gamer NeonWare Predator",
    marca: "NeonWare",
    categoria: "Games",
    preco: 249.90,
    precoOriginal: 329.90,
    desconto: 24,
    rating: 4.7,
    reviewsCount: 328,
    estoque: 67,
    badges: ["oferta"],
    imagens: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80",
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&q=80"
    ],
    variacoes: {
      cor: ["Preto", "Branco"]
    },
    descricao: "Mouse gamer de alta performance com sensor óptico de 25.000 DPI, 8 botões programáveis e iluminação RGB sincronizada.",
    specs: {
      "Sensor": "Óptico 25K DPI",
      "Botões": "8 programáveis",
      "Polling Rate": "1000Hz",
      "Peso": "85g",
      "Iluminação": "RGB",
      "Conexão": "USB"
    }
  },
  {
    id: 8,
    nome: "Power Bank Voltix Ultra 20000mAh",
    marca: "Voltix",
    categoria: "Acessórios",
    preco: 199.90,
    precoOriginal: 279.90,
    desconto: 29,
    rating: 4.6,
    reviewsCount: 412,
    estoque: 89,
    badges: ["oferta"],
    imagens: [
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&q=80",
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=600&q=80"
    ],
    variacoes: {
      cor: ["Preto", "Azul"]
    },
    descricao: "Power bank de alta capacidade com carregamento rápido 65W. Carrega notebooks, tablets e smartphones simultaneamente.",
    specs: {
      "Capacidade": "20000mAh",
      "Output Máximo": "65W PD",
      "Portas": "2 USB-C, 1 USB-A",
      "Display": "LED Digital",
      "Proteção": "8 camadas",
      "Peso": "420g"
    }
  },
  {
    id: 9,
    nome: "Caixa de Som Bluetooth NovaSound Boom",
    marca: "NovaSound",
    categoria: "Áudio",
    preco: 279.90,
    precoOriginal: null,
    desconto: null,
    rating: 4.5,
    reviewsCount: 198,
    estoque: 43,
    badges: ["novo"],
    imagens: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&q=80"
    ],
    variacoes: {
      cor: ["Preto", "Vermelho", "Azul"]
    },
    descricao: "Caixa de som portátil com graves profundos e resistência à água IPX7. Bateria de 20 horas e conexão TWS para som estéreo.",
    specs: {
      "Potência": "30W",
      "Bateria": "20 horas",
      "Resistência": "IPX7",
      "Bluetooth": "5.0",
      "TWS": "Sim",
      "Driver": "2x 40mm"
    }
  },
  {
    id: 10,
    nome: "Hub USB-C Orbit Premium 7-em-1",
    marca: "Orbit",
    categoria: "Acessórios",
    preco: 299.90,
    precoOriginal: 399.90,
    desconto: 25,
    rating: 4.8,
    reviewsCount: 167,
    estoque: 34,
    badges: ["oferta"],
    imagens: [
      "https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?w=600&q=80"
    ],
    variacoes: {},
    descricao: "Hub USB-C completo com HDMI 4K, leitor de cartões, portas USB 3.0 e carregamento PD de 100W. Alumínio premium.",
    specs: {
      "Portas": "7 total",
      "HDMI": "4K@60Hz",
      "USB": "3x USB 3.0",
      "Cartão": "SD/MicroSD",
      "PD": "100W pass-through",
      "Material": "Alumínio"
    }
  },
  {
    id: 11,
    nome: "Câmera de Segurança HomeIQ 360",
    marca: "HomeIQ",
    categoria: "Smart Home",
    preco: 329.90,
    precoOriginal: 449.90,
    desconto: 27,
    rating: 4.6,
    reviewsCount: 234,
    estoque: 56,
    badges: ["oferta"],
    imagens: [
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80",
      "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600&q=80"
    ],
    variacoes: {},
    descricao: "Câmera de segurança inteligente com visão 360°, detecção de movimento IA e visão noturna. Áudio bidirecional incluso.",
    specs: {
      "Resolução": "2K QHD",
      "Rotação": "360° horizontal",
      "Visão Noturna": "Até 10m",
      "Armazenamento": "Cloud/SD",
      "Áudio": "Bidirecional",
      "Detecção": "IA movimento"
    }
  },
  {
    id: 12,
    nome: "Monitor Gamer PixelPro 27\" 165Hz",
    marca: "PixelPro",
    categoria: "Computadores",
    preco: 1899.90,
    precoOriginal: 2399.90,
    desconto: 21,
    rating: 4.9,
    reviewsCount: 89,
    estoque: 12,
    badges: ["oferta", "hot"],
    imagens: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80",
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600&q=80"
    ],
    variacoes: {},
    descricao: "Monitor gaming com painel IPS de 27 polegadas, 165Hz e 1ms de resposta. HDR400 e G-Sync/FreeSync compatível.",
    specs: {
      "Tela": "27\" IPS QHD",
      "Refresh": "165Hz",
      "Resposta": "1ms GtG",
      "HDR": "HDR400",
      "Sync": "G-Sync/FreeSync",
      "Conexões": "HDMI 2.1, DP 1.4"
    }
  },
  {
    id: 13,
    nome: "Earbuds NovaSound Air Pro",
    marca: "NovaSound",
    categoria: "Áudio",
    preco: 449.90,
    precoOriginal: 599.90,
    desconto: 25,
    rating: 4.7,
    reviewsCount: 356,
    estoque: 78,
    badges: ["oferta"],
    imagens: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80",
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&q=80"
    ],
    variacoes: {
      cor: ["Preto", "Branco"]
    },
    descricao: "Earbuds premium com ANC híbrido, áudio espacial e até 30 horas de bateria com o case. Resistente à água IPX4.",
    specs: {
      "Driver": "11mm custom",
      "ANC": "Híbrido",
      "Bateria": "8h + 22h case",
      "Codec": "AAC, aptX",
      "Resistência": "IPX4",
      "Bluetooth": "5.3"
    }
  },
  {
    id: 14,
    nome: "Controle Gamer NeonWare Elite",
    marca: "NeonWare",
    categoria: "Games",
    preco: 399.90,
    precoOriginal: null,
    desconto: null,
    rating: 4.8,
    reviewsCount: 201,
    estoque: 41,
    badges: ["novo"],
    imagens: [
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=600&q=80",
      "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=600&q=80"
    ],
    variacoes: {
      cor: ["Preto", "Branco", "Vermelho"]
    },
    descricao: "Controle gamer profissional com gatilhos adaptativos, vibração háptica e conexão wireless de baixa latência.",
    specs: {
      "Conexão": "Wireless 2.4GHz, BT, USB-C",
      "Bateria": "40 horas",
      "Gatilhos": "Adaptativos",
      "Vibração": "Háptica HD",
      "Compatível": "PC, Mobile, Console",
      "Botões extras": "4 paddles"
    }
  },
  {
    id: 15,
    nome: "Tomada Inteligente HomeIQ Power",
    marca: "HomeIQ",
    categoria: "Smart Home",
    preco: 59.90,
    precoOriginal: 89.90,
    desconto: 33,
    rating: 4.3,
    reviewsCount: 445,
    estoque: 150,
    badges: ["oferta"],
    imagens: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
    ],
    variacoes: {},
    descricao: "Tomada inteligente WiFi com monitoramento de consumo. Controle por app ou voz e timer programável.",
    specs: {
      "Carga máxima": "16A / 3680W",
      "WiFi": "2.4GHz",
      "Monitoramento": "Consumo em tempo real",
      "Timer": "Programável",
      "Compatível": "Alexa, Google Home",
      "Proteção": "Sobrecarga"
    }
  },
  {
    id: 16,
    nome: "SSD Externo Orbit Thunder 1TB",
    marca: "Orbit",
    categoria: "Computadores",
    preco: 599.90,
    precoOriginal: 799.90,
    desconto: 25,
    rating: 4.8,
    reviewsCount: 123,
    estoque: 29,
    badges: ["oferta"],
    imagens: [
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&q=80"
    ],
    variacoes: {},
    descricao: "SSD externo ultrarrápido com até 2050MB/s. Compacto, resistente e compatível com USB 3.2 Gen 2x2.",
    specs: {
      "Capacidade": "1TB",
      "Velocidade": "2050MB/s leitura",
      "Interface": "USB 3.2 Gen 2x2",
      "Conector": "USB-C",
      "Resistência": "Quedas até 2m",
      "Peso": "58g"
    }
  },
  {
    id: 17,
    nome: "Ring Light PixelPro Studio 18\"",
    marca: "PixelPro",
    categoria: "Acessórios",
    preco: 299.90,
    precoOriginal: null,
    desconto: null,
    rating: 4.5,
    reviewsCount: 178,
    estoque: 45,
    badges: [],
    imagens: [
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=600&q=80"
    ],
    variacoes: {},
    descricao: "Ring light profissional de 18 polegadas com ajuste de temperatura de cor e intensidade. Tripé incluído.",
    specs: {
      "Diâmetro": "18\" (45cm)",
      "LEDs": "480 LEDs",
      "Temperatura": "3200K-5600K",
      "Dimmer": "1-100%",
      "Altura tripé": "Até 2m",
      "Alimentação": "Bivolt"
    }
  },
  {
    id: 18,
    nome: "Headset Gamer Voltix Thunder 7.1",
    marca: "Voltix",
    categoria: "Games",
    preco: 299.90,
    precoOriginal: 399.90,
    desconto: 25,
    rating: 4.6,
    reviewsCount: 267,
    estoque: 58,
    badges: ["oferta"],
    imagens: [
      "https://images.unsplash.com/photo-1599669454699-248893623440?w=600&q=80",
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&q=80"
    ],
    variacoes: {
      cor: ["Preto", "Preto/Verde"]
    },
    descricao: "Headset gamer com som surround virtual 7.1, microfone removível com cancelamento de ruído e almofadas memory foam.",
    specs: {
      "Driver": "50mm Neodímio",
      "Surround": "7.1 Virtual",
      "Microfone": "Removível, Noise-cancel",
      "Almofadas": "Memory Foam",
      "Conexão": "USB / P2",
      "Iluminação": "RGB"
    }
  }
];

// =============================================
// Cupons de Desconto
// =============================================
const cupons = {
  "BEMVINDO10": { tipo: "porcentagem", valor: 10, descricao: "10% de desconto" },
  "FRETEGRATIS": { tipo: "frete", valor: 0, descricao: "Frete grátis" }
};

// =============================================
// Configurações de Frete
// =============================================
const configFrete = {
  gratis: 299, // Frete grátis acima de R$ 299
  faixas: [
    { min: 1, max: 9, preco: 14.90, prazo: "2-3 dias úteis", prazoExpress: "1 dia útil", precoExpress: 24.90 },
    { min: 10, max: 39, preco: 19.90, prazo: "3-5 dias úteis", prazoExpress: "1-2 dias úteis", precoExpress: 34.90 },
    { min: 40, max: 99, preco: 24.90, prazo: "5-8 dias úteis", prazoExpress: "2-3 dias úteis", precoExpress: 44.90 }
  ]
};

// =============================================
// Estado Global
// =============================================
let carrinho = JSON.parse(localStorage.getItem('mr_carrinho')) || [];
let favoritos = JSON.parse(localStorage.getItem('mr_favoritos')) || [];
let comparar = JSON.parse(localStorage.getItem('mr_comparar')) || [];
let cupomAplicado = JSON.parse(localStorage.getItem('mr_cupom')) || null;

// =============================================
// Inicialização
// =============================================
document.addEventListener('DOMContentLoaded', function() {
  // Inicializa componentes globais
  initHeader();
  initMobileNav();
  initWhatsAppButton();
  updateCartCount();
  initFadeAnimations();
  
  // Inicializa página específica
  const page = document.body.dataset.page;
  
  switch(page) {
    case 'home':
      initHomePage();
      break;
    case 'loja':
      initLojaPage();
      break;
    case 'produto':
      initProdutoPage();
      break;
    case 'ofertas':
      initOfertasPage();
      break;
    case 'carrinho':
      initCarrinhoPage();
      break;
    case 'checkout':
      initCheckoutPage();
      break;
    case 'favoritos':
      initFavoritosPage();
      break;
    case 'comparar':
      initCompararPage();
      break;
    case 'suporte':
      initSuportePage();
      break;
  }
});

// =============================================
// Header & Navigation
// =============================================
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;
  
  // Scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
      header.style.background = 'rgba(10, 10, 26, 0.98)';
    } else {
      header.style.background = 'rgba(10, 10, 26, 0.95)';
    }
    lastScroll = currentScroll;
  });
}

function initMobileNav() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMobile = document.querySelector('.nav-mobile');
  
  if (menuToggle && navMobile) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMobile.classList.toggle('active');
      document.body.style.overflow = navMobile.classList.contains('active') ? 'hidden' : '';
    });
    
    // Fecha ao clicar em link
    navMobile.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMobile.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
}

// =============================================
// WhatsApp Button
// =============================================
function initWhatsAppButton() {
  const btn = document.querySelector('.whatsapp-btn');
  if (btn) {
    btn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de tirar uma dúvida sobre a MR Imports.')}`;
  }
}

// =============================================
// Cart Functions
// =============================================
function updateCartCount() {
  const countElements = document.querySelectorAll('.cart-count');
  const totalItems = carrinho.reduce((sum, item) => sum + item.quantidade, 0);
  
  countElements.forEach(el => {
    el.textContent = totalItems;
    el.style.display = totalItems > 0 ? 'flex' : 'none';
  });
  
  // Atualiza barra de frete grátis
  updateShippingBar();
}

function addToCart(productId, quantidade = 1, variacoes = {}) {
  const produto = produtos.find(p => p.id === productId);
  if (!produto) return;
  
  // Verifica estoque
  if (produto.estoque < quantidade) {
    showToast('Estoque insuficiente', 'error');
    return;
  }
  
  // Verifica se já existe no carrinho com mesmas variações
  const existingIndex = carrinho.findIndex(item => 
    item.id === productId && JSON.stringify(item.variacoes) === JSON.stringify(variacoes)
  );
  
  if (existingIndex >= 0) {
    carrinho[existingIndex].quantidade += quantidade;
  } else {
    carrinho.push({
      id: productId,
      quantidade,
      variacoes
    });
  }
  
  saveCart();
  updateCartCount();
  showToast(`${produto.nome} adicionado ao carrinho!`, 'success');
}

function removeFromCart(index) {
  carrinho.splice(index, 1);
  saveCart();
  updateCartCount();
  
  // Se estiver na página do carrinho, re-renderiza
  if (document.body.dataset.page === 'carrinho') {
    renderCarrinho();
  }
}

function updateCartItemQuantity(index, quantidade) {
  if (quantidade <= 0) {
    removeFromCart(index);
    return;
  }
  
  const produto = produtos.find(p => p.id === carrinho[index].id);
  if (quantidade > produto.estoque) {
    showToast('Estoque insuficiente', 'error');
    return;
  }
  
  carrinho[index].quantidade = quantidade;
  saveCart();
  updateCartCount();
  
  if (document.body.dataset.page === 'carrinho') {
    renderCarrinho();
  }
}

function saveCart() {
  localStorage.setItem('mr_carrinho', JSON.stringify(carrinho));
}

function getCartTotal() {
  return carrinho.reduce((total, item) => {
    const produto = produtos.find(p => p.id === item.id);
    return total + (produto ? produto.preco * item.quantidade : 0);
  }, 0);
}

// =============================================
// Favorites Functions
// =============================================
function toggleFavorite(productId) {
  const index = favoritos.indexOf(productId);
  
  if (index >= 0) {
    favoritos.splice(index, 1);
    showToast('Removido dos favoritos', 'success');
  } else {
    favoritos.push(productId);
    showToast('Adicionado aos favoritos!', 'success');
  }
  
  localStorage.setItem('mr_favoritos', JSON.stringify(favoritos));
  
  // Atualiza botões
  document.querySelectorAll(`[data-favorite="${productId}"]`).forEach(btn => {
    btn.classList.toggle('active', favoritos.includes(productId));
  });
  
  if (document.body.dataset.page === 'favoritos') {
    renderFavoritos();
  }
}

function isFavorite(productId) {
  return favoritos.includes(productId);
}

// =============================================
// Compare Functions
// =============================================
function toggleCompare(productId) {
  const index = comparar.indexOf(productId);
  
  if (index >= 0) {
    comparar.splice(index, 1);
    showToast('Removido da comparação', 'success');
  } else {
    if (comparar.length >= 3) {
      showToast('Máximo de 3 produtos para comparar', 'error');
      return;
    }
    comparar.push(productId);
    showToast('Adicionado para comparação!', 'success');
  }
  
  localStorage.setItem('mr_comparar', JSON.stringify(comparar));
  
  // Atualiza botões
  document.querySelectorAll(`[data-compare="${productId}"]`).forEach(btn => {
    btn.classList.toggle('active', comparar.includes(productId));
  });
  
  if (document.body.dataset.page === 'comparar') {
    renderComparar();
  }
}

function isComparing(productId) {
  return comparar.includes(productId);
}

// =============================================
// Shipping Bar
// =============================================
function updateShippingBar() {
  const bars = document.querySelectorAll('.shipping-bar');
  const total = getCartTotal();
  const remaining = configFrete.gratis - total;
  const progress = Math.min((total / configFrete.gratis) * 100, 100);
  
  bars.forEach(bar => {
    const textEl = bar.querySelector('.shipping-text');
    const progressBar = bar.querySelector('.shipping-progress-bar');
    
    if (textEl) {
      if (remaining <= 0) {
        textEl.innerHTML = '🎉 Parabéns! Você ganhou <strong>frete grátis!</strong>';
      } else {
        textEl.innerHTML = `Faltam <strong>R$ ${remaining.toFixed(2).replace('.', ',')}</strong> para frete grátis!`;
      }
    }
    
    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }
  });
}

// =============================================
// Toast Notifications
// =============================================
function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${type === 'success' ? '✓' : '✕'}</span>
    <span class="toast-message">${message}</span>
    <button class="toast-close">×</button>
  `;
  
  container.appendChild(toast);
  
  toast.querySelector('.toast-close').addEventListener('click', () => {
    toast.remove();
  });
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// =============================================
// Fade Animations
// =============================================
function initFadeAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}

// =============================================
// Product Card Renderer
// =============================================
function renderProductCard(produto) {
  const badges = produto.badges.map(badge => {
    const classes = {
      'novo': 'badge-new',
      'oferta': 'badge-sale',
      'hot': 'badge-hot'
    };
    const texts = {
      'novo': 'Novo',
      'oferta': 'Oferta',
      'hot': 'Hot'
    };
    return `<span class="badge ${classes[badge] || ''}">${texts[badge] || badge}</span>`;
  }).join('');
  
  const stars = renderStars(produto.rating);
  
  const stockClass = produto.estoque <= 5 ? 'low' : (produto.estoque === 0 ? 'out' : '');
  const stockText = produto.estoque === 0 ? 'Esgotado' : 
    (produto.estoque <= 5 ? `Restam ${produto.estoque} unidades` : 'Em estoque');
  
  return `
    <article class="card fade-in">
      <a href="produto.html?id=${produto.id}" class="card-image">
        <img src="${produto.imagens[0]}" alt="${produto.nome}" loading="lazy">
        ${badges ? `<div class="card-badges">${badges}</div>` : ''}
        <div class="card-actions">
          <button class="card-action-btn ${isFavorite(produto.id) ? 'active' : ''}" 
                  data-favorite="${produto.id}" 
                  onclick="event.preventDefault(); toggleFavorite(${produto.id})"
                  title="Favoritar">
            ♥
          </button>
          <button class="card-action-btn ${isComparing(produto.id) ? 'active' : ''}" 
                  data-compare="${produto.id}" 
                  onclick="event.preventDefault(); toggleCompare(${produto.id})"
                  title="Comparar">
            ⇄
          </button>
        </div>
      </a>
      <div class="card-body">
        <span class="card-category">${produto.categoria}</span>
        <h3 class="card-title">
          <a href="produto.html?id=${produto.id}">${produto.nome}</a>
        </h3>
        <div class="card-rating">
          <span class="stars">${stars}</span>
          <span class="rating-count">(${produto.reviewsCount})</span>
        </div>
        <div class="card-price">
          <span class="price-current">R$ ${produto.preco.toFixed(2).replace('.', ',')}</span>
          ${produto.precoOriginal ? `<span class="price-original">R$ ${produto.precoOriginal.toFixed(2).replace('.', ',')}</span>` : ''}
        </div>
        <p class="card-stock ${stockClass}">${stockText}</p>
      </div>
      <div class="card-footer">
        <button class="btn btn-primary btn-sm" style="width: 100%;" 
                onclick="addToCart(${produto.id})" 
                ${produto.estoque === 0 ? 'disabled' : ''}>
          ${produto.estoque === 0 ? 'Indisponível' : '🛒 Adicionar'}
        </button>
      </div>
    </article>
  `;
}

function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
  
  return '★'.repeat(fullStars) + 
         (hasHalf ? '☆' : '') + 
         '☆'.repeat(emptyStars);
}

// =============================================
// Home Page
// =============================================
function initHomePage() {
  renderCategories();
  renderFeaturedProducts();
  initNewsletter();
}

function renderCategories() {
  const container = document.querySelector('.categories-grid');
  if (!container) return;
  
  const categories = [
    { nome: 'Celulares', icon: '📱', count: produtos.filter(p => p.categoria === 'Celulares').length },
    { nome: 'Áudio', icon: '🎧', count: produtos.filter(p => p.categoria === 'Áudio').length },
    { nome: 'Acessórios', icon: '🔌', count: produtos.filter(p => p.categoria === 'Acessórios').length },
    { nome: 'Smartwatch', icon: '⌚', count: produtos.filter(p => p.categoria === 'Smartwatch').length },
    { nome: 'Smart Home', icon: '🏠', count: produtos.filter(p => p.categoria === 'Smart Home').length },
    { nome: 'Games', icon: '🎮', count: produtos.filter(p => p.categoria === 'Games').length }
  ];
  
  container.innerHTML = categories.map(cat => `
    <a href="loja.html?categoria=${encodeURIComponent(cat.nome)}" class="card category-card fade-in">
      <div class="category-icon">${cat.icon}</div>
      <h3>${cat.nome}</h3>
      <p>${cat.count} produtos</p>
    </a>
  `).join('');
  
  initFadeAnimations();
}

function renderFeaturedProducts() {
  const container = document.querySelector('.featured-products-grid');
  if (!container) return;
  
  // Produtos em destaque (mais bem avaliados)
  const featured = [...produtos]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);
  
  container.innerHTML = featured.map(p => renderProductCard(p)).join('');
  initFadeAnimations();
}

function initNewsletter() {
  const form = document.querySelector('.newsletter-form');
  if (!form) return;
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    
    if (validateEmail(email)) {
      showToast('Inscrição realizada com sucesso!', 'success');
      this.reset();
    } else {
      showToast('Por favor, insira um email válido', 'error');
    }
  });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// =============================================
// Loja Page
// =============================================
let lojaState = {
  busca: '',
  categorias: [],
  marcas: [],
  precoMin: null,
  precoMax: null,
  notaMin: null,
  emPromocao: false,
  emEstoque: true,
  ordenacao: 'populares',
  pagina: 1,
  porPagina: 12
};

function initLojaPage() {
  // Carrega filtros da URL
  const params = new URLSearchParams(window.location.search);
  if (params.get('categoria')) {
    lojaState.categorias = [params.get('categoria')];
  }
  if (params.get('busca')) {
    lojaState.busca = params.get('busca');
    const searchInput = document.querySelector('.search-input');
    if (searchInput) searchInput.value = lojaState.busca;
  }
  
  initFilters();
  initSearch();
  initSort();
  renderLoja();
}

function initFilters() {
  // Categorias
  const categoriasContainer = document.querySelector('.filter-categorias');
  if (categoriasContainer) {
    const categorias = [...new Set(produtos.map(p => p.categoria))];
    categoriasContainer.innerHTML = categorias.map(cat => `
      <label class="form-checkbox">
        <input type="checkbox" value="${cat}" ${lojaState.categorias.includes(cat) ? 'checked' : ''}>
        <span>${cat}</span>
      </label>
    `).join('');
    
    categoriasContainer.querySelectorAll('input').forEach(input => {
      input.addEventListener('change', () => {
        if (input.checked) {
          lojaState.categorias.push(input.value);
        } else {
          lojaState.categorias = lojaState.categorias.filter(c => c !== input.value);
        }
        lojaState.pagina = 1;
        renderLoja();
      });
    });
  }
  
  // Marcas
  const marcasContainer = document.querySelector('.filter-marcas');
  if (marcasContainer) {
    const marcas = [...new Set(produtos.map(p => p.marca))];
    marcasContainer.innerHTML = marcas.map(marca => `
      <label class="form-checkbox">
        <input type="checkbox" value="${marca}">
        <span>${marca}</span>
      </label>
    `).join('');
    
    marcasContainer.querySelectorAll('input').forEach(input => {
      input.addEventListener('change', () => {
        if (input.checked) {
          lojaState.marcas.push(input.value);
        } else {
          lojaState.marcas = lojaState.marcas.filter(m => m !== input.value);
        }
        lojaState.pagina = 1;
        renderLoja();
      });
    });
  }
  
  // Preço
  const precoMin = document.querySelector('.preco-min');
  const precoMax = document.querySelector('.preco-max');
  
  if (precoMin) {
    precoMin.addEventListener('input', debounce(() => {
      lojaState.precoMin = precoMin.value ? parseFloat(precoMin.value) : null;
      lojaState.pagina = 1;
      renderLoja();
    }, 500));
  }
  
  if (precoMax) {
    precoMax.addEventListener('input', debounce(() => {
      lojaState.precoMax = precoMax.value ? parseFloat(precoMax.value) : null;
      lojaState.pagina = 1;
      renderLoja();
    }, 500));
  }
  
  // Em promoção
  const emPromocao = document.querySelector('.em-promocao');
  if (emPromocao) {
    emPromocao.addEventListener('change', () => {
      lojaState.emPromocao = emPromocao.checked;
      lojaState.pagina = 1;
      renderLoja();
    });
  }
  
  // Em estoque
  const emEstoque = document.querySelector('.em-estoque');
  if (emEstoque) {
    emEstoque.checked = lojaState.emEstoque;
    emEstoque.addEventListener('change', () => {
      lojaState.emEstoque = emEstoque.checked;
      lojaState.pagina = 1;
      renderLoja();
    });
  }
  
  // Toggle mobile filter
  const filterToggle = document.querySelector('.filter-toggle-btn');
  const filterModal = document.querySelector('.filter-modal');
  const filterClose = document.querySelector('.filter-modal-close');
  const filterOverlay = document.querySelector('.filter-modal-overlay');
  
  if (filterToggle && filterModal) {
    filterToggle.addEventListener('click', () => {
      filterModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
    
    [filterClose, filterOverlay].forEach(el => {
      if (el) {
        el.addEventListener('click', () => {
          filterModal.classList.remove('active');
          document.body.style.overflow = '';
        });
      }
    });
  }
}

function initSearch() {
  const searchInput = document.querySelector('.search-input');
  const searchBtn = document.querySelector('.search-btn');
  
  if (searchInput) {
    searchInput.addEventListener('input', debounce(() => {
      lojaState.busca = searchInput.value;
      lojaState.pagina = 1;
      renderLoja();
    }, 300));
    
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        lojaState.busca = searchInput.value;
        lojaState.pagina = 1;
        renderLoja();
      }
    });
  }
  
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      lojaState.busca = searchInput.value;
      lojaState.pagina = 1;
      renderLoja();
    });
  }
}

function initSort() {
  const sortSelect = document.querySelector('.sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      lojaState.ordenacao = sortSelect.value;
      renderLoja();
    });
  }
}

function filterProducts() {
  let filtered = [...produtos];
  
  // Busca
  if (lojaState.busca) {
    const termo = lojaState.busca.toLowerCase();
    filtered = filtered.filter(p => 
      p.nome.toLowerCase().includes(termo) ||
      p.marca.toLowerCase().includes(termo) ||
      p.categoria.toLowerCase().includes(termo)
    );
  }
  
  // Categorias
  if (lojaState.categorias.length > 0) {
    filtered = filtered.filter(p => lojaState.categorias.includes(p.categoria));
  }
  
  // Marcas
  if (lojaState.marcas.length > 0) {
    filtered = filtered.filter(p => lojaState.marcas.includes(p.marca));
  }
  
  // Preço
  if (lojaState.precoMin !== null) {
    filtered = filtered.filter(p => p.preco >= lojaState.precoMin);
  }
  if (lojaState.precoMax !== null) {
    filtered = filtered.filter(p => p.preco <= lojaState.precoMax);
  }
  
  // Nota mínima
  if (lojaState.notaMin !== null) {
    filtered = filtered.filter(p => p.rating >= lojaState.notaMin);
  }
  
  // Em promoção
  if (lojaState.emPromocao) {
    filtered = filtered.filter(p => p.desconto && p.desconto > 0);
  }
  
  // Em estoque
  if (lojaState.emEstoque) {
    filtered = filtered.filter(p => p.estoque > 0);
  }
  
  // Ordenação
  switch (lojaState.ordenacao) {
    case 'menor-preco':
      filtered.sort((a, b) => a.preco - b.preco);
      break;
    case 'maior-preco':
      filtered.sort((a, b) => b.preco - a.preco);
      break;
    case 'populares':
      filtered.sort((a, b) => b.reviewsCount - a.reviewsCount);
      break;
    case 'novidades':
      filtered.sort((a, b) => (b.badges.includes('novo') ? 1 : 0) - (a.badges.includes('novo') ? 1 : 0));
      break;
    case 'avaliados':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
  }
  
  return filtered;
}

function renderLoja() {
  const container = document.querySelector('.products-grid');
  const resultsEl = document.querySelector('.shop-results');
  const loadMoreBtn = document.querySelector('.load-more-btn');
  
  if (!container) return;
  
  const filtered = filterProducts();
  const totalProducts = filtered.length;
  const start = 0;
  const end = lojaState.pagina * lojaState.porPagina;
  const toShow = filtered.slice(start, end);
  
  container.innerHTML = toShow.map(p => renderProductCard(p)).join('');
  
  if (resultsEl) {
    resultsEl.textContent = `${totalProducts} produto${totalProducts !== 1 ? 's' : ''} encontrado${totalProducts !== 1 ? 's' : ''}`;
  }
  
  if (loadMoreBtn) {
    loadMoreBtn.style.display = end >= totalProducts ? 'none' : 'inline-flex';
    loadMoreBtn.onclick = () => {
      lojaState.pagina++;
      renderLoja();
    };
  }
  
  initFadeAnimations();
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// =============================================
// Produto Page
// =============================================
function initProdutoPage() {
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get('id'));
  
  if (!productId) {
    window.location.href = 'loja.html';
    return;
  }
  
  const produto = produtos.find(p => p.id === productId);
  
  if (!produto) {
    window.location.href = 'loja.html';
    return;
  }
  
  renderProduto(produto);
  initProductGallery(produto);
  initProductVariations(produto);
  initProductQuantity(produto);
  initProductActions(produto);
  initProductTabs(produto);
  renderRelatedProducts(produto);
}

function renderProduto(produto) {
  // Título da página
  document.title = `${produto.nome} | MR Imports`;
  
  // Breadcrumb
  const breadcrumb = document.querySelector('.product-breadcrumb');
  if (breadcrumb) {
    breadcrumb.innerHTML = `
      <a href="index.html">Home</a>
      <span>/</span>
      <a href="loja.html">Loja</a>
      <span>/</span>
      <a href="loja.html?categoria=${encodeURIComponent(produto.categoria)}">${produto.categoria}</a>
      <span>/</span>
      <span>${produto.nome}</span>
    `;
  }
  
  // Info básica
  const titleEl = document.querySelector('.product-title');
  const brandEl = document.querySelector('.product-brand');
  const ratingEl = document.querySelector('.product-rating');
  
  if (titleEl) titleEl.textContent = produto.nome;
  if (brandEl) brandEl.textContent = produto.marca;
  if (ratingEl) {
    ratingEl.innerHTML = `
      <span class="stars">${renderStars(produto.rating)}</span>
      <span>${produto.rating.toFixed(1)}</span>
      <span class="rating-count">(${produto.reviewsCount} avaliações)</span>
    `;
  }
  
  // Preço
  const priceBlock = document.querySelector('.product-price-block');
  if (priceBlock) {
    const priceEl = priceBlock.querySelector('.product-price');
    const installmentsEl = priceBlock.querySelector('.product-installments');
    const stockEl = priceBlock.querySelector('.product-stock');
    
    if (priceEl) {
      priceEl.innerHTML = `
        <span class="price-current">R$ ${produto.preco.toFixed(2).replace('.', ',')}</span>
        ${produto.precoOriginal ? `<span class="price-original">R$ ${produto.precoOriginal.toFixed(2).replace('.', ',')}</span>` : ''}
        ${produto.desconto ? `<span class="badge badge-sale">-${produto.desconto}%</span>` : ''}
      `;
    }
    
    if (installmentsEl) {
      const parcela = (produto.preco / 12).toFixed(2).replace('.', ',');
      installmentsEl.textContent = `ou 12x de R$ ${parcela} sem juros`;
    }
    
    if (stockEl) {
      const stockClass = produto.estoque <= 5 ? 'low' : (produto.estoque === 0 ? 'out' : '');
      const stockText = produto.estoque === 0 ? '❌ Produto esgotado' : 
        (produto.estoque <= 5 ? `⚠️ Restam apenas ${produto.estoque} unidades` : `✓ ${produto.estoque} unidades em estoque`);
      stockEl.className = `product-stock ${stockClass}`;
      stockEl.textContent = stockText;
    }
  }
  
  // Descrição (na aba)
  const descTab = document.querySelector('.tab-descricao');
  if (descTab) {
    descTab.innerHTML = `<p>${produto.descricao}</p>`;
  }
  
  // Especificações (na aba)
  const specsTab = document.querySelector('.tab-especificacoes');
  if (specsTab) {
    specsTab.innerHTML = `
      <table class="specs-table">
        <tbody>
          ${Object.entries(produto.specs).map(([key, value]) => `
            <tr>
              <td>${key}</td>
              <td>${value}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }
}

function initProductGallery(produto) {
  const mainImage = document.querySelector('.product-main-image img');
  const thumbsContainer = document.querySelector('.product-thumbnails');
  
  if (!mainImage || !thumbsContainer) return;
  
  mainImage.src = produto.imagens[0];
  mainImage.alt = produto.nome;
  
  thumbsContainer.innerHTML = produto.imagens.map((img, i) => `
    <button class="product-thumb ${i === 0 ? 'active' : ''}" data-index="${i}">
      <img src="${img}" alt="${produto.nome} - Imagem ${i + 1}">
    </button>
  `).join('');
  
  thumbsContainer.querySelectorAll('.product-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      const index = parseInt(thumb.dataset.index);
      mainImage.src = produto.imagens[index];
      
      thumbsContainer.querySelectorAll('.product-thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });
}

function initProductVariations(produto) {
  const container = document.querySelector('.product-variations');
  if (!container || !produto.variacoes || Object.keys(produto.variacoes).length === 0) {
    if (container) container.style.display = 'none';
    return;
  }
  
  container.innerHTML = Object.entries(produto.variacoes).map(([key, options]) => `
    <div class="variation-group">
      <p class="variation-label">${key.charAt(0).toUpperCase() + key.slice(1)}:</p>
      <div class="variation-options" data-variation="${key}">
        ${options.map((opt, i) => `
          <button class="variation-option ${i === 0 ? 'active' : ''}" data-value="${opt}">${opt}</button>
        `).join('')}
      </div>
    </div>
  `).join('');
  
  container.querySelectorAll('.variation-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.closest('.variation-options');
      group.querySelectorAll('.variation-option').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

function initProductQuantity(produto) {
  const container = document.querySelector('.quantity-control');
  if (!container) return;
  
  const minusBtn = container.querySelector('.quantity-minus');
  const plusBtn = container.querySelector('.quantity-plus');
  const valueEl = container.querySelector('.quantity-value');
  
  let quantity = 1;
  
  if (minusBtn) {
    minusBtn.addEventListener('click', () => {
      if (quantity > 1) {
        quantity--;
        valueEl.textContent = quantity;
      }
    });
  }
  
  if (plusBtn) {
    plusBtn.addEventListener('click', () => {
      if (quantity < produto.estoque) {
        quantity++;
        valueEl.textContent = quantity;
      } else {
        showToast('Quantidade máxima em estoque', 'error');
      }
    });
  }
}

function initProductActions(produto) {
  const addToCartBtn = document.querySelector('.add-to-cart-btn');
  const favoriteBtn = document.querySelector('.favorite-btn');
  const compareBtn = document.querySelector('.compare-btn');
  
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      const quantity = parseInt(document.querySelector('.quantity-value')?.textContent || 1);
      const variacoes = {};
      
      document.querySelectorAll('.variation-options').forEach(group => {
        const key = group.dataset.variation;
        const activeOption = group.querySelector('.variation-option.active');
        if (activeOption) {
          variacoes[key] = activeOption.dataset.value;
        }
      });
      
      addToCart(produto.id, quantity, variacoes);
    });
  }
  
  if (favoriteBtn) {
    favoriteBtn.classList.toggle('active', isFavorite(produto.id));
    favoriteBtn.addEventListener('click', () => {
      toggleFavorite(produto.id);
      favoriteBtn.classList.toggle('active', isFavorite(produto.id));
    });
  }
  
  if (compareBtn) {
    compareBtn.classList.toggle('active', isComparing(produto.id));
    compareBtn.addEventListener('click', () => {
      toggleCompare(produto.id);
      compareBtn.classList.toggle('active', isComparing(produto.id));
    });
  }
}

function initProductTabs(produto) {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));
      
      btn.classList.add('active');
      document.querySelector(`.tab-pane[data-tab="${target}"]`)?.classList.add('active');
    });
  });
  
  // Reviews
  renderReviews(produto);
  initReviewForm(produto);
}

function renderReviews(produto) {
  const container = document.querySelector('.reviews-list');
  if (!container) return;
  
  const reviews = JSON.parse(localStorage.getItem(`mr_reviews_${produto.id}`)) || [];
  
  if (reviews.length === 0) {
    container.innerHTML = '<p class="text-muted">Nenhuma avaliação ainda. Seja o primeiro a avaliar!</p>';
    return;
  }
  
  container.innerHTML = reviews.map(review => `
    <div class="review-card">
      <div class="review-header">
        <div>
          <p class="review-author">${review.nome}</p>
          <span class="stars">${renderStars(review.rating)}</span>
        </div>
        <span class="review-date">${new Date(review.data).toLocaleDateString('pt-BR')}</span>
      </div>
      <p class="review-text">${review.texto}</p>
    </div>
  `).join('');
}

function initReviewForm(produto) {
  const form = document.querySelector('.review-form');
  if (!form) return;
  
  let selectedRating = 0;
  
  const ratingInput = form.querySelector('.rating-input');
  if (ratingInput) {
    ratingInput.innerHTML = [1, 2, 3, 4, 5].map(i => `
      <button type="button" data-rating="${i}">☆</button>
    `).join('');
    
    ratingInput.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedRating = parseInt(btn.dataset.rating);
        ratingInput.querySelectorAll('button').forEach((b, i) => {
          b.textContent = i < selectedRating ? '★' : '☆';
          b.classList.toggle('active', i < selectedRating);
        });
      });
    });
  }
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nome = form.querySelector('.review-nome')?.value;
    const texto = form.querySelector('.review-texto')?.value;
    
    if (!nome || !texto || !selectedRating) {
      showToast('Preencha todos os campos', 'error');
      return;
    }
    
    const reviews = JSON.parse(localStorage.getItem(`mr_reviews_${produto.id}`)) || [];
    reviews.unshift({
      nome,
      texto,
      rating: selectedRating,
      data: new Date().toISOString()
    });
    
    localStorage.setItem(`mr_reviews_${produto.id}`, JSON.stringify(reviews));
    
    showToast('Avaliação enviada com sucesso!', 'success');
    form.reset();
    selectedRating = 0;
    ratingInput?.querySelectorAll('button').forEach(b => {
      b.textContent = '☆';
      b.classList.remove('active');
    });
    
    renderReviews(produto);
  });
}

function renderRelatedProducts(produto) {
  const container = document.querySelector('.related-products-grid');
  if (!container) return;
  
  const related = produtos
    .filter(p => p.id !== produto.id && p.categoria === produto.categoria)
    .slice(0, 4);
  
  container.innerHTML = related.map(p => renderProductCard(p)).join('');
  initFadeAnimations();
}

// =============================================
// Ofertas Page
// =============================================
function initOfertasPage() {
  initCountdown();
  renderOfertas();
}

function initCountdown() {
  const countdownEl = document.querySelector('.countdown');
  if (!countdownEl) return;
  
  // Fim da semana
  const now = new Date();
  const endOfWeek = new Date(now);
  endOfWeek.setDate(now.getDate() + (7 - now.getDay()));
  endOfWeek.setHours(23, 59, 59, 999);
  
  function updateCountdown() {
    const diff = endOfWeek - new Date();
    
    if (diff <= 0) {
      countdownEl.innerHTML = '<p>Novas ofertas em breve!</p>';
      return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    countdownEl.innerHTML = `
      <div class="countdown-item">
        <span class="countdown-value">${String(days).padStart(2, '0')}</span>
        <span class="countdown-label">Dias</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-value">${String(hours).padStart(2, '0')}</span>
        <span class="countdown-label">Horas</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-value">${String(minutes).padStart(2, '0')}</span>
        <span class="countdown-label">Min</span>
      </div>
      <div class="countdown-item">
        <span class="countdown-value">${String(seconds).padStart(2, '0')}</span>
        <span class="countdown-label">Seg</span>
      </div>
    `;
  }
  
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

function renderOfertas() {
  const container = document.querySelector('.ofertas-grid');
  if (!container) return;
  
  const ofertas = produtos.filter(p => p.desconto && p.desconto > 0);
  container.innerHTML = ofertas.map(p => renderProductCard(p)).join('');
  initFadeAnimations();
}

// =============================================
// Carrinho Page
// =============================================
function initCarrinhoPage() {
  renderCarrinho();
  initCoupon();
}

function renderCarrinho() {
  const itemsContainer = document.querySelector('.cart-items');
  const summaryContainer = document.querySelector('.cart-summary');
  const emptyContainer = document.querySelector('.cart-empty');
  
  if (!itemsContainer) return;
  
  if (carrinho.length === 0) {
    if (itemsContainer) itemsContainer.style.display = 'none';
    if (summaryContainer) summaryContainer.style.display = 'none';
    if (emptyContainer) emptyContainer.style.display = 'block';
    return;
  }
  
  if (itemsContainer) itemsContainer.style.display = 'flex';
  if (summaryContainer) summaryContainer.style.display = 'block';
  if (emptyContainer) emptyContainer.style.display = 'none';
  
  // Renderiza itens
  itemsContainer.innerHTML = carrinho.map((item, index) => {
    const produto = produtos.find(p => p.id === item.id);
    if (!produto) return '';
    
    const variacoesText = Object.entries(item.variacoes || {})
      .map(([key, value]) => `${key}: ${value}`)
      .join(' | ');
    
    return `
      <div class="cart-item">
        <div class="cart-item-image">
          <img src="${produto.imagens[0]}" alt="${produto.nome}">
        </div>
        <div class="cart-item-info">
          <h3 class="cart-item-title">
            <a href="produto.html?id=${produto.id}">${produto.nome}</a>
          </h3>
          ${variacoesText ? `<p class="cart-item-variant">${variacoesText}</p>` : ''}
          <p class="cart-item-price">R$ ${produto.preco.toFixed(2).replace('.', ',')}</p>
        </div>
        <div class="cart-item-actions">
          <button class="cart-item-remove" onclick="removeFromCart(${index})">×</button>
          <div class="quantity-control">
            <button class="quantity-btn quantity-minus" onclick="updateCartItemQuantity(${index}, ${item.quantidade - 1})">−</button>
            <span class="quantity-value">${item.quantidade}</span>
            <button class="quantity-btn quantity-plus" onclick="updateCartItemQuantity(${index}, ${item.quantidade + 1})">+</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  // Atualiza resumo
  updateCartSummary();
}

function updateCartSummary() {
  const subtotal = getCartTotal();
  let frete = subtotal >= configFrete.gratis ? 0 : 19.90; // Frete padrão
  let desconto = 0;
  
  // Aplica cupom
  if (cupomAplicado) {
    const cupom = cupons[cupomAplicado];
    if (cupom) {
      if (cupom.tipo === 'porcentagem') {
        desconto = subtotal * (cupom.valor / 100);
      } else if (cupom.tipo === 'frete') {
        frete = 0;
      }
    }
  }
  
  const total = subtotal + frete - desconto;
  
  // Atualiza elementos
  const subtotalEl = document.querySelector('.summary-subtotal');
  const freteEl = document.querySelector('.summary-frete');
  const descontoEl = document.querySelector('.summary-desconto');
  const totalEl = document.querySelector('.summary-total');
  
  if (subtotalEl) subtotalEl.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
  if (freteEl) freteEl.textContent = frete === 0 ? 'Grátis' : `R$ ${frete.toFixed(2).replace('.', ',')}`;
  if (descontoEl) {
    descontoEl.textContent = desconto > 0 ? `-R$ ${desconto.toFixed(2).replace('.', ',')}` : 'R$ 0,00';
    descontoEl.parentElement.style.display = desconto > 0 ? 'flex' : 'none';
  }
  if (totalEl) totalEl.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
  
  // Cupom aplicado badge
  const couponApplied = document.querySelector('.coupon-applied');
  if (couponApplied) {
    if (cupomAplicado) {
      couponApplied.style.display = 'flex';
      couponApplied.querySelector('.coupon-name').textContent = cupomAplicado;
    } else {
      couponApplied.style.display = 'none';
    }
  }
  
  updateShippingBar();
}

function initCoupon() {
  const couponForm = document.querySelector('.coupon-form');
  const couponInput = couponForm?.querySelector('input');
  const couponBtn = couponForm?.querySelector('button');
  const removeCouponBtn = document.querySelector('.remove-coupon');
  
  if (couponBtn) {
    couponBtn.addEventListener('click', () => {
      const code = couponInput?.value.toUpperCase().trim();
      
      if (!code) {
        showToast('Digite um cupom', 'error');
        return;
      }
      
      if (cupons[code]) {
        cupomAplicado = code;
        localStorage.setItem('mr_cupom', JSON.stringify(code));
        showToast(`Cupom ${code} aplicado!`, 'success');
        updateCartSummary();
        if (couponInput) couponInput.value = '';
      } else {
        showToast('Cupom inválido', 'error');
      }
    });
  }
  
  if (removeCouponBtn) {
    removeCouponBtn.addEventListener('click', () => {
      cupomAplicado = null;
      localStorage.removeItem('mr_cupom');
      showToast('Cupom removido', 'success');
      updateCartSummary();
    });
  }
}

// =============================================
// Checkout Page
// =============================================
function initCheckoutPage() {
  if (carrinho.length === 0) {
    window.location.href = 'carrinho.html';
    return;
  }
  
  renderCheckoutItems();
  initCheckoutForm();
  initShippingOptions();
  initPaymentOptions();
  initWhatsAppCheckout();
}

function renderCheckoutItems() {
  const container = document.querySelector('.checkout-items');
  if (!container) return;
  
  container.innerHTML = carrinho.map(item => {
    const produto = produtos.find(p => p.id === item.id);
    if (!produto) return '';
    
    return `
      <div class="cart-item" style="padding: var(--space-sm);">
        <div class="cart-item-image" style="width: 60px; height: 60px;">
          <img src="${produto.imagens[0]}" alt="${produto.nome}">
        </div>
        <div class="cart-item-info">
          <h4 class="cart-item-title" style="font-size: 0.9rem;">${produto.nome}</h4>
          <p style="font-size: 0.8rem; color: var(--text-muted);">Qtd: ${item.quantidade}</p>
        </div>
        <div style="text-align: right;">
          <p class="cart-item-price">R$ ${(produto.preco * item.quantidade).toFixed(2).replace('.', ',')}</p>
        </div>
      </div>
    `;
  }).join('');
  
  updateCheckoutSummary();
}

let checkoutState = {
  frete: 19.90,
  prazo: '3-5 dias úteis',
  tipoEntrega: 'padrao',
  pagamento: 'pix'
};

function initShippingOptions() {
  const options = document.querySelectorAll('.shipping-option');
  
  options.forEach(option => {
    option.addEventListener('click', () => {
      options.forEach(o => o.classList.remove('active'));
      option.classList.add('active');
      
      const radio = option.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
      
      checkoutState.tipoEntrega = radio.value;
      
      // Atualiza frete baseado no CEP
      updateShippingByZip();
    });
  });
}

function initPaymentOptions() {
  const options = document.querySelectorAll('.payment-option');
  
  options.forEach(option => {
    option.addEventListener('click', () => {
      options.forEach(o => o.classList.remove('active'));
      option.classList.add('active');
      
      checkoutState.pagamento = option.dataset.payment;
    });
  });
}

function initCheckoutForm() {
  const cepInput = document.querySelector('.cep-input');
  
  if (cepInput) {
    cepInput.addEventListener('input', debounce(() => {
      const cep = cepInput.value.replace(/\D/g, '');
      if (cep.length === 8) {
        updateShippingByZip();
      }
    }, 500));
    
    // Máscara de CEP
    cepInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length > 5) {
        value = value.substring(0, 5) + '-' + value.substring(5, 8);
      }
      e.target.value = value;
    });
  }
  
  // Máscara de telefone
  const telefoneInput = document.querySelector('.telefone-input');
  if (telefoneInput) {
    telefoneInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length > 11) value = value.substring(0, 11);
      if (value.length > 6) {
        value = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7)}`;
      } else if (value.length > 2) {
        value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
      }
      e.target.value = value;
    });
  }
  
  // Máscara de CPF
  const cpfInput = document.querySelector('.cpf-input');
  if (cpfInput) {
    cpfInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length > 11) value = value.substring(0, 11);
      if (value.length > 9) {
        value = `${value.substring(0, 3)}.${value.substring(3, 6)}.${value.substring(6, 9)}-${value.substring(9)}`;
      } else if (value.length > 6) {
        value = `${value.substring(0, 3)}.${value.substring(3, 6)}.${value.substring(6)}`;
      } else if (value.length > 3) {
        value = `${value.substring(0, 3)}.${value.substring(3)}`;
      }
      e.target.value = value;
    });
  }
}

function updateShippingByZip() {
  const cepInput = document.querySelector('.cep-input');
  const cep = cepInput?.value.replace(/\D/g, '');
  
  if (!cep || cep.length !== 8) return;
  
  const prefix = parseInt(cep.substring(0, 2));
  const faixa = configFrete.faixas.find(f => prefix >= f.min && prefix <= f.max);
  
  if (faixa) {
    if (checkoutState.tipoEntrega === 'express') {
      checkoutState.frete = faixa.precoExpress;
      checkoutState.prazo = faixa.prazoExpress;
    } else {
      checkoutState.frete = faixa.preco;
      checkoutState.prazo = faixa.prazo;
    }
  }
  
  // Verifica frete grátis
  const subtotal = getCartTotal();
  if (subtotal >= configFrete.gratis || (cupomAplicado && cupons[cupomAplicado]?.tipo === 'frete')) {
    checkoutState.frete = 0;
  }
  
  updateCheckoutSummary();
}

function updateCheckoutSummary() {
  const subtotal = getCartTotal();
  let desconto = 0;
  
  if (cupomAplicado) {
    const cupom = cupons[cupomAplicado];
    if (cupom?.tipo === 'porcentagem') {
      desconto = subtotal * (cupom.valor / 100);
    }
  }
  
  const total = subtotal + checkoutState.frete - desconto;
  
  const subtotalEl = document.querySelector('.checkout-subtotal');
  const freteEl = document.querySelector('.checkout-frete');
  const prazoEl = document.querySelector('.checkout-prazo');
  const descontoEl = document.querySelector('.checkout-desconto');
  const totalEl = document.querySelector('.checkout-total');
  
  if (subtotalEl) subtotalEl.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
  if (freteEl) freteEl.textContent = checkoutState.frete === 0 ? 'Grátis' : `R$ ${checkoutState.frete.toFixed(2).replace('.', ',')}`;
  if (prazoEl) prazoEl.textContent = checkoutState.prazo;
  if (descontoEl) {
    descontoEl.textContent = desconto > 0 ? `-R$ ${desconto.toFixed(2).replace('.', ',')}` : 'R$ 0,00';
    descontoEl.parentElement.style.display = desconto > 0 ? 'flex' : 'none';
  }
  if (totalEl) totalEl.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

function initWhatsAppCheckout() {
  const checkoutBtn = document.querySelector('.checkout-whatsapp-btn');
  
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Validação
      const nome = document.querySelector('.nome-input')?.value;
      const email = document.querySelector('.email-input')?.value;
      const telefone = document.querySelector('.telefone-input')?.value;
      const cep = document.querySelector('.cep-input')?.value;
      const rua = document.querySelector('.rua-input')?.value;
      const numero = document.querySelector('.numero-input')?.value;
      const bairro = document.querySelector('.bairro-input')?.value;
      const cidade = document.querySelector('.cidade-input')?.value;
      const estado = document.querySelector('.estado-input')?.value;
      const complemento = document.querySelector('.complemento-input')?.value || '';
      
      if (!nome || !email || !telefone || !cep || !rua || !numero || !bairro || !cidade || !estado) {
        showToast('Preencha todos os campos obrigatórios', 'error');
        return;
      }
      
      if (!validateEmail(email)) {
        showToast('Email inválido', 'error');
        return;
      }
      
      // Monta mensagem
      const subtotal = getCartTotal();
      let desconto = 0;
      if (cupomAplicado && cupons[cupomAplicado]?.tipo === 'porcentagem') {
        desconto = subtotal * (cupons[cupomAplicado].valor / 100);
      }
      const total = subtotal + checkoutState.frete - desconto;
      
      const pagamentoNomes = {
        'pix': 'Pix',
        'cartao': 'Cartão de Crédito',
        'boleto': 'Boleto'
      };
      
      let mensagem = `🛒 *NOVO PEDIDO - MR IMPORTS*\n\n`;
      mensagem += `*📦 ITENS DO PEDIDO:*\n`;
      
      carrinho.forEach(item => {
        const produto = produtos.find(p => p.id === item.id);
        if (produto) {
          const variacoes = Object.entries(item.variacoes || {}).map(([k, v]) => `${k}: ${v}`).join(', ');
          mensagem += `• ${produto.nome}${variacoes ? ` (${variacoes})` : ''}\n`;
          mensagem += `  Qtd: ${item.quantidade} x R$ ${produto.preco.toFixed(2).replace('.', ',')} = R$ ${(produto.preco * item.quantidade).toFixed(2).replace('.', ',')}\n`;
        }
      });
      
      mensagem += `\n*💰 VALORES:*\n`;
      mensagem += `Subtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
      mensagem += `Frete (${checkoutState.tipoEntrega === 'express' ? 'Expresso' : 'Padrão'}): ${checkoutState.frete === 0 ? 'Grátis' : `R$ ${checkoutState.frete.toFixed(2).replace('.', ',')}`}\n`;
      if (cupomAplicado) {
        mensagem += `Cupom (${cupomAplicado}): -R$ ${desconto.toFixed(2).replace('.', ',')}\n`;
      }
      mensagem += `*TOTAL: R$ ${total.toFixed(2).replace('.', ',')}*\n`;
      
      mensagem += `\n*👤 DADOS DO CLIENTE:*\n`;
      mensagem += `Nome: ${nome}\n`;
      mensagem += `Email: ${email}\n`;
      mensagem += `Telefone: ${telefone}\n`;
      
      mensagem += `\n*📍 ENDEREÇO DE ENTREGA:*\n`;
      mensagem += `${rua}, ${numero}${complemento ? ` - ${complemento}` : ''}\n`;
      mensagem += `${bairro}\n`;
      mensagem += `${cidade} - ${estado}\n`;
      mensagem += `CEP: ${cep}\n`;
      
      mensagem += `\n*💳 PAGAMENTO:*\n`;
      mensagem += `${pagamentoNomes[checkoutState.pagamento]}\n`;
      
      mensagem += `\n*🚚 PRAZO ESTIMADO:*\n`;
      mensagem += `${checkoutState.prazo}\n`;
      
      mensagem += `\n---\n_Pedido gerado em ${new Date().toLocaleString('pt-BR')}_`;
      
      // Redireciona para WhatsApp
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
      window.open(url, '_blank');
      
      // Limpa carrinho
      carrinho = [];
      cupomAplicado = null;
      saveCart();
      localStorage.removeItem('mr_cupom');
      
      showToast('Redirecionando para WhatsApp...', 'success');
    });
  }
}

// =============================================
// Favoritos Page
// =============================================
function initFavoritosPage() {
  renderFavoritos();
}

function renderFavoritos() {
  const container = document.querySelector('.favoritos-grid');
  const emptyState = document.querySelector('.empty-state');
  
  if (!container) return;
  
  if (favoritos.length === 0) {
    container.style.display = 'none';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }
  
  container.style.display = 'grid';
  if (emptyState) emptyState.style.display = 'none';
  
  const favoritosProducts = produtos.filter(p => favoritos.includes(p.id));
  container.innerHTML = favoritosProducts.map(p => renderProductCard(p)).join('');
  initFadeAnimations();
}

// =============================================
// Comparar Page
// =============================================
function initCompararPage() {
  renderComparar();
}

function renderComparar() {
  const container = document.querySelector('.compare-table-wrapper');
  const emptyState = document.querySelector('.empty-state');
  
  if (!container) return;
  
  if (comparar.length === 0) {
    container.style.display = 'none';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }
  
  container.style.display = 'block';
  if (emptyState) emptyState.style.display = 'none';
  
  const compareProducts = produtos.filter(p => comparar.includes(p.id));
  
  // Coleta todas as specs
  const allSpecs = new Set();
  compareProducts.forEach(p => {
    Object.keys(p.specs).forEach(key => allSpecs.add(key));
  });
  
  let tableHTML = `
    <table class="compare-table">
      <thead>
        <tr>
          <th>Produto</th>
          ${compareProducts.map(p => `
            <td class="compare-product">
              <div class="compare-product-image">
                <img src="${p.imagens[0]}" alt="${p.nome}">
              </div>
              <h4>${p.nome}</h4>
              <button class="btn btn-sm btn-outline compare-remove" onclick="toggleCompare(${p.id})">Remover</button>
            </td>
          `).join('')}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Preço</th>
          ${compareProducts.map(p => `
            <td>
              <span class="price-current">R$ ${p.preco.toFixed(2).replace('.', ',')}</span>
              ${p.precoOriginal ? `<br><span class="price-original">R$ ${p.precoOriginal.toFixed(2).replace('.', ',')}</span>` : ''}
            </td>
          `).join('')}
        </tr>
        <tr>
          <th>Avaliação</th>
          ${compareProducts.map(p => `
            <td>
              <span class="stars">${renderStars(p.rating)}</span>
              <span>${p.rating.toFixed(1)} (${p.reviewsCount})</span>
            </td>
          `).join('')}
        </tr>
        <tr>
          <th>Marca</th>
          ${compareProducts.map(p => `<td>${p.marca}</td>`).join('')}
        </tr>
        <tr>
          <th>Categoria</th>
          ${compareProducts.map(p => `<td>${p.categoria}</td>`).join('')}
        </tr>
        ${[...allSpecs].map(spec => `
          <tr>
            <th>${spec}</th>
            ${compareProducts.map(p => `<td>${p.specs[spec] || '-'}</td>`).join('')}
          </tr>
        `).join('')}
        <tr>
          <th>Ação</th>
          ${compareProducts.map(p => `
            <td>
              <button class="btn btn-primary btn-sm" onclick="addToCart(${p.id})" ${p.estoque === 0 ? 'disabled' : ''}>
                Adicionar ao carrinho
              </button>
            </td>
          `).join('')}
        </tr>
      </tbody>
    </table>
  `;
  
  container.innerHTML = tableHTML;
}

// =============================================
// Suporte Page
// =============================================
function initSuportePage() {
  initFAQ();
  initContactForm();
}

function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Fecha todos
      faqItems.forEach(i => i.classList.remove('active'));
      
      // Abre o clicado (se não estava ativo)
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

function initContactForm() {
  const form = document.querySelector('.contact-form form');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nome = form.querySelector('.contact-nome')?.value;
      const email = form.querySelector('.contact-email')?.value;
      const mensagem = form.querySelector('.contact-mensagem')?.value;
      
      if (!nome || !email || !mensagem) {
        showToast('Preencha todos os campos', 'error');
        return;
      }
      
      if (!validateEmail(email)) {
        showToast('Email inválido', 'error');
        return;
      }
      
      // Simula envio
      showToast('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
      form.reset();
    });
  }
}
