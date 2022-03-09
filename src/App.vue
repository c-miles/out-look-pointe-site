<template>
  <head>
    <title>Outlook Pointe RV CampGrounds in Milton, West Virgina</title>
    <meta
      name="”description”"
      content="Private RV campground in beautiful Milton, West Virgina"
    />
  </head>
  <div id="app">
    <header>
      <h1>Outlook Pointe Campground</h1>
    </header>
    <div id="body">
    <section>
      <div id="grid">
        <img
          src="https://scontent-ort2-1.xx.fbcdn.net/v/t39.30808-6/273893047_950994822217066_9014884811519726725_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=pNBcOhC3E8sAX9gkv_f&tn=uFuLSmY1-ox5qdSo&_nc_ht=scontent-ort2-1.xx&oh=00_AT_PndRqpWr_pUz2ZpKYGYxY5ZfLNmJyPyo8Grzra2EiGw&oe=622CEEAB"
          alt="RVs in the campground"
        />
        <img src="./assets/camp3.png" alt="picture of RVs in graveled lot" />
        <ul class="lists">
          <li>Private (quiet) graveled lots.</li>
          <li>3/10th a mile from town.</li>
          <li>35-50 amp hookups.</li>
          <li>10 acres of grassy areas for activities.</li>
          <li>Scenic views overlooking the City of Milton.</li>
          <li>Pet friendly*</li>
        </ul>
        <ul class="lists">
          <li>$500-$600/Month.</li>
          <li>Utilities included in rent (electric, water, sewer, trash).</li>
          <li>
            Within a mile from grocery stores, post office, physician’s office,
            several restaurants & churches.
          </li>
          <li>No worries of flooding.</li>
          <li>No train tracks near the grounds.</li>
        </ul>
      </div>
    </section>
    </div>
    <div id="footer">
      <h2>Contact us</h2>
      <div id="icons">
      <a class="contact" href="tel:+13047433035">
        <ion-icon name="phone-portrait-outline"></ion-icon></a
      >
      <div></div>
      <a class="contact" href="mailto: danajenkinswalters@yahoo.com"
        ><ion-icon name="mail-outline"></ion-icon
      ></a>
      <div></div>
      <a class="contact" href="https://www.facebook.com/MiltonWV"
        ><ion-icon name="logo-facebook"></ion-icon
      ></a>
      <div></div>
      <a class="contact" href="https://www.google.com/maps/place/Outlook+Pointe+Campground/@38.4390408,-82.1406893,17z/data=!3m1!4b1!4m5!3m4!1s0x8848ab0641a631cd:0x5e1853b64787ab79!8m2!3d38.4390366!4d-82.1385006">
      <ion-icon name="map-outline"></ion-icon></a>
      </div>
      <span id="spanny"></span>
      <div></div>
      <p>
        Located in beautiful Milton, West Virgina. We pride ourselves in
        providing quiet and safe campgrounds. *Aggresive dogs not permitted
      </p>
    </div>
  </div>
</template>



<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}

header {
  color: whitesmoke;
  padding-top: 30px;
  text-shadow: 2px 2px #000;
  background-color: rgba(128, 0, 0, 0.842);
  padding-bottom: 20px;
  text-align: center;
}

h1 {
  font-size: 45px;
}

#body {
  background-image: url("https://wallpaperbat.com/img/61708-virginia-wallpaper-top-free-virginia-background.jpg");
  background-position: center;
  background-size: cover;
}

#grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 1.9em;
  justify-items: center;
}

img {
  width: 27em;
  border-radius: 40%;
  height: 27em;
  border: 5px solid rgba(128, 0, 0, 0.932);
  margin-bottom: 10%;
}

.lists {
  color: whitesmoke;
  text-shadow: 2px 2px #000;
  font-size: 28px;
  background-color: rgba(128, 0, 0, 0.842);
  width: 60%;
  border: 5px solid rgba(128, 0, 0, 0.932);
  margin-bottom: 7%;
}

li {
  margin-left: 7%;
}

span {
  background-color: rgba(128, 0, 0, 0.753);
}

#footer {
  background-color: rgba(54, 48, 48, 0.884);
  text-align: center;
  color: whitesmoke;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  font-size: 29px;
}

#icons {
  display: flex;
  justify-content: center;
}

h2 {
  padding-top: 20px;
  font-weight: normal;
  font-size: 35px;
}

ion-icon {
  font-size: 40px;
  padding: 28px;
}

.contact {
  color: whitesmoke;
  text-decoration: none;
  display: inline;
}

ion-icon:hover {
  color: rgb(65, 148, 148);
}

#spanny {
  display: block;
  width: 100%;
  border-top: 1px solid #ccc;
}

p {
  font-size: 19px;
  padding-bottom: 1%;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */

  #grid {
    display: inline-block;
  }

  .contact {
    font-size: 15px;
  }

  img {
    width: 15em;
    height: 15em;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 7%;
  }

  #footer {
    width: 100%;
  }

  li {
    margin-left: 15%;
  }

  .lists {
    font-size: 18px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 7%;
  }

  #body {
    background-size: cover;
  }

  p {
    font-size: 16px;
  }
}
</style>
