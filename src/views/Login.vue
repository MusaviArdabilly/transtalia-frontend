<template>
  <StaticNavbar :isOnLoginPage="true" />
  <div class="container mx-auto">
    <div class="flex items-center justify-center w-full h-dvh">
      <div class="w-full max-w-96 space-y-8">
        <div class="flex items-center justify-center space-x-2 drop-shadow brightness-150 cursor-pointer hover:scale-110 transition duration-200 ease-in-out">
          <img src="../assets/logo/Logo.png" alt="" class="h-12">
          <img src="../assets/logo/TextLogo.png" alt="" class="h-10">
        </div>
        <div class="space-y-4">
          <div>
            <h2 class="text-lg text-slate-500">Email</h2>
            <input type="email" class="w-full rounded border border-slate-300 px-4 py-1">
          </div>
          <div>
            <h2 class="text-lg text-slate-500">Password</h2>
            <input type="password" class="w-full rounded border border-slate-300 px-4 py-1">
          </div>
        </div>
        <button class="w-full rounded bg-blue-500 text-white font-semibold px-4 py-2 hover:bg-blue-600">Masuk</button>
        <hr>
        <div>
          <h3 class="text-slate-500 text-center">Belum punya akun? 
            <router-link to="/daftar" class="text-blue-500">daftar sekarang!</router-link>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StaticNavbar from '@/components/StaticNavbar.vue';

export default {
  components: {
    StaticNavbar
  }
}
</script>