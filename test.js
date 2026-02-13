const { sum } = require('./app');
console.log('Running tests...');
if (sum(2, 3) === 5) {
//if (sum(2, 3) === 10) { // cambiar 5 por 10
console.log('✓ Test passed');
process.exit(0);
} else {
console.log('✗ Test failed');
process.exit(1);
}