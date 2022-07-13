const itCompanies = [
  'Facebook',
  'Google',
  'M  ft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon'
]

let index = itCompanies.indexOf('ifood')

if (index === -1) {
  console.log('This companies does not exist in the array ')
} else {
  console.log('This companies does exist in the array')
}