import React from 'react';
import { Instagram, Facebook, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-off-white py-16 px-6 md:px-24 border-t border-forest/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
                <div className="space-y-4">
                    <h2 className="text-3xl text-forest">Cunhambebe</h2>
                    <p className="max-w-xs text-forest/60 text-sm">
                        Preservando para as futuras gerações. Venha viver a experiência da Mata Atlântica.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold text-forest">CONTATO</h4>
                        <div className="flex items-center gap-2 text-forest/70 text-sm">
                            <Mail size={16} />
                            <span>contato@parquecunhambebe.org</span>
                        </div>
                        <div className="flex items-start gap-2 text-forest/70 text-sm">
                            <MapPin size={16} className="mt-1 shrink-0" />
                            <span>Mangaratiba, Rio de Janeiro - RJ<br />Brasil</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-bold text-forest">SOCIAL</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-forest/20 flex items-center justify-center hover:bg-forest hover:text-off-white transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-forest/20 flex items-center justify-center hover:bg-forest hover:text-off-white transition-colors">
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-forest/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-forest/40 uppercase tracking-widest">
                <p>© 2026 Parque Estadual Cunhambebe. Todos os direitos reservados.</p>
                <p>Design & Desenvolvimento</p>
            </div>
        </footer>
    );
};

export default Footer;
