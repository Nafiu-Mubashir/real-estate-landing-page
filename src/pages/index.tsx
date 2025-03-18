import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Button from "@/components/button/button";
import {
  CaretRight,
  CellSignalX,
  CurrencyDollar,
  House,
  HouseLine,
  MagnifyingGlass,
  YoutubeLogo,
} from "@phosphor-icons/react";
import { useState } from "react";
import Card from "@/components/card/card";
import Image from "next/image";

const aprtments = [
  {
    image: "/building4.png",
    price: "$2,095",
    duration: "/month",
    address: "2699 Green Valley, Highland Lake, FL",
    name: "Palm Harbor",
    description: {
      size: "5x7 m²",
      bathroom: "2",
      room: "3",
    },
    badge: true,
  },
  {
    image: "/building5.png",
    price: "$2,095",
    duration: "/month",
    address: "2699 Green Valley, Highland Lake, FL",
    name: "Palm Harbor",
    description: {
      size: "5x7 m²",
      bathroom: "2",
      room: "3",
    },
    badge: true,
  },
  {
    image: "/building6.png",
    price: "$2,095",
    duration: "/month",
    address: "2699 Green Valley, Highland Lake, FL",
    name: "Palm Harbor",
    description: {
      size: "5x7 m²",
      bathroom: "2",
      room: "3",
    },
    badge: true,
  },
  {
    image: "/building7.png",
    price: "$2,095",
    duration: "/month",
    address: "2699 Green Valley, Highland Lake, FL",
    name: "Palm Harbor",
    description: {
      size: "5x7 m²",
      bathroom: "2",
      room: "3",
    },
    badge: false,
  },
  {
    image: "/building8.png",
    price: "$2,095",
    duration: "/month",
    address: "2699 Green Valley, Highland Lake, FL",
    name: "Palm Harbor",
    description: {
      size: "5x7 m²",
      bathroom: "2",
      room: "3",
    },
    badge: false,
  },
  {
    image: "/building9.png",
    price: "$2,095",
    duration: "/month",
    address: "2699 Green Valley, Highland Lake, FL",
    name: "Palm Harbor",
    description: {
      size: "5x7 m²",
      bathroom: "2",
      room: "3",
    },
    badge: false,
  },
];

