<template>
<head>
  <title>Outlook Pointe CampGround in Milton, West Virgina</title>
  <meta name=”description” content="Private RV campground in beautiful Milton, West Virgina"/>
  </head>
  <div id="app">
    <h1 id="top">Outlook Pointe Campground</h1>
    <div></div>
    <div id="flex">
      <img
        src="https://scontent-ort2-2.xx.fbcdn.net/v/t39.30808-6/273893047_950994822217066_9014884811519726725_n.jpg?stp=dst-jpg_s526x395&_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=y0MmXgZInbwAX_PZ9lI&_nc_ht=scontent-ort2-2.xx&oh=00_AT9Gkx2nijpWJ5LQLfYGyUcfx5H9XjeSLqTYFBiBhb3fXA&oe=6213396B"
        alt="RVs in the campground"
      />
      <ul id="body">
        <li>Private (quiet) graveled lots.</li>
        <li>3/10th a mile from town.</li>
        <li>35-50 amp hookups.</li>
        <li>10 acres of grassy areas for activities.</li>
        <li>Scenic views overlooking the City of Milton.</li>
        <li>Pet friendly*</li>
      </ul>

      <ul id="body" class="left">
        <li>$600/Month.</li>
        <li>Utilities included in rent (electric, water, sewer, trash).</li>
        <li>
          Within a mile from grocery stores, post office, physician’s office,
          several restaurants & churches.
        </li>
        <li>No worries of flooding.</li>
        <li>No train tracks near the grounds.</li>
      </ul>

      <img
        id="pics"
        src="./assets/camp3.png" 
        alt="picture of RVs in graveled lot"
      />
    </div>
    <div></div>
    <div id="footer">
      <p id="con">Contact Us</p>
      <a id="phone" href="tel:+13047433035"> <ion-icon name="phone-portrait-outline"></ion-icon>: (304) 743-3035</a>
      <div></div>
      <a id="phone" href="mailto: danajenkinswalters@yahoo.com"><ion-icon name="mail-outline"></ion-icon></a>
        <div></div>
        
        <a id="phone" href="https://www.facebook.com/MiltonWV"><ion-icon name="logo-facebook"></ion-icon></a>

      <span id="spanny"></span>
      <div></div>
      <p id="end">Located in beautiful Milton, West Virgina. We pride ourselves in providing quiet and safe campgrounds.   
        *Aggresive dogs not permitted</p>
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
html,
body {
  margin: 0px;
}

 * {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* border: 1px solid black; */
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: url("https://wallpaperbat.com/img/61708-virginia-wallpaper-top-free-virginia-background.jpg");
}

#top {
  color: whitesmoke;
  font-size: 50px;
  padding-top: 30px;
  text-shadow: 2px 2px #000;
  background-color: rgba(128, 0, 0, 0.521);
  margin-bottom: 4%;
  padding-bottom: 20px;
  text-align: center;
}

#body {
  color: whitesmoke;
  text-shadow: 2px 2px #000;
  font-size: 28px;
  background-color: rgba(128, 0, 0, 0.842);
  width: 60%;
  border: 5px solid rgba(128, 0, 0, 0.932);
  margin-bottom: 29%;
}

span {
  background-color: rgba(128, 0, 0, 0.753);
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

#flex {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
li {
  padding-bottom: 5px;
  margin-left: 7%;
}

ion-icon {
  font-size: 38px;
}

#footer {
  /* display: block; */
  background-color: rgba(54, 48, 48, 0.884);
  text-align: center;

  color: whitesmoke;
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  font-size: 29px;
}

.left {
  margin-left: 5%;
}

#phone {
  color: whitesmoke;
  text-decoration: none;
}

#phone:hover {
  color: rgb(65, 148, 148);
  font-size: 30px;
}

#spanny {
  display: block;
  width: 100%; /*or whatever width you want the effect of <hr>*/
  border-top: 1px solid #ccc;
}

#con {
  margin-top: 19px;
  padding-top: 20px;
  margin-bottom: 1%;
}

#end {
  font-size: 16px;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
    
    #flex {
      display: inline;
    }

    #phone {
      font-size: 15px;
    }

    img {
  width: 15em;
  border-radius: 40%;
  margin-left: 5%;
  height: 15em;
  margin-left: 10%;
  border: 5px solid #555;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

#footer {
  width: 60%;
}

img {
  align-self: center;
  margin-bottom: 10%;
}

.left {
  margin-left: 0%;
}

li {
  margin-left: 15%;
}

#body {
  font-size: 18px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10%;
}


}
</style>
