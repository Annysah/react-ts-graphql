import React from "react";

import { GraphQLClient } from "graphql-request";

import { CountriesQuery, useCountriesQuery } from "../generated";

const graphqlClient = new GraphQLClient(
  "https://countries.trevorblades.com/graphql"
);

const Countries: React.FunctionComponent = () => {
  const { data, isLoading, error } = useCountriesQuery<CountriesQuery, Error>(
    graphqlClient,
    {}
  );

  if (isLoading) {
    return <div className="box">Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  return (
    <>
      {data?.countries?.map((country) => {
        return (
          <div className="bg-white rounded-lg shadow-md w-80 text-center">
            <div className="mt-4 p-10 text-bold">
              <p>Country: {country.name}</p>
              <p>Capital: {country.capital}</p>
              <p>Continent: {country.continent.name}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Countries;
