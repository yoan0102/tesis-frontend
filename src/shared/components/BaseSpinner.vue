<script lang="ts" setup></script>


<template>
    <div>
        <span class="loader"></span>
    </div>
</template>



<style scoped lang="scss">
div {
    width: 100vw;
    height: 100vh;
    display: grid;
    place-content: center;
}

.loader {
    width: 48px;
    height: 48px;
    border: 5px dotted var(--secondary);
    border-radius: 50%;
    display: inline-block;
    position: relative;
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
