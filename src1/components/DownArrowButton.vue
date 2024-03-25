<template>
  <div class="down-arrow-button-container">
    <div class="triangle">
      <button class="down-arrow-button" @click="scrollToNextViewport">
        <span class="arrow bigger-arrow">&#9660;</span>
      </button>
    </div>
  </div>
</template>
<script setup>
const scrollToNextViewport = () => {
  const nextViewport = document.querySelector(".next-viewport");
  if (nextViewport) {
    nextViewport.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
<style>
.triangle {
  margin-top: 2em;
  position: relative;
  width: 0;
  height: 0;
  border-left: 6em solid transparent;
  border-right: 6em solid transparent;
  border-top: 10em solid black;
  transition: transform 0.2s;
}

.triangle:hover {
  transform: translateY(-25px);
}

.down-arrow-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.down-arrow-button {
  position: absolute;
  bottom: -3em;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  background-color: transparent;
}
.bigger-arrow {
  font-size: 8em;
}
.arrow {
  background-image: var(--goldToRightYellow);
  color: transparent;
  -webkit-background-clip: text;
  cursor: pointer;
}

.arrow:hover {
  background-image: var(--goldToBottomYellow);
  color: transparent;
  -webkit-background-clip: text;
  cursor: pointer;
  transition: color 0.3s ease;
}
button p {
  font-size: 1.1rem;
}
</style>
