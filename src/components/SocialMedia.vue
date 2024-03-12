<template>
  <div class="links">
    <div class="icon phoneNum" @click="callPhoneNumber">
      <img src="/images/socialMedias/phone.png" alt="Logo Phone" />
    </div>
    <div class="email">
      <a :href="emailLink"
        ><img src="/images/socialMedias/email.png" alt="Logo Email"
      /></a>
    </div>
    <div class="">
      <a href=""
        ><img src="/images/socialMedias/linkedin.png" alt="Logo LinkedIn"
      /></a>
    </div>
    <div class="">
      <a href=""
        ><img src="/images/socialMedias/github.png" alt="Logo Github"
      /></a>
    </div>
  </div>
</template>
<script setup>
const phoneNumber = "14506127178";
const callPhoneNumber = () => {
  window.location.href = `tel:${phoneNumber}`;
};

const emailAddress = "shantespeaces@gmail.com";
const subject = "";
const body = "";
const emailLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
  subject
)}&body=${encodeURIComponent(body)}`;
</script>
<style>
div.links {
  position: fixed;
  right: 0px;
  top: 10em;

  width: 50px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 500;
  border-radius: 8px 0px 0px 8px;
  transition: 0.2s ease-in-out;
  background-color: rgba(255, 255, 240, 0.5);
}
div.links:hover {
  background-color: ivory;
  cursor: pointer;
}

div.links img {
  width: 25px;
  height: 25px;
}
@media screen and (max-width: 576px) {
  div.links {
    display: none;
  }
}
</style>
