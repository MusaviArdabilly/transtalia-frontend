<template>
  <StaticNavbar :isOnLoginPage="true" />
  <div class="container mx-auto">
    <div class="flex items-center justify-center w-full h-dvh">
      <div class="w-full max-w-96 space-y-8">
        <h1 class="text-4xl font-bold">Buat Akun</h1>
        <div class="space-y-4">
          <div>
            <h2 class="text-lg text-slate-500">Nama</h2>
            <input type="text" class="w-full rounded border border-slate-300 px-4 py-1">
          </div>
          <div>
            <h2 class="text-lg text-slate-500">Email</h2>
            <input type="email" class="w-full rounded border border-slate-300 px-4 py-1">
          </div>
          <div>
            <h2 class="text-lg text-slate-500">No HP</h2>
            <input type="phone" class="w-full rounded border border-slate-300 px-4 py-1">
          </div>
          <div>
            <h2 class="text-lg text-slate-500">Password</h2>
            <input type="password" class="w-full rounded border border-slate-300 px-4 py-1">
          </div>
        </div>
        <button class="w-full rounded bg-blue-500 text-white font-semibold px-4 py-2 hover:bg-blue-600">Daftar</button>
        <hr>
        <div>
          <h3 class="text-slate-500 text-center">Sudah punya akun? 
            <router-link to="/masuk" class="text-blue-500">login sekarang!</router-link>
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