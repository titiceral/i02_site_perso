<template>
  <b-tooltip
    :auto-close="['outside', 'escape']"
    style="background-color: transparent !important"
  >
    <template v-slot:content>
      <ul>
        <li v-for="(item, index) in watches" :key="index">
          {{ item.year }}:
          <a :href="item.link" target="blank" style="color: white"
            >{{ item.label }}
            <i>({{ item.format }}-{{ item.producer }}-{{ item.duration }})</i>
          </a>
        </li>
      </ul>
    </template>
    *</b-tooltip
  >
</template>

<script>
export default {
  props: {
    watches: {
      type: Array,
      require: true,
      /* year: "04-2021",
          label: "Initiation à la GTB",
          link: "https://www.distech-controls.com/",
          format: "Présentation",
          producer: "Distech Controls",
          duration: "1h",
      */
    },
  },
};
</script>

<style lang="scss" scoped></style>
