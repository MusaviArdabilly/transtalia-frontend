<template>
  <header id="navbar" :class="{ 'bg-gray-900/75': isScrolled }" class="fixed w-full z-10 p-5 md:p-0">
    <div class="max-w-6xl flex h-14 justify-between items-center mx-auto">
      <RouterLink to="/">
        <div class="flex items-center space-x-2 drop-shadow brightness-150 cursor-pointer hover:scale-110 transition duration-200 ease-in-out">
          <img src="../assets/logo/Logo.png" alt="" class="h-8">
          <img src="../assets/logo/TextLogo.png" alt="" class="h-6">
        </div>
      </RouterLink>
      <div class="flex items-center space-x-10">
        <RouterLink to="/jadwal">
          <div class="font-semibold text-white cursor-pointer hover:scale-110 hover:border-b transition duration-200 ease-in-out">Jadwal</div>
        </RouterLink>
        <RouterLink to="/login">
          <div class="font-semibold text-white cursor-pointer hover:scale-110 hover:border-b transition duration-200 ease-in-out">Login</div>
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
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
}
</script>