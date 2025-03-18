import Image from "next/image";
import { Bathtub, Bed, Diamond, Heart } from "@phosphor-icons/react";

interface CardProps {
   property: {
    image: string,
    price: string,
    duration: string,
    address: string,
    name: string,
    description: {
        room: string,
        bathroom: string,
        size: string,
    },
    badge: boolean,
   }
    classNames?: string,
    show?: boolean,
    height?: string,
    main?: boolean,
}

const Card = ({property, classNames, show, height, main}:CardProps) => {
  return (
    <div
                className={`${classNames} flex-shrink-0 " w-[20.625rem] md:w-[22rem] shadow md:space-y-3" rounded-lg bg-white`}
              >
                <Image
                  src={property.image}
                  width={352}
                  height={200}
                  alt="building"
                  className={`${height} rounded-t-lg "w-full h-[12.5rem] md:h-[16.375rem]"`}
                />
                <div className={`${main ? "p-2" : "p-4"} space-y-2 relative`}>
                  {property.badge && show && (
                    <Image
                      src={"/badge.png"}
                      width={100}
                      height={100}
                      alt="badge"
                      className="absolute left-[-8px] top-[-1.563rem]"
                    />
                  )}
                  <div className="flex justify-between items-center">
                    <p className={`text-base text-[#000929]/50 ${main ? "text-sm" : "text-base"}`}>
                      <span className={`font-bold text-primary ${main ? "text-base" : "text-2xl"}`}>
                        {property.price}
                      </span>
                      {property.duration}
                    </p>
                    {show && <Heart
                      size={35}
                      color="#7065F0"
                      className="border border-gray-200 rounded-full p-2"
                    />}
                  </div>
                  <h3 className={`font-bold ${main ? "text-base" : "text-2xl"}`}>{property.name}</h3>
                  <p className={`"text-[#000929]/50 ${main ? "text-sm" : "text-base"}`}>{property.address}</p>
                  <div className="flex justify-between items-center border-t border-gray-200 p-2 text-[#000929]/50">
                    <div className="flex gap-2 text-sm">
                      <Bed size={18} color="#7065F0" />
                      <p className="flex gap-2">
                        {property.description.room}{" "}
                        {show && <span className="hidden md:block">Rooms</span>}
                      </p>
                    </div>
                    <div className="flex gap-2 text-sm">
                      <Bathtub size={18} color="#7065F0" />
                      <p className="flex gap-2">
                        {property.description.bathroom}{" "}
                       {show &&  <span className="hidden md:block">Bathrooms</span>}
                      </p>
                    </div>
                    <div className="flex gap-2 text-sm">
                      <Diamond size={18} color="#7065F0" />
                      <p className="flex gap-1"> {property.description.size}</p>
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default Card