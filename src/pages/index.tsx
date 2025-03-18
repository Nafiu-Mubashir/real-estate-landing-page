import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Button from "@/components/button/button";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useState } from "react";
import Card from "@/components/card/card";


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
export default function Home() {
  const [activeTab, setActiveTab] = useState("rent");
  return (
    <div className="space-y-10">
      <Navbar />
      <section className="bg-background mt-[-40px]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-3 py-6 md:p-10 lg:p-20 lg:w-[80%] ml-auto space-y-5 text-center lg:text-left">
            <h1 className="text-[40px] md:text-[64px] font-bold leading-10 md:leading-18">
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
                <div className="relative grid grid-cols-3 bg-white rounded-t-lg w-[297px] text-center text-lg">
                  {["rent", "buy", "sell"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-3 text-lg font-medium capitalize relative transition-all duration-300 ${
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
                <div className="absolute w-[738px] bg-white shadow-md rounded-b-lg rounded-tr-lg p-6 hidden lg:block">
                  {activeTab === "rent" && (
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                      {/* Location Field */}
                      <div className="w-full md:w-1/4">
                        <p className="text-gray-500 text-sm">Location</p>
                        <p className="text-lg font-semibold">
                          Barcelona, Spain
                        </p>
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
                  )}
                </div>
                <div className="w-full block md:block bg-white shadow-md rounded-b-lg rounded-tr-lg p-6">
                  <div className="flex justify-between items-center">
                    <p>Search location</p>
                    <MagnifyingGlass size={32} color="white" className="bg-primary rounded-lg p-2" />
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
            <Card property={aprtments[1]} classNames="md:!w-[320px] md:!h-auto !rounded-lg" height="md:h-200px" />
            <Card property={aprtments[5]} classNames="md:!w-[200px] md:!h-auto !rounded-lg ml-auto border border-primary p-1" height="md:!h-[120px]" main/>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto p-3 md:p-20 space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-3">Based on your location</h2>
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
          {aprtments.map(
            (
              property,
              id
            ) => (
              <Card key={id} property={property} show/>
            )
          )}
        </div>
        <Button
          type="button"
          text="Browse more properties"
          fill
          classNames="block mx-auto md:hidden"
        />
      </section>

      <section className="bg-secondary">
        <div className="flex flex-col justify-between items-center text-center p-6 md:p-10 space-y-4">
          <p className="text-primary font-semibold text-2xl">No Spam Promise</p>
          <h3 className="font-bold text-3xl text-white">Are you a landlord?</h3>
          <p className="text-[#D3D5DA] text-sm md:text-base">
            {"Discover ways to increase your home's value and get listed. No Spam."}
          </p>

          <form className="w-full md:w-1/4 mx-auto">
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
