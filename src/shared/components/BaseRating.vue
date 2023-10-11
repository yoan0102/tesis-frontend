<script lang="ts" setup>
import { Icon } from '@iconify/vue';
defineProps<{
    rating: number
}>()
</script>


<template>
    <Icon v-if="rating === 0" icon="material-symbols:star-rate-outline" class="icon cero" />
    <Icon v-else-if="rating < 5" icon="material-symbols:star-half-outline" class="icon" />
    <Icon v-else-if="rating === 5" icon="material-symbols:star-rate" class="icon" />
</template>



<style scoped lang="scss">
.icon {
    color: var(--primary);
}

.cero {
    background-color: transparent;
}
</style>
