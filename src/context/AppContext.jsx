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

            console.log(state.actions.getLocalBirds())
            state.actions.getAllBirds()

            if (state.actions.getLocalBirds == false) {

            }
            if (state.actions.getLocalBirds == true) {
                state.actions.getLocalBirds()
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
