<template>
  <section class="scrolling-text-wrapper">
    <div class="scrolling-text-container">
      <span class="scrolling-text">
        Showcase | UX | UI | Javascript | Showcase | React | SASS | Showcase |
        Bootsrap | Html | Showcase | VueJs | Laravel | MySql | Showcase | Css |
        Php
      </span>
    </div>
  </section>
</template>
<script></script>
<style>
.scrolling-text-wrapper {
  overflow-x: hidden;
  width: 100%;
  height: 23em;
  overflow: hidden;
  letter-spacing: 20px;
  background-color: #fffdf6;
  border-top: solid 3px;
  border-bottom: solid 2px;
  border-image: var(--goldToRight) 1;
  border-image-slice: 1;
  position: relative;
}
.scrolling-text-container {
  padding-top: 6em;
}
span.scrolling-text {
  position: absolute;
  padding: none;
  font-size: 7em;
  text-transform: uppercase;
  font-family: "cannes";
  font-style: normal;
  background-image: linear-gradient(
    to right,
    #462523 0,
    #cb9b51 5%,
    #f6e27a 15%,
    #cb9b51 20%,
    #462523 25%,
    #cb9b51 30%,
    #f6e27a 35%,
    #cb9b51 40%,
    #462523 45%,
    #cb9b51 50%,
    #f6e27a 55%,
    #cb9b51 60%,
    #462523 65%,
    #cb9b51 70%,
    #f6e27a 75%,
    #cb9b51 80%,
    #462523 85%,
    #cb9b51 90%,
    #f6e27a 95%,
    #cb9b51 100%
  );
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: anim 80s linear infinite;
  height: 200px;
  text-wrap: none;
  white-space: nowrap;
}

@keyframes anim {
  100% {
    transform: translateX(-100%);
  }
}
@media screen and (max-width: 1200px) {
  .scrolling-text-wrapper {
    height: 20em;
  }
  .scrolling-text-container {
    padding-top: 5.5em;
  }
  span.scrolling-text {
    font-size: 6em;
  }
}
@media screen and (max-width: 992px) {
  .scrolling-text-wrapper {
    height: 17em;
  }
  .scrolling-text-container {
    padding-top: 4em;
  }
  span.scrolling-text {
    font-size: 5.5em;
  }
}
@media screen and (max-width: 768px) {
  .scrolling-text-wrapper {
    height: 16em;
  }
  .scrolling-text-container {
    padding-top: 4em;
  }
  span.scrolling-text {
    font-size: 5.5em;
  }
}

@media screen and (max-width: 576px) {
  .scrolling-text-wrapper {
    height: 14em;
  }
  .scrolling-text-container {
    padding-top: 3.5em;
  }
  span.scrolling-text {
    font-size: 5em;
  }
}
@media screen and (max-width: 360px) {
  .scrolling-text-wrapper {
    height: 13em;
  }
  .scrolling-text-container {
    padding-top: 3em;
  }
  span.scrolling-text {
    font-size: 4.5em;
  }
}
</style>
