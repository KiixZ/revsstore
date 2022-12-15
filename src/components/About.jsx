import React from 'react'
import john from '../assets/css/img/whyus.png'
import '../assets/css/About.css'
import { FaWhatsapp  } from 'react-icons/fa'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={john} alt='john' className='img'/>
                <div className='col-2'>
                    <h2>Kenapa Harus Kami?</h2>
                    <span className='line'></span>
                    <p>Karena kami memberikan pelayanan yang memuaskan dengan harga yang murah, proses cepat, admin responsive, kami juga memberikan garansi, jadi anda tidak perlu khawatir. </p>
                    <p>Berminat Membeli? Hubungi Admin WA Kami</p>
                    <div>
            <a
              href="https://api.whatsapp.com/send?phone=6282112439632&text=Halo, Saya ingin membeli akun netflix shared non garansi"
              className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-600 hover:bg-green-500 focus:shadow-outline focus:outline-none"
            >
              <FaWhatsapp/>
              0821-1243-9632
            </a>
          </div>
                </div>
            </div>
        </div>
    )
}

export default About
