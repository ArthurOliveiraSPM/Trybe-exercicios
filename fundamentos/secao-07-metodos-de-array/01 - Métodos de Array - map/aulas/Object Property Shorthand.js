const heroes = [
    { name: 'Viúva Negra', universe: 'Marvel' },
    { name: 'Aquaman', universe: 'DC' },
    { name: 'André Noel', universe: 'Paralelo' }
  ];
  
  const heroGreeting = heroes.map((hero) => {
    return {
      name: hero.name,
      universe: hero.universe,
      greeting: `Olá, meu nome é ${hero.name} e eu sou do universo ${hero.universe}.`
    };
  });
  
  console.log(heroGreeting);

////// utilizando Object Property Shorthand
  const heroess = [
    { name: 'Viúva Negra', universe: 'Marvel' },
    { name: 'Aquaman', universe: 'DC' },
    { name: 'André Noel', universe: 'Paralelo' }
  ];
  
  const heroGreetings = heroess.map(({name, universe}) => {
    return {
      name,
      universe,
      greeting: `Olá, meu nome é ${name} e eu sou do universo ${universe}.`
    };
  });
  
  console.log(heroGreetings);



  const getPosition = (latitude, longitude) => ({
    latitude: latitude,
    longitude: longitude,
  });
  
  console.log(getPosition(-19.8157, -43.9542));

  const getPositionCorrigida = (latitude, longitude) => ({
    latitude,
    longitude
  });

  console.log(getPositionCorrigida(-19.8157, -43.9542));
