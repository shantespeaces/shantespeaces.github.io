<template>
  <div class="footer-wrapper" id="sticky-footer">
    <p>
      You've reached the end, thanks for taking the time. I hope you enjoyed!
    </p>
    <h2 class="name">Shanté Nicolaides</h2>
    <h1 class="job-title py-3">Frontend Dev | UX UI Designer in Montréal</h1>

    <div
      class="profile-container d-flex justify-content-center align-items-center"
    >
      <div class="footer-avatar">
        <div class="avatar-background"></div>
        <img
          class="avatar"
          src="\images\me-removebg-preview.png"
          alt="Profile picture for Shanté Nicolaides"
        />
      </div>
      <div class="contact" id="contact">
        <ContactComponent />
      </div>
    </div>
  </div>

  <div class="copyright d-flex justify-content-center">
    <div class="shante-container d-flex justify-content-center">
      <span class="material-symbols-outlined"> copyright </span>
      <p>Shanté Nicolaides Loving Art Deco 2024</p>
    </div>
    <a href="https://www.freepik.com/free-vector">Art Deco Images by freepik</a>
    <a href="https://www.flaticon.com/free-icons">
      icons created by Freepik - Flaticon</a
    >
  </div>
</template>
<script setup>
import ContactComponent from "../components/ContactComponent.vue";
</script>
<style>
/* #sticky-footer {
  position: sticky;
  position: -webkit-sticky;
  top: -20px;
} */
.footer-wrapper {
  background-color: #fcf4ed;
  background-image: url("/images/artDeco/feather4.png");
  background-size: contain;
  flex-direction: column;
  z-index: 300;
  position: relative;
  padding: 5em 10em;

  background-size: 85em;
  background-position: center;
  border-top: solid 3px;
  border-bottom: solid 3px;
  border-image: var(--goldToRight) 1;
  border-image-slice: 1;
}
.footer-wrapper p {
  padding-top: 5em;
  padding-bottom: 3em;
  text-align: center;
  letter-spacing: 2px;
}
footer h2.name {
  font-size: 10rem;
  text-align: center;
  letter-spacing: 2px;

  /* background-image: var(--goldToBottom);
  color: transparent;
  -webkit-background-clip: text; */
}
footer h1.job-title {
  text-align: center;
  letter-spacing: 2px;
  font-size: 1.8rem;
}
.profile-container {
  flex-direction: column;
  margin: 5em auto;
}
.profile-container .contact {
  width: 100%;
}
.footer-avatar {
  height: 30em;
  width: 30em;
  border-radius: 50%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: -5px -5px 8px #13131344, 5px -5px 8px rgba(48, 48, 48, 0.452);
}

.footer-avatar img.avatar {
  /* filter: brightness(90%) sepia(50%) saturate(70%) hue-rotate(-50deg); */
  transform: rotateX(0deg) rotateY(180deg);
}

.copyright {
  background-color: #fffdf6;
  padding-top: 1rem;
  padding-bottom: 1rem;
  z-index: 100;
  position: relative;
  flex-direction: column;
  align-items: center;
}
.copyright p,
.copyright a {
  background-image: var(--goldToRightDark);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;

  padding-left: 1rem;
  font-weight: bold;
}
.copyright span {
  padding-top: 0.3rem;
  background-image: var(--goldToRightDark);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  text-transform: uppercase;
}

@media screen and (max-width: 1500px) {
  footer h2.name {
    font-size: 7.5rem;
  }
}
@media screen and (max-width: 992px) {
  .footer-wrapper {
    padding: 5em 5em;
  }

  footer h2.name {
    font-size: 6rem;
  }
  footer .contact {
    padding-top: 1em;
    margin-top: 3em;
  }
  .footer-wrapper {
    background-size: 75em;
    background-position: right;
  }
}

@media screen and (max-width: 768px) {
  .footer-wrapper {
    padding: 5em 1em;
  }
  footer h2.name {
    font-size: 5rem;
  }
}

@media screen and (max-width: 576px) {
  .footer-wrapper {
    background-size: 65em;
    background-position: bottom right;
  }
  footer h2.name {
    font-size: 3.5rem;
  }
  .footer-avatar {
    height: 21.5em;
    width: 21.5em;
  }
  .footer-avatar img.avatar {
    height: 15em;
    width: 15em;
  }
  .footer-avatar .avatar-background {
    height: 17em;
    width: 17em;
  }
}
@media screen and (max-width: 360px) {
  .footer-wrapper {
    background-size: 40em;
    background-position: bottom right;
  }
  footer h2.name {
    font-size: 1.8rem;
  }
  .footer-avatar {
    height: 19em;
    width: 19em;
  }
  .footer-avatar img.avatar {
    height: 15em;
    width: 15em;
  }
  .footer-avatar .avatar-background {
    display: none;
  }
  .copyright p {
    font-size: 1rem;
    margin-bottom: 0;
    padding-top: 0.3rem;
  }
}
</style>
