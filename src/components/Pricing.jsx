import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
const Pricing = () => {
  return (
    <div className="px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" id="pricing">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">PAKET</span>
          </span>{' '}
          HARGA.
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
        Dapatkan harga spesial untuk bulan ini.
        </p>
      </div>
      <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
      <div className="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-deep-purple-accent-400">
          <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
            <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-black uppercase rounded bg-deep-purple-accent-400">
              Paling Murah
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-transform: uppercase">AKUN US SHARED</div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-5xl font-bold">20K</div>
              <div className="text-gray-700">/ Bln</div>
            </div>
            <div className="mt-2 space-y-3">
              <div className="text-gray-700">1 USERS</div>
              <div className="text-gray-700">1 DEVICE</div>
              <div className="text-gray-700">NO GARANSI</div>
            </div>
          </div>
          <div>
            <a
              href="ttps://api.whatsapp.com/send/?phone=6282112439632&text=Hai,%20Saya%20ingin%20membeli%20netflix"
              className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none"
            >
              <FaWhatsapp/>
              PESAN SEKARANG
            </a>
            <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
              NOTE : Akun US Harus menggunakan VPN untuk menonton netflix.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-deep-purple-accent-400">
          <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
            <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-black uppercase rounded bg-deep-purple-accent-400">
              Paling Banyak Di tanyakan
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-transform: uppercase">Akun Id Shared</div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-5xl font-bold">22K</div>
              <div className="text-gray-700">/ Bln</div>
            </div>
            <div className="mt-2 space-y-3">
              <div className="text-gray-700">1 USERS</div>
              <div className="text-gray-700">1 DEVICE</div>
              <div className="text-gray-700">NO GARANSI</div>
            </div>
          </div>
          <div>
            <a
              href="ttps://api.whatsapp.com/send/?phone=6282112439632&text=Hai,%20Saya%20ingin%20membeli%20netflix"
              className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none"
            >
              <FaWhatsapp/>
              PESAN SEKARANG
            </a>
            <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
            NOTE : Akun ID tidak menggunakan VPN untuk menonton netflix.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-deep-purple-accent-400">
          <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
            <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-black uppercase rounded bg-deep-purple-accent-400">
              PALING BANYAK DI BELI
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-transform: uppercase">AKUN ID SHARED</div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-5xl font-bold">27k</div>
              <div className="text-gray-700">/ Bln</div>
            </div>
            <div className="mt-2 space-y-3">
              <div className="text-gray-700">1 USERS</div>
              <div className="text-gray-700">1 DEVICE</div>
              <div className="text-gray-700">GARANSI 1 BULAN</div>
            </div>
          </div>
          <div>
            <a
              href="ttps://api.whatsapp.com/send/?phone=6282112439632&text=Hai,%20Saya%20ingin%20membeli%20netflix"
              className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none"
            >
              <FaWhatsapp/>
              PESAN SEKARANG
            </a>
            <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
            NOTE : DILARANG MENGGANTI EMAIL / PASSWORD AKUN.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-deep-purple-accent-400">
          <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
            <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-black uppercase rounded bg-deep-purple-accent-400">
              PALING MURAH
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-transform: uppercase">AKUN US PRIVATE</div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-5xl font-bold">50K</div>
              <div className="text-gray-700">/ Bln</div>
            </div>
            <div className="mt-2 space-y-3">
              <div className="text-gray-700">4 USERS</div>
              <div className="text-gray-700">4 DEVICE</div>
              <div className="text-gray-700">NO GARANSI</div>
            </div>
          </div>
          <div>
            <a
              href="ttps://api.whatsapp.com/send/?phone=6282112439632&text=Hai,%20Saya%20ingin%20membeli%20netflix"
              className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none"
            >
              <FaWhatsapp/>
              PESAN SEKARANG
            </a>
            <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
            NOTE : Akun US Harus menggunakan VPN untuk menonton netflix.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-deep-purple-accent-400">
          <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
            <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-black uppercase rounded bg-deep-purple-accent-400">
            Paling Banyak Di tanyakan
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-transform: uppercase">Akun Id private</div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-5xl font-bold">65k</div>
              <div className="text-gray-700">/ Bln</div>
            </div>
            <div className="mt-2 space-y-3">
              <div className="text-gray-700">4 USERS</div>
              <div className="text-gray-700">4 DEVICE</div>
              <div className="text-gray-700">No Garansi</div>
            </div>
          </div>
          <div>
            <a
              href="ttps://api.whatsapp.com/send/?phone=6282112439632&text=Hai,%20Saya%20ingin%20membeli%20netflix"
              className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none"
            >
              <FaWhatsapp/>
              PESAN SEKARANG
            </a>
            <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
            NOTE : Akun ID tidak menggunakan VPN untuk menonton netflix.
            </p>
          </div>
        </div>
        <div className="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-deep-purple-accent-400">
          <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
            <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-black uppercase rounded bg-deep-purple-accent-400">
              PALING BANYAK DIBELI
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-transform: uppercase">Akun Id private</div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-5xl font-bold">100k</div>
              <div className="text-gray-700">/ Bln</div>
            </div>
            <div className="mt-2 space-y-3">
              <div className="text-gray-700">4 USERS</div>
              <div className="text-gray-700">4 DEVICE</div>
              <div className="text-gray-700">GARANSI 1 BULAN</div>
            </div>
          </div>
          <div>
            <a
              href="ttps://api.whatsapp.com/send/?phone=6282112439632&text=Hai,%20Saya%20ingin%20membeli%20netflix"
              className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none"
            >
              <FaWhatsapp/>
              PESAN SEKARANG
            </a>
            <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
            NOTE : Akun ID tidak menggunakan VPN untuk menonton netflix.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing