import Cookie from 'js-cookie'
export default {
    state: {
        artist: null,
    },
    mutations:{
    setArtist(state, payload){
        state.artist = payload
    }
    },
    actions:{
        async searchArtist({commit}, payload){
            try{
                let token =  JSON.parse(Cookie.get('tokenData')).access_token
                const playlists = await fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(payload)}&type=artist`, {
                    method:'GET',
                    headers:{'Authorization': `Bearer ` + token}
                })
                let result = await playlists.json();
                if(result.error && result.error.status == 401 ){
                    throw  new Error()
                }else{
                    commit('setArtist', result.artists)
                }
            }catch(e){
                console.log(e);
            }
        }
    },
    getters:{
        artists(state){
            return state.artist
        },
    }
}