import Image from "next/image";
import Link from "next/link";
import { MessageCircle, MapPin, Clock, ArrowUp } from "lucide-react";
import { WARKOP_CONFIG } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-[#12281E] text-stone-300 pt-16 pb-12 border-t border-emerald-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/40">
          {/* Col 1 Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="relative h-12 w-36 bg-white rounded-lg p-2 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Warkop Indonesia Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm text-emerald-200/80 leading-relaxed max-w-sm">
              Warkop Indonesia menghadirkan racikan kopi otentik, makanan khas, dan ruang nongkrong ramah bagi mahasiswa, pekerja kreatif, dan masyarakat Makassar.
            </p>
          </div>

          {/* Col 2 Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-200/70">
              <li>
                <a href="#menu" className="hover:text-amber-300 transition-colors">
                  Daftar Menu & Pesan
                </a>
              </li>
              <li>
                <a href="#tentang" className="hover:text-amber-300 transition-colors">
                  Tentang Warkop
                </a>
              </li>
              <li>
                <a href="#fasilitas" className="hover:text-amber-300 transition-colors">
                  Fasilitas Tempat
                </a>
              </li>
              <li>
                <a href="#lokasi" className="hover:text-amber-300 transition-colors">
                  Peta Lokasi & Jam Buka
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Hubungi Kami
            </h4>
            <div className="space-y-2.5 text-xs text-emerald-200/80">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{WARKOP_CONFIG.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{WARKOP_CONFIG.hours}</span>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`https://wa.me/${WARKOP_CONFIG.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-300 hover:underline font-semibold"
                >
                  WhatsApp: +{WARKOP_CONFIG.phone}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-300/60">
          <p>© 2026 Warkop Indonesia. Hak Cipta Dilindungi.</p>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 hover:text-amber-300 transition-colors font-medium"
          >
            <span>Kembali ke atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
