import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Coffee, Sparkles } from "lucide-react";

const featuredItems = [
  {
    title: "Kopi Susu Khas",
    subtitle: "Racikan kopi susu creamy & legit favorit pengunjung",
    price: "Rp 15.000",
    image: "/menu/kopi-susu.jpg",
    badge: "Terlaris #1",
  },
  {
    title: "Pisang Goreng Sambel",
    subtitle: "Pisang goreng renyah dicocol sambal terasi khas Makassar",
    price: "Rp 19.000",
    image: "/menu/pisang-goreng.jpg",
    badge: "Khas Makassar",
  },
  {
    title: "Indomie Spesial Warkop",
    subtitle: "Porsi mie gurih hangat dengan racikan bumbu khas",
    price: "Rp 17.000",
    image: "/menu/indomie-goreng.jpg",
    badge: "Favorit Nongkrong",
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-20 md:py-28 bg-[#FAF7F2] text-stone-900 border-t border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100 text-[#1B382B] text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#1B382B]" />
            Katalog Menu Warkop
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1B382B] tracking-tight">
            Pilihan Menu Favorit
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Mulai dari seduhan kopi otentik Makassar, aneka hidangan hangat, hingga pisang goreng sambel legendaris.
          </p>
        </div>

        {/* 3 Featured Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {featuredItems.map((item, idx) => (
            <Link
              key={idx}
              href="/menu"
              className="group bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#1B382B] shadow-sm">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <h3 className="font-extrabold text-lg text-[#1B382B] group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="font-extrabold text-base text-[#1B382B]">
                    {item.price}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Lihat menu <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Centered View More Button */}
        <div className="text-center mt-12 sm:mt-16">
          <Link
            href="/menu"
            className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-[#1B382B] hover:bg-[#142A20] text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-xl active:scale-95 group"
          >
            <span>Lihat Semua Menu & Pesan</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
