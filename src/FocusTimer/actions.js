import state from "./state.js"
import * as el from './elements.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'
import { registerSounds } from "./events.js"


export function playTimer() {
  state.isRunning = true
  
  timer.countdown()
}

export function stopTimer() {
  state.isRunning = false
  
  timer.updateDisplay()
}

export function plusFiveMinutes() {
  for (let i=0; i < 5; i++) {
    el.minutes.textContent++
  }

  if(el.minutes.textContent > 60){
    el.minutes.textContent = 60
  }
  
}

export function minusFiveMinutes() {
  for (let i=0; i < 5; i++) {
    el.minutes.textContent--
  }

  if(el.minutes.textContent < 5) {
    el.minutes.textContent = 5
  }
}

// sounds

export function forestSound() {

  state.isMute = el.forestCard.classList.toggle('music-on')

  el.rainCard.classList.remove('music-on')
  el.coffeeCard.classList.remove('music-on')
  el.firecampCard.classList.remove('music-on')

  if(state.isMute) {
    sounds.forestAudio.play()

    sounds.rainAudio.pause()
    sounds.coffeeAudio.pause()
    sounds.campfireAudio.pause()
    return
  }

  sounds.forestAudio.pause()

  if(!state.isMute) {
    sounds.forestAudio.pause()
  }
}

export function rainSound() {
  state.isMute = el.rainCard.classList.toggle('music-on')

  el.forestCard.classList.remove('music-on')
  el.coffeeCard.classList.remove('music-on')
  el.firecampCard.classList.remove('music-on')

  if(state.isMute) {
    sounds.rainAudio.play()

    sounds.forestAudio.pause()
    sounds.coffeeAudio.pause()
    sounds.campfireAudio.pause()
    return
  }

  sounds.rainAudio.pause()

  if(!state.isMute) {
    sounds.rainAudio.pause()
  }
}

export function coffeeSound() {
  state.isMute = el.coffeeCard.classList.toggle('music-on')

  el.forestCard.classList.remove('music-on')
  el.rainCard.classList.remove('music-on')
  el.firecampCard.classList.remove('music-on')

  if(state.isMute) {
    sounds.coffeeAudio.play()

    sounds.forestAudio.pause()
    sounds.rainAudio.pause()
    sounds.campfireAudio.pause()
    return
  }

  sounds.coffeeAudio.pause()

  if(!state.isMute) {
    sounds.coffeeAudio.pause()
  }
}

export function firecampSound() {
  state.isMute = el.firecampCard.classList.toggle('music-on')

  el.forestCard.classList.remove('music-on')
  el.rainCard.classList.remove('music-on')
  el.coffeeCard.classList.remove('music-on')

  if(state.isMute){
    sounds.campfireAudio.play()

    sounds.forestAudio.pause()
    sounds.rainAudio.pause()
    sounds.coffeeAudio.pause()
    return
  }

  sounds.campfireAudio.pause()

  if(!state.isMute){
    sounds.campfireAudio.pause()
  }
}