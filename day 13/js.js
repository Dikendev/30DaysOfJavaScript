// lvl 1 - 1.
// Display the countries array as a table.

const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
console.table(countries);

// lvl 1 - 2.
// Display the countries object as a table.

const country = { 
  Finland : 'Helsinki',
  Sweden : 'Stockholm',
  Norway : 'Oslo'
}
console.table(country);

// lvl 1 - 3.
// Use console.group() to group logs
console.group('Countries')
console.log(countries);
console.groupEnd()


