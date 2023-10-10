<script lang="ts" setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="media-player">
    <div class="media-player--wrapper">
      <!--Zona del artista-->
      <div class="artist player-center">
        <div class="artist-inside">
          <img src="@/assets/cover.jpeg" alt="" class="cover" />
          <div class="track-info">
            <h3 class="track-title">{{ 'Mas Rica que Ayer' }}</h3>
            <h5 class="track-title sub-title">{{ ' Las Leyendas nunca mueren' }}</h5>
          </div>
          <div class="track-like">
            <button class="btn-like">
              <Icon icon="mdi:heart-outline"></Icon>
            </button>
          </div>
        </div>
      </div>
      <!--Zona del reproductor-->
      <div class="player-controls player-center">
        <div class="player-controls-inside">
          <div class="buttons-media">
            <button class="arrow btn">
              <Icon icon="mdi:skip-previous" />
            </button>
            <button class="play btn">
              <Icon icon="mdi:play-circle" />
            </button>
            <button class="arrow btn">
              <Icon icon="mdi:skip-next"></Icon>
            </button>
          </div>
          <div class="media-linetime">
            <div class="time">00</div>
            <span class="time-progress">
              <span class="time-progress-live"> </span>
            </span>
            <div class="time">00</div>
          </div>
        </div>
      </div>
      <!--Zona del controles adicionales-->
      <div class="player-audio player-center has-text-grey-light">
        <div class="player-audio-inside">
          <button class="btn-media">
            <Icon icon="mdi:playlist-music-outline" />
          </button>
          <button class="btn-media">
            <Icon icon="mdi:boombox" />
          </button>

          <button class="btn-media">
            <Icon icon="uil-volume" />
          </button>
          <input type="range" min="0" max="100" value="100" class="volume-progress" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.media-player {
  background-color: var(--white);
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 2;
  height: 85px;
  border-top: solid 1px var(--text);
  /* box-shadow: 0px -1px 1px 2px #0000002e; */

  .media-player--wrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 100%;
    padding: 0;

    .player-center {
      display: flex;
      align-content: center;
      align-items: center;
    }

    .artist {
      width: 25%;
      padding: 0 0.5rem;

      .artist-inside {
        display: flex;
        gap: 0.5rem;

        .cover {
          width: 55px;
          height: 55px;
          object-fit: cover;
        }

        .track-info {
          display: flex;
          flex-direction: column;
          align-self: center;
        }

        .track-title {
          margin: 0;
          font-weight: 400;
          font-size: 0.8rem;
        }

        .sub-title {
          margin: 0;
          font-weight: 300;
          font-size: 80%;
          opacity: 0.6;
        }
      }

      .track-like {
        display: flex;
        flex-direction: column;
        align-self: center;
        padding: 0 0.25rem;

        .btn-like {
          border: 0;
          background-color: transparent;
          color: var(--secondary);
          font-size: var(--font-size-2);
          opacity: 0.7;
        }
      }
    }

    .player-audio {
      width: 25%;
      padding: 0 0.5rem;
    }

    .player-controls {
      width: 50%;
      padding: 0 0.5rem;
      position: relative;

      .buttons-media {
        display: flex;
        justify-content: center;
        align-self: center;
        gap: 0.5rem;
      }
    }

    .player-controls-inside {
      display: flex;
      justify-content: center;
      align-self: center;
      flex-direction: column;
      width: 100%;
      position: relative;

      .buttons-media {
        display: flex;
        justify-content: center;
        align-self: center;
        gap: 0.5rem;

        .btn {
          background-color: transparent;
          border: 0;
          color: var(--primary);
          opacity: 0.7;
          font-size: 1.65rem;
        }

        .play {
          font-size: 2.35rem;
        }
      }

      .media-linetime {
        display: flex;
        justify-content: space-between;
        font-size: 70%;
        padding: 0;
      }
    }

  }

}


.media-player--wrapper .player-controls-inside .media-player--wrapper .player-controls-inside .media-linetime .time {
  padding: 0.5rem 0;
}

.media-player--wrapper .player-controls-inside .media-linetime .time-progress {
  height: 10px;
  width: 100%;
  left: 0;
  position: absolute;
  cursor: pointer;
  background-color: var(--secondary);
}

.media-player--wrapper .player-controls-inside .media-linetime .time-progress-live {
  width: 0%;
  height: 10px;
  transition: all ease var(--animation-1);
  position: absolute;
}

.media-player--wrapper .player-audio-inside {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.media-player--wrapper .player-audio-inside .btn-media {
  background-color: transparent;
  border: 0;
  color: var(--primary);
  font-size: var(--font-size-2);
  cursor: pointer;
}

.media-linevolume {
  display: flex;
  justify-content: space-between;
  font-size: 70%;

  padding: 0.2rem 0rem 0rem 0rem;

  left: 0;
  cursor: pointer;

  background-color: var(--secondary);
  width: 50%;
  height: 5px;
  transition: all ease var(--animation-1);
  position: relative;
}

.time {
  color: var(--primary);
}

.volume-progress {
  width: 40%;
  height: 3px;
  left: 0;
  top: 11px;
  cursor: pointer;
  position: relative;
  accent-color: var(--secondary);
}

.arrow,
.btn {
  cursor: pointer;
}

.btn-like {
  cursor: pointer;
}
</style>
