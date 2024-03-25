<template>
  <div class="references-container" id="sticky-references">
    <div class="neumorphismes">
      <Neumorphisme />
      <div class="image-wrapper d-flex justify-content-between">
        <div class="image-container left">
          <div class="quote-container d-flex justify-content-center">
            <q class="reference"
              >a cute quote bbbbbbbbb bbbbbb bbbbbbbbbbbb bbbbbbbbbbbbbbbbb
              bbbbbbbbbbbbbbbb</q
            >

            <p>name</p>
          </div>
        </div>
        <div class="image-container right">
          <div class="quote-container d-flex justify-content-center">
            <q class="reference"
              >a cute quote bbbbbbbb bbbbbbbbbbbb bbbbbbb bbbbbbb bbbbbbbbbbbb
              bbbbbbbbbb bbbb</q
            >

            <p>name</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Neumorphisme from "../components/Neumorphisme.vue";
</script>
<style>
#sticky-references {
  position: sticky;
  position: -webkit-sticky;
  top: -500px;
}
.references-container {
  background-color: white;
  border-top: solid 3px;
  border-image: var(--goldToRight) 1;
  border-image-slice: 1;
  position: relative;
}
.image-wrapper {
  position: relative;
  z-index: 10;
  padding-bottom: 10em;
}
.image-container.left {
  position: relative;
  left: 5em;
  background-image: url("/images/artDecoWoman.svg");
  background-size: cover;
  height: 70em;
  width: 50em;
  transform: rotate(25deg);
}
.image-container.right {
  position: relative;
  right: 0;
  background-image: url("/images/artDecoWoman.svg");
  background-size: cover;
  height: 70em;
  width: 50em;
  transform: rotate(-35deg);
  transform: rotateX(0deg) rotateY(180deg);
  margin-top: 20em;
}
.image-container.right .quote-container {
  transform: rotateX(0deg) rotateY(180deg);
}
.image-container .quote-container {
  flex-direction: column;
  position: relative;
  top: 24.2em;
  left: 5.8em;
  text-align: center;
  background-color: ivory;
  /* background-image: url("/images/artDecoGreen.jpg"); */
  height: 38.5em;
  width: 38.5em;
  border-radius: 50%;
}
.image-container.left .quote-container {
  transform: rotate(-25deg);
}
.quote-container q,
.qoute-container p {
  padding: 1em;
}
@media screen and (max-width: 1600px) {
  .image-wrapper {
    padding-bottom: 25em;
  }
  .image-container.left,
  .image-container.right {
    height: 53em;
    width: 38em;
  }
  .image-container.left {
    margin: auto;
  }
  .image-container.right {
    margin: auto;
    top: 20em;
  }
  .image-container .quote-container {
    top: 17.4em;
    left: 4.4em;
    height: 29.2em;
    width: 29.2em;
  }
}

@media screen and (max-width: 1200px) {
  .image-container.left,
  .image-container.right {
    height: 43em;
    width: 30em;
  }
  .image-container.left {
    margin: auto;
  }
  .image-container.right {
    margin: auto;
  }
  .image-container .quote-container {
    top: 12.5em;
    left: 3.3em;
    height: 23.1em;
    width: 23.1em;
  }
}
@media screen and (max-width: 992px) {
  .image-wrapper {
    flex-direction: column;
    padding-bottom: 10em;
  }
  .image-container.left {
    left: -5em;
  }
  .image-container.right {
    margin: auto;
    top: 0em;
    right: -7em;
  }
}
@media screen and (max-width: 768px) {
  .image-wrapper {
    margin: 5em 0em;
    padding-bottom: 5em;
  }
  .image-container.left,
  .image-container.right {
    height: 50em;
    width: 35em;
  }
  .image-container.left {
    margin: auto;
    left: 6em;
  }
  .image-container.right {
    right: 5em;
    margin: auto;
  }
  .image-container .quote-container {
    top: 15.5em;
    left: 3.9em;
    height: 27em;
    width: 27em;
  }
  q.reference {
    font-size: 1.6rem;
  }
}
@media screen and (max-width: 576px) {
  .image-wrapper {
    margin: 5em 0em;
  }
  .image-container.left,
  .image-container.right {
    height: 37em;
    width: 27em;
  }
  .image-container.left {
    margin: auto;
    left: 2em;
  }
  .image-container.right {
    right: 0;
    top: 3em;
    margin: auto;
  }
  .image-container .quote-container {
    top: 11em;
    left: 3.1em;
    height: 20.7em;
    width: 20.7em;
  }
  q.reference {
    font-size: 1rem;
  }
  .quote-container p {
    font-size: 1rem;
  }
}
@media screen and (max-width: 400px) {
  .image-container.left,
  .image-container.right {
    height: 30em;
    width: 20em;
  }
  .image-container.left {
    margin: auto;
    left: 0;
  }
  .image-container.right {
    right: 0;
    margin: auto;
  }
  .image-container .quote-container {
    top: 7em;
    left: 2.3em;
    height: 15.5em;
    width: 15.5em;
  }
  q.reference {
    font-size: 1rem;
  }
  #sticky-references {
  }
}
</style>
