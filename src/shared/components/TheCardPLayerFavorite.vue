<script lang="ts" setup></script>


<template>
    <div class="player">
        <div class="imgBox">
            <img src="../../assets/cover-g.jpg" alt="default">
        </div>
        <audio src="" type="audio/mp3" controls></audio>
    </div>
</template>



<style scoped lang="scss">
.player {
    position: absolute;
    width: 350px;
    background-color: #f1f3f4;
    border-radius: 20px;
    box-shadow: 0 50px 80px rgb(0 0 0 / 50%);

    .imgBox {
        position: relative;
        width: 100%;
        height: 350px;

        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
        }
    }

    audio {
        width: 100%;
        outline: none;
        accent-color: var(--secondary);
    }
}
</style>
