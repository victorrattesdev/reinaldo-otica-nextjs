
import oculos1 from '../../public/glasses/oculos1_frente.png'
import oculos2 from '../../public/glasses/oculos2_frente.png'
import oculos3 from '../../public/glasses/oculos3_frente.png'
import oculos4 from '../../public/glasses/oculos4_frente.png'
import oculos5 from '../../public/glasses/oculos5_frente.png'
import oculos6 from '../../public/glasses/oculos6_frente.png'
import oculos7 from '../../public/glasses/oculos7_frente.png'
import oculos8 from '../../public/glasses/oculos8_lado.png'
import oculos9 from '../../public/glasses/oculos9_frente.png'
import oculos10 from '../../public/glasses/oculos10_frente.png'
import oculos11 from '../../public/glasses/oculos11_frente.png'
import oculos12 from '../../public/glasses/oculos12_frente.png'
import oculos13 from '../../public/glasses/oculos13_frente.png'
import oculos14 from '../../public/glasses/oculos14_frente.png'
import oculos15 from '../../public/glasses/oculos15_frente.png'
import oculos16 from '../../public/glasses/oculos16_frente.png'
import oculos17 from '../../public/glasses/oculos17_frente.png'
import oculos18 from '../../public/glasses/oculos18_frente.png'
import oculos19 from '../../public/glasses/oculos19_frente.png'
import oculos20 from '../../public/glasses/oculos20_frente.png'
import oculos21 from '../../public/glasses/oculos21_frente.png'
import oculos22 from '../../public/glasses/oculos22_frente.png'
import oculos23 from '../../public/glasses/oculos23_frente.png'
import oculos24 from '../../public/glasses/oculos24_frente.png'
import oculos25 from '../../public/glasses/oculos25_frente.png'
import oculos26 from '../../public/glasses/oculos26_frente.png'
import oculos27 from '../../public/glasses/oculos27_frente.png'

import Image from 'next/image'

const brands = [
    { name: "Clear", logo: oculos1 },
    { name: "Espace", logo: oculos2 },
    { name: "Hoya", logo: oculos3 },  
    { name: "Kodak", logo: oculos4 },
    { name: "Varilux", logo: oculos5 },
    { name: "Zeiss", logo: oculos6 },
    { name: "Zeiss", logo: oculos7 },
    { name: "Zeiss", logo: oculos8 },
    { name: "Zeiss", logo: oculos9 },
    { name: "Zeiss", logo: oculos10 },
    { name: "Zeiss", logo: oculos11 },
    { name: "Zeiss", logo: oculos12 },
    { name: "Zeiss", logo: oculos13 },
    { name: "Zeiss", logo: oculos14 },
    { name: "Zeiss", logo: oculos15 },
    { name: "Zeiss", logo: oculos16 },
    { name: "Zeiss", logo: oculos17 },
    { name: "Zeiss", logo: oculos18 },
    { name: "Zeiss", logo: oculos19 },
    { name: "Zeiss", logo: oculos20 },
    { name: "Zeiss", logo: oculos21 },
    { name: "Zeiss", logo: oculos22 },
    { name: "Zeiss", logo: oculos23 },
    { name: "Zeiss", logo: oculos24 },
    { name: "Zeiss", logo: oculos25 },
    { name: "Zeiss", logo: oculos26 },
    { name: "Zeiss", logo: oculos27 },

]

export function Products() {
    return(
        <section className='bg-[#2c2a2a] py-16 text-white'>
            <div className='container mx-auto px-4'>
                <div className='border-b border-white/20 pb-8'>
                    <h4 className='text-3xl font-semibold mb-8 text-center'>Nossos produtos</h4>

                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                        {brands.map((item, index) => (
                            <div key={index} className='bg-[#FDF6EC] p-1 rounded-lg flex flex-col items-center justify-center' data-aos="zoom-in">                               
                                <div className='mb-10'>
                                    <Image
                                    src={item.logo}
                                    alt={item.name}
                                    width={130}
                                    height={130}
                                    quality={100}
                                    style={{
                                        width: "auto",
                                        height: "auto",
                                    }}
                                    className='object-contain'/>
                                </div> 

                                <div className='flex items-center justify-center mt-5 flex-col'>
                                    <a 
                                        href='https://api.whatsapp.com/send?phone=5521994675148' 
                                        target='_blank' 
                                        className='text-gray-500 font-bold text-1xl my-1 hover:text-pink-800'>
                                        Óculos masculino
                                    </a>

                                    <a 
                                        href='https://api.whatsapp.com/send?phone=5521994675148' 
                                        target='_blank' 
                                        className='text-gray-500 font-bold text-1xl my-1 hover:text-pink-800'>
                                        3 x R$199,90
                                    </a>
                                </div>  

                            </div>
                        ))}
                    </div>

                </div>
                

            </div>

        </section>
    )
}