<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'
import useLogin from '../../users/composables/useLogin'

const { user } = useLogin()

const createTrack = reactive({
  name: '',
  album: '',
  artistName: '',
  nationality: '',
  nickname: '',
  artistCName: [],
  durationStart: 0,
  durationEnd: 270,
  gender: '',
  release_date: '',
  user_Id: user.value._id,
})

const numbers = helpers.regex(/^[0-9]*$/)

const rules = {
  name: {
    required: helpers.withMessage('El nombre es requerido', required),
  },
  album: {
    required: helpers.withMessage('El album es requerido', required),
  },
  artistName: {
    required: helpers.withMessage(
      'El nombre de artista es requerido',
      required
    ),
  },
  gender: {
    required: helpers.withMessage('Escoger un género es requerido', required),
  },
  nationality: {
    required: helpers.withMessage('La nacionalidad es requerida', required),
  },
  durationEnd: {
    required: helpers.withMessage(
      'El tiempo final de la canción es requerido',
      required
    ),
    numbers: helpers.withMessage(
      'La duración tiene que ser un número',
      numbers
    ),
  },
}

const v$ = useVuelidate(rules, createTrack)

const form = ref()
const trackFile = ref()
const onTrackInput = (event: any) => {
  const file = event.target.files[0]
  console.log({ file })
  trackFile.value = file
  console.log(trackFile.value)
}
const onSubmit = async () => {
  if (!(await v$.value.$validate())) return
  const trackForm = new FormData(form.value)
  console.log(trackForm)
}
</script>

