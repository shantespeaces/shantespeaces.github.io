<template>
  <div class="screen"></div>
  <div class="horizontal-scroll-container">
    <div class="wrapper" ref="container">
      <div
        v-for="(slide, index) in slides"
        :class="`image horizontal-card-${index}`"
        :key="index"
      >
        <div class="horizontal-card container" id="card">
          <div class="cover">
            <div class="horizontal-card-back">
              <router-link :to="{ name: 'project', params: { id: slide.id } }">
                <div class="gold-container">
                  <img
                    class="cover-image"
                    :src="slide.image"
                    alt="project image"
                  />
                </div>
              </router-link>
              <div class="animated-text">
                <div class="text-wrapper">
                  <p
                    v-for="(char, index) in text"
                    :key="index"
                    class="character"
                    :style="{
                      transform: `rotate(${index * 35}deg)`,
                    }"
                  >
                    {{ char }}
                  </p>
                </div>
              </div>
            </div>
            <div class="cover-before" :style="handleStyles(index)">
              <div class="title-container">
                <h3 class="title-card">{{ slide.title }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="screen"></div>
</template>

<script setup>
import {
  onMounted,
  onUnmounted,
  ref,
  nextTick,
  // onBeforeMount,
  computed,
} from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import axios from "axios";

const container = ref(null);
const originalText = "Showcase";
const text = computed(() => originalText.split(""));
// const projects = ref([]);

// onBeforeMount(() => {
//   axios("/src/projects.json").then((response) => {
//     projects.value = response.data;
//   });
// });

// Scroll trigger for horizontal scroll
// gsap.registerPlugin(ScrollTrigger);
let ctx;

onMounted(async () => {
  await nextTick();

  // Check if screen width is greater than 768 pixels
  // if (window.innerWidth > 768) {
  //   console.log(
  //     "Screen width is greater than 768 pixels. Initializing ScrollTrigger..."
  //   );
  gsap.registerPlugin(ScrollTrigger);

  ctx = gsap.context((self) => {
    const images = self.selector(".image");
    const amount = images.length - 1;

    gsap.to(images, {
      xPercent: -78 * amount,
      ease: "none",
      scrollTrigger: {
        trigger: container.value,
        start: "top top",
        end: "+=4000",
        scrub: 1,
        markers: false,
        pin: true,
        snap: 1.3 / amount,
        responsive: true,
      },
    });
  }, container.value);
  // } else {
  //   console.log(
  //     "Screen width is not greater than 768 pixels. ScrollTrigger will not be initialized."
  //   );
  // }
});

onUnmounted(() => {
  if (ctx) {
    ctx.revert();
    console.log("ScrollTrigger reverted.");
  }
});

const slides = [
  { title: "The Menu", id: 1, image: "images/menu/logo.png" },
  {
    title: "Prima Colors",
    id: 2,
    image: "images/primaColors/logo.png",
  },
  { title: "Pub G4", id: 3, image: "images/pubG4/logo.png" },
  { title: "Bois Espiègle", id: 0, image: "images/bois/logo-bois.png" },
  { title: "Fusion Spa", id: 4, image: "images/spa/logo.png" },
];

const handleStyles = (index) => {
  if (index === 0 || index === 4) {
    return {
      backgroundImage: `url("images/artDeco/gold1.avif")`,
      backgroundSize: `500px 500px`,
    };
  } else if (index === 1) {
    return { backgroundImage: `url("images/artDeco/artDeco2.jpg")` };
  } else if (index === 2) {
    return {
      backgroundImage: `url("images/artDeco/artDeco5.jpg")`,
      backgroundSize: `500px 500px`,
    };
  } else if (index === 3) {
    return {
      backgroundImage: `url("images/artDeco/artDeco4.jpg")`,
    };
  }

  return {};
};

// Function to add touch event listeners
// const addTouchListeners = () => {
//   const cards = document.querySelectorAll(".horizontal-card");

//   cards.forEach((card) => {
//     // Function to rotate the card
//     const rotateCard = () => {
//       card.classList.add("touch");
//       setTimeout(() => {
//         revertRotation();
//       }, 4000);
//     };

//     // Function to revert the rotation
//     const revertRotation = () => {
//       card.classList.remove("touch");
//     };

//     card.addEventListener("touchstart", rotateCard);
//   });
// };

// onMounted(() => {
//   // Check screen width and attach touch event listeners if necessary
//   const screenWidth = window.innerWidth;
//   if (screenWidth <= 768) {
//     addTouchListeners();
//   }
// });
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.horizontal-scroll-container {
  overflow-x: hidden;
  position: relative;
  background-color: #fffdf6;

  border-top: solid 4px;
  border-image: linear-gradient(
      to right,
      #462523 0,
      #cb9b51 22%,
      #f6e27a 45%,
      #f6f2c0 50%,
      #f6e27a 55%,
      #cb9b51 78%,
      #462523 100%
    )
    1;
  border-image-slice: 1;
}

.screen {
  width: 100vw;
  height: 0vh;
}

.wrapper {
  width: 600%;
  height: 100vh;
  overscroll-behavior: none;
  display: flex;
  overflow: hidden;
  background-image: url("/images/artDeco/feather4.png");
  background-size: 75em;
  background-position: top left;
}

.image {
  width: 50vw;
  height: 100vh;
  font-size: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

:root {
  --transition-time: 3.3s;
}

/* section {
  width: 100%;
} */

/* FRONT OF CARD */
.horizontal-card {
  position: relative;
  height: 30vh;
  width: 100%;
  transition: ease all var(--transition-time);
  perspective: 1200px;

  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  /* background-color: rgba(251, 225, 208, 1); */
  /* background-color: #fffdf6; */
}

.horizontal-card:hover .cover,
.horizontal-card.touch .cover {
  transform: rotateX(0deg) rotateY(-180deg);
}

.horizontal-card:hover .cover-before,
.horizontal-card.touch .cover-before {
  transform: translateZ(60px);
}
/* FRONT COVER */
.cover {
  position: absolute;
  height: 9.2em;
  width: 9.2em;
  transform-style: preserve-3d;

  transition: ease all var(--transition-time);
  border-radius: 50%;
  background-image: linear-gradient(
    to right,
    #462523 0,
    #cb9b51 22%,
    #f6e27a 45%,
    #f6f2c0 50%,
    #f6e27a 55%,
    #cb9b51 78%,
    #462523 100%
  );
  z-index: 3000;
}

.cover-before {
  content: "";
  position: absolute;
  top: 0.12em;
  left: 0.12em;
  right: 0.12em;
  bottom: 0.12em;
  z-index: 2;
  transition: ease all var(--transition-time);
  transform-style: preserve-3d;
  /* transform: translateZ(0px); */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 9em;
  width: 9em;
}
.cover-before .title-container {
  height: 5em;
  width: 5em;
  border-radius: 50%;
  background-color: #fcf4ed;
  text-align: center;
  border: solid 1px #cb9b51;
}
.cover-before h3.title-card {
  position: relative;
  top: 2em;
  transform-style: preserve-3d;
  transition: ease all var(--transition-time);
  z-index: 3;
  font-size: 3rem;
  display: inline-block;
  font-family: "parkLane";
  background-image: linear-gradient(
    to right,
    #462523 0,
    #cb9b51 22%,
    #cb9b51 78%,
    #462523 100%
  );
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}
/* BACK OF CARD */
.horizontal-card-back {
  position: relative;
  height: 9.2em;
  width: 9.2em;
  background-color: #004152;
  transform-style: preserve-3d;
  transition: ease all var(--transition-time);
  transform: translateZ(-1px);
  border-radius: 50%;
}

.gold-container {
  height: 5em;
  width: 5em;
  border-radius: 50%;
  position: absolute;
  top: 2.1em;
  left: 2.1em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to right,
    #462523 0,
    #cb9b51 22%,
    #f6e27a 45%,
    #f6f2c0 50%,
    #f6e27a 55%,
    #cb9b51 78%,
    #462523 100%
  );

  z-index: 10;
}

img.cover-image {
  height: 4.8em;
  width: 4.8em;
  object-fit: contain;
  border-radius: 50%;
  position: absolute;
  transform: rotateX(0deg) rotateY(180deg);
  transform-style: preserve-3d;
  background-color: black;
}
.animated-text {
  position: absolute;
  height: 100%;
  width: 100%;
  transform-style: preserve-3d;
  transform: rotateX(0deg) rotateY(180deg);
}

.animated-text .text-wrapper {
  position: absolute;
  height: 100%;
  width: 100%;
  transform-style: preserve-3d;
  animation: rotateText 10s linear infinite;
}

@keyframes rotateText {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.character {
  position: absolute;
  left: 50%;
  transform-origin: 0 3.5em;
  position: absolute;
  font-family: "parkLane";
  font-size: 5rem;
  color: #cb9b51;
  padding-top: 1rem;
}

@media screen and (max-width: 1200px) {
  .cover,
  .horizontal-card-back {
    height: 7em;
    width: 7em;
  }
  .horizontal-card {
    position: relative;
  }
  .gold-container {
    height: 4em;
    width: 4em;
    top: 1.5em;
    left: 1.5em;
  }
  img.cover-image {
    height: 3.5em;
    width: 3.5em;
  }
  .cover-before {
    height: 6.8em;
    width: 6.8em;
  }
  .cover-before .title-container {
    height: 4em;
    width: 4em;
  }
  .cover-before h3.title-card {
    font-size: 2.5rem;
    top: 1.5em;
  }
  .character {
    font-size: 3.5rem;
    left: 50%;
    transform-origin: 0em 4em;
  }
}

/* @media screen and (max-width: 768px) {
  .horizontal-scroll-container {
    background-color: rgba(251, 225, 208, 1);
  }
  .wrapper {
    padding-top: 10em;
    padding-bottom: 150em;
    width: 100%;
    flex-direction: column;
    overflow: hidden;
  }
  .horizontal-card {
    background-color: transparent;
    height: 45vh;
  }
  .image {
    width: 100%;
    height: auto;
  }

  .horizontal-scroll-container {
    overflow-x: hidden;
  }
}
@media screen and (max-width: 600px) {
  .cover,
  .horizontal-card-back {
    height: 6em;
    width: 6em;
  }
  .horizontal-card {
    position: relative;
  }
  .gold-container {
    height: 4em;
    width: 4em;
    top: 1em;
    left: 1em;
  }
  img.cover-image {
    height: 3.5em;
    width: 3.5em;
  }
  .cover-before .title-container {
    height: 4em;
    width: 4em;
  }
  .cover-before h3.title-card {
    font-size: 2.5rem;
    top: 1.5em;
  }
  .animated-text {
    display: none;
  }

  .wrapper {
    background-size: 55em;
    background-position: right;
  }
}
@media screen and (max-width: 400px) {
  .cover,
  .horizontal-card-back {
    height: 4em;
    width: 4em;
  }
  .horizontal-card {
    position: relative;
    padding: 0;
    overflow-x: hidden;
  }
  .gold-container {
    height: 4em;
    width: 4em;
    top: 0em;
    left: 0em;
    overflow-x: hidden;
  }
  img.cover-image {
    height: 3.5em;
    width: 3.5em;
    overflow-x: hidden;
  }
  .cover-before {
    height: 3.5em;
    width: 3.5em;
    top: 0.9rem;
    left: 0.9rem;
  }
  .cover-before .title-container {
    height: 2.5em;
    width: 2.5em;
  }
  .cover-before h3.title-card {
    font-size: 2rem;
    top: 0.5em;
  }
  .animated-text {
    display: none;
  }
  .wrapper {
    padding-bottom: 120em;
  }

  .horizontal-card {
    background-color: transparent;
    height: 35vh;
  }
} */
</style>
