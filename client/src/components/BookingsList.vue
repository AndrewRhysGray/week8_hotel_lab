<template lang="html">
  <div class="bookings-list-container">
    <ul>
      <booking v-for="booking in bookings" :booking="booking"/>
    </ul>
  </div>

</template>

<script>
import Booking from './Booking'
import BookingService from '../services/BookingService.js'
import {eventBus} from '../main.js'

export default {
  name: "bookings-list",
  data () {
    return {
      bookings: []
    }
  },
  components: {
    'booking': Booking
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData(){
      BookingService.getBookings()
        .then(bookings => this.bookings = bookings)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
