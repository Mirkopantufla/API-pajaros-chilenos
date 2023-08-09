const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            apiURL: "https://aves.ninjas.cl/api/birds",
            birds: null,
            selectedBird: null,
            favoritos: null
        },
        actions: {
            handleInput: () => {
                const { name, value } = e.target;

                // [name]: value
            },
            getAllBirds: async () => {
                const { apiURL, birds } = getStore();

                // if (birds != null) {
                //     return;
                // }

                const data = {
                    options: {
                        method: 'GET'
                    }
                }

                try {

                    const result = await fetch(apiURL, data.options)
                    const respJson = await result.json()

                    console.log(respJson)

                    setStore({ birds: respJson })

                    sessionStorage.setItem("birds", JSON.stringify(respJson))

                } catch (error) {
                    console.log(error)
                }
            },
            getSpecificBird: async (birdUID) => {

                try {

                    const { apiURL } = getStore();

                    const data = {
                        url: `${apiURL}/${birdUID}`,
                        options: {
                            method: 'GET'
                        }
                    }

                    const result = await fetch(data.url, data.options)
                    const respJson = await result.json()

                    console.log(respJson)

                    setStore({ selectedBird: respJson })

                } catch (error) {

                }

            },
            cleanSelectedBird: () => {
                setStore({ selectedBird: null })
            },
            getLocalBirds: () => {
                if (sessionStorage.getItem('birds')) {
                    let sessionBirds = sessionStorage.getItem('birds');
                    setStore({ birds: JSON.parse(sessionBirds) })
                    return true;
                }
            },
            getLocalFavorites: () => {
                if (localStorage.getItem('favoritos')) {
                    let localFavorites = localStorage.getItem('favoritos');
                    setStore({ favorites: JSON.parse(localFavorites) })
                }
            },
            saveLocalFavorites: () => {
                const { favorites } = getStore();

                localStorage.setItem('favoritos', JSON.stringify(favorites))
            },
            addFavorite: (element) => {

                const { favorites } = getStore();

                if (favorites.includes(element)) {
                    getActions().deleteFavorite(element);
                    console.log('El personaje ya existe en favoritos')
                } else {
                    setStore({ favorites: favorites.concat(element) })
                }
                getActions().saveLocalFavorites();
            },
            deleteFavorite: (item) => {

                const { favorites } = getStore();

                setStore({ favorites: favorites.filter(fav => fav !== item) })

                getActions().saveLocalFavorites();

            }
        }
    }
}

export default getState;