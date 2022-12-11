const data = [
    {
      id: 1,
      name: "Muhammad Rizki",
      location: "Medan , Sumatera Utara ",
      designation: "Pelajar di SMAN 1 Medan ",
      avatar: "https://testimonialapi.toolcarton.com/avatar/1.jpg",
      message:
        "Saya sangat puas membeli netflix di sini. Kualitasnya sangat baik dan sesuai dengan yang saya harapkan.",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
      rating: 4.8,
      audio: "https://testimonialapi.toolcarton.com/audio/1.mp3"
    },
    {
      id: 2,
      name: "Rizki Amalia",
      location: "Bandung, Jawa Barat ",
      designation: "mahasiswa di Universitas Diponegoro",
      avatar: "https://testimonialapi.toolcarton.com/avatar/2.jpg",
      message:
        "Saya sangat merekomendasikan tempat ini untuk membeli akun. Pelayanannya ramah dan responsif, dan harganya juga terjangkau.",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
      rating: 4.4,
      audio: "https://testimonialapi.toolcarton.com/audio/2.mp3"
    },
    {
      id: 3,
      name: "Muhammad Syahid",
      location: "Semarang, Jawa Tengah",
      designation: "mahasiswa di Institut Teknologi Bandung",
      avatar: "https://testimonialapi.toolcarton.com/avatar/3.jpg",
      message:
        "Saya sudah membeli beberapa akun di sini, dan saya merasa sangat puas dengan kualitas dan fitur yang disediakan. Proses pembeliannya juga mudah dan cepat.",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
      rating: 4.5,
      audio: "https://testimonialapi.toolcarton.com/audio/3.mp3"
    },
    {
      id: 4,
      name: "Firda Nur Rahmah",
      location: "Surabaya, Jawa Timur",
      designation: "pelajar di SMK Negeri 1 Surabaya",
      avatar: "https://testimonialapi.toolcarton.com/avatar/4.jpg",
      message:
        "Saya sangat merekomendasikan tempat ini untuk membeli akun. Pelayanannya ramah dan responsif, dan harganya juga terjangkau.",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
      rating: 5,
      audio: "https://testimonialapi.toolcarton.com/audio/4.mp3"
    },
    {
      id: 5,
      name: "Rizky Irfan Febriansyah",
      location: "Palembang, Sumatera Selatan ",
      designation: "Mahasiswa di Universitas Negri Yogyakarta",
      avatar: "https://testimonialapi.toolcarton.com/avatar/5.jpg",
      message:
        "Setelah membeli akun di sini, saya merasa sangat puas dengan kualitas dan pelayanannya. Proses pembeliannya juga cepat dan mudah.",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
      rating: 4.5,
      audio: "https://testimonialapi.toolcarton.com/audio/5.mp3"
    },
    {
      id: 6,
      name: "Febby Anggraini",
      location: "Yogyakarta",
      designation: "Mahasiswa di UGM",
      avatar: "https://testimonialapi.toolcarton.com/avatar/6.jpg",
      message:
        "Setelah mencoba beberapa tempat untuk membeli akun, akhirnya saya menemukan yang terbaik di sini. Pelayanannya ramah dan responsif, dan harganya juga terjangkau.",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
      rating: 4.7,
      audio: "https://testimonialapi.toolcarton.com/audio/6.mp3"
    },
    {
      id: 7,
      name: "Muhammad Iqbal",
      location: "Bekasi, Jawa Barat ",
      designation: "Pelajar di SMK Negeri 2 Bekasi",
      avatar: "https://testimonialapi.toolcarton.com/avatar/7.jpg",
      message:
        "Saya sangat senang dengan keputusan untuk membeli akun di sini. Prosesnya mudah dan cepat, dan akun yang saya dapatkan memiliki garansi. Saya merekomendasikan kepada siapa saja yang membutuhkan akun berkualitas tinggi.",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
      rating: 4.7,
      audio: "https://testimonialapi.toolcarton.com/audio/7.mp3"
    },
    {
      id: 8,
      name: "Shafira Anggraini",
      location: "Jakarta",
      designation: "Mahasiswa di Universitas Negri Jakarta",
      avatar: "https://testimonialapi.toolcarton.com/avatar/8.jpg",
      message:
        "Saya sangat senang dengan akun yang saya beli di sini. Proses pembeliannya mudah dan cepat, dan akun yang saya dapatkan sangat berguna. Saya merekomendasikan kepada siapa saja yang membutuhkan akun berkualitas tinggi untuk membelinya di sini.",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
      rating: 4.8,
      audio: "https://testimonialapi.toolcarton.com/audio/8.mp3"
    },
    {
      id: 9,
      name: "Nadya Putri",
      location: "Bandung, Jawa Barat ",
      designation: "Mahasiswa di Universitas Pasundan",
      avatar: "https://testimonialapi.toolcarton.com/avatar/9.jpg",
      message:
        "Akun yang saya beli di sini berkualitas tinggi dan harganya sangat terjangkau. Saya tidak menemukan masalah apapun saat menggunakannya dan sangat merekomendasikan kepada orang lain.",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
      rating: 4.1,
      audio: "https://testimonialapi.toolcarton.com/audio/9.mp3"
    },
    {
      id: 10,
      name: "Aisha Natasha",
      location: "Tangerang, Banten ",
      designation: "Mahasiswa di Institut Pertanian Bogor",
      avatar: "https://testimonialapi.toolcarton.com/avatar/10.jpg",
      message:
        "Saya sangat senang dengan akun yang saya beli di sini. Mereknya terpercaya dan mudah untuk digunakan. Saya merekomendasikan kepada teman-teman saya untuk membeli akun di sini juga.",
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.",
      rating: 4.9,
      audio: "https://testimonialapi.toolcarton.com/audio/10.mp3"
    }
  ];
  export default data;
  