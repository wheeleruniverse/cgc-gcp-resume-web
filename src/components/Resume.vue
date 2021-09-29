<template>
  <div class="resume">
    <div class="section">
      <h1 class="header">
        {{ header }}
      </h1>
      <p class="description">
        {{description}}
      </p>
    </div>
    <div class="section">
      <a v-bind:href="resumeUrl" class="resume-link">Resume</a>
    </div>
    <div class="section visitors">
      {{count}} Visitors
    </div>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  props: {
    header: String,
    description: String,
    resumeUrl: String,
    visitorCountApi: String,
    visitorIncrementApi: String
  },
  methods: {
    getCount(){
      this.axios.get(this.visitorCountApi).then(response => {
        const value = response?.data?.value;
        if(value || 0 === value){
          this.count = value;
          this.incrementCount();
        }
      });
    },
    incrementCount(){
      this.axios.post(this.visitorIncrementApi).then(response => {
        if(200 === response.status){
          this.count++;
        }
      });
    }
  },
  data () {
    return {
      count: 0
    }
  },
  mounted () {
    this.getCount();
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.description {
  line-height: 2;
  margin: 0 auto;
  width: 70%;
}

.header {
  color: #5555aa;
}

.resume {
  display: flex;
  flex-direction: column;
}

.resume-link {
  background-color: #5555aa;
  border: 2px solid black;
  border-radius: 8px;
  color: white;
  padding: 8px;
  text-decoration: none;
}

.section {
  margin: 16px auto;
}

</style>
