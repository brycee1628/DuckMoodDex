<script setup>


</script>

<template>
    <div class="box">
        <div class="home_card">
            <div class="card_top">
                <div class="card_left">
                    <div class="card_img">
                        <img src="../images/avatar_2.jpg" alt="">
                    </div>

                </div>
                <div class="card_right">
                    <div class="name">
                        😈地獄三頭鴨😈
                    </div>
                </div>
            </div>
            <div class="card_bottom">
                <div>
                    吾乃四大魔王之二．掌管萬物之淵源．水的使者．大天使-鴨母王
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

            .card_left {
                margin-bottom: 1rem;

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

            .card_right {
                margin-bottom: 1rem;

                .name {
                    font-weight: bold;
                }
            }
        }
    }

}
</style>