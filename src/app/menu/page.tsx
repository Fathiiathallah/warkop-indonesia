"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShoppingBag, Plus, Check } from "lucide-react";
import { CartProvider, useCart } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";
import Footer from "@/components/Footer";
import { MENU_SERIES_DATA, SeriesItem } from "@/data/seriesCatalog";

function MenuContent() {
  const { addToCart, setIsOpen, totalItems } = useCart();
  const [activePages, setActivePages] = useState<Record<string, number>>({
    "kopi-warkop": 0,
    "non-kopi": 0,
    makanan: 0,
    "snack-kue": 0,
    beans: 0,
  });

  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const handleAdd = (item: SeriesItem) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      category: item.category,
      available: true,
      description: item.subtitle,
    });

    setAddedIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  const setPage = (seriesId: string, pageIndex: number) => {
    setActivePages((prev) => ({ ...prev, [seriesId]: pageIndex }));
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-900 flex flex-col font-sans">
      {/* Top Floating / Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-stone-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B382B] hover:text-emerald-700 transition-colors group"
          >
            <div className="w-8 h-8 rounded-full bg-stone-200/70 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
              <ArrowLeft className="w-4 h-4 text-[#1B382B]" />
            </div>
            <span>Kembali ke Beranda</span>
          </Link>

          <Link href="/" className="relative h-9 w-28 block">
            <Image
              src="/logo.png"
              alt="Logo Warkop Indonesia"
              fill
              className="object-contain"
              priority
            />
          </Link>

          <button
            onClick={() => setIsOpen(true)}
            className="relative flex items-center gap-2 bg-[#1B382B] hover:bg-[#142A20] text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-md active:scale-95"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Pesanan</span>
            {totalItems > 0 && (
              <span className="inline-flex items-center justify-center w-5 h-5 bg-amber-400 text-stone-950 text-xs font-black rounded-full animate-pulse">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Main Content - Clean & Minimalist Series Grid */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-10 md:py-16 space-y-16">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B382B] tracking-tight">
            Katalog Lengkap Warkop Indonesia
          </h1>
          <p className="text-sm text-stone-600">
            Pilih menu favoritmu, tambahkan ke pesanan, dan kirim langsung via WhatsApp kasir.
          </p>
        </div>

        {MENU_SERIES_DATA.map((series) => {
          const currentPage = activePages[series.id] ?? 0;
          const currentItems = series.pages[currentPage] || series.pages[0];

          return (
            <section key={series.id} className="space-y-6">
              {/* Category Header */}
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B382B] tracking-tight">
                  {series.title}
                </h2>
              </div>

              {/* 3-Card Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7">
                {currentItems.map((item) => {
                  const isJustAdded = addedIds[item.id];
                  return (
                    <div
                      key={item.id}
                      className="bg-white rounded-3xl p-4 sm:p-5 border border-stone-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                    >
                      {/* Image Container */}
                      <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-stone-100 shadow-inner">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>

                      {/* Info & Details */}
                      <div className="pt-4 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-extrabold text-base sm:text-lg text-stone-900 leading-snug">
                            {item.name}
                          </h3>
                          <p className="text-xs text-stone-500 font-medium mt-1 line-clamp-2">
                            {item.subtitle}
                          </p>
                        </div>

                        <div className="mt-4 flex items-center justify-between pt-3 border-t border-stone-100">
                          <span className="font-extrabold text-sm sm:text-base text-[#1B382B]">
                            {item.formattedPrice}
                          </span>

                          <button
                            onClick={() => handleAdd(item)}
                            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all active:scale-95 shadow-xs ${
                              isJustAdded
                                ? "bg-emerald-600 text-white"
                                : "bg-[#1B382B] hover:bg-[#142A20] text-white"
                            }`}
                          >
                            {isJustAdded ? (
                              <>
                                <Check className="w-3.5 h-3.5" />
                                <span>Ditambah</span>
                              </>
                            ) : (
                              <>
                                <Plus className="w-3.5 h-3.5" />
                                <span>+ Pesan</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Pagination Dots (only show if series has > 1 page) */}
              {series.pages.length > 1 && (
                <div className="flex items-center justify-center gap-2 pt-2">
                  {series.pages.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setPage(series.id, idx)}
                      aria-label={`${series.title} Halaman ${idx + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        currentPage === idx
                          ? "bg-[#1B382B] w-6"
                          : "bg-stone-300 hover:bg-stone-400 w-2.5"
                      }`}
                    />
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}

export default function MenuPage() {
  return (
    <CartProvider>
      <MenuContent />
    </CartProvider>
  );
}
