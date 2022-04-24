<template>
  <div class="seachRelultPage">
    <div class="container mt-4" v-if="isLoading">
      <loader which-page="grid"></loader>
    </div>
    <div class="container mt-4 text-center" style="margin: 0 auto" v-else>
      <div class="row" v-if="searchResults.length > 0">
        <div class="col-12 text-start">
          <h3 class="text-white">Search Results for "{{ searchKey }}"</h3>
        </div>
        <b-col cols="6" lg="3" class="mt-4" v-for="val in searchResults" :key="val.id">
          <SearchShowThumb :show="val"></SearchShowThumb>
        </b-col>
      </div>
      <div v-else class="text-center mt-5">
        <h3 class="text-white">No results found</h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Show from '@/types/Show'
import ShowSearchResult from '@/types/ShowSearchResult'
import Loader from "@/components/Loader.vue";
import SearchShowThumb from "@/components/SearchShowThum.vue";

import APIService from "@/services/APIService";
const API = APIService.getInstance();

export default Vue.extend({
  name: "SearchResult",
  data() {
    return {
      searchResults: [] as Show[],
      isLoading: true as boolean,
      searchKey: "" as string | any,
    };
  },
  components: {
    Loader,
    SearchShowThumb,
  },
  methods: {
    async search(query?: string | any) {
      const searchResults = await API.getSearchResult(query);
      let newResults = [] as Show[];
      searchResults.forEach((result: ShowSearchResult) => {
        if (result.show.image) {
          newResults.push(result.show);
        }
      });
      this.searchResults = newResults;
    },
  },
  async mounted() {
    this.searchKey = this.$route.query.q;
    this.isLoading = true;
    await this.search(this.$route.query.q);
    this.isLoading = false;
  },
  watch: {
    // watch route params change
    $route: async function (to, from) {
      if (to.query.q !== from.query.q) {
        this.isLoading = true;
        await this.search(this.$route.query.q);
        this.isLoading = false;
      }
    },
  },
});
</script>

<style scoped>
.card {
  min-height: 415px;
}

.seachRelultPage {
  min-height: 600px;
}

@media (max-width: 767px) {
  .card {
    min-height: 300px;
  }
  .card-title {
    font-size: 16px;
  }
  .card img {
    max-height: 200px;
  }
  .premiered {
    width: 100% !important;
    font-size: 12px;
  }
  .rating {
    width: 100% !important;
  }
}
</style>
