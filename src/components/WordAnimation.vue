<template>
  <div class="neumorphismes">
    <Neumorphisme />
    <section class="wordAnimation d-flex">
      <div class="welcome">
        <p>welcome to</p>
      </div>
      <div class="word-container">
        <div class="d-flex">
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
        <div class="enter-wrapper d-flex">
          <div
            class="enter-container d-flex animate__animated animate__fadeInDown animate__slow 1s animate__delay-0.5s"
          >
            <p class="enter">come in!</p>

            <div class="enter-arrow" @click="skipAnimation"></div>
          </div>
          <div v-if="remainingSeconds > 0">
            <p class="enter-now">
              Play for <span class="seconds">{{ remainingSeconds }}</span> s OR
              click to enter now!
            </p>
          </div>
        </div>
      </div>

      <p class="warning">
        Im under Construction, but come in and see where im at. I hope you
        enjoy!
      </p>
    </section>
  </div>
</template>

<script setup props="props">
import { ref, onMounted, defineProps } from "vue";
import Neumorphisme from "../components/Neumorphisme.vue";

const shante = ref(["S", "H", "A", "N", "T", "É", "'", "S"]);
const port = ref(["P", "O", "R", "T", "-"]);
const folio = ref(["F", "O", "L", "I", "O"]);
const props = defineProps({
  remainingSeconds: Number,
});
const emit = defineEmits(["skipAnimation"]);

const skipAnimation = () => {
  emit("skipAnimation");
};

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
  margin: 5em 0em 0em 5em;
}

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
.welcome p {
  font-family: "League Script";
  font-size: 3em;
  background-image: var(--goldToRightDark);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  font-weight: bold;
  padding-left: 0.3em;
  z-index: 1000;
  position: relative;
}
.enter-wrapper {
  flex-direction: column;
  z-index: 1000;
}

p.enter {
  font-family: "League Script";
  font-size: 4em;
  background-image: var(--goldToRightDark);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  font-weight: bold;
  z-index: 1000;
  margin-bottom: 0;
}
p.enter-now {
  text-transform: uppercase;
  letter-spacing: 2px;
  background-image: var(--goldToRightDark);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  font-size: 1.3em;
  z-index: 1000;
}
.enter-arrow {
  height: 2em;
  width: 2em;
  border: solid;
  border-image: var(--goldToBottomYellow) 1;
  border-image-slice: 1;
  border-width: 0 0.3em 0.3em 0;
  display: inline-block;
  transform: rotate(-45deg);
  margin: 2em 0 0 2em;
  z-index: 1000;
  cursor: pointer;
  transition: height 0.3s ease, width 0.3s ease;
}
.enter-arrow:hover {
  height: 2.5em;
  width: 2.5em;
}
.seconds {
  font-size: 2em;
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
  -webkit-text-stroke: 1px #4a2b2acd;
}

.port,
.folio {
  font-size: 18.5rem;
  background-image: var(--goldToRight);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-stroke: 1px #4a2b2acd;
}
.word span {
  display: inline-block;
  letter-spacing: 1.5rem;
  user-select: none;
  line-height: 1.1;
  font-family: "Parklane";
}
.word span.port,
.word span.folio {
  cursor: pointer;
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
/* SHANTE */
/* H, N, E */
.word span:nth-child(2),
.word span:nth-child(4),
.word span:nth-child(6) {
  animation: colorPulseLight 5s infinite alternate;
}
/* A, ' */
.word span:nth-child(3),
.word span:nth-child(7) {
  animation: colorPulse 3s infinite alternate;
}
/* S, T, S */
.word span:nth-child(1),
.word span:nth-child(5),
.word span:nth-child(8) {
  background-image: var(--goldToRightDark);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  animation: colorPulse 3s infinite alternate;
}
/* PORT FOLIO */
/* P */
.word span:nth-child(10) {
  background-image: var(--goldToBottomYellow);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  animation: colorPulse 5s infinite alternate;
}
/* R */
.word span:nth-child(12) {
  background-image: var(--goldToBottomYellow);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  animation: flicker 3s infinite alternate;
  opacity: 1;
}
/* T */
.word span:nth-child(13) {
  background-image: var(--goldToBottomDark);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  animation: flicker 3s infinite alternate;
}

/* F, I */
.word span:nth-child(16),
.word span:nth-child(19) {
  background-image: var(--goldToBottomDark);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  animation: colorPulse 10s infinite alternate;
}

/* O,L */
.word span:nth-child(17),
.word span:nth-child(18) {
  background-image: var(--goldToRight);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  animation: flicker 3s infinite alternate;
  opacity: 1;
}

@keyframes flicker {
  10% {
    opacity: 1;
    background-image: var(--goldToRight);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }
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
    opacity: 1;
    animation-delay: 6s;
  }
}
/* O */
.word span:nth-child(11),
.word span:nth-child(17),
.word span:nth-child(20) {
  background-image: var(--goldToRight);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  animation: colorPulse 5s linear infinite, flicker 3s infinite alternate;
}

