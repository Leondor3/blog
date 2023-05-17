import React, { useState, useEffect } from "react";

const ChoiceMovie = () => {
  const [chosenFilm, setChosenFilme] = useState(null);
  const [chosenFilmName, setChosenFilmName] = useState(null);
  const handleChosenMovie = (id, title) => {
    setChosenFilme(id);
    setChosenFilmName(title);
  };

  useEffect(() => {
    if (chosenFilmName) {
      alert(`O filme escolhido foi: ${chosenFilmName}`);
    }
  }, [chosenFilmName]);

  const movies = [
    {
      id: 1,
      coverUrl:
        "https://s2-gshow.glbimg.com/srEPJBTXJB3_KKThSe0zUSBdlz8=/0x0:1080x1351/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2023/Q/g/IPSDQ1SVKCAFBEjZsj0w/vin-diesel-poster.jpg",
      title: "Velozes e Furisos",
    },
    {
      id: 2,
      coverUrl:
        "https://cdn.awsli.com.br/2500x2500/1610/1610163/produto/208108598/poster-guardioes-da-galaxia-vol-3-a-6ec474ef.jpg",
      title: "Guardiões da Galáxia vol.3",
    },
    {
      id: 3,
      coverUrl:
        "https://a-static.mlcdn.com.br/800x560/poster-cartaz-super-mario-bros-o-filme-i-pop-arte-poster/poparteskins2/16031341552/4b694e8367509fd69f3ae20dc1ec29bf.jpeg",
      title: "Super Mario Bros",
    },
    {
      id: 4,
      coverUrl:
        "https://www.atoupeira.com.br/wp-content/uploads/2023/03/Disney_PosterOficial-APequenaSereia.jpg",
      title: "A pequena Sereia",
    },
  ];

  return (
    <div className="bg-black/90 h-screen w-full absolute z-20 flex items-center justify-center flex-col">
      <div className="absolute top-40 text-center">
        <h1 className="text-white  text-4xl mb-4">
          Pelo visto sua resposta foi sim 😜
        </h1>
        <h1 className="text-white text-2xl">Agora escolha o filme 🍿🍿🍿</h1>
      </div>
      <div className="flex gap-4 mt-40 max-sm:flex-col max-sm:absolute max-sm:top-60">
        {movies.map((movie) => {
          return (
            <a
              key={movie.id}
              onClick={() => handleChosenMovie(movie.id, movie.title)}
            >
              {chosenFilm === null || chosenFilm === movie.id ? (
                <img
                  className="bg-cover block w-60 h-full"
                  src={movie.coverUrl}
                  alt={movie.title}
                  title={movie.title}
                />
              ) : null}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ChoiceMovie;
