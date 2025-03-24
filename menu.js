<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Centrah - Agência de Marketing de Influência</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Roboto+Condensed:wght@700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Header & Navegação -->
    <header>
        <div class="container nav-container">
            <a href="#inicio">
                <img class="logo" src="https://i.postimg.cc/CLT6WCz9/Clipboard-03-23-2025-01.jpg" alt="Logo Centrah">
            </a>
            <!-- Botão hamburguer -->
            <div class="menu-toggle" id="menu-toggle">
                <i class="fas fa-bars"></i>
            </div>
            <!-- Menu principal -->
            <ul class="nav-links" id="nav-links">
                <li><a href="#inicio">Início</a></li>
                <li><a href="#servicos">O que fazemos</a></li>
                <li><a href="#sobre">Quem somos</a></li>
                <li><a href="#portfolio">Cases</a></li>
                <li><a href="#contato" id="contato-link">Contato</a></li>
            </ul>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="inicio">
        <div class="container hero-content">
            <div class="hero-text">
                <h1>Somos uma agência especializada em marketing de influência</h1>
                <p class="hero-description">Na Centrah, nosso negócio é transformar influência em resultado — unindo nossa bagagem em marketing com à prática diária de criar, planejar e produzir conteúdo que conecta marcas e pessoas.</p>
                <a href="#servicos" class="btn">Conheça Nossos Serviços</a>
            </div>
            <div class="phone-mockup">
                <div class="phone-screen">
                    <video autoplay muted loop playsinline>
                        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                        Seu navegador não suporta vídeos.
                    </video>
                </div>
            </div>
        </div>
    </section>

    <!-- Serviços -->
    <section class="section" id="servicos">
        <div class="container">
            <div class="section-title">
                <h2>O que fazemos</h2>
            </div>
            <div class="services">
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-search"></i>
                    </div>
                    <h3>Mapeamento de Influenciadores</h3>
                    <p>Encontramos os criadores de conteúdo perfeitos para sua marca e objetivo de campanha, analisando métricas, engajamento e relevância para seu público.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h3>Estratégia de Campanhas</h3>
                    <p>Desenvolvemos estratégias de conteúdo e influência para fortalecer a conexão da sua mensagem com o público.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-handshake"></i>
                    </div>
                    <h3>Gestão de Parcerias</h3>
                    <p>Cuidamos de todo o relacionamento com os influenciadores, desde o primeiro contato até a entrega final do conteúdo.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-chart-pie"></i>
                    </div>
                    <h3>Análise de Resultados</h3>
                    <p>Monitoramos e analisamos o desempenho de cada campanha, fornecendo relatórios detalhados e insights para otimização constante.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-lightbulb"></i>
                    </div>
                    <h3>Consultoria Criativa</h3>
                    <p>Nossa equipe ajuda a criar briefings que inspiram criadores a produzirem conteúdo autêntico e alinhado com sua marca.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-comments"></i>
                    </div>
                    <h3>Marketing de Conteúdo</h3>
                    <p>Estratégias completas de conteúdo que combinam a voz da sua marca com a autenticidade dos influenciadores.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Portfolio -->
    <section class="section" id="portfolio">
        <div class="container">
            <div class="section-title">
                <h2>Co-criações</h2>
            </div>
            <div class="work-grid">
                <!-- Banrisul -->
                <div class="work-card">
                    <div class="work-media">
                        <img src="https://i.postimg.cc/QxwJWjr5/0322.png" alt="Banricompras">
                        <div class="work-stats">
                            <div class="platform-icon">
                                <i class="fab fa-instagram"></i>
                            </div>
                            <div class="metric-badge">
                                <i class="fas fa-eye"></i>
                                <span>3.5M</span>
                            </div>
                            <div class="metric-badge">
                                <i class="fas fa-heart"></i>
                                <span>15K</span>
                            </div>
                        </div>
                    </div>
                    <div class="work-caption">
                        <h3>Banricompras Premiadо</h3>
                        <p>Banrisul • Pontos turísticos de Porto Alegre</p>
                    </div>
                </div>
                <!-- Bauducco -->
                <div class="work-card">
                    <div class="work-media bauducco-image">
                        <img src="https://i.postimg.cc/J7TqMb6p/0322-1.png" alt="Bauducco">
                        <div class="work-stats">
                            <div class="platform-icon">
                                <i class="fab fa-instagram"></i>
                            </div>
                            <div class="platform-icon">
                                <i class="fab fa-tiktok"></i>
                            </div>
                            <div class="metric-badge">
                                <i class="fas fa-eye"></i>
                                <span>12.9M</span>
                            </div>
                            <div class="metric-badge">
                                <i class="fas fa-heart"></i>
                                <span>55K</span>
                            </div>
                        </div>
                    </div>
                    <div class="work-caption">
                        <h3>Nova embalagem Choco Biscuit</h3>
                        <p>Bauducco • Biscoito n°1 do Brasil</p>
                    </div>
                </div>
                <!-- Trem do Pampa -->
                <div class="work-card">
                    <div class="work-media trem-pampa-image">
                        <img src="https://i.postimg.cc/W1Z6Gx2y/0322-2.png" alt="Trem do Pampa">
                        <div class="work-stats">
                            <div class="platform-icon">
                                <i class="fab fa-instagram"></i>
                            </div>
                            <div class="platform-icon">
                                <i class="fab fa-tiktok"></i>
                            </div>
                            <div class="metric-badge">
                                <i class="fas fa-eye"></i>
                                <span>2.6M</span>
                            </div>
                            <div class="metric-badge">
                                <i class="fas fa-heart"></i>
                                <span>210K</span>
                            </div>
                        </div>
                    </div>
                    <div class="work-caption">
                        <h3>Trem do Pampa</h3>
                        <p>Giordani Turismo • Viagem a Santana do Livramento - RS </p>
                    </div>
                </div>
                <!-- Americanas -->
                <div class="work-card">
                    <div class="work-media americanas-image">
                        <img src="https://i.postimg.cc/wT7kv7ng/0322-3.png" alt="Americanas">
                        <div class="work-stats">
                            <div class="platform-icon">
                                <i class="fab fa-instagram"></i>
                            </div>
                            <div class="platform-icon">
                                <i class="fab fa-tiktok"></i>
                            </div>
                            <div class="metric-badge">
                                <i class="fas fa-eye"></i>
                                <span>871K</span>
                            </div>
                            <div class="metric-badge">
                                <i class="fas fa-heart"></i>
                                <span>11K</span>
                            </div>
                        </div>
                    </div>
                    <div class="work-caption">
                        <h3>Ovos de Páscoa</h3>
                        <p>Americanas • Ovos Delice</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Seção Quem Somos -->
    <section class="section" id="sobre">
        <div class="container">
            <div class="section-title">
                <h2>Quem somos</h2>
            </div>
            <!-- Grid de Liderança -->
            <div class="leadership-grid">
                <!-- Co-fundador 1 -->
                <div class="leader-card">
                    <div class="leader-photo">
                        <img src="https://i.postimg.cc/DZ2fr7p5/1742236324644.jpg" alt="Alexandre Laybauer" class="round-img">
                    </div>
                    <h3 class="leader-name">Alexandre Laybauer</h3>
                    <p class="leader-role">Diretor de Planejamento e Estratégia</p>
                    <div class="leader-bio">
                        <p>Com mais de 15 anos de experiência em estratégia de comunicação, branding e planejamento de marketing, já trabalhou com marcas como Sicredi, iPlace, Unimed, Shopping Bourbon, Hertz, Farmácias Panvel, Lojas Pompéia e PUCRS. Especialista na construção de marcas e no desenvolvimento de estratégias orientadas a dados, define os KPIs e direcionamentos estratégicos junto às agências e clientes. Formado em Publicidade e Propaganda pela UFRGS.</p>
                    </div>
                </div>
                <!-- Co-fundador 2 -->
                <div class="leader-card">
                    <div class="leader-photo">
                        <img src="https://i.postimg.cc/VN9L0Jgd/1635717980483.jpg" alt="Diogo Reiznaudtt" class="round-img">
                    </div>
                    <h3 class="leader-name">Diogo Reiznaudtt</h3>
                    <p class="leader-role">Diretor de Influência e Performance</p>
                    <div class="leader-bio">
                        <p>Criador de conteúdo e especialista em marketing de influência, já realizou cocriações com Banrisul, Starbucks, Americanas, Bauducco, Cacau Show, Bacio di Latte, Seara, Zaffari, Rissul, Havan e Xtay. Responsável pelo mapeamento, acompanhamento e entrega de resultados das campanhas com influenciadores, garantindo o alinhamento entre as marcas e os criadores. Pós-graduado em Marketing Digital pelo Centro Universitário Leonardo da Vinci.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contato -->
