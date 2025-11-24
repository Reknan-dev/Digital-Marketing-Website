        const defaultConfig = {
            background_color: "#1d1d1b",
            surface_color: "#f2f2f2",
            text_color: "#1d1d1b",
            primary_action_color: "#FEC608",
            secondary_action_color: "#308eaa",
            font_family: "system-ui",
            font_size: 16,
            company_name: "Social Boost Agency",
            hero_title: "Trasformiamo i Social in Opportunità",
            hero_subtitle: "Connetti il tuo brand con gli influencer giusti",
            services_title: "I Nostri Servizi",
            partners_title: "I Nostri Partner",
            influencers_title: "I Nostri Influencer",
            contact_title: "Contattaci",
            contact_subtitle: "Inizia il tuo percorso digitale con noi"
        };

        async function onConfigChange(config) {
            const customFont = config.font_family || defaultConfig.font_family;
            const baseFontStack = 'system-ui, -apple-system, sans-serif';
            const baseSize = config.font_size || defaultConfig.font_size;
            const bgColor = config.background_color || defaultConfig.background_color;
            const surfaceColor = config.surface_color || defaultConfig.surface_color;
            const textColor = config.text_color || defaultConfig.text_color;
            const primaryActionColor = config.primary_action_color || defaultConfig.primary_action_color;

            document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;
            document.body.style.fontSize = `${baseSize}px`;
            document.body.style.color = textColor;
            document.body.style.background = surfaceColor;

            const gradientBgs = document.querySelectorAll('.gradient-bg');
            gradientBgs.forEach(el => {
                el.style.background = bgColor;
            });

            // Services section background
            const servicesSection = document.getElementById('servizi');
            servicesSection.style.background = bgColor;

            const navbar = document.getElementById('navbar');
            navbar.style.background = bgColor;
            navbar.style.color = primaryActionColor;

            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.style.color = primaryActionColor;
            });

            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            mobileMenuBtn.style.color = primaryActionColor;

            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.querySelectorAll('a').forEach(link => {
                link.style.color = primaryActionColor;
            });

            document.getElementById('nav-logo').textContent = config.company_name || defaultConfig.company_name;
            document.getElementById('nav-logo').style.fontSize = `${baseSize * 1.5}px`;
            document.getElementById('nav-logo').style.color = primaryActionColor;

            document.getElementById('hero-title').textContent = config.hero_title || defaultConfig.hero_title;
            document.getElementById('hero-title').style.fontSize = `${baseSize * 3}px`;

            document.getElementById('hero-subtitle').textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
            document.getElementById('hero-subtitle').style.fontSize = `${baseSize * 1.25}px`;

            const heroButton = document.querySelector('#home a');
            heroButton.style.background = primaryActionColor;
            heroButton.style.color = bgColor;

            document.getElementById('services-title').textContent = config.services_title || defaultConfig.services_title;
            document.getElementById('services-title').style.fontSize = `${baseSize * 2.5}px`;
            document.getElementById('services-title').style.color = 'white';

            const serviceCards = document.querySelectorAll('.service-card');
            serviceCards.forEach(card => {
                card.style.background = `linear-gradient(135deg, ${surfaceColor} 0%, ${surfaceColor}f5 100%)`;
                card.style.color = textColor;
                card.style.boxShadow = `0 20px 40px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.05)`;
                card.style.border = `1px solid ${primaryActionColor}15`;
                card.style.backdropFilter = 'blur(10px)';
                const title = card.querySelector('h3');
                if (title) {
                    title.style.fontSize = `${baseSize * 1.5}px`;
                    title.style.color = textColor;
                }
                const text = card.querySelector('p');
                if (text) text.style.fontSize = `${baseSize}px`;
                
                // Update icon background with primary action color
                const iconBg = card.querySelector('.bg-gradient-to-br');
                if (iconBg) {
                    iconBg.style.background = `linear-gradient(135deg, ${primaryActionColor} 0%, ${primaryActionColor}dd 100%)`;
                }
                
                // Update CTA color
                const cta = card.querySelector('.text-yellow-400');
                if (cta) {
                    cta.style.color = primaryActionColor;
                }
            });

            document.getElementById('partners-title').textContent = config.partners_title || defaultConfig.partners_title;
            document.getElementById('partners-title').style.fontSize = `${baseSize * 2.5}px`;
            document.getElementById('partners-title').style.color = textColor;

            const partnerSpotlights = document.querySelectorAll('.partner-spotlight .relative');
            partnerSpotlights.forEach(card => {
                card.style.background = `rgba(255, 255, 255, 0.1)`;
                card.style.color = textColor;
                card.style.backdropFilter = 'blur(10px)';
                card.style.border = `1px solid rgba(255, 255, 255, 0.2)`;
            });

            const brandStrips = document.querySelectorAll('.animate-scroll > div');
            brandStrips.forEach(strip => {
                strip.style.background = `rgba(255, 255, 255, 0.05)`;
                strip.style.color = textColor;
                strip.style.backdropFilter = 'blur(5px)';
                strip.style.border = `1px solid rgba(255, 255, 255, 0.1)`;
            });

            document.getElementById('influencers-title').textContent = config.influencers_title || defaultConfig.influencers_title;
            document.getElementById('influencers-title').style.fontSize = `${baseSize * 2.5}px`;
            document.getElementById('influencers-title').style.color = textColor;

            const influencerCards = document.querySelectorAll('.influencer-card');
            influencerCards.forEach(card => {
                card.style.background = surfaceColor;
                card.style.boxShadow = `0 4px 6px rgba(0,0,0,0.1)`;
            });

            // Update influencer premium cards
            const influencerPremium = document.querySelectorAll('.influencer-premium .relative');
            influencerPremium.forEach(card => {
                card.style.background = `rgba(255, 255, 255, 0.05)`;
                card.style.color = textColor;
                card.style.backdropFilter = 'blur(20px)';
                card.style.border = `1px solid rgba(255, 255, 255, 0.1)`;
            });

            // Update carousel cards
            const carouselCards = document.querySelectorAll('.flex-shrink-0.w-72');
            carouselCards.forEach(card => {
                card.style.background = `rgba(255, 255, 255, 0.1)`;
                card.style.color = textColor;
                card.style.backdropFilter = 'blur(10px)';
                card.style.border = `1px solid rgba(255, 255, 255, 0.2)`;
            });

            // Update influencer stats and tags with secondary action color
            const influencerStats = document.querySelectorAll('.influencer-stats');
            influencerStats.forEach(stat => {
                stat.style.color = config.secondary_action_color || defaultConfig.secondary_action_color;
            });

            const influencerTags = document.querySelectorAll('.influencer-tag');
            influencerTags.forEach(tag => {
                tag.style.background = `${config.secondary_action_color || defaultConfig.secondary_action_color}20`;
                tag.style.color = config.secondary_action_color || defaultConfig.secondary_action_color;
            });

            document.getElementById('contact-title').textContent = config.contact_title || defaultConfig.contact_title;
            document.getElementById('contact-title').style.fontSize = `${baseSize * 2.5}px`;

            document.getElementById('contact-subtitle').textContent = config.contact_subtitle || defaultConfig.contact_subtitle;
            document.getElementById('contact-subtitle').style.fontSize = `${baseSize * 1.25}px`;

            const formInputs = document.querySelectorAll('#contact-form input, #contact-form textarea');
            formInputs.forEach(input => {
                input.style.fontSize = `${baseSize}px`;
            });

            const submitButton = document.querySelector('#contact-form button[type="submit"]');
            submitButton.style.background = primaryActionColor;
            submitButton.style.color = bgColor;
            submitButton.style.fontSize = `${baseSize * 1.125}px`;

            document.getElementById('footer-company').textContent = config.company_name || defaultConfig.company_name;
        }

        function mapToCapabilities(config) {
            return {
                recolorables: [
                    {
                        get: () => config.background_color || defaultConfig.background_color,
                        set: (value) => {
                            config.background_color = value;
                            window.elementSdk.setConfig({ background_color: value });
                        }
                    },
                    {
                        get: () => config.surface_color || defaultConfig.surface_color,
                        set: (value) => {
                            config.surface_color = value;
                            window.elementSdk.setConfig({ surface_color: value });
                        }
                    },
                    {
                        get: () => config.text_color || defaultConfig.text_color,
                        set: (value) => {
                            config.text_color = value;
                            window.elementSdk.setConfig({ text_color: value });
                        }
                    },
                    {
                        get: () => config.primary_action_color || defaultConfig.primary_action_color,
                        set: (value) => {
                            config.primary_action_color = value;
                            window.elementSdk.setConfig({ primary_action_color: value });
                        }
                    },
                    {
                        get: () => config.secondary_action_color || defaultConfig.secondary_action_color,
                        set: (value) => {
                            config.secondary_action_color = value;
                            window.elementSdk.setConfig({ secondary_action_color: value });
                        }
                    }
                ],
                borderables: [],
                fontEditable: {
                    get: () => config.font_family || defaultConfig.font_family,
                    set: (value) => {
                        config.font_family = value;
                        window.elementSdk.setConfig({ font_family: value });
                    }
                },
                fontSizeable: {
                    get: () => config.font_size || defaultConfig.font_size,
                    set: (value) => {
                        config.font_size = value;
                        window.elementSdk.setConfig({ font_size: value });
                    }
                }
            };
        }

        function mapToEditPanelValues(config) {
            return new Map([
                ["company_name", config.company_name || defaultConfig.company_name],
                ["hero_title", config.hero_title || defaultConfig.hero_title],
                ["hero_subtitle", config.hero_subtitle || defaultConfig.hero_subtitle],
                ["services_title", config.services_title || defaultConfig.services_title],
                ["partners_title", config.partners_title || defaultConfig.partners_title],
                ["influencers_title", config.influencers_title || defaultConfig.influencers_title],
                ["contact_title", config.contact_title || defaultConfig.contact_title],
                ["contact_subtitle", config.contact_subtitle || defaultConfig.contact_subtitle]
            ]);
        }

        if (window.elementSdk) {
            window.elementSdk.init({
                defaultConfig,
                onConfigChange,
                mapToCapabilities,
                mapToEditPanelValues
            });
        }

        document.getElementById('mobile-menu-btn').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    document.getElementById('mobile-menu').classList.add('hidden');
                }
            });
        });

        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const messageDiv = document.getElementById('form-message');
            messageDiv.textContent = 'Grazie per averci contattato! Ti risponderemo presto.';
            messageDiv.classList.remove('hidden');
            this.reset();
            setTimeout(() => {
                messageDiv.classList.add('hidden');
            }, 5000);
        });

        // Counter Animation
        function animateCounters() {
            const counters = document.querySelectorAll('.counter');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const counter = entry.target;
                        const target = parseInt(counter.getAttribute('data-target'));
                        const duration = 2000;
                        const step = target / (duration / 16);
                        let current = 0;
                        
                        const timer = setInterval(() => {
                            current += step;
                            if (current >= target) {
                                counter.textContent = target + (target === 10 ? 'M+' : '+');
                                clearInterval(timer);
                            } else {
                                counter.textContent = Math.floor(current) + (target === 10 ? 'M' : '');
                            }
                        }, 16);
                        
                        observer.unobserve(counter);
                    }
                });
            }, { threshold: 0.5 });
            
            counters.forEach(counter => observer.observe(counter));
        }

        // Parallax Effect for Video
        function handleParallax() {
            const video = document.getElementById('hero-video');
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            if (video) {
                video.style.transform = `translateY(${rate}px)`;
            }
        }

        // Video Error Handling
        function setupVideoFallback() {
            const video = document.getElementById('hero-video');
            const overlay = document.getElementById('video-overlay');
            
            video.addEventListener('error', function() {
                // Fallback to gradient background if video fails
                const heroSection = document.getElementById('home');
                heroSection.style.background = 'linear-gradient(135deg, #1d1d1b 0%, #333333 100%)';
                video.style.display = 'none';
                overlay.style.display = 'none';
            });
            
            // Ensure video plays on mobile
            video.addEventListener('loadeddata', function() {
                video.play().catch(function() {
                    // If autoplay fails, show play button or fallback
                    console.log('Video autoplay prevented');
                });
            });
        }

        // Enhanced scroll handling
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.style.backdropFilter = 'blur(10px)';
                navbar.style.background = `${window.elementSdk?.config?.background_color || defaultConfig.background_color}ee`;
            } else {
                navbar.style.backdropFilter = 'none';
                navbar.style.background = window.elementSdk?.config?.background_color || defaultConfig.background_color;
            }
            
            // Parallax effect
            handleParallax();
        });

        // Initialize animations when page loads
        document.addEventListener('DOMContentLoaded', function() {
            animateCounters();
            setupVideoFallback();
        });


        // GA4

         window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');

        // Funzione per tracciare click su un elemento con GA4
  function tracciaClick(elemento, categoria) {
    elemento.addEventListener('click', function(event) {
      const label = elemento.innerText.trim() || elemento.value || elemento.getAttribute('href') || 'Sconosciuto';
      if(label) { // evita click senza etichetta
        gtag('event', 'click_elemento', {
          'event_category': categoria,
          'event_label': label
        });
        console.log(`Tracciato: ${categoria} -> ${label}`);
      }
    });
  }

  // Funzione per filtrare link importanti
  function isLinkImportante(el) {
    const href = el.getAttribute('href');
    // ignora link vuoti, #, javascript:void(0) e link in header/footer/nav/menu/social
    if(!href || href.startsWith('#') || href.startsWith('javascript:')) return false;
    if(el.closest('header, footer, nav, .menu, .social')) return false;
    return true;
  }

  // Funzione per determinare categoria dinamica
  function getCategoriaElemento(el) {
    const tag = el.tagName.toLowerCase();
    const label = (el.innerText || '').toLowerCase();

    if(tag === 'button' || (tag === 'input' && el.type === 'submit')) {
      if(label.includes('scarica') || label.includes('download')) return 'Download';
      if(label.includes('invia') || label.includes('submit')) return 'Form Submit';
      return 'CTA';
    }

    if(tag === 'a') {
      if(label.includes('scarica') || label.includes('download')) return 'Download';
      return 'Link';
    }

    return 'Altro';
  }

  // Traccia tutti i pulsanti importanti
  document.querySelectorAll('button, input[type="submit"]').forEach(btn => {
    const categoria = getCategoriaElemento(btn);
    tracciaClick(btn, categoria);
  });

  // Traccia solo link importanti
  document.querySelectorAll('a').forEach(lnk => {
    if(isLinkImportante(lnk)) {
      const categoria = getCategoriaElemento(lnk);
      tracciaClick(lnk, categoria);
    }
  });