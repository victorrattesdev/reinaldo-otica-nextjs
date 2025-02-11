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
                        Na Rei Ótica, consideramos que todos merecem a alegria de enxergar sem precisar gastar uma fortuna.
                        Por isso, oferecemos óculos de grau e de sol com qualidade a preços acessíveis, 
                        combinando experiência no setor óptico com um atendimento rápido e eficiente. 
                        Nossa ampla seleção de armações garante que você encontre a opção ideal para suas necessidades 
                        e estilo de vida
                        </p>

                        <ul className="space-y-4" data-aos="fade-right">
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500"/>
                                Atendimento À Domicílio
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500"/>
                                +20 Anos de Experiência no Mercado
                            </li>
                            
                            <li className="flex items-center gap-2">
                                <Check className="text-red-500"/>
                                Pagamento Facilitado
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
                            href="https://maps.app.goo.gl/nK3W2xXb5P2GAgyN9"
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