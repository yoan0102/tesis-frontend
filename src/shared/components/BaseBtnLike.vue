<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

const anim = ref<string>('')
const span = Array(24)

defineProps<{
    icon: string,
}>()


const onClick = () => {
    anim.value = 'anim'
    setTimeout(() => {
        anim.value = ''
    }, 500)
}

</script>
<template>
    <button class="btn" @click="onClick">
        <Icon :icon="`mdi:${icon}`" />
        <span v-for="(item, i) in span" :key="i" :class="anim"></span>
    </button>
</template>



<style lang="scss" scoped>
.btn {
    position: relative;
    border: 0;
    background-color: transparent;
    font-size: var(--font-size-1);
    opacity: 0.7;
    cursor: pointer;
    transition: box-shadow 0.25s;
    z-index: 2;
    color: var(--secondary);

    span {
        background-color: var(--primary);
        border: 1px solid var(--primary);
        width: 14px;
        height: 14px;
        border-radius: 50%;
        position: absolute;
        z-index: -1;
        transform: scale(0);

        &:nth-child(1) {
            top: -20%;
            left: -10%;
        }

        &:nth-child(2) {
            top: -120%;
            left: -0%;
        }

        &:nth-child(3) {
            top: -50%;
            left: 10%;
            background-color: transparent;
        }

        &:nth-child(4) {
            top: -66%;
            left: 20%;
        }

        &:nth-child(5) {
            top: -70%;
            left: 42%;
        }

        &:nth-child(6) {
            top: -66%;
            left: 20%;
        }

        &:nth-child(7) {
            top: -80%;
            left: 60%;
            background-color: transparent;
        }

        &:nth-child(8) {
            top: -50%;
            left: 70%;
        }

        &:nth-child(9) {
            top: -120%;
            left: 80%;
        }

        &:nth-child(10) {
            top: -70%;
            left: 90%;
        }

        &:nth-child(11) {
            top: -80%;
            left: 100%;
            background-color: transparent;
        }

        &:nth-child(12) {
            top: -50%;
            left: 110%;
        }

        &:nth-child(13) {
            top: 40%;
            left: -20%;
        }

        &:nth-child(14) {
            top: 60%;
            left: 120%;
            background-color: transparent;
        }

        &:nth-child(15) {
            top: 160%;
            left: -10%;
        }

        &:nth-child(16) {
            top: 120%;
            left: 5%;
            background-color: transparent;
        }

        &:nth-child(17) {
            top: 180%;
            left: 10%;
        }

        &:nth-child(18) {
            top: 130%;
            left: 20%;
        }

        &:nth-child(19) {
            top: 180%;
            left: 33%;
        }

        &:nth-child(20) {
            top: 180%;
            left: 55%;
        }

        &:nth-child(21) {
            top: 160%;
            left: 75%;
        }

        &:nth-child(22) {
            top: 130%;
            left: 88%;
            background-color: transparent;
        }

        &:nth-child(23) {
            top: 140%;
            left: 100%;
        }

        &:nth-child(24) {
            top: 190%;
            left: 120%;
        }
    }
}

.btn:active {
    background-color: var(--primary);
    box-shadow: 0 2px 25px rgba($color: #000000, $alpha: 0.2);
}


.anim {
    animation: moving 0.5s linear reverse forwards;
}

@keyframes moving {
    0% {
        transform: scale(0);
    }

    10% {
        transform: scale(1);
    }

    100% {
        top: 50%;
        left: 50%;
    }
}
</style>