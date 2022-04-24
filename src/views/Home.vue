<template>
  <div class="home mt-4">
    <HomeShowThumb :movies="filteredActionShows" genre="Action"></HomeShowThumb>
    <HomeShowThumb :movies="filteredThrillerShows" genre="Thriller" class="mt-4"></HomeShowThumb>
    <HomeShowThumb :movies="filteredHorrorShows" genre="Horror" class="mt-4"></HomeShowThumb>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Show from '@/types/Show'
import APIService from "@/services/APIService";
import HomeShowThumb from "@/components/HomeShowThumb.vue";
const API = APIService.getInstance();

export default Vue.extend({
  name: "HomeView",
  components: { HomeShowThumb },
  data() {
    return {
      filteredHorrorShows: [] as Show[],
      filteredThrillerShows: [] as Show[],
      filteredActionShows: [] as Show[],
    };
  },
  async mounted() {
    let shows = await API.getShows();
    shows = shows.slice(0, 40);

    this.filteredHorrorShows = shows.filter((show: Show) => {
      return show.genres.includes("Horror") && show.rating.average >= 6.5 && show.rating.average <= 9.5;
    });

    this.filteredThrillerShows = shows.filter((show: Show) => {
      return show.genres.includes("Thriller") && show.rating.average >= 6.5 && show.rating.average <= 9.5;
    });

    this.filteredActionShows = shows.filter((show: Show) => {
      return show.genres.includes("Action") && show.rating.average >= 6.5 && show.rating.average <= 9.5;
    });
  },
});
</script>

<style scoped>
.card {
  background: #222;
  border: 1px solid #dd2476;
  color: rgba(250, 250, 250, 0.8);
  margin-bottom: 2rem;
}

.card img {
  background-size: cover;
  max-height: 300px;
}
.home {
  min-height: 600px;
}
</style>
