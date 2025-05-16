import type { Country } from "../interfaces/country.interface";
import type { RESTCountry } from "../interfaces/rest-countries";

export class CountryMapper {
  static toCountry(country: RESTCountry): Country {
    return {
      cca2: country.cca2,
      flag: country.flag,
      flagSvg: country.flags.svg,
      name: country.translations['spa'].common ?? 'No spanish name',
      capital: country.capital.join(', '),
      population: country.population,
      region: country.region,
      subregion: country.subregion,
    }
  }

  static toCountryList(countries: RESTCountry[]): Country[] {
    return countries.map(this.toCountry);
  }
}
