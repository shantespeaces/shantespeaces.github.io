<template>
  <section id="sticky-about">
    <section class="about">
      <div class="heading-container" id="about">
        <h2 class="heading">About</h2>
      </div>
      <div class="text-container">
        <div class="quote-container d-flex">
          <q class="mini">
            lorem "description": "Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard
          </q>
          <button @click="toggleFullText">
            <p>{{ showFull ? "read less" : "read more" }}</p>
          </button>
        </div>
        <p class="full" :class="{ 'show-full': showFull }">
          lorem "description": "Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.", the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.",
        </p>
      </div>
    </section>
  </section>
</template>
<script setup>
import { ref } from "vue";

const showFull = ref(false);

const toggleFullText = () => {
  showFull.value = !showFull.value;
};
</script>
<style>
/* ABOUT */
#sticky-about {
  top: -180px;
  position: sticky;
  position: -webkit-sticky;
}

section.about {
  background-color: #fffdf6;
  z-index: 500;
}
section.about h2 {
  padding-top: 4em;
  /* background-color: #fde8d9; */
  background-color: #fcf4ed;
  margin-left: 6em;
  padding-left: 1rem;
  padding-bottom: 1rem;
  position: relative;
}

h2.heading {
  color: black;
}
.text-container {
  margin-left: 15em;
  margin-right: 15em;
  padding-bottom: 20em;
}
.quote-container {
  margin-top: 5em;
  margin-bottom: 5em;
}
.quote-container button {
  display: none;
}
.quote-container button {
  position: relative;
  border-left: solid 3px;
  border-image: var(--goldToRight) 1;
  border-image-slice: 1;
  background-color: transparent;
}

.quote-container button p {
  margin-top: 0.6em;
  font-weight: bold;
  font-size: 2rem;
  letter-spacing: 2px;
  background-image: var(--goldToRightDark);
  color: transparent;
  -webkit-background-clip: text;
  text-transform: uppercase;
  font-family: "Poiret One", sans-serif;
  text-decoration: none;
  position: relative;
  z-index: 1;
}
.quote-container button::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0;
  background-color: #fde8d9;
  transform-origin: bottom;
  transition: height 0.3s ease-in;
}

.quote-container button:hover::after {
  height: 100%;
}

p.full {
  padding-bottom: 5em;
  margin-bottom: 0;
}

q.mini,
p.full {
  font-size: 1.3rem;
  letter-spacing: 1px;
  line-height: 2;
}

@media screen and (max-width: 1200px) {
  section.about h2 {
    margin-left: 3.5em;
  }
  .text-container {
    margin-left: 10em;
    margin-right: 10em;
  }
  #sticky-about {
    top: -160px;
  }
  q.mini,
  p.full {
    font-size: 1.3rem;
    line-height: 2;
  }
}
@media screen and (max-width: 992px) {
  section.about h2 {
    margin-left: 2.5em;
  }
  .text-container {
    margin-left: 7em;
    margin-right: 7em;
  }
  #sticky-about {
    top: -150px;
  }
  q.mini,
  p.full {
    font-size: 1.2rem;
    line-height: 2;
  }
}
@media screen and (max-width: 768px) {
  section.about h2 {
    margin-left: 1.5em;
  }
  .text-container {
    margin-left: 4.5em;
    margin-right: 4.5em;
  }

  q.mini,
  p.full {
    font-size: 1.2rem;
    line-height: 2;
  }
}
@media screen and (max-width: 576px) {
  #sticky-about {
    top: -600px;
  }
  section.about h2 {
    padding-top: 4em;
  }
  q.mini {
    font-size: 1.2rem;
    line-height: 2;
  }
  .full {
    display: none;
  }
  p.full {
    font-size: 1.2rem;
  }
  .show-full {
    display: block;
    line-height: 2;
  }
  .text-container {
    padding-bottom: 12em;
    margin: 0em 2em;
  }

  .quote-container {
    display: flex;
    flex-direction: column;
  }
  .quote-container button {
    display: block;
    margin-top: 3em;
  }
}

@media screen and (max-width: 360px) {
  #sticky-about {
    top: -900px;
  }
  section.about h2 {
    margin-left: 0em;
    padding-top: 2em;
  }

  section.about q.mini {
    font-size: 1.2rem;
    line-height: 2;
  }
  section.about p.full {
    font-size: 1.2rem;
    line-height: 2;
  }
  .about .text-container {
    margin-left: 1.5em;
    margin-right: 1.5em;
  }
  .quote-container {
    display: flex;
    flex-direction: column;
  }
  .quote-container button p {
    font-size: 1.6rem;
  }
  .quote-container button:hover p {
    font-size: 1.8rem;
  }
}
</style>
