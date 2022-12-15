import React, { useState } from "react";
import "../assets/css/Faq.css";
import FAQ from "./faqpage";
// import { FiPlus, FiMinus} from 'react-icons/fi'
export default function Faq() {
    const [faqs, setFaqs] = useState([
      {
        question: "Apakah akun yang tersedia di sini boleh di ganti email atau passwordnya?",
        answer:
          "Tidak, semua akun yang tersedia di sini tidak boleh di ganti email atau passwordnya, apabila di ganti kami tidak akan bertanggung jawab apabila akunnya terkena masalah.",
        open: true
      },
      {
        question: "Berapa harga akun yang tersedia di sini?",
        answer:
          "Harga akun yang tersedia di sini bervariasi tergantung pada jenis akun yang Anda beli. Anda dapat mengecek harga akun yang tersedia di halaman website kami.",
        open: false
      },
      {
        question: "Bagaimana cara memesan akun yang ingin saya beli?",
        answer:
          "Anda dapat memesan akun yang ingin Anda beli dengan mengclick tombol PESAN DISINi di website kami. Setelah itu, anda akan terhubung ke kontak WA Admin Kami.",
        open: false
      },
      {
        question: "Bagaimana cara melakukan pembayaran untuk akun yang ingin saya beli?",
        answer: "Untuk saat ini kami hanya menerima pembayaran via BANK BCA, BANK JAGO, OVO, DANA, GOPAY, SHOPEEPAY. ",
        open: false
      },
      {
        question:
          "Apakah ada garansi jika akun yang saya beli tidak sesuai dengan yang dijanjikan?",
        answer: "Ya, kami menyediakan garansi untuk setiap akun yang Anda beli di sini. Jika terjadi kesalahan atau masalah dengan akun yang Anda beli, Anda dapat menghubungi kami untuk mendapatkan solusi.",
        open: false
      }
    ]);
  
    const toggleFAQ = index => {
      setFaqs(
        faqs.map((faq, i) => {
          if (i === index) {
            faq.open = !faq.open;
          } else {
            faq.open = false;
          }
  
          return faq;
        })
      );
    };
  
    return (
      <div className="App" id='FAQ'>
        <header>
          <h1>Pertanyaan yang sering Diajukan</h1>
        </header>
        <div className="faqs">
          {faqs.map((faq, index) => (
            <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </div>
    );
  }
  