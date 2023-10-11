<script lang="ts" setup>
import { Icon } from '@iconify/vue';

</script>


<template>
    <div class="play-list-header">
        <div class="cover">
            <div class="cover-mock">
                <div class="icon">
                    <Icon icon="mdi:heart-outline" />
                </div>
            </div>
        </div>
        <div class="content-text">
            <div class="small-text">Playlist</div>
            <h1 class="title">Canciones que te gustan</h1>
            <h5 class="sub-title">
                Leifer Jesus Mendez Zambrano
                <span class="count-tracks">206 canciones</span>
            </h5>
        </div>
    </div>
</template>



<style scoped lang="scss">
.play-list-header {
    display: none;
    height: 13rem;
    width: 100%;
    padding-top: 3rem;
    padding-left: 5rem;
    padding-bottom: 1rem;
    box-shadow: 0px 2px 10px rgba($color: #000000, $alpha: 0.3);

    .cover {
        position: relative;
        width: 17rem;
        padding: 1rem 2rem;
        display: none;
        justify-content: center;

        .cover-mock {
            height: 100%;
            width: 18rem;
            display: flex;
            align-self: center;
            justify-content: center;
            align-items: center;
            background-color: var(--primary);
            box-shadow: var(--shadow-1);
            color: var(--secondary);

            .icon {
                width: 10rem;
                height: 10rem;
                font-size: 3.5rem;
            }
        }

    }



    .content-text {
        padding: 2rem 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        .title,
        .sub-title {
            margin: 0;
            font-weight: 600;
        }

        .title {
            font-size: 4.5rem;
            letter-spacing: -7px;
        }

        .small-text {
            text-transform: uppercase;
            font-weight: 500;
        }

        .count-tracks {
            font-weight: 300;
            opacity: 0.7;
            padding-left: 0.5rem;
        }
    }
}



@media (min-width: 768px) {
    .play-list-header {
        display: flex;

    }
}

@media (min-width: 1200px) {
    .play-list-header {
        padding-left: 0rem;

        .cover {
            display: flex;
        }
    }


}
</style>
