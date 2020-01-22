<template lang="html">
  <div class="booking">
    <p>{{booking.guest_name}} {{booking.email_address}} {{booking.checkin_status}} <button v-on:click="handleDelete()">Delete Booking</button> </p>
  </div>
</template>

<script>
import {eventBus} from '../main.js'
import BookingService from '../services/BookingService.js'

export default {
  name: "booking",
  props: ['booking'],
  methods: {
    handleDelete(){
      const id = this.booking._id
      BookingService.deleteBooking(id)
      .then(response => eventBus.$emit('booking-deleted', id))
    }
  }
}
</script>

<style lang="css" scoped>
.booking{

}
</style>