<template>
  <div class="is-flex is-justify-content-center is-align-items-center p-5">
    <div class="box">
      <span class="borderLine"></span>
      <form ref="form" @submit.prevent="onSubmit">
        <h2 class="title is-1">Upload Track</h2>

        <div class="is-flex is-justify-content-space-between">
          <div class="is-flex is-flex-direction-column">
            <div class="file has-name is-boxed">
              <label class="file-label">
                <input class="file-input" type="file" name="track" />
                <span class="file-cta">
                  <span class="file-icon is-size-3">
                    <Icon icon="mdi:upload" />
                  </span>
                  <span class="file-label">Subir canción </span>
                </span>
                <span class="file-name">
                  {{ trackFile }}
                </span>
              </label>
            </div>

            <!-- <span v-if="v$.name.$error">
              <p
                class="has-text-danger mt-2"
                v-for="error in v$.name.$errors"
                :key="error.$uid">
                {{ error.$message }}
              </p>
            </span> -->
          </div>

          <div class="is-flex is-flex-direction-column">
            <div class="file has-name is-boxed">
              <label class="file-label">
                <input
                  class="file-input"
                  type="file"
                  name="resume"
                  @input="onTrackInput"
                  accept="image/png, image/jpeg" />
                <span class="file-cta">
                  <span class="file-icon is-size-3">
                    <Icon icon="mdi:upload" />
                  </span>
                  <span class="file-label">Subir cover de la canción</span>
                </span>
                <span class="file-name"> {{ form }} </span>
              </label>
            </div>
            <span v-if="v$.album.$error">
              <p
                class="has-text-danger mt-2"
                v-for="error in v$.album.$errors"
                :key="error.$uid">
                {{ error.$message }}
              </p>
            </span>
          </div>
        </div>

        <div class="is-flex is-justify-content-space-between">
          <div class="is-flex is-flex-direction-column">
            <div class="inputBox mr-1">
              <input
                type="text"
                v-model="createTrack.name"
                @blur="v$.name.$touch" />
              <span>Nombre</span>
              <i></i>
            </div>

            <span v-if="v$.name.$error">
              <p
                class="has-text-danger mt-2"
                v-for="error in v$.name.$errors"
                :key="error.$uid">
                {{ error.$message }}
              </p>
            </span>
          </div>

          <div class="is-flex is-flex-direction-column">
            <div class="inputBox">
              <input
                type="password"
                v-model="createTrack.album"
                @blur="v$.album.$touch" />
              <span>Album</span>
              <i></i>
            </div>
            <span v-if="v$.album.$error">
              <p
                class="has-text-danger mt-2"
                v-for="error in v$.album.$errors"
                :key="error.$uid">
                {{ error.$message }}
              </p>
            </span>
          </div>
        </div>

        <div class="is-flex is-justify-content-space-between">
          <div class="is-flex is-flex-direction-column">
            <div class="inputBox mr-1">
              <input
                type="text"
                v-model="createTrack.artistName"
                @blur="v$.artistName.$touch" />
              <span>Nombre del Artista</span>
              <i></i>
            </div>

            <span v-if="v$.artistName.$error">
              <p
                class="has-text-danger mt-2"
                v-for="error in v$.artistName.$errors"
                :key="error.$uid">
                {{ error.$message }}
              </p>
            </span>
          </div>

          <div class="is-flex is-flex-direction-column">
            <div class="inputBox">
              <input
                type="password"
                v-model="createTrack.nationality"
                @blur="v$.nationality.$touch" />
              <span>Nacionalidad del artista</span>
              <i></i>
            </div>
            <span v-if="v$.nationality.$error">
              <p
                class="has-text-danger mt-2"
                v-for="error in v$.nationality.$errors"
                :key="error.$uid">
                {{ error.$message }}
              </p>
            </span>
          </div>
        </div>

        <div class="is-flex is-justify-content-space-between">
          <div class="is-flex is-flex-direction-column">
            <div class="inputBox mr-1">
              <input type="text" v-model="createTrack.nickname" />
              <span>NickName del Artista</span>
              <i></i>
            </div>
          </div>

          <div class="is-flex is-flex-direction-column">
            <span class="mt-3 is-size-7">Género de la canción</span>
            <div class="inputBox">
              <div class="inputSelect">
                <select v-model="createTrack.gender">
                  <option value="inedita">Inedita</option>
                  <option value="popular">Popular</option>
                  <option value="educativa">Educativa</option>
                </select>
              </div>
            </div>
            <span v-if="v$.gender.$error">
              <p
                class="has-text-danger mt-2"
                v-for="error in v$.gender.$errors"
                :key="error.$uid">
                {{ error.$message }}
              </p>
            </span>
          </div>
        </div>

        <div class="is-flex is-justify-content-space-between">
          <div class="is-flex is-flex-direction-column">
            <div class="inputBox mr-1">
              <input
                type="text"
                v-model="createTrack.durationEnd"
                @blur="v$.durationEnd.$touch" />
              <span>Tiempo final de la canción</span>
              <i></i>
            </div>

            <span v-if="v$.durationEnd.$error">
              <p
                class="has-text-danger mt-2"
                v-for="error in v$.durationEnd.$errors"
                :key="error.$uid">
                {{ error.$message }}
              </p>
            </span>
          </div>

          <div class="is-flex is-flex-direction-column">
            <div class="inputBox">
              <input
                type="date"
                v-model="createTrack.release_date"
                @blur="v$.release_date.$touch" />
              <span>La fecha de creación de la cacnción</span>
              <i></i>
            </div>
            <!-- <span v-if="v$.release_date.$error">
              <p
                class="has-text-danger mt-2"
                v-for="error in v$.release_date.$errors"
                :key="error.$uid">
                {{ error.$message }}
              </p>
            </span> -->
          </div>
        </div>

        <button
          type="submit"
          class="button flex justify-spacebettewn is-primary mt-5">
          <Icon
            v-if="true"
            icon="mdi:content-save-plus"
            class="is-size-3 mr-3" />
          <span>Acceder</span>
        </button>

        <!-- <button class="button" @click="refresh">Refresh</button> -->
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.inputSelect {
  width: 100%;
  option {
    padding: 2rem;
    font-size: 1rem;
    text-align: center;
    width: 100%;
    &:focus,
    &:active {
      border: none;
    }
  }
}
.box {
  position: relative;
  width: 800px;
  height: 770px;
  background-color: #f3f3f3;
  border-radius: 8px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 380px;
    height: 420px;
    background-image: linear-gradient(
      0deg,
      transparent,
      transparent,
      #7d45ff,
      #7d45ff,
      #7d45ff
    );
    z-index: 1;
    transform-origin: bottom right;
    animation: animate 6s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 380px;
    height: 420px;
    background-image: linear-gradient(
      0deg,
      transparent,
      transparent,
      #7d45ff,
      #7d45ff,
      #7d45ff
    );
    z-index: 1;
    transform-origin: bottom right;
    animation: animate 6s linear infinite;
    animation-delay: -3s;
  }

  .borderLine {
    position: absolute;
    top: 0;
    inset: 0;
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  form {
    position: absolute;
    inset: 4px;
    background-color: #fefefe;
    padding: 50px 40px;
    border-radius: 8px;
    z-index: 2;
    display: flex;
    flex-direction: column;

    h2 {
      color: #000;
      font-weight: 500;
      text-align: center;
      letter-spacing: 0.1rem;
    }

    .inputBox {
      position: relative;
      width: 300px;
      margin-top: 35px;
      input {
        position: relative;
        width: 100%;
        padding: 20px 10px 10px;
        background: transparent;
        outline: none;
        border: none;
        border-bottom: 1px solid #00000025;
        box-shadow: none;
        color: #23242a;
        font-size: 1em;
        letter-spacing: 0.05em;
        transition: 0.5s;
        z-index: 10;

        &:valid ~ span,
        &:focus ~ span {
          color: #000;
          font-size: 0.75em;
          transform: translateY(-34px);
        }

        &:valid ~ i,
        &:focus ~ i {
          height: 44px;
        }

        &[type='submit'] {
          border: none;
          outline: none;
          padding: 9px 25px;
          background-color: var(--primary);
          font-size: 0.9em;
          border-radius: 4px;
          font-weight: 600;
          width: 100px;
          margin-top: 10px;
          outline: 1px solid violet;

          &:active {
            opacity: 0.8;
          }
        }
      }

      select {
        width: 100%;
        border: none;
        border-bottom: 1px solid #ccc;
      }

      span {
        position: absolute;
        left: 0;
        padding: 20px 0px 10px;
        pointer-events: none;
        color: #8f8f8f;
        font-size: 1em;
        letter-spacing: 0.05em;
        transition: 0.5s;
      }

      i {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: #fff;
        border-radius: 4px;
        overflow: hidden;
        transition: 0.5s;
        pointer-events: none;
      }
    }

    .links {
      display: flex;
      justify-content: space-between;

      a {
        margin: 10px 0;
        font-size: 0.75em;
        color: #8f8f8f;
        text-decoration: none;

        &:hover,
        &:nth-child(2) {
          color: var(--primary);
        }
      }
    }
  }
}
</style>
