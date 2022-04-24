<template>
  <div class="ShowDetailsView">
    <div class="container mt-4 text-center m-auto" v-if="!isLoading">
      <ShowDetails :show-details="showDetails"></ShowDetails>
    </div>
    <div class="container mt-4 text-center" style="margin: 0 auto" v-else>
      <loader which-page="grid"></loader>
    </div>
  </div>
</template>

<script lang="ts">
import Loader from "@/components/Loader.vue";
// @ is an alias to /src
import Show from "@/types/Show";
import APIService from "@/services/APIService";
import ShowDetails from "@/components/ShowDetails.vue";
const API = APIService.getInstance();
import Vue from "vue";
export default Vue.extend({
  name: "ShowDetailsView",
  components: {
    Loader,
    ShowDetails,
  },
  data() {
    return {
      showDetails: {} as Show,
      isLoading: true as boolean,
    };
  },
  async mounted() {
    this.showDetails = await API.getShowDetails(this.$route.params.id);
    console.log( this.showDetails);
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
});
</script>

<style scoped>
.card {
  background: #222;
  color: rgba(250, 250, 250, 0.8);
  margin-bottom: 2rem;
}
.mainCard {
  max-height: 300px;
  height: 300px;
  min-height: 228px;
}
.card img {
  background-size: cover;
  max-height: 300px;
}
.ShowDetailsView {
  min-height: 600px;
}
.header-bg {
  background: #212529;
}
</style>
