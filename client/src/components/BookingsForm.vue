<template lang="html">
  <form id="bookings-form" v-on:submit="handleFormSubmit">
    <h3>Add a booking:</h3>

    <label for="full-name">Full Name: </label>
    <input type="text" id="full-name" v-model="guest_name">

    <label for="email">Email: </label>
    <input type="email" id="email" v-model="email_address">

    <label for="booked-in">Booking Status: </label>
    <select id="booked-in" v-model='checkin_status'>
      <option value="true">Currently Booked</option>
      <option value="false">Not Currently Booked</option>
    </select>

    <input type="submit" id="save" value="Save">
  </form>
</template>

<script>
import {eventBus} from '../main.js'
import BookingService from '../services/BookingService.js'
export default {
  name: "bookings-form",
  data(){
    return {
      guest_name: '',
      email_address: '',
      checkin_status: ''
    }
  },
  methods: {
    handleFormSubmit(e){
      e.preventDefault()
      const payload = {
        guest_name: this.guest_name,
        email_address: this.email_address,
        checkin_status: this.checkin_status
      }
      BookingService.postBooking(payload)
      .then(res => eventBus.$emit('booking-added', res))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
