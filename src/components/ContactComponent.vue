<template>
  <button class="contact"><a :href="emailLink">Get in touch!</a></button>
</template>
<script setup>
const emailAddress = "shantespeaces@gmail.com";
const subject = "";
const body = "";
const emailLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
  subject
)}&body=${encodeURIComponent(body)}`;
</script>
<style>
.contact {
  position: relative;
  z-index: 500;
  width: 70%;
  margin-top: 2em;
}
.contact button {
  border-left: solid 2px;
  border-image: var(--goldToRightDark) 1;
  border-image-slice: 1;
  background-color: transparent;
  padding-top: 1em;
  padding-bottom: 1em;
  cursor: pointer;
  background: white;
}
.contact button a {
  font-weight: bold;
  font-size: 2rem;
  letter-spacing: 2px;
  background-image: var(--goldToRightDark);
  color: transparent;
  -webkit-background-clip: text;
  text-transform: uppercase;
  font-family: "Poiret One", sans-serif;
  text-decoration: none;
}
.contact button:hover {
  background-color: #fbe1d0;
  border: none;
}
.contact button:hover a {
  font-size: 2.1rem;
  color: black;
}

@media screen and (max-width: 1350px) {
  .contact {
    width: 60%;
  }
}
@media screen and (max-width: 1200px) {
}
@media screen and (max-width: 992px) {
  .contact {
    padding-top: 35em;
    width: 80%;
  }
}

@media screen and (max-width: 500px) {
  .contact {
    padding-top: 28em;
  }
  .contact button {
    width: 100%;
  }
  .contact button a {
    font-size: 1.5rem;
  }
}
@media screen and (max-width: 360px) {
  .contact {
    padding-top: 23em;
  }
  .contact button:hover a {
    font-size: 1.6rem;
  }
}
</style>
