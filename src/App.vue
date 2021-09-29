<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Resume
      header="Vue Resume Sample"
      description="This is a sample application created in Vue for the sole purpose of exploring GCP services that I
      would not use in my actual Resume website. I refused to use these GCP services like Cloud Build and Cloud Source
      Repositories in that actual code simply because I am already using another technology. My official Resume is
      hosted on three cloud providers (AWS, Azure, and GCP) so I didn't think it was wise to use services exclusive to
      GCP for multiple cloud providers. Lastly, I didn't want to implement multiple solutions that accomplish the same
      goal."
      resumeUrl="https://gcp.wheelercloudguru.com"
      visitorCountApi="https://api.wheelersadvice.com/visitor/count"
      visitorIncrementApi="https://api.wheelersadvice.com/visitor/increment"
  />
</template>

<script>
import Resume from './components/Resume.vue'
export default {
  name: 'App',
  components: {
    Resume
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
