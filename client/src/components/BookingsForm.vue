<template lang="html">
  <form id="bookings-form" v-on:submit="handleFormSubmit">
    <h3>Add a booking:</h3>

    <label for="full-name">Full Name: </label>
    <input type="text" id="full-name" >

    <label for="email">Email: </label>
    <input type="email" id="email" >

    <label for="booked-in">Booking Status: </label>
    <select id="booked-in">
      <option value="true">Currently Booked</option>
      <option value="false">Not Currently Booked</option>
    </select>

    <input type="submit" id="save" value="Save">
  </form>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