<section class="section contact" id="contato">
    <div class="container">
        <div class="section-title">
            <h2>Entre em Contato</h2>
        </div>
        <div class="contact-content">
            <div class="contact-form">
                <h3 style="color: var(--dark-color); margin-bottom: 25px;">Envie uma mensagem</h3>
                <div id="form-container">
                    <form id="contact-form">
                        <div class="form-group">
                            <label for="name">Nome</label>
                            <input type="text" id="name" name="nome" placeholder="Seu nome" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="seu@email.com" required>
                        </div>
                        <div class="form-group">
                            <label for="company">Empresa</label>
                            <input type="text" id="company" name="empresa" placeholder="Nome da sua empresa">
                        </div>
                        <div class="form-group">
                            <label for="message">Mensagem</label>
                            <textarea id="message" name="mensagem" rows="5" placeholder="Como podemos ajudar?" required></textarea>
                        </div>
                        <button type="submit" class="btn" style="width: 100%;">Enviar Mensagem</button>
                    </form>
                </div>
            </div>
<div class="contact-info">
    <h3>Informações de Contato</h3>
<div class="contact-detail">
  <div class="contact-icon"><i class="fab fa-whatsapp"></i></div>
  <div>
    <a href="https://api.whatsapp.com/send?l=pt&phone=5551989482748" target="_blank" rel="noopener noreferrer" class="whatsapp-link">
      <p>(51) 98948-2748</p>
      <span class="whatsapp-text">Clique para nos chamar no WhatsApp</span>
    </a>
  </div>
