"use client";

import { useState, useEffect } from "react";
import {
  MapPin,
  Clock,
  Phone,
  Navigation,
  ArrowUpRight,
  Users,
  Flame,
  CheckCircle2,
  Coffee,
} from "lucide-react";
import { WARKOP_CONFIG } from "@/lib/config";

// Data jam operasional dan tingkat kepadatan warkop
const BUSY_HOURS_DATA = [
  {
    range: "08.00 - 12.00",
    label: "Pagi Santai",
    level: "Santai (Luang)",
    percent: 30,
    color: "bg-emerald-500",
    textColor: "text-emerald-700",
    badgeBg: "bg-emerald-100",
    desc: "Suasana tenang, ideal untuk kerja fokus, nugas, atau ngopi pagi santai.",
    startHour: 8,
    endHour: 12,
  },
  {
    range: "12.00 - 15.00",
    label: "Siang Warkop",
    level: "Cukup Ramai",
    percent: 60,
    color: "bg-amber-500",
    textColor: "text-amber-800",
    badgeBg: "bg-amber-100",
    desc: "Waktu makan siang & santai sejenak ditemani indomie dan es kopi susu.",
    startHour: 12,
    endHour: 15,
  },
  {
    range: "15.00 - 18.00",
    label: "Sore Produktif",
    level: "Mulai Ramai",
    percent: 75,
    color: "bg-amber-600",
    textColor: "text-amber-900",
    badgeBg: "bg-amber-200",
    desc: "Mulai ramai pengunjung meeting santai, kerja kelompok, & obrolan sore.",
    startHour: 15,
    endHour: 18,
  },
  {
    range: "18.00 - 22.00",
    label: "Malam Prime Time",
    level: "Paling Ramai (Peak)",
    percent: 95,
    color: "bg-rose-500",
    textColor: "text-rose-800",
    badgeBg: "bg-rose-100",
    desc: "Puncak keramaian warkop. Suasana seru kumpul komunitas & nongkrong malam.",
    startHour: 18,
    endHour: 22,
  },
  {
    range: "22.00 - 24.00",
    label: "Larut Malam",
    level: "Santai Kembali",
    percent: 45,
    color: "bg-emerald-500",
    textColor: "text-emerald-700",
    badgeBg: "bg-emerald-100",
    desc: "Suasana berangsur tenang menuju jam tutup, pas untuk obrolan malam mendalam.",
    startHour: 22,
    endHour: 24,
  },
];

