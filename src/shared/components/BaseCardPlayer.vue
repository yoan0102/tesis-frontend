<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import BaseBtnLike from './BaseBtnLike.vue'
import BaseRating from './BaseRating.vue'
import { Track } from '../../interfaces/tracks'
import { useTrackPlayed } from '../composables/useTrackPlayed'
import { useFavoritesTracks } from '../composables/useFavoritesTracks'

const { trackPlay } = useTrackPlayed()
const { addFavorites } = useFavoritesTracks()
const { track, mode } = withDefaults(
  defineProps<{
    track: Track
    mode: 'small' | 'big'
  }>(),
  {
    track: null,
    mode: 'small',
  }
)
</script>

<template>
  <!-- Diseño del mode (small)-->
  <div class="card-player">
    <div class="player-card">
      <div class="imgBox">
        <img
          class="img-cover"
          v-if="track?.cover"
          :src="track?.cover === '' ? '@/aset/cover-g.jpg' : track?.cover"
          :alt="track?.name" />
        <img v-else src="@/assets/cover-g.jpg" :alt="track?.name" />
      </div>
      <div class="content">
        <h2 class="is-capitalized">{{ track?.name }}</h2>
        <div class="is-flex is-flex-direction-column border">
          <h3 class="is-size-6 is-uppercase">
            Artista:
            <span class="is-capitalized">{{ track.artist?.name }}</span>
          </h3>
          <h4 class="is-size-6 is-uppercase">
            Album: <span class="is-capitalized">{{ track.album?.name }}</span>
          </h4>
          <p
            class="is-flex is-align-items-center is-justify-content-center mb-2">
            <span class="is-uppercase">Rating:</span>
            <BaseRating :rating="track?.rating" />
          </p>
        </div>
        <div class="btns">
          <BaseBtnLike icon="heart-outline" @click="addFavorites(track._id)" />
          <a :href="track.url" download="" class="btn">
            <Icon class="btn-play" icon="material-symbols:download" />
          </a>
          <button class="btn" @click="trackPlay(track)">
            <Icon class="btn-play" icon="mdi:play-circle" />
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Diseño del mode (big)-->
  <div v-if="mode === 'big'" class="card-player player-big">
    <img
      :src="'data:image/jpeg;base64,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'"
      alt=""
      class="cover" />

    <div class="content-player">
      <div class="title-track">{{ track.name }}</div>
      <div class="sub-title-track">{{ track.name }}</div>
    </div>
    <div class="buttons-player">
      <button v-if="true" class="play-btn">
        <i class="uil" :class="{ 'uil-play': true }"></i>
      </button>
      <button v-if="false" class="play-btn">
        <i class="uil uil-play"></i>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.player-card {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 250px;
  height: 200px;
  border-radius: 20px;
  box-shadow: 0 35px 80px rgba($color: #000000, $alpha: 0.15);
  transition: 0.5s;

  &:hover {
    height: 300px;

    .imgBox {
      top: -50px;
      scale: 0.75;
      box-shadow: 0 15px 45px rgba($color: #000000, $alpha: 0.2);
    }

    .content {
      top: 70px;
      height: 200px;
    }
  }

  .imgBox {
    position: absolute;
    top: 10px;
    width: 200px;
    height: 120px;
    border-radius: 12px;
    overflow: hidden;
    transition: 0.5s;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content {
    position: absolute;
    top: 152px;
    width: 100%;
    height: 25px;
    overflow: hidden;
    text-align: center;
    transition: 0.5s;

    h2 {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--primary);
    }

    div {
      color: var(--text);
      font-size: 1em;
    }

    .btns {
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      .btn {
        border: 0;
        background-color: transparent;
        font-size: var(--font-size-1);
        opacity: 0.7;
        cursor: pointer;
        display: flex;
        align-items: center;

        &:active {
          transform: scale(0.8);
        }
      }

      .btn-play {
        color: var(--success);
      }
    }
  }
}
</style>
