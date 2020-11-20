import Cookie from 'js-cookie'
import router from '../router'
export default {
    state: {
    user: false,
    },
    mutations:{
    setUser(state, payload){
        state.user = payload
    }
    },
    actions:{
    async saveToken(state, token){
        Cookie.set('tokenData', token)
    },
    async loginUser({commit}){
        commit('clearError');
        commit('setLoading', true);
        try{
            let client_id = '36253beb3805469bba4d1dfd825de153';
            let redirect = process.env.VUE_APP_URL;
            document.location.replace(`https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=user-read-private user-read-email&redirect_uri=${encodeURIComponent(redirect)}`)
            Cookie.set('code', true)
        }catch(e){
            console.log(e);
        }
    },
    async getToken({commit,dispatch}){
        commit('clearError');
        commit('setLoading', true);
        try{
            if(router.history.current.query.code == undefined) return
            let client_secret = 'b02db206717c48e6994fd5407188250e';
            let client_id = '36253beb3805469bba4d1dfd825de153';
            let redirect = process.env.VUE_APP_URL;
            const url = `https://accounts.spotify.com/api/token?client_id=${client_id}&redirect_uri=${encodeURIComponent(redirect)}&grant_type=authorization_code&code=${router.history.current.query.code}`
            let getTokenData = await fetch(url,{
                method:'POST',
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
                },
            })
            let result = await getTokenData.json();
            if(result.error){
                return
            }
            dispatch('saveToken', result)
            dispatch('getAccount')
            return result
        }catch(e){
        console.log(e);
        }

    }
    },
    getters:{
    
    }
}