<template>
  <head>
    <title>Outlook Pointe RV CampGrounds in Milton, West Virgina</title>
    <meta
      name="”description”"
      content="Private RV campground in beautiful Milton, West Virgina"
    />
  </head>
  <div id="app">
    <!-- <header> -->
      <h1>Outlook Pointe Campground</h1>
    <!-- </header> -->
    <div></div>
    <section>
      <div id="flex">
        <img
          src="https://scontent-ort2-2.xx.fbcdn.net/v/t39.30808-6/273893047_950994822217066_9014884811519726725_n.jpg?stp=dst-jpg_s526x395&_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=y0MmXgZInbwAX_PZ9lI&_nc_ht=scontent-ort2-2.xx&oh=00_AT9Gkx2nijpWJ5LQLfYGyUcfx5H9XjeSLqTYFBiBhb3fXA&oe=6213396B"
          alt="RVs in the campground"
        />
        <ul class="lists">
          <li>Private (quiet) graveled lots.</li>
          <li>3/10th a mile from town.</li>
          <li>35-50 amp hookups.</li>
          <li>10 acres of grassy areas for activities.</li>
          <li>Scenic views overlooking the City of Milton.</li>
          <li>Pet friendly*</li>
        </ul>
        <ul class="lists left">
          <li>$600/Month.</li>
          <li>Utilities included in rent (electric, water, sewer, trash).</li>
          <li>
            Within a mile from grocery stores, post office, physician’s office,
            several restaurants & churches.
          </li>
          <li>No worries of flooding.</li>
          <li>No train tracks near the grounds.</li>
        </ul>
        <img src="./assets/camp3.png" alt="picture of RVs in graveled lot" />
      </div>
    </section>
    <div></div>
    <div id="footer">
      <h2>Contact Us</h2>
      <a class="contact" href="tel:+13047433035">
        <ion-icon name="phone-portrait-outline"></ion-icon>: (304) 743-3035</a
      >
      <div></div>
      <a class="contact" href="mailto: danajenkinswalters@yahoo.com"
        ><ion-icon name="mail-outline"></ion-icon
      ></a>
      <div></div>
      <a class="contact" href="https://www.facebook.com/MiltonWV"
        ><ion-icon name="logo-facebook"></ion-icon
      ></a>
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
  background-position: center;
  background-size: cover;
  background-image: url("https://wallpaperbat.com/img/61708-virginia-wallpaper-top-free-virginia-background.jpg");
}

h1 {
  color: whitesmoke;
  font-size: 45px;
  padding-top: 30px;
  text-shadow: 2px 2px #000;
  background-color: rgba(128, 0, 0, 0.521);
  margin-bottom: 4%;
  padding-bottom: 20px;
  text-align: center;
}

#flex {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

img {
  width: 27em;
  border-radius: 40%;
  margin-left: 5%;
  height: 27em;
  margin-left: 10%;
  border: 5px solid rgba(128, 0, 0, 0.932);
  margin-bottom: 20%;
}

.lists {
  color: whitesmoke;
  text-shadow: 2px 2px #000;
  font-size: 28px;
  background-color: rgba(128, 0, 0, 0.842);
  width: 60%;
  border: 5px solid rgba(128, 0, 0, 0.932);
  margin-bottom: 29%;
}

.left {
  margin-left: 5%;
}

li {
  padding-bottom: 5px;
  margin-left: 7%;
}

span {
  background-color: rgba(128, 0, 0, 0.753);
}

#footer {
  background-color: rgba(54, 48, 48, 0.884);
  text-align: center;
  color: whitesmoke;
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  font-size: 29px;
}

h2 {
  margin-top: 19px;
  padding-top: 20px;
  margin-bottom: 1%;
  font-weight: normal;
  font-size: 35px;
}

ion-icon {
  font-size: 38px;
}

.contact {
  color: whitesmoke;
  text-decoration: none;
}

.contact:hover {
  color: rgb(65, 148, 148);
  font-size: 30px;
}

#spanny {
  display: block;
  width: 100%;
  border-top: 1px solid #ccc;
}

p {
  font-size: 16px;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */

  #flex {
    display: inline;
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
    margin-bottom: 10%;
  }

  #footer {
    width: 60%;
  }

  li {
    margin-left: 15%;
  }

  .lists {
    font-size: 18px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10%;
  }
}
</style>
