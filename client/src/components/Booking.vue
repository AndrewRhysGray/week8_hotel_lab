<template lang="html">
  <div class="booking">
    <p>{{booking.guest_name}}</p>
    <p>{{booking.email_address}}</p>
    <p>{{booking.checkin_status}}</p>
  </div>
</template>

<script>
export default {
  name: "booking",
  props: ['booking']
}
</script>

<style lang="css" scoped>
</style>