const testimonials = [
  {
    name: "Mira Culos",
    role: "Renter",
    image: "/mira.png",
    quote:
      "Estatery is the platform I go to on almost a daily basis for 2nd home and vacation condo shopping, or to just look at dream homes in new areas. Thanks for fun home shopping and comparative analyzing, Estatery!",
  },
  {
    name: "John Doe",
    role: "Landlord",
    image: "/john.png",
    quote:
      "As a landlord, Estatery has helped me connect with serious tenants quickly. The platform is easy to use and has streamlined my property management process.",
  },
  {
    name: "Jane Smith",
    role: "Property Manager",
    image: "/jane.png",
    quote:
      "Managing properties has never been easier! Estatery provides all the tools I need to keep my listings updated and connect with potential clients.",
  },
];
export default function Home() {
  const [activeTab, setActiveTab] = useState("rent");
  return (
    <div className="space-y-10">
      <Navbar />
      <section className="bg-background mt-[-2.5rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-3 py-6 md:p-10 lg:p-20 lg:w-[80%] ml-auto space-y-5 text-center lg:text-left">
            <h1 className="text-[2.5rem] md:text-[4rem] font-bold leading-10 md:leading-18">
              Buy, rent, or sell your property easily
            </h1>
            <p className="w-full lg:w-[70%]">
              A great platform to buy, sell, or even rent your properties
              without any commisions.
            </p>
            {/* Stats */}
            <div className="relative w-full mt-10 space-y-10">
              <div className="flex gap-10">
                <div className="flex gap-5">
                  {/* Divider */}
                  <div className="hidden md:block w-px bg-gray-300 h-10"></div>
                  <div>
                    <p className="text-2xl font-semibold text-indigo-600">
                      50k+
                    </p>
                    <p className="text-gray-500">renters</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  {/* Divider */}
                  <div className="hidden md:block w-px bg-gray-300 h-10"></div>
                  <div>
                    <p className="text-2xl font-semibold text-indigo-600">
                      10k+
                    </p>
                    <p className="text-gray-500">properties</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative grid grid-cols-3 bg-white rounded-t-lg w-[18.563rem] text-center text-lg">
                  {["rent", "buy", "sell"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-3 text-lg font-medium capitalize relative transition-all duration-300 cursor-pointer ${
                        activeTab === tab ? "text-indigo-600" : "text-gray-500"
                      }`}
                    >
                      {tab}
                      {activeTab === tab && (
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-600 transition-all duration-300"></span>
                      )}
                    </button>
                  ))}
                </div>
                {/* Tab Content */}
                <div className="absolute w-[46.125rem] bg-white shadow-md rounded-b-lg rounded-tr-lg p-6 hidden lg:block">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Location Field */}
                    <div className="w-full md:w-1/4">
                      <p className="text-gray-500 text-sm">Location</p>
                      <p className="text-lg font-semibold">Barcelona, Spain</p>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px bg-gray-300 h-10"></div>

                    {/* Move-in Date Field */}
                    <div className="w-full md:w-1/4">
                      <p className="text-gray-500 text-sm">When</p>
                      <p className="text-lg font-semibold">
                        Select Move-in Date
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px bg-gray-300 h-10"></div>

                    <Button
                      text="Browse Properties"
                      type="button"
                      fill
                      classNames="py-3 px-6"
                    />
                  </div>
                </div>
                <div className="w-full block md:block bg-white shadow-md rounded-b-lg rounded-tr-lg p-6">
                  <div className="flex justify-between items-center">
                    <p>Search location</p>
                    <MagnifyingGlass
                      size={32}
                      color="white"
                      className="bg-primary rounded-lg p-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: 'url("/map.png")',
            }}
            className="p-3 py-6 md:p-20 bg-no-repeat bg-center bg-cover hidden lg:block"
          >
            <div className="w-[80%]">
              <Card
                property={aprtments[1]}
                classNames="md:!w-[320px] md:!h-auto !rounded-lg"
                height="md:h-200px"
              />
              <Card
                property={aprtments[5]}
                classNames="md:!w-[200px] md:!h-auto !rounded-lg ml-auto border border-primary p-1"
                height="md:!h-[120px]"
                main
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full lg:w-[80%] mx-auto p-3 lg:p-20">
          <div className="relative">
            <div className="absolute flex gap-3 md:gap-7 items-center p-2 lg:p-3 bg-white lg:w-[60%] top-5 left-[-5px] lg:left-[-80px] rounded-lg border border-background shadwow-2xl shadow-secondary">
              <YoutubeLogo
                size={60}
                color="#7065F0"
                className="p-2 md:p-3 rounded-full bg-background h-10 w-10 lg:h-12 lg:w-12"
              />
              <div>
                <h1 className="font-bold text-lg lg:text-xl">
                  Virtual home tour
                </h1>
                <p className="text-xs md:text-sm">
                  We provide you with virtual tour
                </p>
              </div>
            </div>
            <Image
              src="/building3.png"
              width={544}
              height={600}
              alt="image"
              className="w-[20.438rem] lg:w-[34rem] h-[28.75rem] lg:h-[37.5rem]"
            />
            <div className="absolute flex gap-7 items-center p-2 lg:p-3 bg-white lg:w-[80%] bottom-[-20px] md:bottom-[-40px] left-2 md:left-5 lg:left-10 rounded-lg border border-background shadwow-2xl shadow-secondary">
              <div className="relative">
                <HouseLine
                  size={55}
                  color="white"
                  className="p-2 md:p-3 rounded-full bg-primary absolute right-5 lg:right-[-100px] top-[-40px] border border-white h-10 w-10 lg:h-12 lg:w-12"
                />
                <div className="px-10">
                  <h1 className="font-bold text-lg lg:text-xl">
                    Find the best deal
                  </h1>
                  <p className="text-xs lg:text-sm">
                    Browse thousands of properties
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6 w-full lg:w-[80%] mx-auto">
            <div className="rounded-xl border border-secondary/10 grid grid-cols-2 gap-4 w-full lg:w-[70%] p-1 bg-background">
              <p className="text-primary text-lg bg-white rounded-lg shadow p-2 text-center">
                For tenants
              </p>
              <p className="text-lg p-2 text-center text-[#6C727F]">
                For landlords
              </p>
            </div>
            <div className="text-center lg:text-left space-y-6">
              <h1 className="font-bold text-3xl lg:text-[2.5rem] lg:leading-13">
                We make it easy for tenants and landlords.
              </h1>
              <p className="text-base">
                Whether it’s selling your current home, getting financing, or
                buying a new home, we make it easy and efficient. The best part?
                you’ll save a bunch of money and time with our services.
              </p>
              <Button
                text="See more"
                fill
                icon={<CaretRight size={18} />}
                type={"button"}
                classNames="w-full lg:w-auto justify-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-3 md:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-5 md:gap-10 border border-secondary/10 rounded-lg bg-background">
          {/* Text Content */}
          <div className="p-4 md:p-12">
            <div className="w-full md:w-[75%]">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                The new way to find your new home
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                Find your dream place to live in with more than 10k+ properties
                listed.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:text-center flex flex-row md:flex-col items-center gap-1">
                <House
                  size={20}
                  color="#7065F0"
                  className="border border-secondary/10 p-2 rounded-full h-10 w-10"
                />
                <div>
                  <span className="text-2xl font-semibold text-gray-900">
                    7.4%
                  </span>
                  <p className="text-xs text-gray-600">Property Return Rate</p>
                </div>
              </div>
              <div className="md:text-center flex flex-row md:flex-col items-center gap-1">
                <CellSignalX
                  size={20}
                  color="#7065F0"
                  className="border border-secondary/10 p-2 rounded-full h-10 w-10"
                />
                <div>
                  <span className="text-2xl font-semibold text-gray-900">
                    3,856
                  </span>
                  <p className="text-xs text-gray-600">
                    Property in Sell & Rent
                  </p>
                </div>
              </div>
              <div className="md:text-center flex flex-row md:flex-col items-center gap-1">
                <CurrencyDollar
                  size={20}
                  color="#7065F0"
                  className="border border-secondary/10 p-2 rounded-full h-10 w-10"
                />
                <div>
                  <span className="text-2xl font-semibold text-gray-900">
                    2,540
                  </span>
                  <p className="text-xs text-gray-600">
                    Daily Completed Transactions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-end md:justify-center">
            <Image
              src="/building.png" // Place your image in the `public/images/` folder
              alt="House illustration"
              width={500}
              height={350}
              className="w-full"
            />
          </div>
        </div>
      </section>

      <section>
        <section className="bg-gradient-to-b from-white to-background">
          <div className="max-w-screen-xl mx-auto p-3 md:p-20 space-y-10 ">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold mb-3">
                  Based on your location
                </h2>
                <p>Some of our picked properties near you location.</p>
              </div>
              <Button
                type="button"
                text="Browse more properties"
                fill
                classNames="hidden md:block"
              />
            </div>

            <div className="flex justify-between gap-4 lg:flex-wrap overflow-auto snap-x snap-mandatory px-2">
              {aprtments.map((property, id) => (
                <Card key={id} property={property} show />
              ))}
            </div>
            <Button
              type="button"
              text="Browse more properties"
              fill
              classNames="block mx-auto md:hidden"
            />
          </div>
        </section>

        <section className="bg-gradient-to-b from-background to-white py-16 text-center p-3">
          <h2 className="text-3xl font-bold text-gray-900">Testimonials</h2>
          <p className="text-gray-600 mt-2">
            See what our property managers, landlords, and tenants have to say
          </p>

          <div className="mt-8 max-w-3xl mx-auto">
            <blockquote className="text-lg italic text-gray-700">
              “{testimonials[0].quote}”
            </blockquote>
            <p className="mt-4 font-semibold">
              {testimonials[0].name},{" "}
              <span className="text-gray-500">{testimonials[0].role}</span>
            </p>
          </div>

          <div className="flex justify-center space-x-4 mt-6">
            {testimonials.map((person, index) => (
              <button
                key={index}
                className={`w-12 h-12 rounded-full overflow-hidden border-2 ${
                  index === 0
                    ? "border-primary bg-background"
                    : "border-gray-300"
                }`}
              >
                <Image
                  src={person.image}
                  alt={person.name}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </section>
      </section>

      <section className="bg-secondary py-10">
        <div className="flex flex-col justify-between items-center text-center p-6 md:p-10 space-y-4">
          <p className="text-primary font-semibold text-2xl">No Spam Promise</p>
          <h3 className="font-bold text-3xl text-white">Are you a landlord?</h3>
          <p className="text-[#D3D5DA] text-sm md:text-base">
            {
              "Discover ways to increase your home's value and get listed. No Spam."
            }
          </p>

          <form className="w-full md:w-1/2 lg:w-1/4 mx-auto">
            <div className="relative space-y-3">
              <input
                type="search"
                id="default-search"
                className="block w-full p-3 md:p-4 ps-4 text-sm text-gray-900 border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email address"
                required
              />
              <button
                type="submit"
                className="text-white w-full md:w-auto md:absolute end-2.5 bottom-2.5 bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-6 py-2 "
              >
                Submit
              </button>
            </div>
          </form>
          <p className="text-white text-xs md:text-sm">
            Join 10,000+ other landlords in our estatery community.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
