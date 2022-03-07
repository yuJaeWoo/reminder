  // state : 해당 파일에서 관리하는 상태값 입니다. state를 변경하기 위해서는 mutations 내부의 변수를 commit으로 실행시켜야함
const state = {
    test: "등록",
    qaHash: [],
    Arr: [],
    listcnt : false
  };
  // getters : 컴포넌트에서 store의 값을 가져올 때 어떠한 계산 식 이후 가져오려할 때 사용합니다. Computed 사이클에서 사용
const getters = {
  get_test: state => state.test = "게터로 들고온 등록"
};
  // mutations : state를 변경하기 위해 실행되는 것으로 비동기를 해야할 경우 (async await을 사용하며, db의 접근이 필요할 경우 많이 쓰임 ) 
  // action에서 실행하며, 그렇지 않을 경우 컴포넌트 내부 method에서 commit('변수') 를 통해 실행 가능함
const mutations = {
  UPDATE_TEST(state, param) {
    state.test = param;
  },
  UPDATE_MAP(state, param){
    state.qaHash.push(param)
  },
  UPDATE_CNT(state){
    state.listcnt = true;
  },
  ADD_ARR(state, param){
    for(let i = 0; i< param.length; i++){
      state.Arr.push({quest:param[i].quest, answer:param[i].answer})
    }
  },
  DEL_ARR(state, param){
    state.Arr.splice(param, 1)
  }
};
  // actions : state를 바꾸기 위해 사용되며 컴포넌트의 method에서 실행함
  // this.$store.dispatch('action함수명', {..data}) 방식으로 실행함
const actions = {
  update_test({commit}, data) {
    // commit("UPDATE_TEST", data);
    return setTimeout(() => {
      commit("UPDATE_TEST", data);
    }, 1000)
  },
  update_map({commit}, data) {
    // commit("UPDATE_TEST", data);
    return setTimeout(() => {
      commit("UPDATE_MAP", data);
    }, 1000)
  },
  update_cnt({commit}) {
    // commit("UPDATE_TEST", data);
    return setTimeout(() => {
      commit("UPDATE_CNT");
    }, 1000)
  },
  add_arr({commit}, data) {
    commit("ADD_ARR", data);
  },
  del_arr({commit}, data) {
    // commit("UPDATE_TEST", data);
    return setTimeout(() => {
      commit("DEL_ARR", data);
    }, 100)
  }
};

export default {
  state: {
    ...state
  },
  getters,
  mutations,
  actions
};