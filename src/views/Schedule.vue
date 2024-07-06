<template>
  <StaticNavbar :isOnSchedulePage="true"/>
  <div class="container mx-auto mt-14 py-4">
    <h1 class="text-center text-3xl font-bold">Jadwal Bus</h1>
    <FullCalendar :options="calendarOptions"/>
  </div>
</template>

<script>
import StaticNavbar from '@/components/StaticNavbar.vue'

import FullCalendar from '@fullcalendar/vue3'
import multiMonthPlugin from '@fullcalendar/multimonth'

export default {
  components: {
    StaticNavbar, FullCalendar
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