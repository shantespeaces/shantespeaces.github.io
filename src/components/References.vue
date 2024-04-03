<template>
  <div class="references-container" id="sticky-references">
    <div class="neumorphismes">
      <Neumorphisme />
      <section class="references">
        <div class="heading-container" id="references">
          <h2 class="heading">References</h2>
        </div>
        <div class="image-wrapper d-flex justify-content-between">
          <div class="image-container left">
            <div class="quote-container d-flex justify-content-center">
              <q class="reference"
                >Shante Nicolaides embodies values of integrity and reliability.
                Always ready to tackle new challenges, she willingly assumes
                additional responsibilities, demonstrating her ability to adapt
                quickly and effectively to various situations. Her unwavering
                commitment, attention to detail, and ability to work
                autonomously truly set her apart.</q
              >

              <p>- Marie Bertrand</p>
              <p>Internship Suppervisor</p>
            </div>
          </div>
          <div class="image-container right">
            <div class="quote-container d-flex justify-content-center">
              <q class="reference"
                >Shante has consistently approached each project with a high
                level of autonomy and initiative, emphasizing diligent work. Her
                keen interest in new technologies and her willingness to tackle
                complex projects reflect her intellectual curiosity and
                determination to excel in the field of web development.
              </q>

              <p>- Éric Gagné</p>
              <p>Professor at Cégep de Saint-Jérôme</p>
            </div>
          </div>
        </div>
      </section>
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
  top: -1200px;
}
.references-container {
  background-color: white;
  border-top: solid 3px;
  border-image: var(--goldToRight) 1;
  border-image-slice: 1;
  position: relative;
}
section.references {
  /* background-color: #fffdf6; */
  z-index: 500;
}
section.references h2 {
  padding-top: 4em;
  background-color: #fde8d9;
  margin-left: 6em;
  padding-left: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 3rem;
  position: relative;
  z-index: 500;
}
.references .heading-container {
  background-color: white;
}
h2.heading {
  color: black;
  font-weight: bold;
}
.image-wrapper {
  position: relative;
  z-index: 10;
  padding-bottom: 10em;
}
.image-container.left {
  position: relative;
  left: 5em;
  background-image: url("/images/artDeco/artDecoWoman.svg");
  background-size: cover;
  height: 70em;
  width: 50em;
  transform: rotate(25deg);
}
.image-container.right {
  position: relative;
  right: 0;
  background-image: url("/images/artDeco/artDecoWoman.svg");
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
  background-color: #fffdf6;
  height: 38.5em;
  width: 38.5em;
  border-radius: 50%;
}
.image-container.left .quote-container {
  transform: rotate(-25deg);
}
.image-container .quote-container q {
  width: 25em;
  margin-left: 1.5em;
  margin-top: 5em;
  padding-bottom: 2em;
}

@media screen and (max-width: 1600px) {
  .image-container.right,
  .image-container.left {
    height: 60em;
    width: 40em;
  }

  .image-container .quote-container {
    top: 18.7em;
    left: 4.5em;
    height: 31em;
    width: 31em;
  }
  .image-container .quote-container q {
    width: 19em;
    padding-bottom: 1em;
    margin-top: 3.5em;
  }
  .image-container .quote-container p {
    width: 10em;
    margin-left: 5.5em;
    margin-bottom: 0;
  }
}

@media screen and (max-width: 1200px) {
  section.references h2 {
    margin-left: 3.5em;
  }
  .image-wrapper {
    flex-direction: column;
  }
  .image-container.right {
    margin-top: 0;
    left: 20em;
  }
  .image-container.left {
    left: 10em;
  }
}
@media screen and (max-width: 992px) {
  section.references h2 {
    margin-left: 2.5em;
  }
  .image-wrapper {
    margin-bottom: 10em;
  }
  .image-container.right {
    left: 5em;
  }
}
@media screen and (max-width: 768px) {
  section.references h2 {
    margin-left: 1.5em;
  }
  .image-container.left,
  .image-container.right {
    height: 50em;
    width: 35em;
  }
  .image-container.left {
    left: 8.5em;
  }
  .image-container.right {
    right: 0em;
  }
  .image-container .quote-container {
    top: 15.5em;
    left: 3.9em;
    height: 27em;
    width: 27em;
  }

  .image-container .quote-container q {
    padding-top: 0em;
    width: 17em;
    margin-left: 2em;
    margin-top: 2.5em;
    font-size: 1.3rem;
  }
  .image-container .quote-container p {
    width: 9em;
    margin-left: 5em;
    margin-bottom: 0;
  }
}
@media screen and (max-width: 576px) {
  section.references h2 {
    padding-top: 4em;
  }
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
    left: 3em;
  }
  .image-container.right {
    right: 0;
    top: 3em;
    margin-left: -4em;
  }
  .image-container .quote-container {
    top: 10.9em;
    left: 3em;
    height: 20.7em;
    width: 20.7em;
  }

  .image-container .quote-container q {
    font-size: 1rem;
  }
  .image-container .quote-container p {
    font-size: 1rem;
    margin-left: 5.5em;
  }
}
@media screen and (max-width: 450px) {
  section.references h2 {
    margin-left: 0em;
    padding-top: 2em;
  }

  .image-container.left,
  .image-container.right {
    height: 35em;
    width: 25em;
  }
  .image-container.left {
    left: 0em;
    transform: rotate(10deg);
  }

  .image-container.right {
    left: 2em;
  }
  .image-container .quote-container {
    height: 19.3em;
    width: 19.3em;
    top: 9.6em;
    left: 2.7em;
  }
  .image-container.left .quote-container {
    transform: rotate(-10deg);
  }
  .image-container .quote-container q {
    padding-top: 0em;
    width: 15.5em;
    margin-left: 2.7em;
    font-size: 0.9rem;
  }
  .image-container .quote-container p {
    font-size: 0.9rem;
    margin-left: 5.8em;
  }
}
</style>
