"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Glasses, Store, BadgePercentIcon, House, Clock } from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'

const services =[
    {
        title: "Atendimento à domicílio",
        description: "Não saia do conforto da sua casa ou trabalho. Consulte a área atendida, agende um horário e iremos até você para apresentar toda nossa variedade de armações disponíveis e melhor atendê-lo.",
        duration:"Agendar um horário",
        price:"",
        icon: <House/>,
        linkText: 'Olá, vi no site sobre agendar uma visita à domicílio para fazer um orçamento e gostaria de mais informações.'
    },
    {
        title: "Óculos pronto em até uma hora",
        description: "Vindo até nossa loja, você pode pegar os seus oculos pronto em até uma hora. Ideal para aqueles que necessitam com urgência.",
        duration:"1h",
        price:"",
        icon: <Store/>,
        linkText: 'Olá, vi no site sobre óculos pronto em até uma hora e gostaria de mais informações.'
    },
]
export function Services() {

    const[emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width> 768px)": {slidesToScroll: 3}
        }
    })

    function ScrollPrev() {
        emblaApi?.scrollPrev();
    }
    function ScrollNext() {
        emblaApi?.scrollNext();
    }


    return(
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div className="">
                    <h2 className="text-4xl text-center font-bold mb-12">Serviços</h2>
                    <div className="relative">
                        <div className='overflow-hidden' ref={emblaRef}>
                            <div className='flex'>
                                {services.map((item, index) => (
                                    <div key={index} className='flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/2)] px-4'>
                                        <article className='bg-zinc-800 text-white rounded-2xl p-6 space-y-4 h-full flex flex-col'>
                                            <div className='flex-1 items-start justify-between'>
                                                
                                                <div className='flex gap-3'>
                                                    <span className='text-4xl'>{item.icon}</span>
                                                    <div>
                                                        <h3 className='font-bold text-xl my-1'>{item.title}</h3>
                                                        <p className='text-gray-400 text-sm select-none'>{item.description}</p>
                                                    </div>
                                                </div>
                                            
                                            </div>

                                            <div className='border-t border-gray-700 pt-4 flex items-center justify-between'>
                                                <div className='flex items-center gap-2 text-sm'>
                                                    <Clock className='w-4 h-4 '/>
                                                    <span>{item.duration}</span>
                                                </div>
                                                
                                                <a 
                                                href='https://api.whatsapp.com/send?phone=5521994675148'
                                                target='_blank'
                                                className='flex items-center justify-center gap-2 hover:bg-[#d9ba01] hover:text-black px-4 py-1 rounded-md duration-300'
                                                >                                                  
                                                    <WhatsappLogo className='w-5 h-5 hover:text-black'/>
                                                    Entrar em contato
                                                </a>
                                            </div>
                                        </article>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button 
                        className=' bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10
                         absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
                        onClick={ScrollPrev}>

                            <ChevronLeft className='w-6 h-6 text-gray-600'/>

                        </button>

                        <button 
                        className=' bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10
                         absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
                        onClick={ScrollNext}>

                            <ChevronRight className='w-6 h-6 text-gray-600'/>

                        </button>
                    </div>
                </div>




            </div>
        </section>
    )
}