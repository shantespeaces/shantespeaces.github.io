<template>
  <div class="neumorphisme41 neumorphisme"></div>
  <div class="neumorphisme42 neumorphisme"></div>
  <div class="neumorphisme43 neumorphisme"></div>
  <div class="neumorphisme44 neumorphisme"></div>
  <div class="neumorphisme45 neumorphisme"></div>
  <div class="neumorphisme46 neumorphisme"></div>
  <div class="neumorphisme47 neumorphisme"></div>
  <div class="neumorphisme48 neumorphisme"></div>
  <div class="neumorphisme49 neumorphisme"></div>
  <div class="neumorphisme50 neumorphisme"></div>
  <div class="neumorphisme51 neumorphisme"></div>
  <div class="neumorphisme52 neumorphisme"></div>
  <div class="neumorphisme53 neumorphisme"></div>
  <div class="neumorphisme54 neumorphisme"></div>
  <div class="neumorphisme55 neumorphisme"></div>
  <div class="neumorphisme56 neumorphisme"></div>
  <div class="neumorphisme57 neumorphisme"></div>
  <img src="/images/goldDot.svg" class="neumorphisme58 neumorphisme" alt="" />
  <img src="/images/goldDot1.svg" class="neumorphisme58 neumorphisme" alt="" />
  <img src="/images/goldDot.svg" class="neumorphisme58 neumorphisme" alt="" />
  <img src="/images/goldDot1.svg" class="neumorphisme58 neumorphisme" alt="" />
  <img
    src="/images/goldCircle.png"
    class="neumorphisme58 neumorphisme"
    alt=""
  />
  <img
    src="/images/goldCircle.png"
    class="neumorphisme58 neumorphisme"
    alt=""
  />
  <img src="/images/goldDot.svg" class="neumorphisme58 neumorphisme" alt="" />
  <img src="/images/goldDot1.svg" class="neumorphisme58 neumorphisme" alt="" />
  <img src="/images/goldDot.svg" class="neumorphisme58 neumorphisme" alt="" />
  <img src="/images/goldDot1.svg" class="neumorphisme58 neumorphisme" alt="" />
  <img
    src="/images/goldCircle.png"
    class="neumorphisme58 neumorphisme"
    alt=""
  />
  <img
    src="/images/goldCircle.png"
    class="neumorphisme58 neumorphisme"
    alt=""
  />
</template>
<script setup>
import { onMounted, ref } from "vue";

const numberOfCircles = ref(10);

onMounted(() => {
  const setRandomPosition = () => {
    const neumorphismeElements = document.querySelectorAll(
      '.neumorphismes > div[class^="neumorphisme"], .neumorphismes > img[class^="neumorphisme"]'
    );

    neumorphismeElements.forEach((element) => {
      const randomTop = Math.random() * 100;
      const randomLeft = Math.random() * 100;

      element.style.top = `calc(${randomTop}% - 50px)`;
      element.style.left = `calc(${randomLeft}% - 50px)`;
      element.classList.add("float-up");
    });
  };

  setRandomPosition();
});
</script>
<style>
.neumorphisme58 {
  position: absolute;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  z-index: 1;
}
.neumorphisme54,
.neumorphisme55,
.neumorphisme56,
.neumorphisme57 {
  position: absolute;
  z-index: 1;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 10px 10px 20px #bca399, -10px -10px 20px #feddcf;
  /* background: #eceff1;
  box-shadow: 5px 5px 10px #c7c7c7, -5px -5px 10px #f9f9f9; */
}
.neumorphisme43,
.neumorphisme44,
.neumorphisme45 {
  position: absolute;
  z-index: 1;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 10px 10px 20px #bca399, -10px -10px 20px #feddcf;
  /* background: #eceff1;
  box-shadow: 5px 5px 10px #c7c7c7, -5px -5px 10px #f9f9f9; */
}

.neumorphisme46,
.neumorphisme47,
.neumorphisme48,
.neumorphisme49 {
  position: absolute;
  z-index: 1;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  /* background: #fff7f2;
  box-shadow: 8px 8px 10px #e0d9d5, -8px -8px 10px #ffffff; */
  /* background: #ddc0b4; */
  background-color: white;
  background: linear-gradient(145deg, #eccdc1aa, #feddcf);
  box-shadow: 5px 5px 10px #bca39973, -5px -5px 10px #feddcf9d;
}

.neumorphisme51,
.neumorphisme52,
.neumorphisme53 {
  position: absolute;
  z-index: 1;
  width: 100px;
  height: 100px;
  /* z-index: 3; */
  border-radius: 50%;
  /* background: linear-gradient(145deg, #fffbf1, #e6d4cb); */
  box-shadow: 8px 8px 10px #e0cfc6, -8px -8px 10px #fffffc;
  /* background: linear-gradient(145deg, #eccdc19d, #c7ada2);
  box-shadow: 11px 11px 22px #b79f95, -11px -11px 22px #ffe1d3; */
}
.neumorphisme {
  position: absolute;
  /* width: 100px;
  height: 100px; */
  border-radius: 50%;
  background-color: white;
  z-index: 1;
}

@keyframes floatUp {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-80px);
  }
  100% {
    transform: translateY(0);
  }
}

.float-up {
  animation: floatUp 20s ease-in-out infinite;
}
</style>
