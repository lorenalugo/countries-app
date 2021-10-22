const Card = ({ item }) => {
  const { flags, name, population, capital, region } = item;
  return (
    <div className="w-full max-w-sm md:w-1/4 lg:w-1/5 lg:max-w-lg mx-3 lg:mx-6 my-5 bg-gray-100 dark:bg-green-600 pb-8 rounded-md">
      <img
        src={flags.svg}
        alt={`${name.common} flag`}
        className="w-full h-48 object-cover rounded-t-md"
      />
      <div className="px-3">
        <h2 className="font-bold text-2xl dark:text-white py-3">
          {name.common}
        </h2>
        <p className="text-gray-900 dark:text-white">
          <strong>Population: </strong>
          {population.toLocaleString(undefined)}
        </p>
        <p className="text-gray-900 dark:text-white">
          <strong>Region: </strong>
          {region}
        </p>
        <p className="text-gray-900 dark:text-white">
          <strong>Capital: </strong>
          {capital}
        </p>
      </div>
    </div>
  );
};

export default Card;
