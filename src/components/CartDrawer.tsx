"use client";

import { useState } from "react";
import {
  X,
  Plus,
  Minus,
  Trash2,
  Send,
  ShoppingBag,
  Store,
  AlertCircle,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import {
  formatRupiah,
  generateWhatsAppOrderUrl,
  CheckoutPayload,
} from "@/lib/config";

export default function CartDrawer() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
    isOpen,
    setIsOpen,
  } = useCart();

  const [orderType, setOrderType] = useState<"dine-in" | "takeaway">("dine-in");
  const [customerName, setCustomerName] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [generalNotes, setGeneralNotes] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!customerName.trim()) {
      setErrorMsg("Harap masukkan nama pemesan.");
      return;
    }

    if (orderType === "dine-in" && !tableNumber.trim()) {
      setErrorMsg("Harap masukkan nomor meja kamu.");
      return;
    }

    const payload: CheckoutPayload = {
      orderType,
      customerName: customerName.trim(),
      tableNumber: tableNumber.trim(),
      pickupTime: pickupTime.trim(),
      generalNotes: generalNotes.trim(),
      items,
      totalPrice,
    };

    const url = generateWhatsAppOrderUrl(payload);
    window.open(url, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-4 sm:p-5 bg-[#1B382B] text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-emerald-900 rounded-xl text-amber-300">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-bold text-base sm:text-lg">Pesanan Saya</h2>
                <p className="text-xs text-emerald-200">
                  {totalItems} item dipilih
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-emerald-200 hover:text-white rounded-lg hover:bg-emerald-900/50 transition-colors"
              aria-label="Tutup Keranjang"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-stone-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-stone-800 text-base">
                  Keranjang masih kosong
                </h3>
                <p className="text-xs text-stone-500 max-w-xs">
                  Yuk jelajahi daftar menu dan pilih kopi, mie, atau camilan favoritmu!
                </p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-2 text-xs font-bold text-[#1B382B] bg-emerald-100 hover:bg-emerald-200 px-4 py-2 rounded-full transition-colors"
                >
                  Lihat Menu Sekarang
                </button>
              </div>
            ) : (
              <>
                {/* Items List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-stone-200 text-xs font-semibold text-stone-500 uppercase tracking-wider">
                    <span>Menu Terpilih</span>
                    <button
                      onClick={clearCart}
                      className="text-red-600 hover:text-red-700 font-medium flex items-center gap-1 normal-case text-xs"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      Kosongkan
                    </button>
                  </div>

                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-xl border border-stone-200 bg-[#FAF7F2] space-y-2"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="text-sm font-bold text-stone-900">
                            {item.name}
                          </h4>
                          <p className="text-xs font-semibold text-[#1B382B]">
                            {formatRupiah(item.price)}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-stone-400 hover:text-red-500 p-1"
                          aria-label="Hapus Item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center gap-2 bg-white rounded-lg p-0.5 border border-stone-200">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-6 h-6 flex items-center justify-center rounded text-stone-600 hover:bg-stone-100 text-xs font-bold"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-5 text-center text-xs font-bold text-stone-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-6 h-6 flex items-center justify-center rounded bg-[#8C5D39] text-white hover:bg-[#724a2c] text-xs font-bold"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="text-xs font-extrabold text-stone-800">
                          {formatRupiah(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Form Pesanan */}
                <form id="checkout-form" onSubmit={handleCheckout} className="space-y-4 pt-4 border-t border-stone-200">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                    Opsi Pemesanan
                  </h3>

                  {/* Order Type Selector */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setOrderType("dine-in")}
                      className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center justify-center gap-1.5 transition-all ${
                        orderType === "dine-in"
                          ? "border-[#1B382B] bg-[#1B382B] text-white shadow-sm"
                          : "border-stone-200 bg-white text-stone-700 hover:bg-stone-50"
                      }`}
                    >
                      <Store className="w-4 h-4" />
                      <span>Makan di Tempat</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setOrderType("takeaway")}
                      className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center justify-center gap-1.5 transition-all ${
                        orderType === "takeaway"
                          ? "border-[#1B382B] bg-[#1B382B] text-white shadow-sm"
                          : "border-stone-200 bg-white text-stone-700 hover:bg-stone-50"
                      }`}
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Bungkus / Take Away</span>
                    </button>
                  </div>

                  {/* Customer Name */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Nama Kamu / Pemesan *
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Contoh: Rian / Fathi"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#1B382B]"
                    />
                  </div>

                  {/* Conditional inputs */}
                  {orderType === "dine-in" ? (
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Nomor Meja *
                      </label>
                      <input
                        type="text"
                        required
                        value={tableNumber}
                        onChange={(e) => setTableNumber(e.target.value)}
                        placeholder="Contoh: 04 / Meja Depan"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#1B382B]"
                      />
                    </div>
                  ) : (
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1">
                        Perkiraan Jam Ambil (Opsional)
                      </label>
                      <input
                        type="text"
                        value={pickupTime}
                        onChange={(e) => setPickupTime(e.target.value)}
                        placeholder="Contoh: Sekitar 15 menit lagi / Jam 20.30"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#1B382B]"
                      />
                    </div>
                  )}

                  {/* General Notes */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Catatan Tambahan (Opsional)
                    </label>
                    <textarea
                      rows={2}
                      value={generalNotes}
                      onChange={(e) => setGeneralNotes(e.target.value)}
                      placeholder="Contoh: Es kopi jangan terlalu manis, mie pedas"
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#1B382B]"
                    />
                  </div>

                  {errorMsg && (
                    <div className="flex items-center gap-1.5 p-2.5 rounded-lg bg-red-50 text-red-700 text-xs font-semibold">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}
                </form>
              </>
            )}
          </div>

          {/* Footer Checkout */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 bg-stone-50 border-t border-stone-200 space-y-3">
              <div className="space-y-1 text-xs">
                <div className="flex items-center justify-between text-stone-500">
                  <span>Subtotal Pesanan</span>
                  <span>{formatRupiah(totalPrice)}</span>
                </div>
                <div className="flex items-center justify-between font-extrabold text-sm sm:text-base text-stone-900 pt-1 border-t border-stone-200/80">
                  <span>Total Pembayaran</span>
                  <span className="text-[#1B382B]">{formatRupiah(totalPrice)}</span>
                </div>
              </div>

              <button
                type="submit"
                form="checkout-form"
                className="w-full flex items-center justify-center gap-2 bg-[#1B382B] hover:bg-[#152C22] text-white font-bold py-3.5 rounded-xl shadow-lg transition-transform active:scale-98 text-sm"
              >
                <Send className="w-4 h-4 text-amber-400" />
                <span>Kirim Pesanan ke WhatsApp</span>
              </button>
              <p className="text-[11px] text-center text-stone-400">
                Format pesan terisi otomatis & terkirim ke kasir Warkop Indonesia
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
