import { Coffee, MapPin, Clock, ArrowRight, Sparkles, UtensilsCrossed } from "lucide-react";
import { WARKOP_CONFIG } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[#1B382B] text-white overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F5E6D3_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#8C5D39]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-700/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-500/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Warung Kopi & Tempat Nongkrong Otentik Makassar</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Ruang Santai, Seduhan Nikmat, & Teman Cerita Setiap Hari.
            </h1>

            <p className="text-base sm:text-lg text-emerald-100/90 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Dari cangkir kopi susu legit, sajian Indomie hangat, hingga pisang goreng sambel khas Makassar. Warkop Indonesia hadir jadi ruang nyaman untuk ngobrol santai, nugas, maupun kerja.
            </p>

            {/* Badges / Quick info */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm text-emerald-200">
              <div className="flex items-center gap-2 bg-emerald-950/60 border border-emerald-800/60 px-3.5 py-2 rounded-xl">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Buka Tiap Hari 08.00 - 24.00</span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-950/60 border border-emerald-800/60 px-3.5 py-2 rounded-xl">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Panakkukang, Makassar</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold px-7 py-3.5 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base"
              >
                <UtensilsCrossed className="w-4 h-4 text-stone-950" />
                <span>Pilih Menu & Pesan</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={WARKOP_CONFIG.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-900/60 hover:bg-emerald-900/90 border border-emerald-600/40 text-emerald-100 font-semibold px-6 py-3.5 rounded-full transition-colors text-sm sm:text-base"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Petunjuk Maps</span>
              </a>
            </div>
          </div>

          {/* Right Card / Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md bg-gradient-to-b from-[#214334] to-[#142A20] rounded-3xl p-6 sm:p-7 border border-emerald-500/20 shadow-2xl space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-emerald-800/50">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white">Menu Favorit Hari Ini</h2>
                    <p className="text-xs text-emerald-300">Rekomendasi Warkop</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold bg-amber-400/20 text-amber-300 px-2.5 py-1 rounded-full border border-amber-400/30">
                  🔥 Best Seller
                </span>
              </div>

              {/* Mini Item List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-2xl bg-emerald-950/40 border border-emerald-800/40">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-900/40 flex items-center justify-center text-amber-300 text-sm font-bold">
                      ☕
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Kopi Susu Dingin / Hangat</p>
                      <p className="text-xs text-emerald-300/80">Racikan khas kopi warkop</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-amber-300">Rp 15k - 18k</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-emerald-950/40 border border-emerald-800/40">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-900/40 flex items-center justify-center text-amber-300 text-sm font-bold">
                      🍜
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Indomie Kuah & Goreng</p>
                      <p className="text-xs text-emerald-300/80">Single / Double + Telur</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-amber-300">Rp 17k - 20k</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-2xl bg-emerald-950/40 border border-emerald-800/40">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-900/40 flex items-center justify-center text-amber-300 text-sm font-bold">
                      🍌
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Pisang Goreng Sambel</p>
                      <p className="text-xs text-emerald-300/80">Khas Makassar legit gurih</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-amber-300">Rp 19.000</span>
                </div>
              </div>

              {/* Note */}
              <div className="pt-2 text-center text-xs text-emerald-300/80">
                ⚡ Pesan langsung dari meja (Dine In) atau takeaway via WhatsApp
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
