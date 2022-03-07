<template>
<div>
  <div><router-link to="/">main</router-link></div>
  <div><router-link to="/list">list</router-link></div>

  <div class="reminder">

     <form  v-on:submit="onAnswerForm">
      <div>문제 : {{botQuestion}}</div>
      <input class="input-box" type="text" placeholder="정답을 적으세요" v-model="userAnswer">
      <button>제출</button>
    </form>

   

  </div>
</div>
</template>

<script>
// // let quest = new Map(JSON.parse(localStorage.getItem("qaHash")))
// let tempArray = JSON.parse(localStorage.getItem("tempArr"))
// let qaHash = new Map();
// let mArray = JSON.parse(localStorage.getItem("Arr"))
// // let questArr = new Array();
// // mArray.push("asdf123")

//questArr = 출제될 문제
//tempArr = 이미 풀었거나 새로 추가된 문제
export default {
  
  name: 'question',
  data () {
    return {
      botQuestion : "",
      userAnswer : "",
    }
  },
  mounted() {
    this.suggestQuestion()
  },
  methods: { 
    // 버튼 실행시 실행할 함수 
    // 로또당첨기 처럼 푼문제가  있다면 빼야함
    // 배열을 두개만들어서 기존 문제리스트와 풀엇던문제&추가된문제를 담은 배열이 필요함
    onAnswerForm(e){ // form의 새로 고침 막기 
  var questArr = this.$store.state.testmd.qaHash

    e.preventDefault(); 
    for(let i = 0; i < questArr.length; i++){
      console.log("this.userAnswer",this.userAnswer)
      if(this.botQuestion === questArr[i].quest){
        if(questArr[i].answer === this.userAnswer){
          console.log("ok")
          alert("정답입니다.")
        }else{
          console.log("no")
          alert("오답입니다.")
        }
      }
    }
    },
    

    // let getData = JSON.parse(localStorage.getItem("cntHash"))
    // cntHash.set(this.botQuestion, callCount++)
    // localStorage.setItem("cntHash", JSON.stringify(cntHash));

    suggestQuestion(){
      if(this.$store.state.testmd.Arr.length < 1){
        console.log("비어있다")
        this.$store.dispatch('add_arr', this.$store.state.testmd.qaHash)
      }
        let chooseNum = this.getRandomIntInclusive(0, this.$store.state.testmd.Arr.length-1)
        this.botQuestion = this.$store.state.testmd.Arr[chooseNum].quest
        console.log("this.botQuestion=", this.botQuestion)
        this.$store.dispatch('del_arr', chooseNum)
      
      
      // 페이지로 들어갈시에 문제를 걸러서 내주는 메소드
      // arr 내용을 난수방식문제로 출력
      // 출력하고나면 arr 해당 문제는 tempArr로 옮겨야함(arr에서 삭제, tempArr에 추가)
      // 해당하는 arr 길이가 0이 될때까지 문제를 출력하고,
      // arr 배열이 비어있다면 tempArr을 다시 questArr에 넣는다.
    },

    getRandomIntInclusive(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
    },

  },

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-box{
  margin-top: 10px;
}
</style>
