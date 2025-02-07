import Image from "next/image"
import About1 from '../../public/foto_about.png'
import { Check, CheckCheck, MapPin } from "lucide-react"
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"
export function About() {
    return(
        <section className="bg-[#FDF6EC] py-16">
            <div className="container px-4 mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative w-full h-[400px] rounded-3xl overflow-hidden ">
                        <Image
                        src={About1}
                        alt="Foto de pessoas"
                        fill
                        quality={100}
                        className=" object-cover hover:scale-110 duration-300"
                        priority
                        />
                    </div>

                    <div className="space-y-6 mt-10">
                        <h2 className="text-3xl font-bold" data-aos="fade-right">Atendemos você com rapidez e excelência</h2>
                        <p data-aos="fade-right">
                            Nós da Rei Ótica acreditamos que todos merecem experimentar a alagria da visão clara sem gastar
                            fortunas. É por isso que nos comprometemos a oferecer óculos de grau de óculos de sol de 
                            qualidade a preços acessíveis, respaldados por nossa experiência no setor óptico. Atendemos
                            com rapidez, qualidade e uma ampla seleção de armações para ajudá-lo a encontrar a 
                            solução de visão perfeita para duas necessidades e estilo de vida.
                        </p>

                        <ul className="space-y-4" data-aos="fade-right">
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500"/>
                                Atendimento à domicílio
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500"/>
                                +20 Anos de experiência no mercado
                            </li>
                            
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500"/>
                                Pagamento facilitado
                            </li>
                        </ul>

                        <div className="flex gap-2" data-aos="fade-up">
                            <a 
                            href="https://api.whatsapp.com/send?phone=5521994675148&text=Ol%C3%A1,%20Gostaria%20de%20escolher%20um%20%C3%B3culos!"
                            target="_blank"
                            className="bg-zinc-800 text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md hover:bg-[#d9ba01] hover:text-black">
                                <WhatsappLogo className="w-5 h-5 text-white hover:text-black"/>
                                Contato via Whatsapp
                            </a>

                            <a 
                            href="https://www.google.com/maps/uv?pb=!1s0x997f0013cf5283%3A0xda7c1ac0e760a752!3m1!7e115!4s%2Fmaps%2Fplace%2FRua%2Bdas%2Bflores%2Bcentro%2Bda%2Bcidade%2F%40-22.9037461%2C-43.1796362%2C3a%2C75y%2C72.28h%2C90t%2Fdata%3D*213m4*211e1*213m2*211slODYwBWpIFix4CARDxjJHQ*212e0*214m2*213m1*211s0x997f0013cf5283%3A0xda7c1ac0e760a752%3Fsa%3DX%26ved%3D2ahUKEwitwrnIg66LAxUtD7kGHchiG80Qpx96BAhCEAA!5sRua%20das%20flores%20centro%20da%20cidade%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e2!2slODYwBWpIFix4CARDxjJHQ&cr=le_a7&hl=en&ved=1t%3A206134&ictx=111"
                            target="_blank"
                            className="bg-zinc-800 text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md hover:bg-[#d9ba01] hover:text-black">
                                <MapPin className="w-5 h-5 text-white hover:text-black"/>
                                Endereço da loja
                            </a>
                        </div>  
                </div>
            </div>
        </div>
    </section>
    )
}