<template>
  <header class="fixed top-0 w-full bg-white shadow z-10 p-5 md:p-0">
    <div class="max-w-6xl flex h-14 justify-between items-center mx-auto">
      <RouterLink to="/">
        <div class="flex items-center space-x-2 drop-shadow brightness-150 cursor-pointer hover:scale-110 transition duration-200 ease-in-out">
          <img src="../assets/logo/Logo.png" alt="" class="h-8">
          <img src="../assets/logo/TextLogo.png" alt="" class="h-6">
        </div>
      </RouterLink>
      <div class="flex items-center space-x-10">
        <RouterLink to="/jadwal">
          <div :class="{ 'border-b border-black': isOnSchedulePage }" class="font-semibold text-black cursor-pointer hover:scale-110 hover:border-b hover:border-black transition duration-200 ease-in-out">Jadwal</div>
        </RouterLink>
        <RouterLink to="/masuk">
          <div :class="{ 'border-b border-black': isOnLoginPage }" class="font-semibold text-black cursor-pointer hover:scale-110 hover:border-b hover:border-black transition duration-200 ease-in-out">Login</div>
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    isOnSchedulePage: Boolean,
    isOnLoginPage: Boolean
  }
}
</script>