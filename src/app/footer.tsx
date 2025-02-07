import { FacebookLogo, InstagramLogo, YoutubeLogo, WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import imageLogo from '../../public/logo_correta_2.png'
import Image from 'next/image'

export function Footer() {
    return(
        <section className='bg-zinc-800 py-16 text-white'>
            <div className='container mx-auto px-4'>

                <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5'>
                    <div>
                    <Image
                            src={imageLogo}
                            alt='logo'
                            width={150}
                            height={50}
                            quality={100}
                            style={{
                                width: "auto",
                                height: "auto",
                            }}
                            className='object-contain mb-4'
                            />              
                    </div>

                    <div>
                        <h3 className='text-2xl font-semibold mb-4 text-[#d9ba01]'>Contatos</h3>                        
                            <p className='mb-2'><b>Email: </b>reioticaoficial@gmail.com</p>
                            <p className='mb-2'><b>Telefone: </b>(21) 99467-5148</p>
                            <p><b>Endereço: </b>Rua das Flores, Centro | Rio de Janeiro</p>
                    </div>

                    <div>
                        <h3 className='text-2xl font-semibold mb-4 text-[#d9ba01]'>Redes sociais</h3>    
                        <div className='flex gap-4'>
                            <a 
                                href='https://api.whatsapp.com/send?phone=5521994675148&text=Ol%C3%A1,%20Gostaria%20de%20escolher%20um%20%C3%B3culos!'
                                target='_blank'
                                >
                                   <WhatsappLogo className='w-8 h-8 hover:text-[#d9ba01]'/> 
                            </a>
                            
                            <a 
                            href='https://www.instagram.com/reioticaoficial/'
                            target='_blank'
                            >
                                <InstagramLogo className='w-8 h-8 hover:text-[#d9ba01]'/>
                            </a>

                            <a 
                            href='#'
                            target='_blank'
                            >
                                <FacebookLogo className='w-8 h-8 hover:text-[#d9ba01]'/>
                            </a>
                        </div>                    
                    </div>

                </footer>
                

            </div>

        </section>
    )
}