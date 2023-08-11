const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            apiURL: "https://aves.ninjas.cl/api/birds",
            birds: null,
            selectedBird: null,
            favorites: []
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
                if (localStorage.getItem('favorites')) {
                    let localFavorites = localStorage.getItem('favorites');
                    setStore({ favorites: JSON.parse(localFavorites) })
                }
            },
            saveLocalFavorites: () => {
                const { favorites } = getStore();

                localStorage.setItem('favorites', JSON.stringify(favorites))
            },
            addFavorite: (bird) => {

                const { favorites } = getStore();

                let isFavorite = favorites.filter((fav) => fav.uid == bird.uid)

                if (isFavorite.length == 0) {
                    // Si ya existe en favoritos, eliminar de la lista
                    setStore({ favorites: favorites.concat(bird) })
                } else {

                    getActions().deleteFavorite(bird);
                }
                getActions().saveLocalFavorites();
            },
            deleteFavorite: (bird) => {

                const { favorites } = getStore();

                setStore({ favorites: favorites.filter(fav => fav.uid !== bird.uid) })

                getActions().saveLocalFavorites();

            }
        }
    }
}

export default getState;