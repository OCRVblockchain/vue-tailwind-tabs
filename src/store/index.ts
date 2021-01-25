import { createStore } from 'vuex'
import axios from "axios";

type AuthData = {
    login: string
    password: string
}

export type { AuthData }

type UserState = {
    login: string
    isAdmin: boolean
    token: string
}

export default createStore({

    state: {
        user: {} as UserState
    },
    mutations: {
        setUser(state, userState: UserState) {
            state.user = userState
        },
        clearUser(state) {
            state.user = {} as UserState
        }
    },
    actions: {
        login ({ commit }, data: AuthData) {
            axios({ url: 'auth', data: data, method: 'POST' })
                .then(resp => {
                    const login: string = resp.data.login
                    const isAdmin: boolean = resp.data.isAdmin
                    const token: string = resp.data.token

                    const userState: UserState = {
                        login,
                        isAdmin,
                        token
                    }

                    localStorage.setItem('user-token', token)
                    commit('setUser', userState)
                })
                .catch(err => {
                    localStorage.removeItem('user-token')
                    commit('clearUser')
                })
        }
    },
    getters: {
        isAuthenticated(state): boolean {
            return !!state.user.token
        }
    }
})