use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    guest_name: "Stephen Graham",
    email_address: "SG@hotmail.co.uk",
    checkin_status: true
  },
  {
    guest_name: "Andrew Gray",
    email_address: "Ag@hotmail.co.uk",
    checkin_status: false
  },
    {
      guest_name: "Cody Abbot",
      email_address: "CD@hotmail.co.uk",
      checkin_status: true
    }
]);
