<template>
  <div>
    <transition name="slide-left" mode="out-in" group>
      <div class="hero" v-for="(image, key) in images" :key="`slide-${key}`" v-if="key == current">
        <div :style="{'background-image': `url(${image})`}">
          <div class="text:center container">
            <h1>G20 Repository of Digital Policies</h1>
            <p class="width:875 text:center" style="margin: 0 auto">"Strengthen the exchange of information and experiences to support improving access, adoption, and effective use of digital technologies."</p>
            <h4>G20 Digital Economy Task Force</h4>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        '/assets/images/slider/Bridging-the-Gender-Digital-DIVIDE.jpg',
        '/assets/images/slider/Digital-Government.jpg',
        '/assets/images/slider/Digital-Infrastructure.jpg',
        '/assets/images/slider/Economy-4-0.jpg',
        '/assets/images/slider/Entrepreneurs-and-SMEs.jpg',
        '/assets/images/slider/G20-3.jpg',
        '/assets/images/slider/Skills-for-the-Future-of-Work.jpg',
      ],
      current: 0,
      timer: null
    }
  },
  mounted () {
    this.start()
  },
  methods: {
    start () {
      this.timer = setInterval(this.next, 5000)
    },
    stop () {
      clearTimeout(this.timer)
      this.timer = null
    },
    next () {
      if (this.current < this.images.length - 1) {
        this.current += 1
      } else {
        this.current = 0
      }
    },
    // prev () {
    //   this.current -= 1
    // }
  },
  computed: {
    currentImage () {
      return this.images[Math.abs(this.currentNumber) % this.images.length]
    }
  }
}
</script>

<style scoped>
.slide-left-enter-active{ transition:all .3s ease-in }
.slide-left-enter{ transform: translateX(10px) }
.slide-left-leave, .slide-left-leave-to{ transform: translateX(10px) }
</style>