@keyframes colorPulse {
  0% {
    background-image: var(--goldToBottom);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }
  10% {
    background-image: var(--goldToBottom);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }
  20% {
    color: #cb9a51d5;
  }
  50% {
    background-image: var(--goldToBottomDark);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }
  60% {
    color: #f0cd7b;
  }
  70% {
    background-image: var(--goldToBottom);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }
  100% {
    background-image: var(--goldToBottomDark);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }
}
@keyframes colorPulseLight {
  0% {
    background-image: var(--goldToBottom);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }
  10% {
    background-image: var(--goldToBottom);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }
  20% {
    color: #cb9a51d5;
  }
  50% {
    background-image: var(--goldToBottomYellow);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }
  60% {
    color: #f0cd7b;
  }
  70% {
    background-image: var(--goldToBottom);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }
  100% {
    background-image: var(--goldToBottomYellow);
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
  }
}
/* ON CLICK ACTIVE */
/* P, T */
.word span:nth-child(10).active,
.word span:nth-child(13).active {
  animation: balance 1.5s ease-out;
  transform-origin: bottom left;
  /* background-image: var(--goldToBottom);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text; */
  color: #a6084543;
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
/* R */
.word span:nth-child(12).active {
  animation: falling 2s ease-out;
  transform-origin: bottom center;
  /* color: #bca399; */
  /* color: #b8523399; */
  color: #e30a5d74;
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
/* F */
.word span:nth-child(16).active {
  animation: rotate 1s ease-out;
  /* color: #002d40; */
  color: #e30a5d98;
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
/* L */
.word span:nth-child(18).active {
  animation: shrinkjump 1s ease-in-out;
  transform-origin: bottom center;
  /* background-image: var(--goldToRightDark); */
  color: #e30a5d98;
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
/* I */
.word span:nth-child(19).active {
  animation: toplong 1.5s linear;
  /* background-image: var(--goldToRight);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text; */
  color: #a6084543;
}

@keyframes toplong {
  10%,
  40% {
    transform: translateY(-20vh) scaleY(1);
  }

  90% {
    transform: translateY(-20vh) scaleY(4);
  }
}
/* O */
.word span:nth-child(11).active,
.word span:nth-child(17).active,
.word span:nth-child(20).active {
  animation: flipping 3s linear;
  /* color: #bca399; */
  color: #002d40;
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
@media screen and (max-width: 1901px) {
  .port,
  .folio {
    font-size: 17em;
  }
}
@media screen and (max-width: 1800px) {
  .port,
  .folio {
    font-size: 16em;
  }
  .enter-container {
    padding-top: 5em;
  }
}
@media screen and (max-width: 1700px) {
  .port,
  .folio {
    font-size: 15em;
  }
}
@media screen and (max-width: 1600px) {
  .shante {
    font-size: 6em;
  }
  .port,
  .folio {
    font-size: 13.5rem;
  }
}

@media screen and (max-width: 1500px) {
  .port,
  .folio {
    font-size: 12.5rem;
  }
}
@media screen and (max-width: 1400px) {
  .port,
  .folio {
    font-size: 11.5rem;
  }
}
@media screen and (max-width: 1300px) {
  .port,
  .folio {
    font-size: 10.5rem;
  }
}
@media screen and (max-width: 1205px) {
  .word span:nth-child(16) {
    margin-left: 1.5em;
  }
  .port {
    font-size: 17rem;
  }
  .folio {
    font-size: 9rem;
  }
  .br {
    display: block;
  }

  .enter-container {
    padding-top: 0;
  }
}

@media screen and (max-width: 992px) {
  .rotate {
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  .shante {
    font-size: 3.5rem;
  }
  .port {
    font-size: 13.5rem;
  }
  .folio {
    font-size: 6rem;
  }
  .word span:nth-child(16) {
    margin-left: 2em;
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

  .enter-container {
    align-self: flex-end;
    margin-right: 5em;
  }
}

@media screen and (max-width: 768px) {
  .wordAnimation {
    margin-left: 4em;
  }
  .port {
    font-size: 10.5rem;
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
  .warning {
    padding-right: 3em;
  }
}

@media screen and (max-width: 615px) {
  .wordAnimation {
    margin-right: 0;
    margin-top: 1em;
  }
  .word {
    margin-left: 3em;
    margin-bottom: 1em;
  }
  .shante {
    font-size: 3em;
  }
  .port {
    font-size: 15rem;
  }
  .br {
    display: block;
  }
  .folio {
    font-size: 4.5rem;
  }
  .word span:nth-child(16) {
    margin-left: 0em;
  }
  .click-container {
    margin-left: 3em;
  }
  .enter-container {
    margin-left: 3em;
    margin-right: 0em;
  }
  p.enter {
    font-size: 3em;
    padding-top: 0.4em;
  }
  .enter-container {
    align-self: center;
  }
  .enter-arrow {
    height: 1.5em;
    width: 1.5em;
    padding: 1em;
    margin-bottom: 1em;
  }
  .click-me p {
    margin-bottom: 0;
  }
  .warning {
    font-size: 1.1rem;
  }
}
@media screen and (max-width: 502px) {
  .word {
    margin-left: 2em;
    margin-right: 0;
  }
  .wordAnimation {
    margin-right: 0;
  }

  .shante {
    font-size: 1.7em;
  }
  .port {
    font-size: 11rem;
  }
  .folio {
    font-size: 4rem;
  }

  .enter-container {
    margin-left: 0;
  }
  .warning {
    margin: 1em;
    font-size: 1.2rem;
    padding: 0;
  }
}
@media screen and (max-width: 400px) {
  .wordAnimation {
    margin-right: 0;
    margin-left: 0em;
  }
  .rotate {
    margin: 0em;
  }
  .shante {
    font-size: 1.6rem;
  }

  .port {
    font-size: 11rem;
  }
  .folio {
    font-size: 3.8rem;
  }

  .enter-container {
    margin-left: 0em;
    margin-right: 1em;
    width: 100%;
  }
}
</style>
