import imagelogo from '../../public/logo_correta_2.png'
import Image from 'next/image'

export function Header() {
    return(
        <section className='bg-[#000000] py-5 text-white'>
            <div className='container mx-auto px-4'>

                <div className=''>
                    <div className=''>
                            <div className='p-1 flex justify-items-start'>
                                <Image
                                src={imagelogo}
                                alt='logo'
                                width={100}
                                height={50}
                                quality={100}
                                style={{
                                    width: "auto",
                                    height: "auto",
                                }}
                                className='object-contain'/>
                            </div>
                    </div>

                </div>
                

            </div>

        </section>
    )
}