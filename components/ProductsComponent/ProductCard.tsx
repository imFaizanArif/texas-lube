import Image from "next/image";
import Link from "next/link";
interface ProductCardProps {
    name: string, subTitle: string, text: string, img: string, category: string, id: number
}

export default function ProductCard(props: ProductCardProps) {
    const {
        name, subTitle, text, img, id, category
    } = props
    function convertSpacesToHyphens(str) {
        return str.replace(/ /g, "-");
    }
const convertedCategoryString =convertSpacesToHyphens(category)
const convertedNameString =convertSpacesToHyphens(name)
    return (
        <Link href={`/${convertedCategoryString}/${convertedNameString}/${id}`} className=" mb-3 mr-3">
            {/* <div className="relative right-[20%] bottom-[-30%]">
                <Image
                    src={img}
                    alt="Product Image"
                    width={220}
                    height={220}
                    className="object-contain transform scale-x-[-1]	"
                />
            </div> */}

            <div className="bg-white rounded-md flex items-start border border-slate-400 shadow-md 	">

                <div className="  ">
                    <div className="bg-[#BF2B29] p-3   rounded-md">

                        <h2 className="text-white font-bold text-lg">
                            {name}
                        </h2>
                        
                            <p className="text-white font-medium text-sm">{subTitle}</p>
                    </div>
                    {/* <div className="p-3  "> */}
                    <div className="grid sm:grid-cols-2 p-3">
                            <div className="mx-auto">
                                <Image
                                    src={img}
                                    alt="Product Image"
                                    width={220}
                                    height={220}
                                    className="object-contain transform scale-x-[-1]	"
                                />
                            </div>
                            <div>

                        <p className="text-gray-800 text-md mt-2 line-clamp-4">
                            {text}
                        </p>
                        <button

                            className="flex gap-1 text-[#BF2B29] hover:text-red-600 font-bold text-sm mt-2 bg-white "
                        >
                            <span className="w-6 h-6">

                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M9.5 7L14.5 12L9.5 17" stroke="#BF2B29" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </g>
                                </svg>
                            </span>
                            SEE PRODUCT DETAILS
                        </button>
                            </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
