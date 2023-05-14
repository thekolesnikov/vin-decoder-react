const API_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles/';

export async function fetchVinInfo(vin) {
    try {
        const response = await fetch(
            API_URL + 'decodevin/' + vin + '?format=json'
        );
        const data = await response.json();
        const filteredData = data.Results.filter(
            ({ Value, Variable }) =>
                Value !== null &&
                Value !== '' &&
                Value !== 'Not Applicable' &&
                Variable !== 'Error Code' &&
                Variable !== 'Error Text' &&
                Variable !== 'Other Engine Info'
        );
        return filteredData;
    } catch (error) {
        throw new Error('Oops :( Something goes wrong!');
    }
}
