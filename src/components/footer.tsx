

export const Footer = () => {
    return (
        <footer className="w-full bg-white border-t border-gray-100 mt-20 pt-16 pb-8">
            <div className="max-w-6xl mx-auto px-4">
                 <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-12">
                      <div className="md:col-span-2 space-y-4">
                        <div className="flex items-center gap-2">
                           <div className="flex h-8 w-8 items-center justify-center rounded-lg
                            bg-pink-500 font-bold text-white text-xs"> DS
                            </div>
                            <span className="text-xl font-bold text-slate-900">Dev
                                <span className="text-pink-500">Stack</span>
                            </span>
                        </div>
                           <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
                            Curated tools, technologies, and resources for developers building modern software.
                          </p>
                            <div className="flex items-center gap-4 pt-2 text-sm font-medium text-slate-600">
                                <a href="https://github.com" target="_blank" rel="noreferrer" 
                                className="hover:text-slate-900 transition-colors">GitHub
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noreferrer"
                                 className="hover:text-slate-900 transition-colors">
                                Twitter
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                                 className="hover:text-slate-900 transition-colors"> LinkedIn
                                </a>
                        </div>
                    </div>


                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider
                         text-slate-900 mb-4">PRODUCT</h4>
                        <ul className="space-y-2.5 text-sm text-slate-500">
                            <li><a href="#home" className="hover:text-slate-900 transition-colors">Home</a></li>
                            <li><a href="#technologies" className="hover:text-slate-900 transition-colors">Technologies</a></li>
                            <li><a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a></li>
                        </ul>
                    </div>


                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">COMPANY</h4>
                        <ul className="space-y-2.5 text-sm text-slate-500">
                            <li><a href="#about" className="hover:text-slate-900 transition-colors">About</a></li>
                            <li><a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a></li>
                            <li><a href="#careers" className="hover:text-slate-900 transition-colors">Careers</a></li>
                        </ul>
                    </div>


                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider
                         text-slate-900 mb-4">LEGAL</h4>
                        <ul className="space-y-2.5 text-sm text-slate-500">
                            <li><a href="#privacy"
                             className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
                            <li><a href="#terms" className="hover:text-slate-900 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row
                     items-center justify-between text-xs text-slate-400 gap-4">
                    <p>© {new Date().getFullYear()} DevStack. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#privacy" className="hover:text-slate-600 transition-colors">Privacy</a>
                        <a href="#terms" className="hover:text-slate-600 transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;