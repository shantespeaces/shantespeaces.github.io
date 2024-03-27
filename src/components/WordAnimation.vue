<template>
  <div class="neumorphismes">
    <Neumorphisme />
    <section class="wordAnimation d-flex">
      <div class="word-container">
        <div class="centered d-flex">
          <div
            class="word animate__animated animate__fadeInDown animate__slow 1s animate__delay-0.5s"
          >
            <div class="rotate">
              <span
                v-for="(letter, index) in shante"
                :key="index"
                class="shante"
              >
                {{ letter }}
              </span>
              <br />

              <span
                v-for="(letter, index) in port"
                :key="index"
                @click="handleClick(index)"
                :class="{ active: isActive(index) }"
                class="port"
              >
                {{ letter }}
              </span>
              <br class="br" />

              <span
                v-for="(letter, index) in folio"
                :key="index"
                @click="handleClick(index)"
                :class="{ active: isActive(index) }"
                class="folio"
              >
                {{ letter }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="click-container d-flex justify-content-around">
        <div
          class="click-me animate__animated animate__fadeInDown animate__slow 1s animate__delay-0.5s"
        >
          <p>click the letters!</p>
        </div>
        <div
          class="enter-container d-flex animate__animated animate__fadeInDown animate__slow 1s animate__delay-0.5s"
        >
          <p class="enter">Come In!</p>

          <div class="enter-arrow"></div>
        </div>
      </div>
      <p class="warning">
        Im under Construction, but come in and see where im at. I hope you
        enjoy!
      </p>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Neumorphisme from "../components/Neumorphisme.vue";

const shante = ref(["S", "H", "A", "N", "T", "É", "'", "S"]);
const port = ref(["P", "O", "R", "T", "-"]);
const folio = ref(["F", "O", "L", "I", "O"]);
// const wordRef = ref(null);

onMounted(() => {
  const spans = document.querySelectorAll(".word span");

  spans.forEach((span, idx) => {
    span.addEventListener("click", () => {
      span.classList.add("active");
    });

    span.addEventListener("animationend", () => {
      span.classList.remove("active");
    });

    // Initial animation
    setTimeout(() => {
      span.classList.add("active");
    }, 500 * (idx + 1));
  });
});

const handleClick = (index) => {
  console.log(`Clicked on span ${index}`);
};

const isActive = (index) => {
  return true;
};
</script>

<style>
HTML CSS JSResult Skip Results Iframe EDIT ON .word {
  perspective: 1000px;
}

.wordAnimation {
  height: 100vh;
  flex-direction: column;
  margin: 10em 10em;
}

/* .centered {
  display: flex;

  flex-direction: column;
} */
.word {
  margin-bottom: 3em;
  z-index: 1000;
}
.rotate {
  -ms-transform: rotate(-5deg);
  -webkit-transform: rotate(-5deg);
  transform: rotate(-5deg);
}
.enter-container {
  z-index: 1000;
}
p.enter {
  font-family: "League Script";
  font-size: 7em;
  background-image: var(--goldToRightDark);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  font-weight: bold;
  text-shadow: 0 0 20px #fff, 0 0 10px #f6e27a, 0 0 50px #cb9b51;
  z-index: 1000;
}

.enter-arrow {
  height: 4em;
  width: 4em;
  border: solid;
  border-image: var(--goldToBottomYellow) 1;
  border-image-slice: 1;
  border-width: 0 0.3em 0.3em 0;
  display: inline-block;
  padding: 0.3em;
  transform: rotate(-45deg);
  margin: 2em 0 0 2em;
  z-index: 1000;
}

.click-me {
  z-index: 1000;
  align-self: start;
}

.click-me p {
  text-transform: uppercase;
  letter-spacing: 2px;
  background-image: var(--goldToRightDark);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  font-size: 1.6em;
  transform: rotate(-5deg);
}
.shante {
  font-size: 8rem;
}
.port,
.folio {
  font-size: 14.5rem;
}
.word span {
  cursor: pointer;
  display: inline-block;
  letter-spacing: 1.5rem;
  user-select: none;
  line-height: 1.1;
  font-family: "Parklane";
  color: #ffffff;
  text-shadow: 0 0 10px rgba(255, 236, 222, 0.8),
    0 0 20px rgba(255, 236, 222, 0.8), 0 0 25px rgba(255, 236, 222, 0.8),
    0 0 5px rgb(188, 139, 121), 0 0 30px rgba(255, 236, 222, 0.8),
    0 0 40px rgba(201, 174, 164, 0.8), 0 0 50px rgba(201, 174, 164, 0.8),
    0 0 10px rgba(141, 103, 90, 0.3);
}
.word span:nth-child(14) {
  display: none;
}
.br {
  display: none;
}
.warning {
  z-index: 1000;
  align-self: center;
}

/* LETTER ANIMATION */
.word span:nth-child(1),
.word span:nth-child(4),
.word span:nth-child(10),
.word span:nth-child(12),
.word span:nth-child(13),
.word span:nth-child(15),
.word span:nth-child(17),
.word span:nth-child(18) {
  color: white;
  opacity: 0.8;
  animation: flicker 3s infinite alternate;
}

@keyframes flicker {
  40% {
    opacity: 0.8;
  }
  42% {
    opacity: 0.1;
  }
  43% {
    opacity: 0.8;
  }
  45% {
    opacity: 0.1;
  }
  46% {
    opacity: 0.8;
  }

  100% {
    opacity: 0.8;
    animation-delay: 6s;
  }
}
.word span:nth-child(2),
.word span:nth-child(3),
.word span:nth-child(5),
.word span:nth-child(7),
.word span:nth-child(6),
.word span:nth-child(8),
.word span:nth-child(11),
.word span:nth-child(17),
.word span:nth-child(20) {
  color: (236, 205, 193, 0.667);
  animation: colorPulse 5s linear infinite, flicker 3s infinite alternate;
}

@keyframes colorPulse {
  0%,
  100% {
    color: white;
  }

  50% {
    color: rgba(236, 205, 193, 0.667);
  }
}

.word span:nth-child(10).active {
  animation: balance 1.5s ease-out;
  transform-origin: bottom left;
}

@keyframes balance {
  0%,
  100% {
    transform: rotate(0deg);
  }

  30%,
  60% {
    transform: rotate(-45deg);
  }
}
.word span:nth-child(12).active {
  animation: falling 2s ease-out;
  transform-origin: bottom center;
}

@keyframes falling {
  12% {
    transform: rotateX(240deg);
  }

  24% {
    transform: rotateX(150deg);
  }

  36% {
    transform: rotateX(200deg);
  }

  48% {
    transform: rotateX(175deg);
  }

  60%,
  85% {
    transform: rotateX(180deg);
  }

  100% {
    transform: rotateX(0deg);
  }
}

.word span:nth-child(13).active {
  animation: balance 1.5s ease-out;
  transform-origin: bottom left;
}

@keyframes balance {
  0%,
  100% {
    transform: rotate(0deg);
  }

  30%,
  60% {
    transform: rotate(-45deg);
  }
}
.word span:nth-child(16).active {
  animation: rotate 1s ease-out;
}

@keyframes rotate {
  20%,
  80% {
    transform: rotateY(180deg);
  }

  100% {
    transform: rotateY(360deg);
  }
}
.word span:nth-child(18).active {
  animation: shrinkjump 1s ease-in-out;
  transform-origin: bottom center;
}

@keyframes shrinkjump {
  10%,
  35% {
    transform: scale(2, 0.2) translate(0, 0);
  }

  45%,
  50% {
    transform: scale(1) translate(0, -150px);
  }

  80% {
    transform: scale(1) translate(0, 0);
  }
}
.word span:nth-child(19).active {
  animation: toplong 1.5s linear;
}

@keyframes toplong {
  10%,
  40% {
    transform: translateY(-48vh) scaleY(1);
  }

  90% {
    transform: translateY(-48vh) scaleY(4);
  }
}
.word span:nth-child(11).active,
.word span:nth-child(17).active,
.word span:nth-child(20).active {
  animation: flipping 3s linear;
}

@keyframes flipping {
  0% {
    transform: rotateX(0deg);
  }

  /* One full rotation */
  33.33% {
    transform: rotateX(360deg);
  }

  /* Two full rotations */
  66.66% {
    transform: rotateX(720deg);
  }

  /* Three full rotations */
  100% {
    transform: rotateX(1080deg);
  }
}

.clickable {
  /* Pause animations when clickable class is present */
  pointer-events: none;
  animation-play-state: paused !important;
}
.slide-leave-active {
  animation: slideOut 1.8s ease-in-out forwards;
}
@keyframes slideOut {
  0% {
    opacity: 1;
  }

  85% {
    opacity: 0.9;
  }

  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
}
@media screen and (max-width: 1800px) {
  .port,
  .folio {
    font-size: 13em;
  }
  .enter-container {
    padding-top: 10em;
  }
  p.enter {
    font-size: 6em;
  }
  .enter-arrow {
    height: 3em;
    width: 3em;
  }
}
@media screen and (max-width: 1700px) {
  .port,
  .folio {
    font-size: 12em;
  }
}
@media screen and (max-width: 1600px) {
  .shante {
    font-size: 5em;
  }
  .port,
  .folio {
    font-size: 11rem;
  }
  .enter-container {
    padding-top: 14em;
  }
  p.enter {
    font-size: 5.5em;
  }
  .enter-arrow {
    height: 3em;
    width: 3em;
  }
}

@media screen and (max-width: 1500px) {
  .port,
  .folio {
    font-size: 9.5rem;
  }
  .wordAnimation {
    margin-top: 15em;
  }
  .enter-container {
    padding-top: 13em;
  }
}
@media screen and (max-width: 1400px) {
  .port,
  .folio {
    font-size: 8.5rem;
  }
  .enter-container {
    padding-top: 14em;
  }
}
@media screen and (max-width: 1300px) {
  .port,
  .folio {
    font-size: 7.5rem;
  }
  .enter-container {
    padding-top: 13em;
  }
}
@media screen and (max-width: 1200px) {
  .word span:nth-child(16) {
    margin-left: 1.5em;
  }
  .port {
    font-size: 17rem;
  }
  .folio {
    font-size: 9rem;
  }
  .wordAnimation {
    margin-top: 9em;
  }
  .enter-container {
    padding-top: 5em;
  }
}
@media screen and (max-width: 1100px) {
  .port {
    font-size: 14rem;
  }
  .folio {
    font-size: 7.5rem;
  }
  p.enter {
    font-size: 4.5em;
  }
  .enter-arrow {
    height: 2.5em;
    width: 2.5em;
  }
  .enter-container {
    padding-top: 10em;
  }
}
@media screen and (max-width: 992px) {
  .wordAnimation {
    margin: 10em 3em;
  }
  /* .word {
    margin-left: 3.5em;
  } */
  .rotate {
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  .shante {
    font-size: 3.5rem;
  }
  .port {
    font-size: 15rem;
  }
  .folio {
    font-size: 6rem;
  }
  .word span:nth-child(16) {
    margin-left: 2.5em;
  }
  .click-container {
    flex-direction: column;
  }
  .click-me {
    font-size: 1rem;
  }
  .click-me p {
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  p.enter {
    font-size: 5em;
  }
  .enter-container {
    align-self: flex-end;
    padding-top: 5em;
  }
  .enter-arrow {
    height: 2em;
    width: 2em;
  }
}
@media screen and (max-width: 798px) {
  .port {
    font-size: 10rem;
  }
  .folio {
    font-size: 5.5rem;
  }
  .word span:nth-child(16) {
    margin-left: 1.5em;
  }

  .click-me p {
    font-size: 1.5rem;
    flex-direction: column;
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}
@media screen and (max-width: 600px) {
  .wordAnimation {
    margin: 10em 2em;
  }
  .word {
    margin-left: 3.5em;
  }
  .shante {
    font-size: 2.5rem;
  }
  .port {
    font-size: 7rem;
  }
  .folio {
    font-size: 4rem;
  }
  .br {
    display: block;
  }
  .enter-container {
    padding-top: 10em;
  }
  p.enter {
    font-size: 3.5em;
  }
  .enter-container {
    align-self: center;
  }
  .enter-arrow {
    height: 1.5em;
    width: 1.5em;
  }
}
@media screen and (max-width: 505px) {
  .wordAnimation {
    margin: 6em 0em;
  }
  .word {
    margin-left: 3.5em;
  }
  .shante {
    font-size: 2rem;
  }
  .port {
    font-size: 13rem;
  }
  .folio {
    font-size: 4rem;
  }
  .word span:nth-child(16) {
    margin-left: 0.3em;
  }
  .click-me {
    margin-left: 5em;
    margin-right: 5em;
  }
  .enter-container {
    padding-top: 5em;
  }

  .warning {
    font-size: 1rem;
    margin: 1em;
  }
}
@media screen and (max-width: 400px) {
  .wordAnimation {
    margin: 6em 0em;
  }
  .word {
    margin-left: 2em;
  }
  .shante {
    font-size: 1.5rem;
  }
  .port {
    font-size: 11rem;
  }
  .folio {
    font-size: 3.5rem;
  }
  .click-me {
    margin-left: 3em;
    margin-right: 3em;
  }
}
</style>
