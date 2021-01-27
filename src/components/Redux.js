import React from 'react'
// import Index from './ReduxDemo/Index'
// import AsyncAction from './ReduxDemo/AsyncAction'
import { Provider } from 'react-redux'
import CakeContainer from './ReduxDemo/CakeContainer'
import store from '../redux/store'
import HooksCakeContainer from './ReduxDemo/HooksCakeContainer'

function Redux() {
    return (
        <Provider store={store}>
            <div className="Redux">
                <CakeContainer />
                <HooksCakeContainer/>
            </div>
        </Provider>
    )
}
export default Redux