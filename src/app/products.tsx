import oculos1 from '../../public/glasses/oculos1_frente.png'
import oculos2 from '../../public/glasses/oculos2_frente.png'
import oculos3 from '../../public/glasses/oculos3_frente.png'
import oculos4 from '../../public/glasses/oculos4_frente.png'
import oculos5 from '../../public/glasses/oculos5_frente.png'
import oculos6 from '../../public/glasses/oculos6_frente.png'
import oculos7 from '../../public/glasses/oculos7_frente.png'
import oculos8 from '../../public/glasses/oculos8_frente.png'
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

import oculos1_lado from '../../public/glasses/oculos1_lado.png'
import oculos2_lado from '../../public/glasses/oculos2_lado.png'
import oculos3_lado from '../../public/glasses/oculos3_lado.png'
import oculos4_lado from '../../public/glasses/oculos4_lado.png'
import oculos5_lado from '../../public/glasses/oculos5_lado.png'
import oculos6_lado from '../../public/glasses/oculos6_lado.png'
import oculos7_lado from '../../public/glasses/oculos7_lado.png'
import oculos8_lado from '../../public/glasses/oculos8_lado.png'
import oculos9_lado from '../../public/glasses/oculos9_lado.png'
import oculos10_lado from '../../public/glasses/oculos10_lado.png'
import oculos11_lado from '../../public/glasses/oculos11_lado.png'
import oculos12_lado from '../../public/glasses/oculos12_lado.png'
import oculos13_lado from '../../public/glasses/oculos13_frente.png'
import oculos14_lado from '../../public/glasses/oculos14_lado.png'
import oculos15_lado from '../../public/glasses/oculos15_lado.png'
import oculos16_lado from '../../public/glasses/oculos16_lado.png'
import oculos17_lado from '../../public/glasses/oculos17_lado.png'
import oculos18_lado from '../../public/glasses/oculos18_lado.png'
import oculos19_lado from '../../public/glasses/oculos19_lado.png'
import oculos20_lado from '../../public/glasses/oculos20_lado.png'
import oculos21_lado from '../../public/glasses/oculos21_lado.png'
import oculos22_lado from '../../public/glasses/oculos22_lado.png'
import oculos23_lado from '../../public/glasses/oculos23_lado.png'
import oculos24_lado from '../../public/glasses/oculos24_lado.png'
import oculos25_lado from '../../public/glasses/oculos25_lado.png'
import oculos26_lado from '../../public/glasses/oculos26_lado.png'
import oculos27_lado from '../../public/glasses/oculos27_lado.png'

import { Poppins } from 'next/font/google'

import Image from 'next/image'

const brands = [
    { name: "Armação Para Óculos de Grau Feminino", logo: oculos1, logo2: oculos1_lado },
    { name: "Armação Para Óculos de Grau Unissex", logo: oculos2, logo2: oculos2_lado },
    { name: "Armação Para Óculos de Grau Masculino", logo: oculos3, logo2: oculos3_lado },  
    { name: "Armação Para Óculos de Grau Masculino", logo: oculos4, logo2: oculos4_lado },
    { name: "Armação Para Óculos de Grau Masculino", logo: oculos5, logo2: oculos5_lado },
    { name: "Armação Para Óculos de Grau Masculino", logo: oculos6, logo2: oculos6_lado },
    { name: "Armação Para Óculos de Grau Feminino", logo: oculos7, logo2: oculos7_lado },
    { name: "Armação Para Óculos de Grau Masculino, Clip On", logo: oculos8, logo2: oculos8_lado },
    { name: "Armação Para Óculos de Grau Feminino, Clip On", logo: oculos9, logo2: oculos9_lado },
    { name: "Armação Para Óculos de Grau Masculino, Clip On", logo: oculos10, logo2: oculos10_lado },
    { name: "Armação Para Óculos de Grau Masculino", logo: oculos11, logo2: oculos11_lado },
    { name: "Armação Para Óculos de Grau Masculino", logo: oculos12, logo2: oculos12_lado },
    { name: "Armação Para Óculos de Grau Unissex", logo: oculos13, logo2: oculos13_lado },
    { name: "Armação Para Óculos de Grau Feminino", logo: oculos14, logo2: oculos14_lado },
    { name: "Armação Para Óculos de Grau Feminino", logo: oculos15, logo2: oculos15_lado },
    { name: "Armação Para Óculos de Grau Masculino, Clip On", logo: oculos16, logo2: oculos16_lado },
    { name: "Armação Para Óculos de Grau Feminino", logo: oculos17, logo2: oculos17_lado },
    { name: "Armação Para Óculos de Grau Masculino, Clip On", logo: oculos18, logo2: oculos18_lado },
    { name: "Armação Para Óculos de Grau Masculino", logo: oculos19, logo2: oculos19_lado },
    { name: "Armação Para Óculos de Grau Feminino", logo: oculos20, logo2: oculos20_lado },
    { name: "Armação Para Óculos de Grau Unissex, Clip On", logo: oculos21, logo2: oculos21_lado },
    { name: "Armação Para Óculos de Grau Feminino", logo: oculos22, logo2: oculos22_lado },
    { name: "Armação Para Óculos de Grau Feminino", logo: oculos23, logo2: oculos23_lado },
    { name: "Armação Para Óculos de Grau Feminino", logo: oculos24, logo2: oculos24_lado },
    { name: "Armação Para Óculos de Grau Unissex", logo: oculos25, logo2: oculos25_lado },
    { name: "Armação Para Óculos de Grau Unissex, Clip On", logo: oculos26, logo2: oculos26_lado },
    { name: "Armação Para Óculos de Grau Unissex", logo: oculos27, logo2: oculos27_lado },

]

const poppins = Poppins({
    weight: ['100'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
  })

export function Products() {
    return(
        <section className='bg-[#2c2a2a] py-16 text-white'>
            <div className='container mx-auto px-4'>
                <div className='border-b border-white/20 pb-8'>
                    <h4 className='text-3xl font-semibold mb-8 text-center'>Nossos produtos</h4>

                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                        {brands.map((item, index) => (
                            <div key={index} className='bg-[#FDF6EC] p-1 rounded-lg flex flex-col items-center justify-center' data-aos="zoom-in">                               
                                
                                <div className="mb-10">
                                    <div className="relative group">
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
                                        className='object-contain transition-opacity 
                                                    duration-300 ease-in-out group-hover:opacity-0'/>
                                        
                                        <Image
                                        src={item.logo2}
                                        alt={item.name}
                                        width={130}
                                        height={130}
                                        quality={100}
                                        style={{
                                            width: "auto",
                                            height: "auto",
                                        }}
                                        className='object-contain absolute top-0 left-0 w-[400px] h-[400px] 
                                                    transition-opacity duration-300 ease-in-out opacity-0 
                                                    group-hover:opacity-100'
                                        />
                                    </div>
                                </div>
                                

                                <div className='flex text-center items-center justify-center mt-5 flex-col mb-2 font-sans'>
                                    <a 
                                        href='https://api.whatsapp.com/send?phone=5521994675148' 
                                        target='_blank' 
                                        className='text-gray-500 font-semibold text-sm my-1 hover:text-pink-800'>
                                        {item.name}
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