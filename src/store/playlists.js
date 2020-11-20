import Cookie from 'js-cookie'
export default {
    state: {
        playlists: null,
    },
    mutations:{
    setPlaylists(state, payload){
        state.playlists = payload
    }
    },
    actions:{
        async searchDate({commit}, payload){
            let token =  JSON.parse(Cookie.get('tokenData')).access_token
            const playlists = await fetch(`https://api.spotify.com/v1/users/${payload}/playlists`, {
                method:'GET',
                headers:{'Authorization': `Bearer ` + token}
            })
            let result = await playlists.json();
            console.log(result);
            commit('setPlaylists', result)
        }
    },
    getters:{
        playlists(state){
            return state.playlists
        },
    }
}