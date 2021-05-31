import React, { useState } from 'react'
import axios from 'axios'
import { createContext, useEffect } from 'react'
import { apiUrl, TOKEN } from '../utils/constants'
import setToken from '../utils/setToken'


export const UserContext = createContext()

const UserContextProvider = ({children}) => {
    const [userState, setUserState] = useState({
        isAuthen: false,
        user: null
    })

    const loadUser = async () => {
        if (localStorage[TOKEN]) {
            setToken(localStorage[TOKEN])
        }
        try {
            const response = await axios.get(`${apiUrl}/authen`)
            if (response.data.success) {
                setUserState({
                    isAuthen:true,
                    user: response.data.user
                })
            }
        }
        catch (error) {
            localStorage.removeItem(TOKEN)
            setToken(null)
            setUserState({
                isAuthen: false,
                user: null
            })
        }
    }

    useEffect(() => loadUser(), [])

    const sendSignupForm = async (signupForm) => {
        try {
            const response = await axios.post(`${apiUrl}/authen/signup`, signupForm)
            return response.data
        }
        catch (error) {
            if (error.response.data) return error.response.data
            return {success: false, message: error.message}
        }
    }

    const sendSigninForm = async (signinForm) => {
        try {
            const response = await axios.post(`${apiUrl}/authen/signin`, signinForm)
            if (response.data.success) {
                localStorage.setItem(TOKEN, response.data.encodedToken)
            }
            await loadUser()
            return response.data
        }
        catch (error) {
            if (error.response.data) return error.response.data
            return {success: false, message: error.message}
        }
    }

    const UserContextData = {sendSignupForm, sendSigninForm, userState}

    return (
        <UserContext.Provider value={UserContextData}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider