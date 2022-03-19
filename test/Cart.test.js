const assert = require('assert');
const Cart = require('../lib/Cart.js');

describe('Cart.js unit test', () => {
  let keranjang;

  beforeEach(() => {
    keranjang = new Cart();
  });

  describe('hitungProdukDalamCart function', () => {
    it('Should be able to count accordingly', () => {
      keranjang.tambahProduk('Jeruk', 1);
      keranjang.tambahProduk('Jeruk', 1);
      keranjang.tambahProduk('Jeruk', 1);
      assert.equal(keranjang.hitungProdukDalamCart('Jeruk'), 3);
    });

    it('Should return 0 when the key is removed', () => {
      keranjang.tambahProduk('Durian', 1);
      keranjang.tambahProduk('Durian', 1);
      keranjang.hapusProduk('Durian');
      assert.equal(keranjang.hitungProdukDalamCart('Durian'), 0);
    });
  });

  describe('tambahProduk function', () => {
    it('Should add the product accordingly', () => {
      keranjang.tambahProduk('Apel Merah', 1);
      keranjang.tambahProduk('Apel Merah', 4);
      assert.equal(keranjang.hitungProdukDalamCart('Apel Merah'), 5);
    });

    it('Should failed when add product without args', () => {
      assert.throws(() => {
        keranjang.tambahProduk();
      }, new Error('Error tambah produk'));
    });

    it('Should failed to add product when the first arg is missing', () => {
      assert.throws(() => {
        keranjang.tambahProduk('', 10);
      }, new Error('Error tambah produk'));
    });

    it('Should failed to add product when the second arg is missing', () => {
      assert.throws(() => {
        keranjang.tambahProduk('Test', '');
      }, new Error('Error tambah produk'));
    });

    it('Should failed to add product when the args are missing', () => {
      assert.throws(() => {
        keranjang.tambahProduk('', '');
      }, new Error('Error tambah produk'));
    });
  });

  describe('hapusProduk function', () => {
    it('Should success to remove the product', () => {
      keranjang.tambahProduk('Semangka', 1);
      keranjang.hapusProduk('Semangka');
      assert.equal(keranjang.hitungProdukDalamCart('Semangka'), 0);
    });

    it('Should failed to remove the product when the arg is empty', () => {
      assert.throws(() => {
        keranjang.hapusProduk();
      }, new Error('Error hapus produk'));
    });
  });

  describe('tampilkanCart function', () => {
    it('Should success to display the cart', () => {
      assert.doesNotThrow(() => {
        keranjang.tambahProduk('Semangka', 1);
        keranjang.tambahProduk('Belimbing', 2);
        keranjang.tampilkanCart();
      });
    });
  });

  describe('all functions - Sample Test Scenario', () => {
    it('Should success to display as sample scenario', () => {
      assert.doesNotThrow(() => {
        try {
          keranjang.tambahProduk('Pisang Hijau', 2);
          keranjang.tambahProduk('Semangka Kuning', 3);

          keranjang.tambahProduk('Apel Merah', 1);
          keranjang.tambahProduk('Apel Merah', 4);
          keranjang.tambahProduk('Apel Merah', 2);

          keranjang.hapusProduk('Semangka Kuning');

          keranjang.hapusProduk('Semangka Merah');

          keranjang.tampilkanCart();
        } catch (error) {
          throw new Error('Unhandled error rejection');
        }
      }, Error('Unhandled error rejection'));
    });
  });
});
