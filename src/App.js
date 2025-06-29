import React from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, Settings, Calendar, Phone, MessageCircle, Mail, Play, Pause, Star, MapPin, User, Award, Users, Music } from 'lucide-react';

// Komponen kecil untuk kartu keunggulan agar lebih rapi
const FeatureCard = ({ imageSrc, title, children }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
    <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
    <div className="p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{title}</h3>
      <p className="text-gray-600 text-center leading-relaxed">{children}</p>
    </div>
  </div>
);

const ArmadasoundWebsite = () => {
  // State dan fungsi-fungsi (tidak ada perubahan di sini)
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);

  const bannerImages = [
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  ];

  const whatsappNumber = "+6282233245208";
  const emailAddress = "info@armadasound.com";
  const phoneNumber = "+6282233245208";

  React.useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % bannerImages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, bannerImages.length]);

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % bannerImages.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  const toggleAutoPlay = () => setIsAutoPlaying(!isAutoPlaying);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* --- BAGIAN HERO (Perbaikan Teks) --- */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {bannerImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
              style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/40 backdrop-blur-sm" />
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center text-white max-w-4xl animate-fade-in">
            <img src="/img/logo.PNG" alt="Armada Sound Logo" className="w-64 h-64 mx-auto rounded-full shadow-2xl object-cover mb-8 transform hover:scale-105 transition-transform duration-300" />
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              ARMADA SOUND
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-blue-200">
              Bikin Acara Apapun Jadi Lebih Hidup & Berkesan!
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Dari hajatan nikahan sampai konser musik, kami siap hadirkan suara jernih yang bikin semua orang ikut goyang. Percayakan momen spesial Anda pada kami!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={`https://wa.me/${whatsappNumber.replace('+', '')}?text=Halo%20ARMADA%20SOUND,%20mau%20tanya-tanya%20soal%20sewa%20sound%20system%20untuk%20acara%20saya.`} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <MessageCircle size={20} />
                Ngobrol via WhatsApp
              </a>
            </div>
          </div>
        </div>
        {/* Navigasi Carousel (tidak berubah) */}
        <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"><ChevronLeft size={24} /></button>
        <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"><ChevronRight size={24} /></button>
      </div>

      {/* --- BAGIAN KEUNGGULAN (Desain & Teks Baru dengan Ilustrasi) --- */}
      <div className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Kenapa Mesti Pilih ARMADA SOUND?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bukan cuma soal suara, tapi soal kepercayaan dan pengalaman yang kami berikan.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Ganti URL gambar di bawah dengan ilustrasi Anda */}
            <FeatureCard imageSrc="https://images.unsplash.com/photo-1599481248633-9665a890479b?auto=format&fit=crop&w=800&q=80" title="Peralatan yang Lengkap & Canggih">
              Kami pakai alat-alat kelas satu. Mixer analog, speaker jernih, power kuat. Dijamin suara gak bakal malu-maluin!
            </FeatureCard>
            <FeatureCard imageSrc="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80" title="Tim yang Asik & Jago">
              Tim kami bukan cuma operator, tapi seniman suara. Ramah, berpengalaman, dan siap bikin acaramu sukses.
            </FeatureCard>
            <FeatureCard imageSrc="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80" title="Siap untuk Segala Acara">
              Mau acara kampung, konser band, atau pengajian akbar? Kami siap tempur! Pengalaman kami udah melalang buana.
            </FeatureCard>
          </div>
        </div>
      </div>

      {/* --- BAGIAN BARU: REPUTASI & KEPERCAYAAN --- */}
      <div className="py-20 px-4 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <Award className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Jaminan dari Kami: Amanah, Lengkap, dan Fleksibel
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-12">
            Bagi kami, reputasi adalah segalanya. Inilah janji kami untuk setiap klien yang memercayakan acaranya pada ARMADA SOUND.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Amanah & Terpercaya</h3>
              <p className="text-blue-300">Kami pegang teguh kepercayaan Anda. Datang tepat waktu, alat sesuai janji, dan tidak ada biaya tersembunyi. Kepuasan Anda adalah prioritas utama.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <Settings className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Peralatan Lengkap</h3>
              <p className="text-blue-300">Dari kabel sampai mixer tercanggih, semua kami siapkan. Anda tidak perlu pusing, cukup duduk manis dan nikmati acara dengan suara terbaik.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Fleksibel & Bersahabat</h3>
              <p className="text-blue-300">Setiap acara itu unik. Kami siap berdiskusi untuk menyesuaikan paket dan harga sesuai kebutuhan dan budget Anda. Jangan sungkan untuk ngobrol!</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- BAGIAN BARU: INFO PEMILIK & LOKASI --- */}
      <div className="py-20 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Temui Kami Langsung!</h2>
            <p className="text-xl text-gray-600 mb-8">
              Dikelola langsung oleh pemilik yang turun tangan untuk memastikan kualitas. Mampir ke tempat kami untuk ngobrol santai seputar kebutuhan acara Anda.
            </p>
            <div className="bg-white p-6 rounded-2xl shadow-lg border">
              <div className="flex items-center mb-4">
                <User className="w-8 h-8 text-blue-600 mr-4" />
                <div>
                  <p className="text-gray-500">Pemilik</p>
                  <p className="text-xl font-bold text-gray-900">Edi Husaeni (Edi Son)</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-8 h-8 text-green-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-500">Alamat</p>
                  <p className="text-lg font-semibold text-gray-800">
                    Jl. Beruang No 38, RT01/RW01, Desa Beringin Agung, Kec. Telaga Antang, Kab. Kotawaringin Timur, Kalimantan Tengah.
                  </p>
                  <p className="text-sm text-gray-500 mt-1">(Dekat Masjid Al-Muhajirin)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl h-80 md:h-full">
            {/* Ganti dengan link Google Maps Anda */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1993.9129293739238!2d112.61980936714106!3d-1.8108151727236663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dfd7d63054ac545%3A0x4b15f0ba047f0bb!2sMasjid%20Al-Muhajirin%20Beringin%20Agung!5e0!3m2!1sid!2sid!4v1751197402767!5m2!1sid!2sid"
              width={"100%"}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Armada Sound"
            ></iframe>
          </div>
        </div>
      </div>

      {/* --- BAGIAN KONTAK (Teks Disederhanakan) --- */}
      <div className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Sudah Siap Bikin Acara Anda Menggema?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Hubungi kami sekarang! Konsultasi gratis, penawaran bersahabat.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href={`https://wa.me/${whatsappNumber.replace('+', '')}?text=Halo%20ARMADA%20SOUND,%20saya%20tertarik%20dengan%20layanan%20sound%20system%20Anda.`} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
              <MessageCircle size={20} />
              Chat WhatsApp
            </a>
            <a href={`tel:${phoneNumber}`} className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
              <Phone size={20} />
              Telepon Langsung
            </a>
          </div>
        </div>
      </div>

      {/* --- FOOTER (Teks Disederhanakan) --- */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <img src="/img/logo.PNG" alt="Armada Sound Logo" className="w-24 h-24 mx-auto rounded-full shadow-2xl object-cover mb-4" />
          <h3 className="text-2xl font-bold mb-2">ARMADA SOUND</h3>
          <p className="text-gray-400">Rental Sound System Profesional & Amanah</p>
          <div className="border-t border-gray-800 pt-8 mt-8">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ARMADA SOUND. Dikelola oleh Edi Husaeni.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out; }
      `}</style>
    </div>
  );
};

export default ArmadasoundWebsite;