</div>

    <div class="contact-detail">
        <div class="contact-icon"><i class="fas fa-envelope"></i></div>
        <p>contato@centrah.com.br</p>
    </div>
    <div class="contact-detail">
        <div class="contact-icon"><i class="fas fa-map-marker-alt"></i></div>
        <p>Porto Alegre - RS</p>
    </div>
    <div>
        <h4 style="margin: 30px 0 15px;">Siga-nos</h4>
        <div class="social-links">
            <a href="https://www.instagram.com/ag.centrah" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-instagram"></i>
            </a>
        </div>
    </div>
</div>
        </div>
    </div>
</section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>Centrah</h3>
                    <p style="color: #bbb; margin-bottom: 20px;">Conectando marcas e influenciadores para criar campanhas de impacto no mundo digital.</p>
                    <div class="social-links">
                        <a href="https://www.instagram.com/ag.centrah" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <div class="footer-column">
                    <h3>Links Rápidos</h3>
                    <ul>
                        <li><a href="#inicio">Início</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                        <li><a href="#portfolio">Cases</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </div>
                      <div class="footer-column">
                          <h3>Contato</h3>
                          <ul>
                              <li>contato@centrah.com.br</li>
                              <li>
                                  <a href="https://api.whatsapp.com/send?l=pt&phone=5551989482748" target="_blank" rel="noopener noreferrer" class="whatsapp-link">
                                      <div class="whatsapp-content">
                                          <div class="whatsapp-number-container">
                                              <i class="fab fa-whatsapp"></i>
                                              <span class="whatsapp-number">(51) 98948-2748</span>
                                          </div>
                                          <span class="whatsapp-text">Clique para nos chamar no WhatsApp</span>
                                      </div>
                                  </a>
                              </li>
                              <li>Porto Alegre - RS</li>
                          </ul>
                      </div>
            </div>
            <div class="copyright">
                © 2025 Centrah - Todos os direitos reservados
            </div>
        </div>
    </footer>

    <script src="seu-arquivo.js"></script>
</body>
</html>
