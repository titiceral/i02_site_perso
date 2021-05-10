<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-10 0 120 120"
      class="rseImage"
    >
      <defs>
        <mask id="mask-petals">
          <rect width="100" height="100" fill="hsl(0, 0%, 100%)" />
          <g transform="translate(50 40)">
            <g class="petals">
              <circle r="11" fill="hsl(0, 0%, 0%)" />
            </g>
          </g>
        </mask>
      </defs>
      <g transform="translate(50 98)">
        <g class="stem" transform="scale(1 1)">
          <g fill="currentColor">
            <g class="leaf" transform="rotate(45)">
              <path d="M 0 0 c 20 -8 15 -32 0 -42 -15 10 -20 34 0 42" />
            </g>
            <g transform="scale(-1 1)">
              <g class="leaf" transform="rotate(45)">
                <path d="M 0 0 c 20 -8 15 -32 0 -42 -15 10 -20 34 0 42" />
              </g>
            </g>
          </g>
        </g>
      </g>

      <g mask="url(#mask-petals)">
        <g transform="translate(50 40)">
          <g fill="currentColor">
            <g class="petals">
              <circle transform="translate(0 -14)" r="11" />
              <circle transform="rotate(72) translate(0 -14)" r="11" />
              <circle transform="rotate(144) translate(0 -14)" r="11" />
              <circle transform="rotate(216) translate(0 -14)" r="11" />
              <circle transform="rotate(288) translate(0 -14)" r="11" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
import anime from "animejs";
export default {
  mounted() {
    const timeline = anime.timeline({
      easing: "easeInOutExpo",
      duration: 1000,

      complete: () => {
        anime({
          targets: ".leaf",
          rotate: 50,
          duration: 3000,
          loop: 2,

          direction: "alternate",
          easing: "easeInOutQuad",
        });
        anime({
          targets: ".petals",
          scale: 1.1,
          rotate: 10,
          duration: 4500,
          loop: 1,

          direction: "alternate",
          easing: "easeInOutQuad",
          complete: () => {
            timeline.restart();
          },
        });
      },
    });

    timeline.add({
      targets: ".stem",
      scale: [0, 1],
    });

    timeline.add({
      targets: ".leaf",
      rotate: [0, 45],
    });
    timeline.add(
      {
        targets: ".petals",
        scale: [0, 1],
      },
      "-=1000"
    );
  },
};
</script>

<style lang="scss" scoped></style>
