import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, Settings, Calendar, Phone, MessageCircle, Mail, Play, Pause, Star } from 'lucide-react';

const ArmadasoundWebsite = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const bannerImages = [
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  ];

  const whatsappNumber = "+6282233245208";
  const emailAddress = "info@armadasound.com";
  const phoneNumber = "+6282233245208";

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % bannerImages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, bannerImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % bannerImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section with Carousel */}
      <div className="relative h-screen overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {bannerImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/40 backdrop-blur-sm" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center text-white max-w-4xl animate-fade-in">
            {/* Logo */}
            <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
              <img
                src="/img/logo.PNG"
                alt="Armada Sound Logo"
                className="w-32 h-32 mx-auto rounded-full shadow-2xl object-cover"
              />
            </div>


            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              ARMADA SOUND
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-blue-200">
              Solusi Sound System Profesional untuk Setiap Acara Anda
            </h2>
            
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Hadirkan kualitas suara jernih dan menggelegar untuk hajatan, konser, pengajian, 
              organ tunggal, dan momen spesial lainnya dengan teknologi audio terdepan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`https://wa.me/${whatsappNumber.replace('+', '')}?text=Halo%20ARMADA%20SOUND,%20saya%20tertarik%20dengan%20layanan%20sound%20system%20Anda.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Hubungi Kami Sekarang
              </a>
              
              <button
                onClick={toggleAutoPlay}
                className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-6 py-4 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                {isAutoPlaying ? <Pause size={20} /> : <Play size={20} />}
                {isAutoPlaying ? 'Pause' : 'Play'} Slideshow
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <ChevronRight size={24} />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Mengapa Memilih ARMADA SOUND?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami berkomitmen memberikan pengalaman audio terbaik dengan dukungan teknologi dan layanan premium
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <CheckCircle className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Peralatan Profesional</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Mixer digital terbaru, Power Amplifier bertenaga tinggi, Speaker & Driver kelas audiophile untuk kualitas suara optimal.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Settings className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Tim Berpengalaman</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Operator bersertifikat & Sound Engineer handal dengan pengalaman puluhan tahun untuk mixing yang sempurna.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Calendar className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Berbagai Jenis Acara</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Dari intimate gathering hingga konser besar, kami siap menangani semua jenis acara dengan profesionalisme tinggi.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 px-4 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Kami Melayani Berbagai Jenis Acara
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Percayakan kebutuhan audio profesional Anda kepada kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-lg">Hajatan Pernikahan / Khitanan</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-lg">Konser Musik (Indoor / Outdoor)</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-lg">Acara Hari Besar Nasional / Keagamaan</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-lg">Pengajian & Habsyian</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-lg">Organ Tunggal & Akustik</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-lg">Acara Perusahaan (Gathering, Meeting)</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-lg">Pameran & Peluncuran Produk</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-lg">Dan berbagai acara lainnya</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Galeri Dokumentasi
            </h2>
            <p className="text-xl text-gray-600">Lihat hasil kerja profesional kami</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Hajatan dengan ARMADA SOUND"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-semibold">Dokumentasi Hajatan Pernikahan</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Konser dengan ARMADA SOUND"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-semibold">Konser Musik Outdoor</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Pengajian dengan ARMADA SOUND"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-semibold">Pengajian Akbar</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 px-4 bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Apa Kata Klien Kami?
            </h2>
            <p className="text-xl text-blue-200">Kepuasan klien adalah prioritas utama kami</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-white text-lg italic mb-6 leading-relaxed">
                "Soundnya mantap banget! Acara hajatan jadi meriah dan semua tamu bilang suaranya jernih. 
                Tim ARMADA SOUND sangat profesional dan responsif. Highly recommended!"
              </p>
              <div className="border-t border-white/20 pt-4">
                <p className="text-blue-200 font-semibold">Bapak Ahmad Santoso</p>
                <p className="text-blue-300 text-sm">Klien Hajatan Pernikahan</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-white text-lg italic mb-6 leading-relaxed">
                "Konser band kami sukses besar berkat sound system dari ARMADA SOUND. 
                Kualitas audio luar biasa jernih dan powerful. Audience sampai merinding!"
              </p>
              <div className="border-t border-white/20 pt-4">
                <p className="text-blue-200 font-semibold">Rizky Pratama</p>
                <p className="text-blue-300 text-sm">Vokalis Band Metamorfosis</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Siap Membuat Acara Anda Menggema?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi kami untuk konsultasi gratis dan penawaran terbaik
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href={`tel:${phoneNumber}`}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              <Phone size={20} />
              Telepon Langsung
            </a>

            <a
              href={`https://wa.me/${whatsappNumber.replace('+', '')}?text=Halo%20ARMADA%20SOUND,%20saya%20tertarik%20dengan%20layanan%20sound%20system%20Anda.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              <MessageCircle size={20} />
              Chat WhatsApp
            </a>

            <a
              href={`mailto:${emailAddress}`}
              className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              <Mail size={20} />
              Kirim Email
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Informasi Kontak</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Phone className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <p className="text-gray-600">Telepon</p>
                <p className="font-semibold text-gray-800">{phoneNumber}</p>
              </div>
              <div>
                <MessageCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <p className="text-gray-600">WhatsApp</p>
                <p className="font-semibold text-gray-800">{whatsappNumber}</p>
              </div>
              <div>
                <Mail className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <p className="text-gray-600">Email</p>
                <p className="font-semibold text-gray-800">{emailAddress}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
              AS
            </div>
            <h3 className="text-2xl font-bold mb-2">ARMADA SOUND</h3>
            <p className="text-gray-400">Solusi Sound System Profesional</p>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ARMADA SOUND. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ArmadasoundWebsite;