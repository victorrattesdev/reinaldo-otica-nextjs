import { WhatsappLogo} from '@phosphor-icons/react/dist/ssr'
import bannerImg from '../../public/foto_mulher.png'
import Image from 'next/image'
export function Hero() {
    return (
        <section className="bg-zinc-800 text-white relative overflow-hidden">
            <div>
                <Image
                    src={bannerImg}
                    alt='banner'
                    fill
                    sizes='100vw'
                    priority
                    className='object-cover opacity-60 lg:hidden'
                    />
                <div className='absolute inset-0 bg-black opacity-20 md:hidden'></div>
            </div>
            <div className='container mx-auto pt-16 pb-16 md:pb-0 px-4 relative'>
                <article className='grid grid-cols-1 lg:grid-cols-2 gap-8' >
                    
                    <div className='space-y-6 '>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10" data-aos="fade-down">
                            FAÇA SEU ÓCULOS EM ATÉ 1 HORA!
                        </h1>
                       
                        <a 
                            href="#"
                            className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center
                            w-fit text-white gap-2"
                            data-aos="fade-up"
                            >
                            <WhatsappLogo className='w-5 h-5'/>
                            Quero um óculos!
                        </a>
                        
                        
                        <div className="mt-8" data-aos="fade-right">
                            <p className="text-sm mb-4">
                                <b className="bg-black text-white px-2 py-1 rounded-md" >5%</b>
                                de desconto na primeira compra.
                            </p>
                        </div>
                    </div>

                    <div className='hidden md:block h-full relative'>
                        <Image
                            src={bannerImg} 
                            alt="banner"
                            className='object-contain'
                            fill
                            sizes='(max-width: 768px) 0vw, 50vw'
                            quality={100}
                            priority
                            />
                    </div>
                
                </article>
            </div>


        </section>
    )
}