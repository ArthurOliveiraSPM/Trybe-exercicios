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
