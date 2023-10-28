<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

const activate = ref(false)
const onClick = () => {
    activate.value = !activate.value
}
</script>


<template>
    <div class="floating__menu" :class="activate ? 'active' : ''" @click="onClick">
        <div class="menu">
            <Icon icon="mdi:plus" class="icon" />
        </div>
        <div class="sub_menu">
            <Icon icon="mdi:logout" class="icon" style="--i:1;" />
            <Icon icon="mdi:face-profile" class="icon" style="--i:2;" />
            <Icon icon="mdi:account-question" class="icon" style="--i:3;" />

        </div>
    </div>
</template>



<style scoped lang="scss">
.floating__menu {
    width: 70px;
    height: 70px;
    background-color: var(--secondary);
    border-radius: 50%;
    position: absolute;
    top: 1rem;
    right: 3rem;


    @media (max-width:768px) {
        top: 300px;
        right: 3rem;
    }

    &.active {
        .menu {
            .icon {
                transform: rotate(180deg);
            }

        }

        .sub_menu {

            .icon:nth-child(1) {
                left: -60px;
                top: 20px;
            }

            .icon:nth-child(2) {
                left: -30px;
                top: 80px;
            }

            .icon:nth-child(3) {
                left: 20px;
                top: 130px;

            }
        }
    }


    .menu {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        display: grid;
        place-items: center;
        cursor: pointer;
        box-shadow: -12px 12-x 35px var(--secondary);
        position: relative;
        z-index: 1;

        .icon {
            width: 45px;
            height: 45px;
            color: var(--white);
            transition: 0.5s;
        }

    }

    .sub_menu {
        .icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 50px;
            height: 50px;
            padding: 5px;
            background-color: var(--primary);
            color: var(--white);
            border-radius: 50%;
            z-index: -1;
            transition: .5s;
            transition-delay: calc(40ms * var(--i));
            box-shadow: -7px 9px 23px #333333;
        }
    }
}
</style>
