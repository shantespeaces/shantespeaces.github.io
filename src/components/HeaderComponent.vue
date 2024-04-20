<template>
  <header>
    <MainNav />

    <div class="neumorphismes">
      <Neumorphisme />

      <div
        class="intro container d-flex animate__animated animate__fadeInRight animate__slow 1s animate__delay-0.5s"
      >
        <p class="hi mt-3 pt-3">Hi, my name is</p>
        <h2 class="name">Shanté Nicolaides</h2>
        <h1 class="job-title py-3">
          Frontend Dev | UX UI Designer in Montréal
        </h1>
        <div class="contact">
          <ContactComponent />
        </div>
      </div>
    </div>

    <div class="profile">
      <div
        class="avatar-container container animate__animated animate__fadeInDown animate__slower 1s mt-3"
      >
        <div class="avatar-background"></div>
        <img
          class="avatar d-inline-block align-text-top"
          src="\images\profile4.png"
          alt="Profile picture for Shanté Nicolaides"
        />
        <!-- <div class="half-circle"></div> -->
      </div>
    </div>
    <SocialMedia />
  </header>
</template>
<script setup>
import ContactComponent from "../components/ContactComponent.vue";
import MainNav from "../components/Nav.vue";
import Neumorphisme from "../components/Neumorphisme.vue";

import SocialMedia from "../components/SocialMedia.vue";
</script>
<style>
/**HEADER */
header {
  height: 50em;
}
.neumorphismes {
  position: relative;
  overflow: hidden;
  height: 100%;
  z-index: 1;
}

.intro {
  text-align: right;
  --animate-duration: 1s;
  color: black;
  flex-direction: column;
  align-items: end;
  z-index: 5;
  position: relative;
  margin-top: 9em;
}
h2.name {
  font-size: 6rem;
  background-image: var(--goldToRightDark);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}
.intro h1 {
  color: black;
}

h1.job-title {
  font-size: 1.6rem;
}
.intro.intro p.hi {
  color: black;
}

/* AVATAR */

.avatar-container {
  position: relative;
  top: -20em;
  margin-left: 10em;
  z-index: 10;
  height: 30em;
  width: 30em;
  border-radius: 50%;
  --animate-duration: 0.75s;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease all var(--transition-time);
  box-shadow: -5px -5px 8px #13131344, 5px -5px 8px rgba(48, 48, 48, 0.452);
}

img.avatar {
  height: 18em;
  width: 18em;
  object-fit: cover;
  background-color: white;
  box-shadow: -10px 10px 20px #bca399, -10px -10px 20px #fffdf6;
  background-size: contain;
  background-position: top;
  border-radius: 50%;
  box-shadow: 6px 6px 10px #3f3f3e, -6px -6px 10px #fffdf6;
  z-index: 20;
  position: absolute;

  /* filter: brightness(90%) sepia(40%) saturate(40%) hue-rotate(-40deg); */
}
.avatar-background {
  height: 20em;
  width: 20em;
  border-radius: 50%;
  background-color: white;
  box-shadow: 8px -8px 15px #bca399, -8px -8px 15px #fffdf6;
  z-index: 15;
}

@media screen and (max-width: 1200px) {
  h2.name {
    font-size: 5rem;
  }
  .intro {
    margin-right: 5em;
  }
  .avatar-container {
    margin-left: 5em;
  }
}

@media screen and (max-width: 992px) {
  header {
    height: 80em;
  }
  .intro {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: auto;
    padding-top: 8em;
  }
  .avatar-container {
    top: -47em;
    margin: auto;
  }
}

@media screen and (max-width: 500px) {
  header {
    height: 75em;
  }
  h2.name {
    font-size: 3.5rem;
  }
  .intro {
    padding-top: 5em;
  }
  .avatar-container {
    height: 23em;
    width: 23em;
  }
  img.avatar {
    height: 15em;
    width: 15em;
  }
  .avatar-background {
    height: 18em;
    width: 18em;
  }
}
@media screen and (max-width: 360px) {
  .intro {
    margin-top: 0em;
  }
  h2.name {
    font-size: 3.5rem;
  }
  .avatar-container {
    height: 20em;
    width: 20em;
  }
  img.avatar {
    height: 15em;
    width: 15em;
  }
  .avatar-background {
    display: none;
  }
}
</style>
