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
          <img src="./assets/camp.png" alt="RVs in the campground" />
          <img
            src="./assets/drone_1.jpeg"
            alt="picture of RVs in graveled lot"
          />
        </div>
        <div class="deets">
          <div class="child">
            <p class="merp">Private (quiet) graveled lots.</p>
            <p class="merp">
              Office hours 7am - 8pm everyday, 24/7 campground access.
            </p>
            <p class="merp">3/10th a mile from town.</p>
            <p class="merp">35-50 amp hookups.</p>
            <p class="merp">10 acres of grassy areas for activities.</p>
            <p class="merp">Scenic views overlooking the City of Milton.</p>
            <p class="merp">Pet friendly*</p>
          </div>
          <div class="child">
            <p class="merp">$500-$600/Month.</p>
            <p class="merp">
              Utilities included in rent (electric, water, sewer, trash).
            </p>
            <p class="merp">
              Within a mile from grocery stores, post office, physician’s
              office, several restaurants & churches.
            </p>
            <p class="merp">No worries of flooding.</p>
            <p class="merp">No train tracks near the grounds.</p>
          </div>
        </div>
        <div id="grid">
          <img src="./assets/camp3.png" />
          <img src="./assets/drone_2.jpeg" />
        </div>
      </section>
    </div>
    <div id="footer">
      <h2>Contact us</h2>
      <div id="icons">
        <a class="contact" href="tel:+13047433035">
          <ion-icon name="phone-portrait-outline"></ion-icon
        ></a>
        <div></div>
        <a class="contact" href="mailto: danajenkinswalters@yahoo.com"
          ><ion-icon name="mail-outline"></ion-icon
        ></a>
        <div></div>
        <a class="contact" href="https://www.facebook.com/MiltonWV"
          ><ion-icon name="logo-facebook"></ion-icon
        ></a>
        <div></div>
        <a
          class="contact"
          href="https://www.google.com/maps/place/Outlook+Pointe+Campground/@38.4390408,-82.1406893,17z/data=!3m1!4b1!4m5!3m4!1s0x8848ab0641a631cd:0x5e1853b64787ab79!8m2!3d38.4390366!4d-82.1385006"
        >
          <ion-icon name="map-outline"></ion-icon
        ></a>
      </div>
      <span id="spanny"></span>
      <div></div>
      <p class="footer-p">
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
  background-color: rgba(54, 48, 48, 0.884);
  padding-bottom: 20px;
  text-align: center;
}

h1 {
  font-size: 45px;
}

#body {
  background-position: center;
  background-size: cover;
  background-color: white;
}

#grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 1.9em;
  justify-items: center;
}

img {
  width: 70%;
  height: 27rem;
  border-radius: 2%;
  border: 1px solid rgba(54, 48, 48, 0.884);
  margin-bottom: 10%;
}

.deets {
  display: flex;
  justify-content: center;
  color: whitesmoke;
  text-shadow: 2px 2px 4px #000;
  font-size: 28px;
  background-color: rgba(54, 48, 48, 0.884);
  margin-bottom: 7%;
  border-radius: 1%;
  margin-right: 7%;
  margin-left: 7%;
}

.child {
  flex: 1;
}

.merp {
  margin-left: 3%;
  padding-bottom: 3%;
  padding-top: 1%;
  margin-right: 9%;
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

.footer-p {
  font-size: 19px;
  padding-bottom: 1%;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */

  #grid {
    display: inline-block;
    text-align: center;
  }

  .contact {
    font-size: 15px;
  }

  #footer {
    width: 100%;
  }

  img {
    width: 90%;
  }

  /* .deets {
    width: 90%;
  } */

  #body {
    background-size: cover;
  }

  p {
    font-size: 16px;
  }
}
</style>
