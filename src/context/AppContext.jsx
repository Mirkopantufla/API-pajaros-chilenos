import { createContext, useEffect, useState } from "react";
import getState from "./flux.js";

export const Context = createContext(null);

const injectContext = PassedComponent => {
    const StoreWrapper = props => {
        //this will be passed as the contenxt value
        const [state, setState] = useState(
            getState({
                getStore: () => state.store,
                getActions: () => state.actions,
                setStore: updatedStore =>
                    setState({
                        store: Object.assign(state.store, updatedStore),
                        actions: { ...state.actions }
                    })
            }));

        useEffect(() => {

            if (localStorage.getItem('favorites')) {
                state.actions.getLocalFavorites()
            }

            if (sessionStorage.getItem('birds')) {
                state.actions.getLocalBirds()
            } else {
                state.actions.getAllBirds()
            }

        }, []);

        return (
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        );
    };
    return StoreWrapper;
};

export default injectContext;
