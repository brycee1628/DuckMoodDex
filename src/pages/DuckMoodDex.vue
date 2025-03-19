<script setup>
import { duckMoods } from '../data/duckMoodData';

const getImageUrl = (name) => {
    return new URL(`../images/${name}.jpg`, import.meta.url).href;
};

const getNumberId = (id) => {
    if (id < 10) {
        return '00' + id;
    }
    else if (id > 10 && id < 100) {
        return '0' + id;
    }
    else {
        return id;
    }
};

</script>

<template>
    <div class="dex_box">
        <div class="dex">
            <div class="card" v-for="item in duckMoods" :key="item.id">
                <div class="card_img"><img v-if="item.id" :src="getImageUrl(item.image)" alt=""></div>
                <div><span>No.{{ getNumberId(item.id) }}</span> {{ item.name }}</div>
                <div>情緒: {{ item.mood }}</div>
                <div>描述: {{ item.description }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.dex_box {
    max-width: 1200px;
    margin: 0 auto;
    color: #333;

    .dex {
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        @media (max-width: 600px) {
            justify-content: center;
        }

        .card {
            text-align: center;
            border: 1px solid #eee;
            border-radius: 6px;
            width: 23%;
            margin-bottom: 2vh;
            position: relative;
            margin-right: .85vw;
            box-shadow: 3px 5px 5px #ddd;

            @media (max-width: 600px) {
                width: 48%;
            }

            img {
                width: 100%;
                border-radius: 6px 6px 0 0;
            }

            .card_img {
                width: 100%;
                height: 230px;
                margin-bottom: .3rem;

                img {
                    height: 100%;
                    object-fit: auto;
                }
            }

            .skill_list {
                span {
                    margin-right: .3vw;
                }
            }

            .skill_detailed {
                display: none;
                border: 1px solid #ddd;
                border-radius: 6px;
                padding: 1vw;
                position: absolute;
                top: calc(50% - 1vw);
                left: 0;
                background: #eee;
                box-shadow: 3px 5px 5px #ddd;
                width: 100%;
            }

            .skill:hover+.skill_detailed {
                display: block;
            }
        }

        .card:nth-child(4n) {
            margin-right: 0;
        }
    }
}
</style>