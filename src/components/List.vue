<template>
<div>
  <div><router-link to="/">main</router-link></div>
  <div><router-link to="/quest">quest</router-link></div>

  <div class="reminder">

      <ul>
          <li v-for="el in this.$store.state.testmd.qaHash" :key="el[1]">
              {{el.quest}} ==> {{el.answer}}
              
          </li>
      </ul>
   

  </div>
</div>
</template>

<script>
// let quest = this.$store.state.testmd.qaHash
// console.log("키값", quest[0])
// console.log("키값", quest.keys())
// console.log("밸류값", quest.values())
// mArray.push("asdf123")

//questArr = 출제될 문제
//tempArr = 이미 풀었거나 새로 추가된 문제
export default {
  name: 'list',
  data () {
    return {
        // Question : [],
    }
  },
  mounted() {
    // this.getList()
  },
  methods: { 
      // getList(){
      //   for(let el of this.$store.state.testmd.qaHash){
      //       console.log("들어간값", el)
      //       this.Question.push(el)
      //   }
      // }
  },

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-box{
  margin-top: 10px;
}
</style>
