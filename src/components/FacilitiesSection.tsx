import { Wifi, Zap, Flame, Compass, Car, Users } from "lucide-react";

const facilities = [
  {
    icon: Wifi,
    title: "Free Wi-Fi Kencang",
    description: "Koneksi stabil dan ngebut untuk nugas kuliah, kerja remote (WFW), atau sekadar scrolling santai.",
  },
  {
    icon: Zap,
    title: "Banyak Stopkontak",
    description: "Colokan listrik tersedia di hampir setiap meja, tak perlu khawatir baterai laptop & gadget habis.",
  },
  {
    icon: Flame,
    title: "Area Smoking & Nyaman",
    description: "Sirkulasi udara terbuka yang leluasa khas warung kopi Makassar yang hidup dan akrab.",
  },
  {
    icon: Compass,
    title: "Buka Tiap Hari Sampai 24.00",
    description: "Dari jam 08.00 pagi buat kopi pembuka hari, hingga tengah malam untuk nobar atau cerita santai.",
  },
  {
    icon: Car,
    title: "Parkir Nyaman",
    description: "Area parkir motor dan mobil yang mudah dijangkau tepat di Jl. Anggrek Raya Panakkukang.",
  },
  {
    icon: Users,
    title: "Titik Temu Komunitas",
    description: "Tempat berkumpulnya pegiat UMKM, mahasiswa, komunitas kreatif, hingga obrolan warga lokal.",
  },
];

export default function FacilitiesSection() {
  return (
    <section id="fasilitas" className="py-16 md:py-24 bg-white text-stone-900 border-t border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#8C5D39] bg-[#F4EFEA] px-3.5 py-1.5 rounded-full inline-block">
            Kenyamanan Pengunjung
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B382B]">
            Fasilitas Tempat Nongkrong
          </h2>
          <p className="text-xs sm:text-sm text-stone-500">
            Didesain untuk kenyamanan nongkrong, nugas, dan kumpul santai bersama teman-teman
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FAF7F2] border border-stone-200/70 hover:border-emerald-600/40 transition-all hover:shadow-md flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-[#1B382B] shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base text-stone-900">
                    {fac.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {fac.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
