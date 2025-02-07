import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import {Mail} from 'lucide-react'
import imageLogo from '../../public/logo_correta_2.png'
import Image from 'next/image'

export function Map() {
    return(
            <section className="text-gray-600 body-font relative">
                <div className="absolute inset-0 bg-gray-300">
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.256244435328!2d-43.1796514!3d-22.9039176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5dd83b5587%3A0x236037a91504382f!2sR.%20Gon%C3%A7alves%20Dias%2C%2089%20-%20Centro%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020050-030!5e0!3m2!1spt-BR!2sbr!4v1683221040754!5m2!1spt-BR!2sbr" 
                    frameBorder="0" 
                    width="100%" 
                    height="100%" 
                    allowFullScreen
                    >                
                    </iframe>                
                </div>
                
                <div className="container px-5 py-24 mx-auto flex">
                    <div className="lg:w-1/3 md:w-1/2 bg-zinc-800 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                        <h2 className="text-[#d9ba01] text-lg mb-1 font-medium title-font text-center">Atendimento</h2>
                        <p className="leading-relaxed mb-5 text-[#d9ba01]">Atendementos de segunda a sexta-feira, entre em contato e agende uma visita, ou venha conhecer a nossa loja!</p>
                        <div className="flex gap-2 relative mb-4">
                            <a 
                                href="https://api.whatsapp.com/send?phone=5521994675148&text=Ol%C3%A1,%20Gostaria%20de%20escolher%20um%20%C3%B3culos!"
                                target="_blank"
                                className="bg-green-600 text-black flex items-center justify-center w-fit gap-2 
                                            px-4 py-2 rounded-md hover:bg-green-500">
                                    <WhatsappLogo className="w-5 h-5 text-black hover:text-black"/>
                                    Contato via Whatsapp
                            </a>    

                            <a 
                            href="https://www.google.com/maps/uv?pb=!1s0x997f0013cf5283%3A0xda7c1ac0e760a752!3m1!7e115!4s%2Fmaps%2Fplace%2FRua%2Bdas%2Bflores%2Bcentro%2Bda%2Bcidade%2F%40-22.9037461%2C-43.1796362%2C3a%2C75y%2C72.28h%2C90t%2Fdata%3D*213m4*211e1*213m2*211slODYwBWpIFix4CARDxjJHQ*212e0*214m2*213m1*211s0x997f0013cf5283%3A0xda7c1ac0e760a752%3Fsa%3DX%26ved%3D2ahUKEwitwrnIg66LAxUtD7kGHchiG80Qpx96BAhCEAA!5sRua%20das%20flores%20centro%20da%20cidade%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e2!2slODYwBWpIFix4CARDxjJHQ&cr=le_a7&hl=en&ved=1t%3A206134&ictx=111"
                            target="_blank"
                            className="bg-white text-zinc-800 flex items-center justify-center w-fit gap-2 px-6 py-1 rounded-md hover:bg-[#d9ba01] hover:text-black">
                                <Mail className="w-5 h-5 text-zinc-800 hover:text-black"/>
                                Contato via Email
                            </a>
                        </div>
                    </div>
                </div>
    </section>
        
    )
}