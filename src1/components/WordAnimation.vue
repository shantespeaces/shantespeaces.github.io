<template>
  <div class="neumorphismes">
    <Neumorphisme />
    <section
      class="wordAnimation d-flex justify-content-center align-items-center"
    >
      <div class="word-container">
        <div>
          <div
            class="click-me-left animate__animated animate__fadeInDown animate__slow 1s animate__delay-0.5s"
          >
            <p>click me!</p>
            <img
              class="arrow-icon-left d-flex justify-content-center align-items-center"
              src="/images/semicircular-up-arrow.png"
              alt=""
            />
          </div>
          <div class="centered">
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
                  v-for="(letter, index) in portfolio"
                  :key="index"
                  @click="handleClick(index)"
                  :class="{ active: isActive(index) }"
                  class="port"
                >
                  {{ letter }}
                </span>
              </div>
            </div>
          </div>

          <!-- <div
          class="click-me-right d-flex justify-content-center align-items-center"
        >
          <img
            class="arrow-icon-right"
            src="/images/semicircular-up-arrow.png"
            alt=""
          />
          <p>click me</p>
        </div> -->
        </div>
      </div>
      <div
        class="enter d-flex animate__animated animate__fadeInDown animate__slow 1s animate__delay-0.5s"
      >
        <p>Come In!</p>
        <div class="arrow-enter-container" @click="enter">
          <div class="arrow-enter"></div>
        </div>
      </div>
      <p>
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
const portfolio = ref(["P", "O", "R", "T", "F", "O", "L", "I", "O"]);
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

// const enter = () => {
//   const word = document.querySelector(".neumorphismes");
//   if (word) {
//     // Add the desired classes
//     word.classList.add(
//       "animate__animated",
//       "animate__fadeInUp",
//       "animate__slow",
//       "1s",
//       "animate__delay-0.5s"
//     );
//   }
// };
</script>

<style>
HTML CSS JSResult Skip Results Iframe EDIT ON .word {
  perspective: 1000px;
}

.wordAnimation {
  height: 100vh;
  flex-direction: column;
}

.centered {
  display: flex;
  justify-content: center;
  align-items: center;
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
.enter {
  margin-left: 50em;
  z-index: 1000;
}
.enter p {
  font-family: "League Script";
  font-size: 8em;
  background-image: var(--goldToRightDark);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  font-weight: bold;
  text-shadow: 0 0 20px #fff, 0 0 10px #f6e27a, 0 0 50px #cb9b51;
  z-index: 1000;
}
.arrow-enter-container {
  position: relative;
  right: 0;
  z-index: 1000;
}
.arrow-enter {
  height: 6em;
  width: 6em;
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
.click-me-left {
  position: relative;
  left: -10em;
  top: 35em;
  height: 5em;
  width: 15em;
  flex-direction: column;
  z-index: 100;
}
.arrow-icon-left {
  position: relative;
  left: 8em;
  height: 2.5em;
  width: 2.5em;
  transform: rotate(20deg);
}
/* .click-me-right {
  position: relative;
  top: 45em;
  right: 5em;
  height: 5em;
  width: 15em;
  flex-direction: column;
  z-index: 100;
}
.arrow-icon-right {
  height: 2.5em;
  width: 2.5em;
  transform: rotate(300deg);
}
.click-me-right p, */
.click-me-left p {
  text-transform: uppercase;
  background-image: var(--goldToRightDark);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  font-size: 2em;
}
.word span {
  cursor: pointer;
  display: inline-block;
  letter-spacing: 1.5rem;
  font-size: 13rem;
  user-select: none;
  line-height: 1.1;
  font-family: "Parklane";
  color: #ffffff;
  text-shadow: 0 0 10px rgba(255, 236, 222, 0.8),
    0 0 20px rgba(255, 236, 222, 0.8), 0 0 25px rgba(255, 236, 222, 0.8),
    0 0 5px rgb(188, 139, 121), 0 0 30px rgba(255, 236, 222, 0.8),
    0 0 40px rgba(201, 174, 164, 0.8), 0 0 50px rgba(201, 174, 164, 0.8),
    0 0 60px rgba(141, 103, 90, 0.8);
}

.word span:nth-child(1),
.word span:nth-child(4),
.word span:nth-child(10),
.word span:nth-child(12),
.word span:nth-child(13),
.word span:nth-child(14),
.word span:nth-child(16),
.word span:nth-child(17) {
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
.word span:nth-child(15),
.word span:nth-child(18) {
  color: white;
  animation: colorPulse 3s linear infinite, flicker 3s infinite alternate;
}

@keyframes colorPulse {
  0% {
    color: white;
  }

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
  animation: falling1 2s ease-out;
  transform-origin: bottom center;
}

@keyframes falling1 {
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
.word span:nth-child(14).active {
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
.word span:nth-child(16).active {
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
.word span:nth-child(17).active {
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
.word span:nth-child(18).active {
  animation: falling 3s linear;
}

@keyframes falling {
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
</style>
