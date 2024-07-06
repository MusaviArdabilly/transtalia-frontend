<template>
  <header id="navbar" :class="{ 'bg-gray-900/75': isScrolled }" class="fixed w-full z-10 p-5 md:p-0">
    <div class="max-w-6xl flex h-14 justify-between items-center mx-auto">
      <div class="flex items-center space-x-2 drop-shadow brightness-150 cursor-pointer hover:scale-110 transition duration-200 ease-in-out">
        <img src="../assets/logo/Logo.png" alt="" class="h-8">
        <img src="../assets/logo/TextLogo.png" alt="" class="h-6">
      </div>
      <div class="flex items-center space-x-10">
        <div class="font-semibold text-white cursor-pointer hover:scale-110 hover:border-b transition duration-200 ease-in-out">Jadwal</div>
        <div class="font-semibold text-white cursor-pointer hover:scale-110 hover:border-b transition duration-200 ease-in-out">Login</div>
      </div>
    </div>
  </header>
  <section class="relative w-full h-screen">
    <img src="../assets/images/hero.jpg" alt="Hero Images" class="absolute object-cover w-full h-screen brightness-50 z-0">
    <div class="w-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-center space-y-5 px-5 md:px-0">
      <h1 class="font-bold text-5xl text-white">Trans Talia</h1>
      <h5 class="font-semibold text-lg md:text-xl text-white">Temukan pengalaman transportasi darat yang menarik bersama Trans Talia</h5>
      <button class="font-semibold border rounded-md text-white px-5 py-2 mt-5 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black transition duration-200 ease-in-out">
        <a href="/jadwal" class="">Cek Jadwal Sekarang!</a>
      </button>
    </div>
  </section>
  <section class="max-w-6xl mx-auto p-5 md:px-0 md:pt-32 md:pb-16">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div class="grid grid-rows-2">
        <div class="grid grid-cols-3 place-items-center gap-5">
          <div class="text-center">
            <box-icon name="calendar" size="lg" class="mb-5"></box-icon>
            <div>
              <h1 class="font-medium">Pengalaman (Tahun)</h1>
              <h1 class="font-bold">8</h1>
            </div>
          </div>
          <div class="text-center">
            <box-icon name="smile" size="lg" class="mb-5"></box-icon>
            <div>
              <h1 class="font-medium">Pelanggan Terupaskan</h1>
              <h1 class="font-bold">1534+</h1>
            </div>
          </div>
          <div class="text-center">
            <box-icon name="globe" size="lg" class="mb-5"></box-icon>
            <div>
              <h1 class="font-medium">Jangkauan Destinasi</h1>
              <h1 class="font-bold">Jawa - Bali</h1>
            </div>
          </div>
        </div>
        <h2>
          Sejak didirikan pada tahun 2008, kami telah menjadi simbol keunggulan dalam industri ini. 
          Apa yang dimulai dengan satu bus berukuran medium kini berkembang menjadi armada 12 kendaraan yang dipelihara dengan cermat. 
          Armada kami terdiri dari bus besar yang luas dan bus medium yang lincah, menjamin kenyamanan dan kemudahan dalam setiap perjalanan. <br>
          Dengan bangga bermarkas di Mojoagung, Jombang, Jawa Timur, Trans Talia adalah mitra terpercaya Anda dalam pengalaman perjalanan yang aman 
          dan dapat diandalkan.
        </h2>
      </div>
      <div class="grid grid-cols-3 mt-2">
        <div class="relative h-64 rounded-lg shadow-md shadow-orange-500 border-2 border-orange-300 skew-y-[-5deg] overflow-hidden my-auto hover:skew-y-0 hover:h-96 hover:w-80 hover:left-0 hover:z-10 transition duration-200 ease-in-out">
          <img src="../assets/images/banners/jb5-1.jpg" alt="" class="absolute object-cover w-full h-[calc(100%+50px)] rounded skew-y-[5deg] mt-[-25px] hover:skew-y-0">
        </div>
        <div class="relative h-80 rounded-lg shadow-md shadow-orange-500 border-2 border-orange-300 skew-y-[-5deg] overflow-hidden my-auto hover:skew-y-0 hover:h-96 hover:w-80 hover:left-1/2 hover:translate-x-[-50%] hover:z-10 transition duration-200 ease-in-out">
          <img src="../assets/images/banners/jb5-2.jpg" alt="" class="absolute object-cover w-full h-[calc(100%+50px)] rounded skew-y-[5deg] mt-[-25px] hover:skew-y-0">
        </div>
        <div class="relative h-96 rounded-lg shadow-md shadow-orange-500 border-2 border-orange-300 skew-y-[-5deg] overflow-hidden my-auto hover:skew-y-0 hover:h-96 hover:w-80 hover:translate-x-[-25%] hover:z-10 transition duration-200 ease-in-out">
          <img src="../assets/images/banners/jb5-3.webp" alt="" class="absolute object-cover w-full h-[calc(100%+50px)] rounded skew-y-[5deg] mt-[-25px] hover:skew-y-0">
        </div>
      </div>
    </div>
  </section>
  <section class="max-w-6xl mx-auto space-y-10 p-5 md:px-0 md: py-16">
    <h1 class="text-center font-bold text-3xl">Kunjungi kami</h1>
    <div class="w-full h-80 md:h-[40rem] rounded-lg shadow-lg overflow-hidden">
      <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=100%&amp;hl=en&amp;q=transtalia%20bus%20garage+(My%20Business%20Name)&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    </div>
  </section>
  <section class="max-w-6xl mx-auto p-5 md:px-0 md:pt-16 md:pb-32">
    <a href="https://wa.me/082233994239" target="_blank">
      <div class="flex items-center rounded-lg shadow-lg border overflow-hidden cursor-pointer hover:bg-green-500">
        <img src="../assets/images/banners/mercyjb5.jpeg" alt="Mercy" class="h-32 md:h-64">
        <div class="w-full space-y-5">
          <h1 class="text-center font-bold text-3xl">Hubungi kami</h1>
          <div class="flex justify-center items-center space-x-3">
            <i class="fa-brands fa-whatsapp text-xl"></i>
            <h3>+62 82233994239</h3>
          </div>
        </div>
      </div>
    </a>
  </section>
</template>

<script>
import 'boxicons'
export default {
  data() {
    return {
      isScrolled: false,
      fixedPixelValue: '56px'
    };
  },
  mounted() {
    this.calculateOneVh();
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    calculateOneVh() {
      const pixelValue = parseInt(this.fixedPixelValue, 10);
      this.oneVh = window.innerHeight - pixelValue;
    },
    handleScroll() {
      if (window.scrollY > this.oneVh) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    }
  }
};
</script>