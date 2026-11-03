import { Target, TrendingUp, Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="tentang" className="py-16 md:py-24 bg-[#FAF7F2] text-stone-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Story */}
        <div className="grid md:grid-cols-12 gap-8 items-center mb-14">
          <div className="md:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8C5D39] bg-[#F4EFEA] border border-[#8C5D39]/20 px-3.5 py-1.5 rounded-full inline-block">
              Tentang Warkop Indonesia
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B382B] leading-tight">
              Lebih Dari Sekadar Secangkir Kopi
            </h2>
            <div className="w-16 h-1 bg-[#8C5D39] rounded-full" />
          </div>

          <div className="md:col-span-7 space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            <p>
              Berakar dari kultur warung kopi Makassar yang hangat dan penuh kebersamaan, <strong>Warkop Indonesia</strong> hadir di kawasan Panakkukang bukan sekadar tempat minum kopi, melainkan ruang temu kreatif bagi siapa saja.
            </p>
            <p>
              Kami menyajikan seduhan kopi susu khas, racikan kopi tradisional, aneka minuman segar non-coffee, hingga kudapan otentik seperti pisang goreng sambel dan indomie racikan spesial warkop dengan harga yang tetap bersahabat untuk semua kalangan.
            </p>
          </div>
        </div>

        {/* Unified Purpose, Visi & Misi Card */}
        <div className="rounded-3xl bg-white border border-stone-200/90 shadow-md p-6 sm:p-10 space-y-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-100">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-[#8C5D39]">
                <Sparkles className="w-4 h-4 text-[#8C5D39]" />
                <span>Fondasi & Arah Kami</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1B382B]">
                Purpose, Visi & Misi Warkop Indonesia
              </h3>
            </div>
            <span className="self-start sm:self-center text-xs font-bold bg-[#1B382B] text-amber-300 px-3.5 py-1.5 rounded-full">
              Warkop Makassar
            </span>
          </div>

          {/* 2 Main Columns: Visi & Misi (with their respective Purpose integrated) */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Column 1: Top of Mind Casual Creative Space */}
            <div className="rounded-2xl p-6 sm:p-7 bg-gradient-to-br from-[#1B382B] to-[#142A20] text-white flex flex-col justify-between space-y-5 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-amber-400/20 border border-amber-400/30 text-amber-300 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-300/90">
                      Visi & Purpose
                    </span>
                    <h4 className="text-lg sm:text-xl font-extrabold text-white leading-snug">
                      Top of Mind Casual Creative Space
                    </h4>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                  Menjadi ruang kreatif kasual nomor satu yang paling pertama diingat dan dituju saat siapa pun mencari tempat nyaman untuk bertukar ide, berkarya, nugas, maupun bersantai ditemani secangkir kopi otentik.
                </p>
              </div>

              <div className="pt-3 border-t border-emerald-800/60">
                <p className="text-xs text-amber-200/90 italic">
                  💡 Tempat pertama yang terlintas untuk kumpul kreatif, inklusif, dan ramah kantong di Panakkukang.
                </p>
              </div>
            </div>

            {/* Column 2: Health & Growth Proven Business Model */}
            <div className="rounded-2xl p-6 sm:p-7 bg-[#FAF7F2] border border-stone-200/90 text-stone-900 flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#8C5D39] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#8C5D39]">
                      Misi & Model Bisnis
                    </span>
                    <h4 className="text-lg sm:text-xl font-extrabold text-[#1B382B] leading-snug">
                      Health & Growth Proven Business Model
                    </h4>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Menjalankan tata kelola usaha warkop yang terbukti sehat secara finansial dan operasional, solid dalam kualitas menu dan layanan, serta memiliki daya tahan bertumbuh secara berkelanjutan.
                </p>
              </div>

              <div className="pt-3 border-t border-stone-200">
                <p className="text-xs text-stone-500 italic">
                  📈 Model bisnis kuliner yang sehat, terukur, dan berkembang bersama komunitas pelanggan setia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
