<template>
  <header class="sticky top-0 w-full bg-white shadow z-10 p-5 md:p-0">
    <div class="max-w-6xl flex h-14 justify-between items-center mx-auto">
      <RouterLink to="/">
        <div class="flex items-center space-x-2 drop-shadow brightness-150 cursor-pointer hover:scale-110 transition duration-200 ease-in-out">
          <img src="../assets/logo/Logo.png" alt="" class="h-8">
          <img src="../assets/logo/TextLogo.png" alt="" class="h-6">
        </div>
      </RouterLink>
      <div class="flex items-center space-x-10">
        <RouterLink to="/jadwal">
          <div class="font-semibold text-black cursor-pointer hover:scale-110 hover:border-b hover:border-slate-500 transition duration-200 ease-in-out">Jadwal</div>
        </RouterLink>
        <RouterLink to="/login">
          <div class="font-semibold text-black cursor-pointer hover:scale-110 hover:border-b hover:border-slate-500 transition duration-200 ease-in-out">Login</div>
        </RouterLink>
      </div>
    </div>
  </header>
  <div class="container mx-auto py-4">
    <h1 class="text-center text-2xl font-bold">Jadwal Bus</h1>
    <FullCalendar :options="calendarOptions"/>
  </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import multiMonthPlugin from '@fullcalendar/multimonth'

export default {
  components: {
    FullCalendar
  },
  data() {
    return {
      maxGridColumn: 3,
      calendarOptions: {
        locale: 'id',
        multiMonthMaxColumns: this.maxGridColumn,
        height: 'auto',
        headerToolbar: {
          left: 'title',
          center: '',
          right: 'maxGrid1 maxGrid2 maxGrid3 prev,next'
        },
        customButtons: {
          maxGrid1: {
            text: '1x12',
            click: () => this.setMaxGrid(1)
          },
          maxGrid2: {
            text: '2x6',
            click: () => this.setMaxGrid(2)
          },
          maxGrid3: {
            text: '3x4',
            click: () => this.setMaxGrid(3)
          }
        },
        plugins: [ multiMonthPlugin ],
        events: [
        { title: 'Eagle - Bandung, Jawa Barat', date: '2024-07-01' },
        { title: 'Eagle - Bandung, Jawa Barat', date: '2024-07-01' },
        { title: 'Eagle - Bandung, Jawa Barat', date: '2024-07-01' },
          { title: 'event 2', date: '2024-07-02' }
        ]
      }
    }
  },
  methods: {
    setMaxGrid(value) {
      this.maxGridColumn = value;
      this.updateCalendarOptions()
    },
    updateCalendarOptions() {
      this.calendarOptions = {
        ...this.calendarOptions,
        multiMonthMaxColumns: this.maxGridColumn
      }
    }
  },
  created() {
    this.updateCalendarOptions()
  }
}
</script>