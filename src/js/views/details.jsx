import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { getCharacterImage, getPlanetImage, getStarshipImage } from "../component/getImage.jsx";

export const Details = () => {
    const { store, actions } = useContext(Context);
    const { category, uid } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        actions.getOne(category, uid);
    }, [category, uid]);

    useEffect(() => {
        const fetchData = async () => {
            let existingData = store.single;

            if (!existingData || existingData.uid !== uid) {
                existingData = await actions.getOne(category, uid);
            }
            setItem(existingData);
        };
        fetchData();
    }, [category, uid, store.single]);

    if (!item || !item.properties) {
        return <h2 className="text-center">Cargando...</h2>;
    }

    let imageSrc;
    if (category === "people") {
        imageSrc = getCharacterImage(item.properties.name, uid);
    } else if (category === "planets") {
        imageSrc = getPlanetImage(item.properties.name);
    } else if (category === "starships") {
        imageSrc = getStarshipImage(item.properties.name);
    }

    return (
        <div className="container mt-5 text-white">
            <div className="row align-items-center">
                <div className="col-md-4">
                    <img src={imageSrc} alt={item.name} className="img-fluid rounded" />
                </div>
                <div className="col-md-8">
                    <h2>{item?.properties?.name || "Nombre no disponible"}</h2>
                    <p><strong>Descripción:</strong> {item?.description || "No disponible"}</p>

                    {category === "people" && (
                        <>
                            <p><strong>Género:</strong> {item.properties?.gender || "N/A"}</p>
                            <p><strong>Año de nacimiento:</strong> {item.properties?.birth_year || "N/A"}</p>
                            <p><strong>Color de piel:</strong> {item.properties?.skin_color || "N/A"}</p>
                            <p><strong>Color de cabello:</strong> {item.properties?.hair_color || "N/A"}</p>
                        </>
                    )}

                    {category === "planets" && (
                        <>
                            <p><strong>Clima:</strong> {item.properties?.climate || "N/A"}</p>
                            <p><strong>Terreno:</strong> {item.properties?.terrain || "N/A"}</p>
                            <p><strong>Población:</strong> {item.properties?.population || "N/A"}</p>
                            <p><strong>Diámetro:</strong> {item.properties?.diameter || "N/A"} Km</p>
                        </>
                    )}

                    {category === "starships" && (
                        <>
                            <p><strong>Modelo:</strong> {item.properties?.model || "N/A"}</p>
                            <p><strong>Fabricante:</strong> {item.properties?.manufacturer || "N/A"}</p>
                            <p><strong>Velocidad Máxima:</strong> {item.properties?.max_atmosphering_speed || "N/A"}</p>
                            <p><strong>Capacidad de Carga:</strong> {item.properties?.cargo_capacity || "N/A"}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};