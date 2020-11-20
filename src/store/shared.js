export default {
    // если апгрейдить, можно пользоваться 
    state:{
        loading:false,
        error:null,
        messages:null,
    },
    mutations:{
        setLoading(state, payload){
            state.loading = payload
        },
        setError(state, payload){
            state.error = payload
        },
        setMessages(state, payload){
            state.messages = payload
        },
        clearError(state){
          state.error = null
        }
    },
    actions:{
        setLoading({commit}, payload){
            commit('setLoading', payload)
        },
        setError({commit}, payload){
            commit('setError', payload)
        },
        setMessages({commit}, payload){
            commit('setMessages', payload)
        },
        clearError({commit}){
            commit('clearError')
        }
    },
    getters:{
        loading(state){
            return state.loading
        },
        error(state){
            return state.error
        },
        messages(state){
            return state.messages
        }
    }
}