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

console.warn('Alerta, vou ser um desenvolvedor profissional em breve');

// lvl 2 - 3.
// Write an error message using console.error().

console.error('Mind set poderoso para estudar com foco e objetivo');

// lvl 3
// Check the speed difference among the following loops: while, for, for of, forEach
const names = ['Diego', 'Cristina', 'David', 'Ellen', "Joi"];
const v = 0;
// while for

console.time('Regular while');
while ( v < 6) {
  v++;
  console.log(v);
}
console.timeEnd('Regular while');

// for of

console.time('For of loop')
  for ([namex] of names) {
    console.log(names);

  }
console.timeEnd('For of lopp')

// forEach
console.time('ForEach loop')
names.forEach(([userxx]) => {
  console.log(names)
}) 
