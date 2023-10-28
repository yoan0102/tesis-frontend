<script lang="ts" setup></script>


<template>
    <span class="loader"></span>
</template>



<style scoped lang="scss">
.loader {
    width: 48px;
    height: 48px;
    border: 5px dotted var(--secondary);
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    box-sizing: border-box;
    animation: rotation 2s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
