const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://www.swapi.tech/api',
			people: [],
			planets: [],
			starships: [],
			single: {},
			favorites: []
		},
		actions: {
			loadPeople: async () => {
				try {
					const resp = await fetch(`${getStore().url}/people`);
					if (!resp.ok) throw new Error('Error al cargar Personajes');
					const data = await resp.json();

					const peopleWithDetails = await Promise.all(
						data.results.map(async (person) => {
							const personResp = await fetch(`${getStore().url}/people/${person.uid}`);
							if (!personResp.ok) throw new Error('Error al cargar detalles del personaje');
							const personData = await personResp.json();
							return { ...person, properties: personData.result.properties };
						})
					);

					setStore({ people: peopleWithDetails });
				} catch (error) {
					console.error(error);
				}
			},

			loadPlanets: async () => {
				try {
					const resp = await fetch(`${getStore().url}/planets`);
					if (!resp.ok) throw new Error('Error al cargar Planetas');
					const data = await resp.json();

					const planetsWithDetails = await Promise.all(
						data.results.map(async (planet) => {
							const planetResp = await fetch(`${getStore().url}/planets/${planet.uid}`);
							if (!planetResp.ok) throw new Error('Error al cargar detalles del planeta');
							const planetData = await planetResp.json();
							return { ...planet, properties: planetData.result.properties };
						})
					);

					setStore({ planets: planetsWithDetails });
				} catch (error) {
					console.error(error);
				}
			},

			loadStarships: async () => {
				try {
					const resp = await fetch(`${getStore().url}/starships`);
					if (!resp.ok) throw new Error('Error al cargar Naves');
					const data = await resp.json();

					const starshipsWithDetails = await Promise.all(
						data.results.map(async (starship) => {
							const starshipResp = await fetch(`${getStore().url}/starships/${starship.uid}`);
							if (!starshipResp.ok) throw new Error('Error al cargar detalles de la nave');
							const starshipData = await starshipResp.json();
							return { ...starship, properties: starshipData.result.properties };
						})
					);

					setStore({ starships: starshipsWithDetails });
				} catch (error) {
					console.error(error);
				}
			},

			getOne: async (category, uid) => {
				try {
					const url = `${getStore().url}/${category}/${uid}`;
					const resp = await fetch(url);
					if (!resp.ok) throw new Error(`Error al cargar ${category}`);
			
					const data = await resp.json();
			
					setStore({ single: { ...data.result, description: data.result.description || "No disponible" } });
					return data.result;
				} catch (error) {
					console.error(error);
				}
			},

			toggleFavorite: (uid, name, category) => {
				const store = getStore();
				const exists = store.favorites.some(fav => fav.uid === uid && fav.category === category);

				if (exists) {
					setStore({
						favorites: store.favorites.filter(fav => !(fav.uid === uid && fav.category === category))
					});
				} else {
					setStore({
						favorites: [...store.favorites, { uid, name, category }]
					});
				}
			},

			clearSingle: () => setStore({ single: {} })
		}
	};
};

export default getState;
