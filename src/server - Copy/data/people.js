module.exports = {
  people: getPeople()
};

function getPeople() {
  return [
    { id: 1, firstName: 'GÁBOR ', lastName: 'HORVÁTH', location: 'Sweden' },
    { id: 2, firstName: 'JOHAN', lastName: 'DYRSSEN', location: 'Sweden' },
    { id: 3, firstName: 'MARTINA ', lastName: 'AXELSSON', location: 'Sweden' },
    { id: 4, firstName: 'PER ', lastName: 'JOHANSSON', location: 'Sweden' },
    { id: 5, firstName: 'ANNA ', lastName: 'JONSSON', location: 'Sweden' },
    { id: 6, firstName: 'CAROLIN ', lastName: 'WIGÅRDE', location: 'Sweden' },
    { id: 7, firstName: 'YASSER ', lastName: 'KHAN', location: 'Sweden' },
    { id: 8, firstName: 'ATTILA ', lastName: 'CSAPUCHA', location: 'Hungary' }
  ];
}