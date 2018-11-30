<template>
  <div>
    <transition-group name="slide" tag="div">
      <div v-for="number in [currentNumber]" :key="number">
        <div id="hero" :style="{'background-image': `url(${currentImage})`}">
          <div class="text:center container">
            <h1>G20 Repository of Digital Policies</h1>
            <p class="width:875 text:center" style="margin: 0 auto">"Strengthen the exchange of information and experiences to support improving access, adoption, and effective use of digital technologies."</p>
            <h4>G20 Digital Economy Task Force</h4>
          </div>
        </div>
      </div>
    </transition-group>
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
      currentNumber: 0,
      timer: null
    }
  },
  mounted () {
    // this.start()
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
      this.currentNumber += 1
    },
    prev () {
      this.currentNumber -= 1
    }
  },
  computed: {
    currentImage () {
      return this.images[Math.abs(this.currentNumber) % this.images.length]
    }
  }
}
</script>

<style scoped>
.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}

</style>
