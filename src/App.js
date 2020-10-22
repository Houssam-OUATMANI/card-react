import React from "react";
import "./styles.css";
import CountriesList from "./CountriesList";

export default function App() {
  let countries = [
    {
      id: 1,
      name: "Algerie",
      capital: "Alger",
      img:
        "https://cdn.webshopapp.com/shops/94414/files/53432190/icone-drapeau-dalgerie-telechargement-gratuit.jpg",
      description:
        "L'Algérie est un pays nord-africain doté d'un littoral sur la mer Méditerranée et d'un intérieur désertique, le Sahara. De nombreux empires y ont laissé leur marque, comme les anciennes ruines romaines de Tipasa, en bord de mer. Dans la capitale, Alger, des sites ottomans, tels que la mosquée Ketchaoua, datant de 1612 environ, bordent le quartier de la Casbah. Perché sur une colline, cet endroit dispose d'allées étroites et d'escaliers. La basilique Notre-Dame d'Afrique, arborant une architecture néo-byzantine, date de la domination coloniale française. "
    },
    {
      id: 2,
      name: "France",
      capital: "Paris",
      img: "https://cdn.countryflags.com/thumbs/france/flag-400.png",
      description:
        "La France, pays de l'Europe occidentale, compte des villes médiévales, des villages alpins et des plages. Paris, sa capitale, est célèbre pour ses maisons de mode, ses musées d'art classique, dont celui du Louvre, et ses monuments comme la Tour Eiffel. Le pays est également réputé pour ses vins et sa cuisine raffinée. Les peintures rupestres des grottes de Lascaux, le théâtre romain de Lyon et l'immense château de Versailles témoignent de sa riche histoire"
    },
    {
      id: 1,
      name: "Algerie",
      capital: "Alger",
      img:
        "https://cdn.webshopapp.com/shops/94414/files/53432190/icone-drapeau-dalgerie-telechargement-gratuit.jpg",
      description:
        "L'Algérie est un pays nord-africain doté d'un littoral sur la mer Méditerranée et d'un intérieur désertique, le Sahara. De nombreux empires y ont laissé leur marque, comme les anciennes ruines romaines de Tipasa, en bord de mer. Dans la capitale, Alger, des sites ottomans, tels que la mosquée Ketchaoua, datant de 1612 environ, bordent le quartier de la Casbah. Perché sur une colline, cet endroit dispose d'allées étroites et d'escaliers. La basilique Notre-Dame d'Afrique, arborant une architecture néo-byzantine, date de la domination coloniale française. "
    },
    {
      id: 2,
      name: "France",
      capital: "Paris",
      img: "https://cdn.countryflags.com/thumbs/france/flag-400.png",
      description:
        "La France, pays de l'Europe occidentale, compte des villes médiévales, des villages alpins et des plages. Paris, sa capitale, est célèbre pour ses maisons de mode, ses musées d'art classique, dont celui du Louvre, et ses monuments comme la Tour Eiffel. Le pays est également réputé pour ses vins et sa cuisine raffinée. Les peintures rupestres des grottes de Lascaux, le théâtre romain de Lyon et l'immense château de Versailles témoignent de sa riche histoire"
    },
    {
      id: 1,
      name: "Algerie",
      capital: "Alger",
      img:
        "https://cdn.webshopapp.com/shops/94414/files/53432190/icone-drapeau-dalgerie-telechargement-gratuit.jpg",
      description:
        "L'Algérie est un pays nord-africain doté d'un littoral sur la mer Méditerranée et d'un intérieur désertique, le Sahara. De nombreux empires y ont laissé leur marque, comme les anciennes ruines romaines de Tipasa, en bord de mer. Dans la capitale, Alger, des sites ottomans, tels que la mosquée Ketchaoua, datant de 1612 environ, bordent le quartier de la Casbah. Perché sur une colline, cet endroit dispose d'allées étroites et d'escaliers. La basilique Notre-Dame d'Afrique, arborant une architecture néo-byzantine, date de la domination coloniale française. "
    },
    {
      id: 2,
      name: "France",
      capital: "Paris",
      img: "https://cdn.countryflags.com/thumbs/france/flag-400.png",
      description:
        "La France, pays de l'Europe occidentale, compte des villes médiévales, des villages alpins et des plages. Paris, sa capitale, est célèbre pour ses maisons de mode, ses musées d'art classique, dont celui du Louvre, et ses monuments comme la Tour Eiffel. Le pays est également réputé pour ses vins et sa cuisine raffinée. Les peintures rupestres des grottes de Lascaux, le théâtre romain de Lyon et l'immense château de Versailles témoignent de sa riche histoire"
    },
    {
      id: 1,
      name: "Algerie",
      capital: "Alger",
      img:
        "https://cdn.webshopapp.com/shops/94414/files/53432190/icone-drapeau-dalgerie-telechargement-gratuit.jpg",
      description:
        "L'Algérie est un pays nord-africain doté d'un littoral sur la mer Méditerranée et d'un intérieur désertique, le Sahara. De nombreux empires y ont laissé leur marque, comme les anciennes ruines romaines de Tipasa, en bord de mer. Dans la capitale, Alger, des sites ottomans, tels que la mosquée Ketchaoua, datant de 1612 environ, bordent le quartier de la Casbah. Perché sur une colline, cet endroit dispose d'allées étroites et d'escaliers. La basilique Notre-Dame d'Afrique, arborant une architecture néo-byzantine, date de la domination coloniale française. "
    },
    {
      id: 2,
      name: "France",
      capital: "Paris",
      img: "https://cdn.countryflags.com/thumbs/france/flag-400.png",
      description:
        "La France, pays de l'Europe occidentale, compte des villes médiévales, des villages alpins et des plages. Paris, sa capitale, est célèbre pour ses maisons de mode, ses musées d'art classique, dont celui du Louvre, et ses monuments comme la Tour Eiffel. Le pays est également réputé pour ses vins et sa cuisine raffinée. Les peintures rupestres des grottes de Lascaux, le théâtre romain de Lyon et l'immense château de Versailles témoignent de sa riche histoire"
    },
    {
      id: 1,
      name: "Algerie",
      capital: "Alger",
      img:
        "https://cdn.webshopapp.com/shops/94414/files/53432190/icone-drapeau-dalgerie-telechargement-gratuit.jpg",
      description:
        "L'Algérie est un pays nord-africain doté d'un littoral sur la mer Méditerranée et d'un intérieur désertique, le Sahara. De nombreux empires y ont laissé leur marque, comme les anciennes ruines romaines de Tipasa, en bord de mer. Dans la capitale, Alger, des sites ottomans, tels que la mosquée Ketchaoua, datant de 1612 environ, bordent le quartier de la Casbah. Perché sur une colline, cet endroit dispose d'allées étroites et d'escaliers. La basilique Notre-Dame d'Afrique, arborant une architecture néo-byzantine, date de la domination coloniale française. "
    },
    {
      id: 2,
      name: "France",
      capital: "Paris",
      img: "https://cdn.countryflags.com/thumbs/france/flag-400.png",
      description:
        "La France, pays de l'Europe occidentale, compte des villes médiévales, des villages alpins et des plages. Paris, sa capitale, est célèbre pour ses maisons de mode, ses musées d'art classique, dont celui du Louvre, et ses monuments comme la Tour Eiffel. Le pays est également réputé pour ses vins et sa cuisine raffinée. Les peintures rupestres des grottes de Lascaux, le théâtre romain de Lyon et l'immense château de Versailles témoignent de sa riche histoire"
    },
    {
      id: 1,
      name: "Algerie",
      capital: "Alger",
      img:
        "https://cdn.webshopapp.com/shops/94414/files/53432190/icone-drapeau-dalgerie-telechargement-gratuit.jpg",
      description:
        "L'Algérie est un pays nord-africain doté d'un littoral sur la mer Méditerranée et d'un intérieur désertique, le Sahara. De nombreux empires y ont laissé leur marque, comme les anciennes ruines romaines de Tipasa, en bord de mer. Dans la capitale, Alger, des sites ottomans, tels que la mosquée Ketchaoua, datant de 1612 environ, bordent le quartier de la Casbah. Perché sur une colline, cet endroit dispose d'allées étroites et d'escaliers. La basilique Notre-Dame d'Afrique, arborant une architecture néo-byzantine, date de la domination coloniale française. "
    },
    {
      id: 2,
      name: "France",
      capital: "Paris",
      img: "https://cdn.countryflags.com/thumbs/france/flag-400.png",
      description:
        "La France, pays de l'Europe occidentale, compte des villes médiévales, des villages alpins et des plages. Paris, sa capitale, est célèbre pour ses maisons de mode, ses musées d'art classique, dont celui du Louvre, et ses monuments comme la Tour Eiffel. Le pays est également réputé pour ses vins et sa cuisine raffinée. Les peintures rupestres des grottes de Lascaux, le théâtre romain de Lyon et l'immense château de Versailles témoignent de sa riche histoire"
    },
    {
      id: 1,
      name: "Algerie",
      capital: "Alger",
      img:
        "https://cdn.webshopapp.com/shops/94414/files/53432190/icone-drapeau-dalgerie-telechargement-gratuit.jpg",
      description:
        "L'Algérie est un pays nord-africain doté d'un littoral sur la mer Méditerranée et d'un intérieur désertique, le Sahara. De nombreux empires y ont laissé leur marque, comme les anciennes ruines romaines de Tipasa, en bord de mer. Dans la capitale, Alger, des sites ottomans, tels que la mosquée Ketchaoua, datant de 1612 environ, bordent le quartier de la Casbah. Perché sur une colline, cet endroit dispose d'allées étroites et d'escaliers. La basilique Notre-Dame d'Afrique, arborant une architecture néo-byzantine, date de la domination coloniale française. "
    },
    {
      id: 2,
      name: "France",
      capital: "Paris",
      img: "https://cdn.countryflags.com/thumbs/france/flag-400.png",
      description:
        "La France, pays de l'Europe occidentale, compte des villes médiévales, des villages alpins et des plages. Paris, sa capitale, est célèbre pour ses maisons de mode, ses musées d'art classique, dont celui du Louvre, et ses monuments comme la Tour Eiffel. Le pays est également réputé pour ses vins et sa cuisine raffinée. Les peintures rupestres des grottes de Lascaux, le théâtre romain de Lyon et l'immense château de Versailles témoignent de sa riche histoire"
    },
    {
      id: 1,
      name: "Algerie",
      capital: "Alger",
      img:
        "https://cdn.webshopapp.com/shops/94414/files/53432190/icone-drapeau-dalgerie-telechargement-gratuit.jpg",
      description:
        "L'Algérie est un pays nord-africain doté d'un littoral sur la mer Méditerranée et d'un intérieur désertique, le Sahara. De nombreux empires y ont laissé leur marque, comme les anciennes ruines romaines de Tipasa, en bord de mer. Dans la capitale, Alger, des sites ottomans, tels que la mosquée Ketchaoua, datant de 1612 environ, bordent le quartier de la Casbah. Perché sur une colline, cet endroit dispose d'allées étroites et d'escaliers. La basilique Notre-Dame d'Afrique, arborant une architecture néo-byzantine, date de la domination coloniale française. "
    },
    {
      id: 2,
      name: "France",
      capital: "Paris",
      img: "https://cdn.countryflags.com/thumbs/france/flag-400.png",
      description:
        "La France, pays de l'Europe occidentale, compte des villes médiévales, des villages alpins et des plages. Paris, sa capitale, est célèbre pour ses maisons de mode, ses musées d'art classique, dont celui du Louvre, et ses monuments comme la Tour Eiffel. Le pays est également réputé pour ses vins et sa cuisine raffinée. Les peintures rupestres des grottes de Lascaux, le théâtre romain de Lyon et l'immense château de Versailles témoignent de sa riche histoire"
    }
  ];

  return (
    <div className="App container">
      <CountriesList data={countries} />
    </div>
  );
}
