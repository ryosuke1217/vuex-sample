import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)

const Form = {
    namespaced: true,
    state: {
      button: ['確認', '送信'],
      components: ['TextareaComp', 'StringComp']
    },
    mutations: {},
    actions: {
      buttonAction({ commit, state, rootState })  {
      console.log("buttonAction")
      if (!rootState.isError) commit('setStepCount', null, { root: true })
      if (rootState.stepCount === 2) router.push('thanks')
      }
   },
   getters: {
     getButtonText (state, getters, rootState) {
       console.log(state)
       return state.button[rootState.stepCount]
     },
     getComponent (state, getters, rootState) {
       return state.components[rootState.stepCount]
     }
   }
}

const Head = {
  state: {
    title: ['感想を入力', '確認画面', '送信完了']
  },
  mutations: {},
  actions: {},
  getters: {
    getTitle (state, getters, rootState) {
      return state.title[rootState.stepCount]
    }
  }
}

const Textarea = {
  namespaced: true,
  state: {
    errorMsg: '入力は必須です'
  },
  getters: {
    getError (state, getters, rootState) {
      return rootState.isError ? state.errorMsg : null
    }
  }
}

const String = {
  namespaced: true,
  getters: {
    getString (state, getters, rootState) {
      return rootState.impression
    }
  }
}

export default new Vuex.Store({
  state: {
    stepCount: 0,
    impression: '',
    isError: true
  },
  mutations: {
    setStepCount (state) {
      console.log('rootsetStepCount')
      state.stepCount++
    },
    updateImpression (state, value) {
      state.impression = value
      state.impression ? state.isError = false : state.isError = true
    }
  },
  modules: {
    Form,
    Head,
    Textarea,
    String
  }
})