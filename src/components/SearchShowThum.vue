<template>
    <b-link :to="{ name: 'show', params: { id: show.id } }">
        <div class="card">
            <img :src="show.image.medium" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{{ truncate(show.name, 45) }}</h5>
                <div class="d-flex flex-sm-row flex-column align-items-baseline align-content-stretch flex-wrap">
                    <small class="card-text mb-0 w-75 premiered">Premiered: {{ show.premiered ? show.premiered : "not mensioned" }}</small>
                    <p class="card-text w-25 rating">
                    <i class="fas fa-link"></i> &#11088;{{ show.rating.average ? show.rating.average : 0.0 }}
                    </p>
                </div>
            </div>
        </div>
    </b-link>
</template>

<script lang="ts">
    export default {
        props: {
            show: {
                type: Object,
                required: true,
            },
        },
        methods: {
            truncate(str: string, n: number): string {
                return str.length > n ? str.substr(0, n - 1) + "..." : str;
            },
        },
    }
</script>