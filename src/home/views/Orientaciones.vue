<script lang="ts" setup>
import BasePlayListHeader from '@/shared/components/BasePlayListHeader.vue'
</script>

<template>
    <BasePlayListHeader smallText="Orientaciones" icon="guitar-pick-outline" user-name="Yoan Estrada Blanco"
        title="Técnicas-Metodológicas" :trackTotal="206" />

    <div class="content">
        <p class="is-size-5">
            Se ha dicho que la voz es el instrumento musical por excelencia, ella es
            capaz de producir el sonido de cualquier instrumento musical elaborado por
            la mano del hombre, por ser flexible maleable y adaptable. Es la voz el
            medio eficaz que necesita el maestro o educador musical para trabajar con
            los niños las canciones del repertorio infantil. El canto existe desde la
            época primitiva y ha acompañado al hombre durante toda su existencia, a
            través de la canción se puede expresar sentimientos, emociones,
            convicciones, estados de ánimos, en dependencia del intérprete y
            compositor, aunque el público que la recibe también participa de ella, la
            evalúa y la hace suya en dependencia de sus gustos e intereses.
        </p>
        <h2 class="">Requisitos de la canción infantil</h2>
        <p class="is-size-5">
            La canción infantil es la que está dirigida a los niños y las niñas, entre
            sus géneros se encuentran las nanas, los arrullos, las marchas, los
            himnos, las rondas infantiles, el romance, los juegos rítmicos y la
            canción infantil como tal, ella debe poseer requisitos que son
            indispensables para la realización de un canto correcto, entre ellos
            podemos mencionar:
        </p>
        <ol class="is-size-5">
            <li>Valor instructivo – educativo.</li>
            <li>Lenguaje fácil y asequible a los niños y las niñas.</li>
            <li>
                Texto comprensible y teniendo en cuenta las características de cada
                edad.
            </li>
            <li>Melodía sencilla.</li>
            <li>Tonalidad acorde a la extensión de las voces.</li>
            <li>Letra clara.</li>
        </ol>
        <p class="is-size-5">
            Si tenemos en cuenta estos requisitos, no permitiremos en lo adelante que
            nuestros niños y nuestras niñas repitan hasta el cansancio canciones de
            adultos que muchos les aplauden sin conocer las consecuencias que pueda
            traerles en un futuro.
        </p>
    </div>
</template>

<style scoped lang="scss">
.content {
    padding: 3rem;
}
</style>
