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
  top: -100px;
  position: sticky;
  position: -webkit-sticky;
}

section.about {
  background-color: #fffdf6;
  z-index: 500;
}
section.about h2 {
  padding-top: 4em;
  background-color: #fde8d9;
  margin-left: 6em;
  padding-left: 1rem;
  padding-bottom: 1rem;
  position: relative;
}

h2.heading {
  color: black;
}
.text-container {
  margin-left: 25em;
  margin-right: 20em;
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
  border-left: solid 3px;
  border-image: var(--goldToRight) 1;
  border-image-slice: 1;
  background-color: transparent;
}

.quote-container button p {
  font-size: 2rem;
  letter-spacing: 2px;
  background-image: var(--goldToRightDark);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  text-transform: uppercase;
  margin-top: 0.6em;
  font-weight: bold;
  font-family: "Poiret One", sans-serif;
}
.quote-container button:hover p {
  font-size: 2.1rem;
  color: black;
}
.quote-container button:hover {
  background-color: #fbe1d0;
  border: transparent;
}
p.full {
  padding-bottom: 5em;
  margin-bottom: 0;
}

q.mini,
p.full {
  font-size: 1.3rem;
  letter-spacing: 1px;
}
@media screen and (max-width: 1500px) {
  .text-container {
    margin-right: 20em;
  }
}
@media screen and (max-width: 1200px) {
  section.about h2 {
    margin-left: 3.5em;
  }
  .text-container {
    margin-left: 15em;
    margin-right: 15em;
  }
  #sticky-about {
    top: -160px;
  }
  q.mini,
  p.full {
    font-size: 1.3rem;
  }
}
@media screen and (max-width: 992px) {
  section.about h2 {
    margin-left: 2.5em;
  }
  .text-container {
    margin-left: 11em;
    margin-right: 11em;
  }
  #sticky-about {
    top: -100px;
  }
  q.mini,
  p.full {
    font-size: 1.2rem;
  }
}
@media screen and (max-width: 768px) {
  section.about h2 {
    margin-left: 1.5em;
  }
  .text-container {
    margin-left: 6.5em;
    margin-right: 6.5em;
  }

  q.mini,
  p.full {
    font-size: 1.1rem;
  }
}
@media screen and (max-width: 576px) {
  /* h2.heading {
    font-weight: bold;
  } */
  section.about h2 {
    padding-top: 4em;
  }
  q.mini {
    font-size: 1.2rem;
  }
  .full {
    display: none;
  }
  .show-full {
    display: block;
  }
  .text-container {
    padding-bottom: 12em;
    margin-bottom: 0;
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
    top: 0px;
  }
  section.about h2 {
    margin-left: 1em;
    padding-top: 3em;
  }

  section.about q.mini {
    font-size: 1.2rem;
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
  .text-container {
    margin-left: 4.5em;
    margin-right: 3.5em;
  }
  q.mini {
    font-size: 1.3rem;
  }
}
</style>
