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
// Use console.group() to group logs.
console.group('Countries')
console.log(countries);
console.groupEnd()

// lvl 2 - 1.
// 10 > 2 * 10 use console.assert().
console.assert(10 > 2 * 10, 'Erro' );

// lvl 2 - 2.
// Write a warning message using console.warn().

console.warn('Alerta, vou ser um desenvolvedor profissional em breve')

// lvl 2 - 3.
// Write an error message using console.error().

console.error('Mind set poderoso para estudar com foco e objetivo');

