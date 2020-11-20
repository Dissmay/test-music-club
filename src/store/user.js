import Cookie from 'js-cookie'
export default {
    state: {
        user: null,
    },
    mutations:{
    setUser(state, payload){
        state.user = payload
    }
    },
    actions:{
        async getAccount({commit}){
            let token =  JSON.parse(Cookie.get('tokenData')).access_token
           let account =  await fetch('https://api.spotify.com/v1/me',{
                headers: { 'Authorization': 'Bearer ' + token },
            })
            let  res  = await account.json()
            console.log(res);
            commit('setUser', res)
        },
    },
    getters:{
    user(state){
        return state.user
    },
    }
}