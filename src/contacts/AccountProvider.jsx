import {createContext, useState} from 'react'

export const AccountContext = createContext(null);

const AccountProvider = () => {

    const [account, setAccount]
    return(
        <AccountContext.Provider value={{

        }
        }
        />
    )
}

export default AccountProvider;