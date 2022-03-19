class Cart {
  #cart;

  constructor() {
    this.#cart = new Map();
  }

  tambahProduk(kodeProduk, kuantitas) {
    if (!kodeProduk || !kuantitas) throw new Error('Error tambah produk');

    if (this.#cart.has(kodeProduk)) {
      let newQty = this.#cart.get(kodeProduk) + kuantitas;
      this.#cart.set(kodeProduk, newQty);
    } else {
      this.#cart.set(kodeProduk, kuantitas);
    }
  }

  hapusProduk(kodeProduk) {
    if (!kodeProduk) throw new Error('Error hapus produk');
    this.#cart.delete(kodeProduk);
  }

  tampilkanCart() {
    for (const [key, value] of this.#cart.entries()) {
      console.log(`${key} (${value})`);
    }
  }

  hitungProdukDalamCart(kodeProduk) {
    return this.#cart.get(kodeProduk) || 0;
  }
}

module.exports = Cart;
