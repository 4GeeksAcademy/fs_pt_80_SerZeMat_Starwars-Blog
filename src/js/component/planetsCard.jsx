import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const PlanetsCard = ({ uid, name, img, terrain, climate }) => {
    const { store, actions } = useContext(Context);
    const isFavorite = store.favorites.some(fav => fav.uid === uid && fav.category === "planets");

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card bg-dark">
                <figure>
                    <img className="card-img-top" src={img} alt={name} />
                </figure>
                <div className="p-3 text-start text-white">
                    <h5>{name}</h5>
                    <p><strong>Terreno:</strong> {terrain || "N/A"}</p>
                    <p><strong>Clima:</strong> {climate || "N/A"}</p>
                </div>
                <div className="container text-center mb-3">
                    <div className="row">
                        <div className="col-6">
                            <Link to={`/details/planets/${uid}`} className="btn btn-primary w-100">
                                Learn More
                            </Link>
                        </div>
                        <div className="col-6">
                            <button
                                className={`btn w-100 favorite-button ${isFavorite ? "btn-warning" : "btn-outline-warning"}`}
                                onClick={() => actions.toggleFavorite(uid, name, "planets")}
                            >
                                <span className="fa-solid fa-heart"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};