import {defineStore} from 'pinia'

export const useUserStore = defineStore({
    id:'user',
    state:()=>{
        return {
            name:'carrot'
        }
    },
    actions:{
        updateName(name:string){
            this.name = name
        }
    }
})

// 官方文档 https://pinia.vuejs.org/introduction.html