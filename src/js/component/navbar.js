import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {

    const { store, actions } = useContext(Context);


    return (
        <nav className="navbar navbar-dark mb-3">
            <Link to="/">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
                    alt="star_wars_logo"
                    className="ms-2"
                    width={'90px'}
                />
            </Link>
            <div className="ml-auto me-3">
                <div className="dropdown">
                    <button 
                        className="btn btn-dark dropdown-toggle me-4"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        >
                        Favoritos <span className="badge bg-warning">{store.favorites.length}</span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-dark">
                        {store.favorites.length === 0 ? (
                            <li className="dropdown-item text-center text-muted">No hay favoritos</li>
                        ) : (
                            store.favorites.map((fav, index) => (
                                <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                                    <Link to={`/details/${fav.category}/${fav.uid}`} className="text-white text-decoration-none">
                                        {fav.name}
                                    </Link>
                                    <button
                                        className="btn btn-sm btn-outline-danger ms-2"
                                        onClick={() => actions.toggleFavorite(fav.uid, fav.name, fav.category)}
                                    >
                                        <span className="fa-solid fa-trash"></span>
                                    </button>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