export default function LocationSection() {
  const [currentSlotIndex, setCurrentSlotIndex] = useState<number | null>(null);

  useEffect(() => {
    // Estimasi jam saat ini di zona waktu WITA (Makassar UTC+8)
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const witaDate = new Date(utc + 3600000 * 8);
    const hour = witaDate.getHours();

    const idx = BUSY_HOURS_DATA.findIndex(
      (slot) => hour >= slot.startHour && hour < slot.endHour
    );
    setCurrentSlotIndex(idx !== -1 ? idx : null);
  }, []);

  return (
    <section id="lokasi" className="py-16 md:py-24 bg-[#FAF7F2] text-stone-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Main Location & Maps Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Info Card */}
          <div className="lg:col-span-5 bg-[#1B382B] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl space-y-6">
            <div className="space-y-6">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-300 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-700/50">
                Kunjungi Kami
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight text-white">
                Lokasi & Jam Operasional
              </h2>

              <div className="space-y-4 pt-2">
                {/* Alamat */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-900/80 text-amber-300 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-emerald-300 font-semibold uppercase tracking-wider">
                      Alamat Lengkap
                    </p>
                    <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                      {WARKOP_CONFIG.address}
                    </p>
                  </div>
                </div>

                {/* Jam */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-900/80 text-amber-300 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-emerald-300 font-semibold uppercase tracking-wider">
                      Jam Operasional
                    </p>
                    <p className="text-xs sm:text-sm text-emerald-100 font-bold">
                      {WARKOP_CONFIG.hours}
                    </p>
                    <p className="text-[11px] text-emerald-300">
                      Buka setiap hari termasuk hari libur nasional
                    </p>
                  </div>
                </div>

                {/* Kontak WA */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-900/80 text-amber-300 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-emerald-300 font-semibold uppercase tracking-wider">
                      Kontak WhatsApp
                    </p>
                    <a
                      href={`https://wa.me/${WARKOP_CONFIG.phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-amber-300 hover:text-amber-200 font-bold inline-flex items-center gap-1"
                    >
                      <span>+{WARKOP_CONFIG.phone} ({WARKOP_CONFIG.phoneDisplay})</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Maps Button */}
            <div className="pt-4">
              <a
                href={WARKOP_CONFIG.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold py-3.5 px-6 rounded-2xl shadow-lg transition-transform active:scale-98 text-sm"
              >
                <Navigation className="w-4 h-4 text-stone-950" />
                <span>Buka Petunjuk di Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right Google Maps Embed */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-3 sm:p-4 border border-stone-200 shadow-md flex flex-col min-h-[380px]">
            <div className="w-full h-full min-h-[360px] rounded-2xl overflow-hidden relative border border-stone-200/80">
              <iframe
                title="Peta Lokasi Warkop Indonesia"
                src="https://maps.google.com/maps?q=Jl.+Anggrek+Raya+No.23,+Paropo,+Kec.+Panakkukang,+Kota+Makassar,+Sulawesi+Selatan+90231&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full absolute inset-0"
              />
            </div>
          </div>
        </div>

        {/* Indikator Jam Ramai & Kepadatan Warkop (Busy Hours) */}
        <div className="bg-white rounded-3xl border border-stone-200/90 shadow-md p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1B382B]">
                <Users className="w-4 h-4 text-[#8C5D39]" />
                <span>Panduan Waktu Berkunjung</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#1B382B]">
                Indikator Jam Ramai & Ketersediaan Tempat
              </h3>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="font-semibold text-stone-500">Estimasi Kepadatan:</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Live WITA (Makassar)
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-stone-600">
            Gunakan jadwal kepadatan di bawah ini untuk memilih waktu terbaik saat ingin nugas fokus, meeting santai, atau nongkrong seru bareng teman.
          </p>

          {/* Time Slot Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {BUSY_HOURS_DATA.map((slot, idx) => {
              const isCurrent = currentSlotIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl p-4 transition-all duration-200 border flex flex-col justify-between space-y-3 ${
                    isCurrent
                      ? "bg-emerald-50/70 border-emerald-500 ring-2 ring-emerald-500/20 shadow-sm"
                      : "bg-[#FAF7F2] border-stone-200/80 hover:border-stone-300"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-stone-900">
                        {slot.range}
                      </span>
                      {isCurrent && (
                        <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-emerald-600 text-white uppercase">
                          Saat Ini
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm font-bold text-[#1B382B]">
                      {slot.label}
                    </h4>

                    {/* Progress / Capacity Bar */}
                    <div className="space-y-1">
                      <div className="h-2 w-full bg-stone-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${slot.color} rounded-full transition-all duration-500`}
                          style={{ width: `${slot.percent}%` }}
                        />
                      </div>
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-stone-500">Kepadatan:</span>
                        <span className={`font-bold ${slot.textColor}`}>
                          {slot.level}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] text-stone-600 leading-snug pt-2 border-t border-stone-200/50">
                    {slot.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Tips Box */}
          <div className="rounded-2xl bg-[#FAF7F2] border border-stone-200/80 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                <Coffee className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-xs sm:text-sm font-bold text-[#1B382B]">
                  Tips Mendapatkan Meja & Colokan Terbaik
                </h4>
                <p className="text-xs text-stone-600">
                  Untuk nugas tenang dan leluasa memilih posisi colokan, kami sarankan berkunjung antara pukul <strong>08.00 - 15.00</strong>.
                </p>
              </div>
            </div>

            <a
              href={`https://wa.me/${WARKOP_CONFIG.phone}?text=Halo%20Warkop%20Indonesia,%20apakah%20saat%20ini%20masih%20ada%20meja%20kosong?`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1B382B] hover:bg-[#142A20] text-white text-xs font-bold transition-all shadow-sm active:scale-95"
            >
              <span>Tanya Barista via WA</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
