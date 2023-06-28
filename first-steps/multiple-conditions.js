const trafficLight = 'green';

if (trafficLight === 'green') {

console.log('Go!');
} else if (trafficLight === 'yellow') {

console.log('Slow down!');
} else if (trafficLight === 'red') {

console.log('Stop!');
} else {

console.log('Traffic light is broken!');
}

switch (trafficLight) {
case 'green':
console.log('Go!');
break;
case 'yellow':
console.log('Slow down!');
break;
case 'red':
console.log('Stop!');
break;
default:
console.log('Traffic light is broken!');
break;
}

const animal = 'cat';

switch (animal) {
case 'dog':
 case 'cat':
  case 'bird':
    console.log('This is a pet.');
    break;
  case 'cow':
  case 'sheep':
  case 'pig':
    console.log('This is a farm animal.');
    break;
  default:
    console.log('This is not an animal.');
}
