<template>
  <div :class="{ 'sidebar-expanded': isSidebarExpanded }" class="bg-zinc-500">
    <aside class="fixed h-dvh bg-zinc-600 font-semibold p-4">
      <nav class="h-full">
        <ul class="flex flex-col h-full gap-1">
          <li>
            <a href="" :class="{ 'bg-slate-500 text-white': $route.path === '/admin/dashboard' }" class="flex items-center gap-4 rounded-md px-3 py-2">
              <box-icon name="bar-chart-alt-2" size="24px" />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="" :class="{ 'bg-slate-500 text-white': $route.path === '/admin/users' }" class="flex items-center gap-4 rounded-md px-3 py-1">
              <div class="flex items-center py-2">
                <box-icon name="user" size="24px" />
              </div>
              <span>User</span>
            </a>
          </li>
          <li @click="toggleSidebar" class="w-full mt-auto cursor-pointer">
            <div class="flex items-center justify-center rounded-md px-3 py-1">
              <box-icon name="chevrons-right" />
            </div>
          </li>
        </ul>
      </nav>
    </aside>
    <main class="h-dvh px-8 py-4">
      <RouterView />
    </main>
  </div>
</template>

<style>
body {
  --sb-width: 5rem;
  --sb-no-delay: 0s;
}
aside {
  width: var(--sb-width);
  transition: width 0.5s ease-in-out;
}
.sidebar-expanded {
  --sb-width: 12rem;
}
nav a span {
  overflow: hidden;
}
.sidebar-expanded aside .bxs-chevrons-right {
  rotate: 180deg;
}
main {
  margin-left: var(--sb-width);
  transition: margin-left 0.5s ease-in-out;
}
.text-white box-icon {
  fill: #fff
}
</style>

<script>
import 'boxicons';

export default {
  data() {
    return {
      isSidebarExpanded: false,
    };
  },
  methods: {
    toggleSidebar(e) {
      e.preventDefault();
      this.isSidebarExpanded = !this.isSidebarExpanded;
    },
  },
};
</script>