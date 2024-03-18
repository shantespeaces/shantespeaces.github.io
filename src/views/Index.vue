<template>
  <Profile />
</template>

<script setup>
import Profile from "@/components/Profile.vue";
</script>

<style>
@font-face {
  font-family: "parkLane";
  src: url("@/assets/fonts/parklane.regular.otf") format("Opentype");
}
@font-face {
  font-family: "cannes";
  src: url("@/assets/fonts/cannes.otf") format("Opentype");
}
@font-face {
  font-family: "lePorsche";
  src: url("@/assets/fonts/lePorsche.otf") format("Opentype");
}
@font-face {
  font-family: "champagne";
  src: url("@/assets/fonts/champagne.ttf") format("Truetype");
}

:root {
  --goldToRight: linear-gradient(
    to right,
    #462523 0,
    #cb9b51 22%,
    #f6e27a 45%,
    #f6f2c0 50%,
    #f6e27a 55%,
    #cb9b51 78%,
    #462523 100%
  );
  --goldToRightDark: linear-gradient(
    to right,
    #462523 0,
    #cb9b51 22%,

    #cb9b51 78%,
    #462523 100%
  );
  --goldToBottom: linear-gradient(
    to bottom,
    #462523 0,
    #cb9b51 22%,
    #f6e27a 45%,
    #f6f2c0 50%,
    #f6e27a 55%,
    #cb9b51 78%,
    #462523 100%
  );
  --goldToBottomDark: linear-gradient(
    to bottom,
    #462523 0,
    #462523 22%,
    #cb9b51 55%,
    #f6e27a 60%,
    #cb9b51 65%,
    #462523 100%
  );
  /* --goldToRightText: 5px -5px 8px rgba(48, 48, 48, 0.452); */

  --goldToBottomYellow: linear-gradient(
    to bottom,

    #cb9b51 22%,
    #f6e27a 45%,
    #f6f2c0 50%,
    #f6e27a 55%,
    #cb9b51 78%
  );

  --goldToRightYellow: linear-gradient(
    to right,

    #cb9b51 22%,
    #f6e27a 45%,
    #f6f2c0 50%,
    #f6e27a 55%,
    #cb9b51 78%
  );
}
</style>
