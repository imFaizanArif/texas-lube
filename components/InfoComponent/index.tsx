import Image from 'next/image';
import React from 'react'

const InfoComponent = () => {
    return (
        <div>
            <ForDistributors />
        </div>
    )
}

export default InfoComponent


function ForDistributors() {
    const distributorsCardsData = [
        {
            title: "HUB",
            text: "Get information to build capability and accelerate sales growth, all in one place",
            img: '/pcl-hub.png',
            url: "/distributors/hub"
        },
        {
            title: "iBuy",
            text: `Order online easily and securely 
                   24 hours a day, 7 days a week`,
            img: '/ibuy.png',
            url: "/distributors/ibuy"
        },
        {
            title: "Calculators",
            text: `Calculate your cost savings `,
            img: '/dis-calculator.png',
            url: "/distributors/dis-calculator"
        },
        {
            title: "SDS",
            text: `Access the Safety Data Sheet information you need`,
            img: '/sds.png',
            url: "/distributors/sds"
        },
        {
            title: "360 Learning",
            text: `Gain lubricant knowledge to sell products and support your customers`,
            img: '/Active-Learner.png',
            url: "/distributors/360-learning"
        },
        {
            title: "Image Library",
            text: `Find quality images to drive your media content `,
            img: '/image-library.png',
            url: "/distributors/image-library"
        },
    ]
    console.log(distributorsCardsData);

    return (
        <div className="relative bg-white py-16  ">
            {/* Background Truck Image */}
            <div className="absolute inset-y-0 right-0 w-1/2 lg:block hidden pointer-events-none">
                <Image
                    src="/distributor-bg-image.png"
                    alt="Truck Background"
                    layout="fill"
                    objectFit="contain"
                    className="z-0"
                />
            </div>

            <div className="relative   z-10 max-w-7xl mx-auto py-16 px-6 sm:px-10 lg:px-16">
                <h1 className="text-3xl sm:text-[60px] font-bold text-[#BF2B29] text-center lg:text-left">
                    For Distributors</h1>
                <p className="mt-4 text-[grey] text-center lg:text-left w-[70%] !mb-[100px]">
                    Grow your business with best practice advice and tools to help you
                    deliver innovative solutions and outstanding value to your customers,
                    only for Authorized Distributors.
                </p>

                <div className="w-[70%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">

                    {
                        distributorsCardsData.map((data, index) => (
                            <div className="flex items-start space-x-4">
                                <div className="text-red-500 bg-cover bg-center w-[60px] h-[50px]">
                                    <Image
                                        src={data.img} // Replace with the correct image source
                                        alt="Truck Background"
                                        width={60}
                                        height={50}
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <h3 className="font-bold">{data.title}</h3>
                                    <p className="text-gray-600">
                                        {data.text}
                                    </p>
                                </div>
                            </div>
                        ))
                    }


                </div>

                <div className="mt-8">
                    <button className="bg-[#BF2B29] text-white py-5 px-8 rounded-lg font-semibold shadow-lg hover:bg-red-600">
                        Become a Distributor
                    </button>
                </div>
            </div>
        </div>
    );
}
