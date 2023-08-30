<template>
  <Head>
    <Title>Niklas-Formel</Title>
  </Head>
  <div class="grid">
      <label class="label" for="distance">
        <IconArrowsLeftRight />
        <span class="unit">km</span>
      </label>
      <input type="number" v-model="distance" class="input" id="distance">
      <label class="label" for="ascent">
        <IconArrowUp class="thin-icon" />
        <span class="unit">m</span>
      </label>
      <input type="number" v-model="ascent" class="input" id="ascent">
      <label class="label" for="descent">
        <IconArrowDown class="thin-icon" />
        <span class="unit">m</span>
      </label>
      <input type="number" v-model="descent" class="input" id="distance">
      <span class="label">
        <IconClock />
      </span>
      <div v-if="ascentDecentInHoursCombined > distanceInHours" class="result">{{hhmm(0.5 * distanceInHours + ascentDecentInHoursCombined)}}</div>
      <div v-else class="result">{{hhmm(distanceInHours + 0.5 * ascentDecentInHoursCombined)}}</div>
    </div>
  <!--div v-if="ascentDecentInHoursCombined > distanceInHours">0.5 * {{r(distanceInHours)}} + {{r(ascentDecentInHoursCombined)}} = {{r(0.5 * distanceInHours + ascentDecentInHoursCombined)}}</div>
  <div v-else>{{r(distanceInHours)}} + 0.5 * {{r(ascentDecentInHoursCombined)}} = {{r(distanceInHours + 0.5 * ascentDecentInHoursCombined)}}</div-->
</template>
<script setup lang="js">
import {
  IconArrowsLeftRight,
  IconArrowUp,
  IconArrowDown,
  IconClock,
} from '@iconify-prerendered/vue-fa6-solid'
const distance = ref(0)
const ascent = ref(0)
const descent = ref(0)
const distanceInHours = computed(() => {
  return distance.value / 3
})
const ascentInHours = computed(() => {
  return ascent.value / 300
})
const descentInHours = computed(() => {
  return descent.value / 600
})
const ascentDecentInHoursCombined = computed(() => {
  return ascentInHours.value + descentInHours.value
})
function r(number) {
  return Math.round(number * 100) / 100
}
function hhmm(number) {
  const hours = Math.floor(number)
  const minutes = Math.floor((number - hours) * 60).toString().padStart(2, '0')
  return `${hours}h ${minutes}m`
}
</script>
<style scoped>
.grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: auto 1fr;
}
.label {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  flex-direction: column;
}
.unit {
  font-size: 1rem;
}
.input {
  border: 0;
  border-bottom: 2px solid lightgray;
  font-size: 72px;
  width: 100%;
}
.input:focus {
  border-bottom-color: darkcyan;
  outline: 0;
}
.result {
  font-size: 72px;
  text-align: right;
}
.thin-icon {
  padding: 0 0.125em;
}
</style>