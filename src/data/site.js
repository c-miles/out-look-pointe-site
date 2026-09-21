// Business facts in one place. The JSON-LD in public/index.html is static, so
// update it by hand too.

// Public, not a secret. Netlify has the same value as GOOGLE_PLACE_ID.
const GOOGLE_PLACE_ID = 'ChIJzTGmQQarSIgReauHR7ZTGF4'

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
    // Points at the listing itself, not the address text.
    maps: 'https://www.google.com/maps/place/Outlook+Pointe+Campground/@38.4390408,-82.1406893,17z/data=!3m1!4b1!4m5!3m4!1s0x8848ab0641a631cd:0x5e1853b64787ab79!8m2!3d38.4390366!4d-82.1385006',
    // Google's official reviews link for a Place ID.
    reviews: `https://search.google.com/local/reviews?placeid=${GOOGLE_PLACE_ID}`,
  },
})
