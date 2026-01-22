import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Droplets, Leaf, ShieldCheck, MapPin, Wind, Flame, Trash2, VolumeX, Scissors, ShieldAlert, Footprints } from 'lucide-react';
import heroImg from '../assets/preservacao/hero.jpeg';
import faunaImg from '../assets/preservacao/fauna.png';
import waterImg from '../assets/preservacao/water.jpeg';

gsap.registerPlugin(ScrollTrigger);

const Preservacao = () => {
    const mainRef = useRef(null);
    const [showMunicipios, setShowMunicipios] = useState(false);

    const municipios = ["Angra dos Reis", "Itaguaí", "Mangaratiba", "Rio Claro"];

    const proibicoes = [
        { title: "Sem Fogueiras", desc: "O fogo é o maior inimigo da floresta.", icon: <Flame size={24} className="text-red-500" /> },
        { title: "Lixo Zero", desc: "Traga todo o seu resíduo de volta com você.", icon: <Trash2 size={24} className="text-red-500" /> },
        { title: "Silêncio", desc: "Som alto estressa e afugenta a fauna local.", icon: <VolumeX size={24} className="text-red-500" /> },
        { title: "Nada de Pets", desc: "Animais domésticos podem transmitir doenças nativas.", icon: <Footprints size={24} className="text-red-500" /> },
        { title: "Não Retire Nada", desc: "Flores, plantas e pedras pertencem ao parque.", icon: <Scissors size={24} className="text-red-500" /> },
        { title: "Caça Proibida", desc: "Proteja a vida silvestre em todas as formas.", icon: <ShieldAlert size={24} className="text-red-500" /> },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animation
            gsap.from(".hero-content", {
                y: 50,
                duration: 1.5,
                ease: "power4.out",
                delay: 0.2
            });

            // Reveal Sections
            gsap.utils.toArray('.reveal').forEach((section) => {
                gsap.from(section, {
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    },
                    opacity: 0,
                    y: 40,
                    duration: 1,
                    ease: "power3.out"
                });
            });

            // Interactive Image Scroll Animations (Scrub)
            gsap.utils.toArray('.reveal-img:not(.jaguar-img)').forEach((img) => {
                gsap.fromTo(img,
                    { scale: 1.2, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: img,
                            start: "top 100%",
                            end: "top 30%",
                            scrub: 1,
                        }
                    }
                );
            });

            // Special Jaguar Animation 2.0 (Cinematic emergence)
            gsap.fromTo(".jaguar-img",
                {
                    x: "35%",
                    rotate: 12,
                    scale: 1.6,
                    filter: "grayscale(100%) brightness(0.2) blur(8px)",
                    opacity: 0
                },
                {
                    x: "0%",
                    rotate: 0,
                    scale: 1,
                    filter: "grayscale(0%) brightness(1) blur(0px)",
                    opacity: 1,
                    scrollTrigger: {
                        trigger: ".jaguar-container",
                        start: "top 100%",
                        end: "top 5%",
                        scrub: 1.8,
                    }
                }
            );

            // Parallax effect for hero image
            gsap.to(".hero-bg", {
                scrollTrigger: {
                    trigger: ".hero-section",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                },
                y: 200,
                ease: "none"
            });
        }, mainRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={mainRef} className="bg-off-white overflow-x-hidden">
            {/* Hero Section */}
            <section className="hero-section relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImg}
                        alt="Mata Atlântica Cunhambebe"
                        className="hero-bg w-full h-[120%] object-cover brightness-50"
                    />
                </div>
                <div className="hero-content relative z-10 text-center px-6">
                    <span className="text-earth font-medium tracking-[0.3em] uppercase text-sm mb-4 block">
                        Patrimônio Natural da Humanidade
                    </span>
                    <h1 className="text-6xl md:text-9xl font-display text-off-white uppercase leading-none tracking-tighter">
                        Cunhambebe <br />
                        <span className="text-earth">Preservado</span>
                    </h1>
                    <div className="w-24 h-1 bg-earth mx-auto mt-8 mb-6"></div>
                    <p className="max-w-2xl mx-auto text-off-white/80 text-lg md:text-xl font-light leading-relaxed">
                        Onde a majestade da Serra do Mar encontra a urgência da conservação. Descubra o santuário que protege a vida no coração da Costa Verde.
                    </p>
                </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-off-white animate-bounce">
                    <Wind size={32} className="rotate-90 opacity-50" />
                </div>
            </section>

            {/* Importance Section */}
            <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto relative z-[50]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="reveal overflow-visible">
                        <h2 className="text-4xl md:text-5xl font-display text-forest uppercase mb-8">
                            O Guardião da Mata Atlântica
                        </h2>
                        <div className="space-y-6 text-forest/70 text-lg leading-relaxed">
                            <p>
                                Com mais de 38 mil hectares, o Parque Estadual Cunhambebe (PECU) é um dos maiores e mais vitais remanescentes de Mata Atlântica no estado do Rio de Janeiro. Sua localização estratégica abrange Angra dos Reis, Itaguaí, Mangaratiba e Rio Claro.
                            </p>
                            <p>
                                Preservar o Cunhambebe não é apenas uma questão estética, é uma necessidade vital. O parque atua como um imenso regulador climático e corredor ecológico, permitindo o fluxo gênico de espécies entre diferentes maciços florestais.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 mt-12 overflow-visible">
                            <div>
                                <span className="text-4xl font-display text-earth">38K+</span>
                                <p className="text-sm uppercase tracking-widest text-forest/50 font-bold">Hectares Protegidos</p>
                            </div>
                            <div
                                className="cursor-pointer group relative overflow-visible"
                                onClick={() => setShowMunicipios(!showMunicipios)}
                            >
                                <div className="flex items-baseline gap-2 group-hover:translate-x-1 transition-transform duration-300">
                                    <span className="text-4xl font-display text-earth">04</span>
                                    <span className="text-earth/40 text-xs animate-pulse">{showMunicipios ? "−" : "+"}</span>
                                </div>
                                <p className="text-sm uppercase tracking-widest text-forest/50 font-bold group-hover:text-forest transition-colors">
                                    Municípios Integrados
                                </p>

                                {showMunicipios && (
                                    <div className="absolute top-[calc(100%+0.5rem)] right-0 md:-right-4 bg-white p-5 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-earth/20 z-[999] w-[240px] transform transition-all duration-300 origin-top-right">
                                        <div className="absolute -top-2 right-10 md:right-14 w-4 h-4 bg-white border-t border-l border-earth/20 rotate-45"></div>
                                        <p className="text-[10px] uppercase tracking-widest text-earth font-bold mb-3 opacity-70">Territórios</p>
                                        <ul className="space-y-3">
                                            {municipios.map((m, i) => (
                                                <li key={i} className="text-forest text-sm font-bold flex items-center gap-3">
                                                    <div className="w-1.5 h-1.5 bg-earth rounded-full shadow-sm"></div>
                                                    <span className="whitespace-normal leading-tight">{m}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="reveal relative group jaguar-container overflow-hidden rounded-xl">
                        <div className="absolute -inset-4 bg-earth/10 rounded-2xl group-hover:scale-105 transition-transform duration-500"></div>
                        <img
                            src={faunaImg}
                            alt="Fauna Cunhambebe"
                            className="relative rounded-xl shadow-2xl z-10 w-full h-[500px] object-cover jaguar-img"
                        />
                        <div className="absolute bottom-6 left-6 z-20 bg-forest p-4 rounded-lg shadow-xl text-off-white">
                            <Leaf className="text-earth mb-2" />
                            <p className="font-display uppercase text-sm tracking-tighter">Biodiversidade Única</p>
                            <p className="text-xs text-off-white/60 uppercase">Refúgio da Suçuarana e espécies raras</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Water Resources Section */}
            <section className="bg-forest py-24 px-6 md:px-20 text-off-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-earth/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="w-full md:w-1/2 order-2 md:order-1 reveal">
                            <img
                                src={waterImg}
                                alt="Recursos Hídricos"
                                className="rounded-xl shadow-2xl border-2 border-earth/20 reveal-img"
                            />
                        </div>
                        <div className="w-full md:w-1/2 order-1 md:order-2 reveal">
                            <Droplets className="text-earth mb-6" size={48} />
                            <h2 className="text-4xl md:text-5xl font-display uppercase mb-6 leading-tight">
                                O Berço das Águas <br />do Rio de Janeiro
                            </h2>
                            <p className="text-off-white/70 text-lg leading-relaxed mb-8">
                                O Parque Cunhambebe é carinhosamente chamado de "caixa d'água" da região. Ele abriga as nascentes de inúmeros rios que alimentam a Bacia do Guandu. Sem a cobertura vegetal preservada deste parque, o abastecimento de água potável para milhões de fluminenses estaria em risco direto.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-earth/20 p-1 rounded-full"><ShieldCheck size={16} className="text-earth" /></div>
                                    <p className="text-off-white/80 italic">Proteção direta das nascentes do Sistema Guandu.</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="mt-1 bg-earth/20 p-1 rounded-full"><ShieldCheck size={16} className="text-earth" /></div>
                                    <p className="text-off-white/80 italic">Controle natural da qualidade da água através do solo florestal.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rules Section (O que não fazer) */}
            <section className="py-24 px-6 md:px-20 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 reveal">
                        <span className="text-earth font-bold tracking-widest uppercase text-xs mb-2 block">
                            Conduta Consciente
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display text-forest uppercase">
                            O que <span className="text-red-600">não é permitido</span> no parque
                        </h2>
                        <p className="text-forest/60 max-w-2xl mx-auto mt-4">
                            Para garantir que o Cunhambebe continue sendo um refúgio seguro para a vida, precisamos seguir regras rigorosas de conduta.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {proibicoes.map((item, i) => (
                            <div key={i} className="reveal p-8 rounded-2xl border border-red-100 hover:border-red-200 bg-red-50/20 hover:bg-red-50/40 transition-all group">
                                <div className="mb-6 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-forest mb-2">{item.title}</h3>
                                <p className="text-forest/60 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Challenges Section */}
            <section className="py-24 px-6 md:px-20 max-w-5xl mx-auto text-center reveal">
                <MapPin className="text-earth mx-auto mb-6" size={40} />
                <h2 className="text-4xl font-display text-forest uppercase mb-8">Atuando Contra as Ameaças</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                    <div className="p-8 border border-forest/5 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300">
                        <h3 className="font-display text-forest text-xl mb-4">Incêndios</h3>
                        <p className="text-forest/60 text-sm">Monitoramento constante e brigadas treinadas para conter focos de calor na seca.</p>
                    </div>
                    <div className="p-8 border border-forest/5 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300">
                        <h3 className="font-display text-forest text-xl mb-4">Caça Ilegal</h3>
                        <p className="text-forest/60 text-sm">Fiscalização intensiva para garantir a segurança da fauna nativa e ameaçada.</p>
                    </div>
                    <div className="p-8 border border-forest/5 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300">
                        <h3 className="font-display text-forest text-xl mb-4">Conscientização</h3>
                        <p className="text-forest/60 text-sm">Educação ambiental com as comunidades do entorno para uma convivência harmônica.</p>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="bg-earth py-20 px-6 text-center">
                <div className="reveal">
                    <h2 className="text-4xl md:text-5xl font-display text-forest uppercase mb-6 italic">A Natureza Pede Passagem</h2>
                    <p className="text-forest/80 max-w-xl mx-auto">
                        Cada árvore mantida em pé no Cunhambebe é um sopro de vida para o futuro do Rio de Janeiro. Respeite as trilhas, não retire plantas e não cace animais.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Preservacao;
