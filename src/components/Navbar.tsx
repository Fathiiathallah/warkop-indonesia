"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ShoppingBag, Clock, MapPin, Menu, X, PhoneCall } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { WARKOP_CONFIG } from "@/lib/config";

export default function Navbar() {
  const { totalItems, setIsOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1B382B]/95 backdrop-blur-md shadow-md py-3 text-white"
          : "bg-[#1B382B] text-white py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-10 w-28 sm:h-11 sm:w-32 bg-white/95 rounded-lg p-1.5 flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
            <Image
              src="/logo.png"
              alt="Logo Warkop Indonesia"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-emerald-100">
          <Link href="/#tentang" className="hover:text-amber-300 transition-colors">
            Tentang Warkop
          </Link>
          <Link href="/#fasilitas" className="hover:text-amber-300 transition-colors">
            Fasilitas
          </Link>
          <Link href="/menu" className="hover:text-amber-300 transition-colors">
            Daftar Menu
          </Link>
          <Link href="/#lokasi" className="hover:text-amber-300 transition-colors">
            Lokasi & Jam Buka
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Cart Trigger */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative flex items-center gap-2 bg-[#8C5D39] hover:bg-[#724a2c] text-white px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-md active:scale-95"
            aria-label="Lihat Keranjang Pesanan"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Pesanan</span>
            {totalItems > 0 && (
              <span className="inline-flex items-center justify-center w-5 h-5 bg-amber-400 text-stone-900 text-xs font-extrabold rounded-full animate-pulse">
                {totalItems}
              </span>
            )}
          </button>

          {/* Quick WA */}
          <a
            href={`https://wa.me/${WARKOP_CONFIG.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 border border-emerald-500/50 hover:bg-emerald-800/40 px-3.5 py-2 rounded-full text-xs font-medium text-emerald-200 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>WA Kami</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-emerald-200 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#152C22] border-t border-emerald-900/60 px-4 py-5 space-y-3">
          <div className="flex items-center gap-2 text-xs text-emerald-300 pb-2 border-b border-emerald-900/40">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Buka Setiap Hari: 08.00 - 24.00 WITA</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-emerald-300 pb-3 border-b border-emerald-900/40">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Panakkukang, Makassar</span>
          </div>
          <Link
            href="/#tentang"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-emerald-100 hover:text-amber-300 py-1"
          >
            ☕ Tentang Warkop
          </Link>
          <Link
            href="/#fasilitas"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-emerald-100 hover:text-amber-300 py-1"
          >
            ⚡ Fasilitas Nongkrong
          </Link>
          <Link
            href="/menu"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-emerald-100 hover:text-amber-300 py-1"
          >
            📋 Lihat Semua Menu
          </Link>
          <Link
            href="/#lokasi"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-emerald-100 hover:text-amber-300 py-1"
          >
            📍 Lokasi & Google Maps
          </Link>
        </div>
      )}
    </header>
  );
}
