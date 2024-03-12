<template>
  <div class="word-container">
    <!-- <div class="click-me-left">
        <p>click me!</p>
        <img
          class="arrow-icon-left"
          src="/images/semicircular-up-arrow.png"
          alt=""
        />
      </div> -->
    <div class="word">
      <span
        v-for="(letter, index) in word"
        :key="index"
        @click="handleClick(index)"
        :class="{ active: isActive(index) }"
      >
        {{ letter }}
      </span>
    </div>
  </div>
  <!-- <div class="click-me-right">
      <p>click me</p>
      <img
        class="arrow-icon-right"
        src="/images/semicircular-up-arrow.png"
        alt=""
      />
    </div> -->
</template>

<script setup>
import { ref, onMounted } from "vue";

const word = ref(["P", "O", "R", "T", "F", "O", "L", "I", "O"]);
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
/* .main-container {
  position: relative;
} */
.word-container {
  display: flex;
  justify-content: center;
  margin-top: 5em;
}
.word {
  margin-bottom: 3em;
}

/* .click-me-left {
  position: relative;
  left: 5em;
  bottom: 2em;
}
.arrow-icon-left {
  height: 2.5em;
  width: 2.5em;
  position: absolute;
  right: 5em;
  bottom: 10em;

  transform: rotate(120deg);
}
.click-me-right {
  position: relative;
  right: 5em;
  top: 10em;
}
.arrow-icon-right {
  height: 2.5em;
  width: 2.5em;
  position: absolute;
  left: 4em;
  bottom: 12em;
  transform: rotate(300deg);
} */
button.down {
  margin-bottom: 8em;
}
.word span {
  cursor: pointer;
  display: inline-block;
  letter-spacing: 1.5rem;
  font-size: 13rem;
  user-select: none;
  line-height: 0.8;
  font-family: "Libre Barcode 128 Text", system-ui;
  color: #ffffff;
}

.word span:nth-child(1).active {
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

.word span:nth-child(2).active {
  color: black;
  animation: colorPulse 2s linear infinite, backgroundChange 2s linear infinite;
  background-image: linear-gradient(to right, #ef402f, #ff8c00);
  -webkit-background-clip: text;
}

@keyframes colorPulse {
  0%,
  100% {
    color: black;
  }

  50% {
    color: #ef402f;
  }
}

@keyframes backgroundChange {
  0%,
  100% {
    background-position: 100%;
  }

  50% {
    background-position: 0%;
  }
}

/* @keyframes shrinkjump {
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
} */

.word span:nth-child(3).active {
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

.word span:nth-child(4).active {
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

.word span:nth-child(5).active {
  background: linear-gradient(
      45deg,
      #ef402f 25%,
      transparent 25%,
      transparent 75%,
      #ef402f 75%,
      #ef402f
    ),
    linear-gradient(
      45deg,
      black 25%,
      transparent 25%,
      transparent 75%,
      black 75%,
      black
    );

  background-size: 20px 20px;
  color: transparent;
  animation: gradientPulse 8s linear infinite;
  -webkit-background-clip: text;
}

@keyframes gradientPulse {
  0%,
  100% {
    background-position: 0% 0%;
  }

  50% {
    background-position: 100% 100%;
  }

  60%,
  70% {
    background-position: 0% 0%;
  }
}

.word span:nth-child(6).active {
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

.word span:nth-child(7).active {
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

.word span:nth-child(8).active {
  color: transparent;
  background: linear-gradient(to right, #ef402f, #8c64d6, black);
  -webkit-background-clip: text;
  background-size: 200% 100%;
  animation: gradientPulse 3s linear infinite;
}

@keyframes gradientPulse {
  0%,
  100% {
    background-position: 0%;
  }

  50% {
    background-position: 100%;
  }
}

/* @keyframes falling {
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
} */

.word span:nth-child(9).active {
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

.clickable {
  /* Pause animations when clickable class is present */
  pointer-events: none;
  animation-play-state: paused !important;
}
</style>
