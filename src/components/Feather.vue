<template>
  <div class="feather-container">
    <div class="feder-2">
      <div class="feder-2-wrapper">
        <div class="feder-2-down">
          <div class="feder-2-side">
            <img src="http://clausgehrke.de/img/feather.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="feder-1">
      <div class="feder-wrapper">
        <div class="feder-down">
          <div class="feder-side">
            <img src="http://clausgehrke.de/img/feather.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

const down = ref(null);
const side = ref(null);

onMounted(() => {
  const tl = gsap.timeline({ delay: 0.5, repeat: -1 });
  tl.to(down.value, { duration: 1, opacity: 1 })
    .to(down.value, { duration: 5, y: 400, ease: "none" }, "-=1")
    .to(down.value, { duration: 1, opacity: 0 }, "-=1");

  const tl2 = gsap.timeline({ repeat: -1 });
  tl2
    .to(side.value, { duration: 1, x: 150, ease: "power1.inOut" })
    .to(side.value, { duration: 1, x: 0, ease: "power1.inOut" });
});
</script>

<style>
.feather-container {
  background: #ccc;
}

.feder-wrapper {
  animation: fade 5s infinite linear;
}

.feder-down {
  animation: down 5s infinite linear;
}

.feder-side {
  animation: side 2s infinite ease-in-out;
}

.feder-wrapper {
  animation: fade 5s infinite linear;
}
.feder-2-down {
  opacity: 0;
  position: absolute;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes down {
  0% {
    transform: translateY(-200px);
  }
  50% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(200px);
  }
}

@keyframes side {
  0% {
    transform: translateX(-100px);
  }
  50% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(-100px);
  }
}
</style>
