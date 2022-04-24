<template>
  <div class="container text-center" style="margin: 0 auto">
    <div class="row" v-if="movies.length > 0">
      <b-col cols="12" class="text-start text-white">
        <h3 class="mb-0 p-3 header-bg">{{ genre }}</h3>
      </b-col>
      <b-col cols="6" lg="3" class="mt-4" v-for="val in movies.slice(0, 8)" :key="val.id">
        <b-link :to="{ name: 'show', params: { id: val.id } }">
          <div class="card">
            <img v-if="val.image" :src="val.image.medium" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ truncate(val.name, 45) }}</h5>
              <div class="d-flex flex-sm-row flex-column align-items-baseline align-content-stretch flex-wrap">
                <small class="card-text mb-0 w-75 premiered"
                  >Premiered: {{ val.premiered ? val.premiered : "not mensioned" }}</small
                >
                <p class="card-text w-25 rating">
                  <i class="fas fa-link"></i> &#11088;{{ val.rating.average ? val.rating.average : 0.0 }}
                </p>
              </div>
            </div>
          </div>
        </b-link>
      </b-col>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "homeMovieThumb",
  props: {
    movies: {
      type: Array,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
  },
  methods: {
    truncate(str: string, n: number) : string {
      return str.length > n ? str.substr(0, n - 1) + "..." : str;
    },
  },
};
</script>
<style scoped>
.header-bg{
  background: #212529
}

@media (max-width: 767px) {
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
