// The facts about the business, in one place. Components read from here, so a
// new phone number or new hours is a one-line change.
//
// One copy cannot import this: the JSON-LD block in public/index.html is static
// HTML. If anything here changes, change it there too.
export const site = Object.freeze({
  name: 'Outlook Pointe Campground',
  phone: {
    display: '(304) 617-4610',
    href: 'tel:+13046174610',
  },
  email: 'danajenkinswalters@yahoo.com',
  address: {
    street: '184 Outlook Pointe',
    cityLine: 'Milton, WV 25541',
    place: 'Milton, West Virginia',
  },
  officeHours: '7am - 8pm',
  links: {
    facebook: 'https://www.facebook.com/MiltonWV/',
    // Place ID and coordinates, so the pin lands on the campground whatever the
    // listing's address text says.
    maps: 'https://www.google.com/maps/place/Outlook+Pointe+Campground/@38.4390408,-82.1406893,17z/data=!3m1!4b1!4m5!3m4!1s0x8848ab0641a631cd:0x5e1853b64787ab79!8m2!3d38.4390366!4d-82.1385006',
  },
})
