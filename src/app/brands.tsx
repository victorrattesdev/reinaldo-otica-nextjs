
import espace from '../../public/logo_espace.png'
import hoya from '../../public/logo_hoya.png'
import kodak from '../../public/logo_kodak.png'
import varilux from '../../public/logo_varilux.jpg'
import zeiss from '../../public/logo_zeiss.jpeg'
import clear from '../../public/logo_clear.png'
import Image from 'next/image'

const brands = [
    { name: "Clear", logo: clear },
    { name: "Espace", logo: espace },
    { name: "Hoya", logo: hoya },  
    { name: "Kodak", logo: kodak },
    { name: "Varilux", logo: varilux },
    { name: "Zeiss", logo: zeiss },
]

export function Brands() {
    return(
        <section className='bg-[#E84C3D] py-16 text-white'>
            <div className='container mx-auto px-4'>

                <div className='border-b border-white/20 pb-8'>
                    <h4 className='text-3xl font-semibold mb-8 text-center'>Marcas que trabalhamos</h4>

                    <div className='grid grid-cols-2 lg:grid-cols-6 gap-8'>
                        {brands.map((item, index) => (
                            <div key={index} className='bg-white p-4 rounded-lg flex items-center justify-center' data-aos="flip-left">
                                <Image
                                src={item.logo}
                                alt={item.name}
                                width={100}
                                height={50}
                                quality={100}
                                style={{
                                    width: "auto",
                                    height: "auto",
                                }}
                                className='object-contain'/>
                            </div>
                        ))}
                    </div>

                </div>

            </div>



        </section>  
    )
}