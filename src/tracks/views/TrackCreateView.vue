<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useVuelidate } from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'
import useLogin from '../../users/composables/useLogin'
import { useCreateTrack } from '../composables/useCreateTrack'

const { user } = useLogin()

const { createTrack } = useCreateTrack()

const createTrackForm = reactive({
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

const v$ = useVuelidate(rules, createTrackForm)

const form = ref()
const trackFile = ref()
const trackFileName = computed(() => {
  const track = trackFile.value?.name.split('.')[0]
  return track ? track : ''
})
const onTrackInput = (event: any) => {
  const file = event.target.files[0]
  trackFile.value = file
}

const coverFile = ref()
const coverFileName = computed(() => {
  const cover = coverFile.value?.name.split('.')[0]
  return cover ? cover : ''
})

const onCoverInput = (event: any) => {
  const file = event.target.files[0]
  coverFile.value = file
}
const onSubmit = async () => {
  if (!(await v$.value.$validate())) return

  const trackForm = new FormData()
  trackForm.append('track', trackFile.value)
  trackForm.append('cover', coverFile.value)

  trackForm.append('name', createTrackForm.name)
  trackForm.append('album', createTrackForm.album)
  trackForm.append('artistName', createTrackForm.artistName)
  trackForm.append('nationality', createTrackForm.nationality)
  trackForm.append('nickname', createTrackForm.nickname)
  trackForm.append('artistCName', createTrackForm.artistCName.toString())
  trackForm.append('durationStart', String(createTrackForm.durationStart))
  trackForm.append('durationEnd', String(createTrackForm.durationEnd))
  trackForm.append('gender', createTrackForm.gender)
  trackForm.append('release_date', createTrackForm.release_date)
  trackForm.append('user_Id', createTrackForm.user_Id)

  await createTrack(trackForm)
}
</script>

<template>
  <div class="is-flex is-justify-content-center is-align-items-center p-5">
    <div class="box">
      <span class="borderLine"></span>
      <form ref="form" @submit.prevent="onSubmit" enctype="multipart/form-data">
        <h2 class="title is-1 has-text-centered">Upload Track</h2>

        <div class="container-input-row inputFile">
          <div class="is-flex is-flex-direction-column box-file">
            <div class="file has-name is-boxed">
              <label class="file-label">
                <input
                  class="file-input"
                  type="file"
                  name="track"
                  @input="onTrackInput" />
                <span class="file-cta">
                  <span class="file-icon is-size-3">
                    <Icon icon="mdi:upload" />
                  </span>
                  <span class="file-label">Subir canción </span>
                </span>
                <span class="file-name">
                  {{ trackFileName }}
                </span>
              </label>
            </div>
          </div>

          <div class="is-flex is-flex-direction-column box-file">
            <div class="file has-name is-boxed">
              <label class="file-label">
                <input
                  class="file-input"
                  type="file"
                  name="resume"
                  @input="onCoverInput"
                  accept="image/png, image/jpeg" />
                <span class="file-cta">
                  <span class="file-icon is-size-3">
                    <Icon icon="mdi:upload" />
                  </span>
                  <span class="file-label">Subir cover </span>
                </span>
                <span class="file-name"> {{ coverFileName }} </span>
              </label>
            </div>
          </div>
        </div>

        <div class="container-input-row">
          <div class="is-flex is-flex-direction-column">
            <div class="inputBox">
              <label>Nombre</label>
              <input
                class="input is-normal"
                type="text"
                v-model="createTrackForm.name"
                @blur="v$.name.$touch" />
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
              <label>Álbum</label>

              <input
                class="input is-normal"
                type="text"
                v-model="createTrackForm.album"
                @blur="v$.album.$touch" />
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

        <div class="container-input-row">
          <div class="is-flex is-flex-direction-column">
            <div class="inputBox">
              <label>Nombre del artista</label>
              <input
                class="input is-normal"
                type="text"
                v-model="createTrackForm.artistName"
                @blur="v$.artistName.$touch" />
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
              <label>Nacionalidad del artista</label>
              <input
                class="input is-normal"
                type="text"
                v-model="createTrackForm.nationality"
                @blur="v$.nationality.$touch" />
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

        <div class="container-input-row">
          <div class="is-flex is-flex-direction-column">
            <div class="inputBox">
              <label>NickName del artista</label>
              <input
                class="input is-normal"
                type="text"
                v-model="createTrackForm.nickname" />
              <i></i>
            </div>
          </div>

          <div class="is-flex is-flex-direction-column">
            <label>Género de la canción</label>
            <div class="inputBox">
              <div class="select is-normal">
                <select v-model="createTrackForm.gender">
                  <option value="inedita">Inédita</option>
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

        <div class="container-input-row">
          <div class="is-flex is-flex-direction-column">
            <div class="inputBox mr-1">
              <label>Tiempo final de la canción</label>
              <input
                class="input is-normal"
                type="text"
                v-model="createTrackForm.durationEnd"
                @blur="v$.durationEnd.$touch" />
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
              <label>La fecha de creación de la canción</label>
              <input
                class="input is-normal"
                type="date"
                v-model="createTrackForm.release_date" />
              <i></i>
            </div>
          </div>
        </div>

        <button type="submit" class="button is-primary mt-5 is-fullwidth">
          <Icon
            v-if="true"
            icon="mdi:content-save-plus"
            class="is-size-3 mr-3" />
          <span>Guardar</span>
        </button>

        <!-- <button class="button" @click="refresh">Refresh</button> -->
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  width: 100%;
  margin-top: 4rem;
}
.container-input-row {
  width: 100%;
  /* outline: 1px solid violet; */
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 3px 0px 3px 0px;
  &.inputFile {
    align-items: center;
  }
  .box-file {
    max-width: 10rem;
  }
}

form {
  height: 80rem;
}

@media (width >= 769px) {
  .box {
    margin-top: 0px;
    max-width: 800px;
  }

  .container-input-row {
    padding: 1rem;
    flex-direction: row;
    justify-content: space-between;

    &.inputFile {
      align-items: center;
    }

    .inputBox {
      display: flex;
      flex-direction: column;
    }

    .input {
      width: 20rem;
    }
  }
}
</style>
