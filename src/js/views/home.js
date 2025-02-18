import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import background from "../../img/star-wars-background.jpeg";
import { getCharacterImage, getPlanetImage, getStarshipImage } from "../component/getImage.jsx";
import { PeopleCard } from "../component/peopleCard.jsx";
import { PlanetsCard } from "../component/planetsCard.jsx";
import { StarshipsCard } from "../component/strashipsCard.jsx";

const styles = {
	backgroundImage: `url(${background})`,
};

export const Home = () => {

	const { store, actions } = useContext(Context);


    useEffect(() => {
		if (store.people.length === 0) actions.loadPeople();
		if (store.planets.length === 0) actions.loadPlanets();
		if (store.starships.length === 0) actions.loadStarships();
	}, []);

	return (
		<div className="home-container" style={styles}>
			<h3 className="text-light ms-3">Personajes</h3>
			<section className="text-center mt-1">
				<div className="horizontal-scrollable">
					{store.people?.map(el => (
						<PeopleCard
							key={el.uid}
							img={getCharacterImage(el.name, el.uid)}
							name={el.name}
							gender={el.properties?.gender}
							birth_year={el.properties?.birth_year}
							uid={el.uid}
						/>
					))}
				</div>
			</section>
			<h3 className="text-light ms-3">Planetas</h3>
			<section className="text-center mt-1">
				<div className="horizontal-scrollable">
					{store.planets?.map(el => (
						<PlanetsCard
							key={el.uid}
							img={getPlanetImage(el.name)}
							name={el.name}
							terrain={el.properties?.terrain}
							climate={el.properties?.climate}
							uid={el.uid}
						/>
					))}
				</div>
			</section>
			<h3 className="text-light ms-3">Vehículos / Naves</h3>
			<section className="text-center mt-1">
				<div className="horizontal-scrollable">
					{store.starships?.map(el => (
						<StarshipsCard
							key={el.uid}
							img={getStarshipImage(el.name)}
							name={el.name}
							model={el.properties?.model}
							manufacturer={el.properties?.manufacturer}
							uid={el.uid}
						/>
					))}
				</div>
			</section>
		</div>

	);
}

