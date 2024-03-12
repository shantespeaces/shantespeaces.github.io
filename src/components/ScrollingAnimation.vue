<template>
  <div class="scrolling-animation">
    <div class="contenue">
      <section class="animation">
        <div class="first">
          <div>UX UI designer</div>
        </div>
        <div class="second">
          <div>Web Developper</div>
        </div>
        <div class="third">
          <div>Montréal</div>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup></script>
<style>
/* .scrolling-animation {
  position: fixed;
} */
.contenue {
  background-image: var(--goldToRightDark);
  color: transparent;
  -webkit-background-clip: text;
  font-size: 2.26rem;
  text-transform: uppercase;
  display: flex;
  position: relative;
  align-self: center;
  z-index: 3000;
  font-family: "parkLane";
  text-align: center;
  letter-spacing: 5px;
}

.animation {
  height: 50px;
  overflow: hidden;
}

.animation > div > div {
  height: 2.81rem;
  margin-bottom: 2.81rem;
  display: inline-block;
}

.animation div:first-child {
  animation: text-animation 10s infinite;
}

@keyframes text-animation {
  0% {
    margin-top: 0;
  }

  10% {
    margin-top: 0;
  }

  20% {
    margin-top: -5.62rem;
  }

  30% {
    margin-top: -5.62rem;
  }

  40% {
    margin-top: -11.24rem;
  }

  60% {
    margin-top: -11.24rem;
  }

  70% {
    margin-top: -5.62rem;
  }

  80% {
    margin-top: -5.62rem;
  }

  90% {
    margin-top: 0;
  }

  100% {
    margin-top: 0;
  }
}
@media screen and (max-width: 992px) {
  .contenue {
    font-size: 2rem;
  }
}
@media screen and (max-width: 768px) {
  .contenue {
    display: none;
  }
}
</style>
