<template>
  <v-app>
    <NavBar/>

    <Header />

    <v-content>
       <Carousel />
       <HelloWorld />
    </v-content>

   
    <Footer />
  </v-app>
</template>

<script>
import HelloWorld from '@/components/HelloWorld/Component.vue'
import Carousel from '@/components/Carousel/Component.vue'
import NavBar from '@/components/NavBar/Component.vue'
import Header from '@/components/Header/Component.vue'
import Footer from '@/components/Footer/Component.vue'

export default {
components: {
    HelloWorld,
    Carousel,
    NavBar,
    Header,
    Footer,
  }
}
</script>


<style scoped>

</style>