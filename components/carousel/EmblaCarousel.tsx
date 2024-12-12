"use client";
import React, { useEffect, useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';

const EmblaCarousel = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

    const [autoplaySpeed, setAutoplaySpeed] = useState(3000) // Initial delay of 3 seconds

    // Automatically increase speed over time
    useEffect(() => {
        const interval = setInterval(() => {
            setAutoplaySpeed(prevSpeed => {
                if (prevSpeed > 500) {
                    return prevSpeed - 500 // Decrease delay by 500ms (Increase speed)
                }
                return prevSpeed
            })
        }, 5000) // Change speed every 5 seconds

        return () => clearInterval(interval) // Clean up on component unmount
    }, [])

    const autoplayOptions = {
        delay: autoplaySpeed, // Delay in ms between slides
        speed: 400, // Transition speed, adjust as needed
    }

    // Initialize the carousel with the updated autoplay options
    useEmblaCarousel({
        ...options,
        plugins: [Autoplay(autoplayOptions)],
    })

    return (
        <section className="embla w-full   ">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((item, index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__number">
                                <Image src={item.img} alt={item.title} width={800} height={500} className='object-fill w-full h-auto -z-20' />
                                {/* <p className='text-center text-red-600 text-6xl absolute left-48 top-48'>{item.title}</p> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EmblaCarousel
