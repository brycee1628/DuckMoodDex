<script setup>
import { tagData } from '../data/tagData';

const getColor = (color) => {
    //0紫色 1紅色 2綠色 3橘色 4黑色
    switch (color) {
        case 0:
            return 'purple';
        case 1:
            return 'red';
        case 2:
            return 'green';
        case 3:
            return 'orange';
        case 4:
            return 'black';
        default:
            return 'black';
    }
};
</script>

<template>
    <div class="box">
        <div class="home_card">
            <div class="card_top">
                <div class="card_avatar">
                    <div class="card_img">
                        <img src="../images/avatar_2.jpg" alt="">
                    </div>

                </div>
                <div class="card_user">
                    <div class="name">
                        😈地獄三頭鴨😈
                    </div>
                </div>

                <div class="card_stats">
                    <div class="stats">
                        <div>70</div>
                        <div>足跡</div>
                    </div>
                    <div class="stats">
                        <div>19</div>
                        <div>關注</div>
                    </div>
                    <div>
                        <div>29</div>
                        <div>粉絲</div>
                    </div>
                </div>

                <div class="tags">
                    <div v-for="item in tagData" :key="item.name" :class="['tag', getColor(item.color)]">
                        <div>{{ item.name }}</div>
                    </div>
                </div>
            </div>
            <div class="card_bottom">
                <div class="text_1">
                    呱 不在河邊就是跑出去玩了
                </div>
                <div>
                    吾乃四大魔王之二‧掌管萬物之淵源‧水的使者‧大天使-鴨母王
                </div>
                <div>
                    "世界皆有其流向，只要掌握了它，便能支配萬物。"
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.box {
    .home_card {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
        margin: 0 auto;

        .card_top {
            text-align: center;

            .card_stats {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 1rem;

                .stats {
                    text-align: center;
                    padding-right: 1rem;
                }
            }

            .tags {
                display: flex;
                flex-wrap: wrap;
                /* 換行 */
                gap: 3px;
                margin-bottom: .5rem;

                .tag {
                    flex: 1 0 20%;
                    border: 1px solid #ccc;
                    border-radius: 12px;
                    color: #333;
                    margin-bottom: .1rem;
                }

                .purple {
                    color: #8E44AD;
                    border: 1px solid #8E44AD;
                    background: #efdcf2;
                }

                .red {
                    color: #E74C3C;
                    border-color: #E74C3C;
                    background: #FDECEA;
                }

                .green {
                    color: #27AE60;
                    border-color: #27AE60;
                    background: #E9F7EF;
                }

                .orange {
                    color: #F39C12;
                    border-color: #F39C12;
                    background: #FEF5E7;
                }

                .black {
                    color: #333333;
                    border-color: #333333;
                    background: #F4F4F4;
                }
            }

            .card_avatar {
                margin-bottom: 1rem;
                display: flex;
                justify-content: center;

                .card_img {
                    width: 110px;
                    height: 110px;
                    border-radius: 50%;

                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                    }
                }
            }

            .card_user {
                margin-bottom: 1rem;

                .name {
                    font-weight: bold;
                }
            }
        }

        .card_bottom {
            color: #666;

            .text_1 {
                margin-bottom: 1rem;
            }
        }
    }

}
</style>