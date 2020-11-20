import store from '../store/index'
import Cookie from 'js-cookie'

export default async function(to, from, next){
    if(Cookie.get('tokenData') !== undefined){
        let token = JSON.parse(Cookie.get('tokenData'));
            // копипаст  :)
        if(Date.now() >= token.exp * 1000){
            // копипаст  :)
            Cookie.remove('tokenData')
            store.dispatch('refreshToken', token.refresh)
            .then(()=>{
                next()
            })
            .catch(()=>{
                Cookie.remove('tokenData')
                next('/login/?loginError=true')
            })
        }else{
            next()
        }
    }else{
        if(Cookie.get('code') !== undefined){
            next()
            return
        }
        next('/login/?loginError=true')
    }
        
}