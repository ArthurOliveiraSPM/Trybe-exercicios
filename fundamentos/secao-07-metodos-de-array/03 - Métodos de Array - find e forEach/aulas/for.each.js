const series = [
    { title: 'Stranger Things', genre: 'Sci-Fi', rating: 8.8 },
    { title: 'Narcos', genre: 'Crime', rating: 8.8 },
    { title: 'The Crown', genre: 'Drama', rating: 8.7 },
    { title: 'Black Mirror', genre: 'Sci-Fi', rating: 8.8 },
  ];

  console.log("SERIADOS DA NETFLIX:");

series.forEach((serie) => {
  console.log(`${serie.title} - ${serie.genre} - Avaliação: ${serie.rating}`);
});

// SERIADOS DA NETFLIX:
// Stranger Things - Sci-Fi - Avaliação: 8.8
// Narcos - Crime - Avaliação: 8.8
// The Crown - Drama - Avaliação: 8.7
// Black Mirror - Sci-Fi - Avaliação: 8.8


const cartoons = [
    { title: 'Tom & Jerry', ageRating: 'Livre' },
    { title: 'Scooby-Doo', ageRating: 'Livre' },
    { title: 'Looney Tunes', ageRating: 'Livre' },
    { title: 'The Simpsons', ageRating: 12 },
    { title: 'Avatar: The Last Airbender', ageRating: 'Livre' },
    { title: 'Pokémon', ageRating: 'Livre' },
    { title: 'Dragon Ball Z', ageRating: 12 },
    { title: 'Adventure Time', ageRating: 'Livre' },
    { title: 'Gravity Falls', ageRating: 'Livre' },
    { title: 'Teen Titans Go!', ageRating: 'Livre' }
  ];

  const addGender = () => {
    cartoons.forEach((cartoon) => {
        {cartoon.gender = 'Animação'}
        console.log(cartoons);
    })
  }

  console.log(addGender(cartoons));