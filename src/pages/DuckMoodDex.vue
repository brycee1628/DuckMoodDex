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
    <div class="box">
        <div class="dex">
            <div class="card" v-for="item in duckMoods" :key="item.id">
                <div class="card_img"><img v-if="item.id" :src="getImageUrl(item.image)" alt=""></div>
                <div class="text_l"><span>No.{{ getNumberId(item.id) }}</span> {{ item.name }}</div>
                <div class="text_l">情緒: {{ item.mood }}</div>
                <div class="text_l">描述: {{ item.description }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.box {
    .dex {
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        @media (max-width: 600px) {
            justify-content: space-between;
        }

        .card {
            text-align: center;
            border: 1px solid #555;
            border-radius: 6px;
            width: 23%;
            margin-bottom: 2vh;
            position: relative;
            margin-right: .85vw;
            box-shadow: 3px 5px 5px #444;
            position: relative;
            overflow: hidden;
            border-radius: 12px;
            transition: all 0.3s ease;

            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: -75%;
                width: 15%;
                height: 100%;
                background: linear-gradient(120deg,
                        rgba(0, 170, 255, 0) 0%,
                        /* 水藍透明 */
                        rgba(0, 170, 255, 0.6) 45%,
                        /* 水藍半透明 */
                        rgba(255, 255, 255, 0.6) 50%,
                        /* 白色過渡 */
                        rgba(0, 170, 255, 0.6) 55%,
                        /* 水藍半透明 */
                        rgba(0, 170, 255, 0) 100%);
                /* 水藍透明 */
                transform: skewX(-25deg);
                filter: blur(2px);
                animation: none;
            }

            &:hover::before {
                animation: shine 1.5s cubic-bezier(0.4, 0, 0.2, 1);
            }

            &:hover {
                transform: translateY(-10px) scale(1.05);
                box-shadow:
                    0 20px 40px rgba(0, 170, 255, 0.4),
                    0 0 32px rgba(0, 170, 255, 0.6),
                    inset 0 0 12px rgba(0, 170, 255, 0.5);
            }

            .text_l {
                padding: 0 6px;
            }

            @media (max-width: 600px) {
                width: 48%;
                transform: none;
                /* 禁用手機板浮動效果 */
                box-shadow: none;
                /* 去掉陰影 */
                text-align: left;
                margin: 1vw;

                &:hover {
                    transform: none;
                    box-shadow: none;
                    /* 禁用浮動效果，但保留閃光 */
                }
            }

            img {
                width: 100%;
                border-radius: 6px 6px 0 0;
            }

            .card_img {
                width: 100%;
                height: 230px;
                margin-bottom: .3rem;

                @media (max-width: 600px) {
                    height: 200px;
                }

                img {
                    height: 100%;
                    object-fit: auto;
                }
            }
        }
    }
}

@keyframes shine {
    0% {
        left: -75%;
    }

    100% {
        left: 125%;
    }
}
</style>
