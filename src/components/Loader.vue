<template>
  <div>
    <b-row v-if="whichPage == 'grid'">
      <b-col cols="6" md="3" v-for="i in 8" :key="i">
        <b-skeleton-img animation="fade" width="100%" height="150px"></b-skeleton-img>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
export default {
  name: "LoaderView",
  props: {
    whichPage: {
      type: String,
      default: "grid",
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.b-skeleton {
  background-color: #222222;
}
</style>
