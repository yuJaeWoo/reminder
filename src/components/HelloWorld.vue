<template>
<div>
  <div><router-link to="/quest">quest</router-link></div>
  <div><router-link to="/list" >list</router-link></div>


  <div class="reminder">

    <form class="input-box" v-on:submit="onSubmitForm">
      <input type="text" placeholder="질문" v-model="question">
      <input type="text" placeholder="정답" v-model="answer">
      <button>등록</button>
      <!-- <div>{{$store.getters.get_test}}</div> -->
      <!-- {{$store.state.testmd.test} -->
    </form>

   

  </div>
  </div>
</template>

<script>
let tempArr = new Array();
let Arr = [];
//tempArr = 이미 풀었거나 새로 추가된 문제
// let qaHash = new Map();

export default {
  name: 'HelloWorld',
  data () {
    return {
      question : "",
      answer : "", 
    }
  },
  mounted(){
    this.watchHash()
  },
  methods: { 
    // 버튼 실행시 실행할 함수 
    // question과 answer를 받아 객체로 만든뒤에 스토어에 저장 ********
    onSubmitForm(e){ // form의 새로 고침 막기 
      e.preventDefault(); 
      const qObj = {
        quest: this.question,
        answer: this.answer
      } 

      this.$store.dispatch('update_map', qObj)
    // qaHash.set(this.question, this.answer)
    // tempArr.push(this.question)
    // console.log("이거 확인", this.$store.state.test)
    // console.log("qaHash=", qaHash)
    // console.log("tempArr=", tempArr.length)
    // console.log(Arr)

    // for(let i =0; i< tempArr.length; i++){
    //   console.log(`tempArr[${i}]=`,tempArr[i])
    // }
    // localStorage.setItem("qaHash", JSON.stringify(qaHash));
    // localStorage.setItem("Arr", JSON.stringify(Arr));
    // localStorage.setItem("tempArr", JSON.stringify(tempArr));
    // this.listcnt=true
     
    },
    watchHash(){
      // console.log("this.$store.state.testmd.qaHash.length == ", this.$store.state.testmd.qaHash.length)
      if(this.$store.state.testmd.qaHash.length > 0){
        this.$store.dispatch('update_cnt')
      }
    }

    
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-box{
  margin-top: 10px;
}
</style>
