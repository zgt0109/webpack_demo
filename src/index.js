import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
import printMe from './print.js';

console.log('Hello World!')
console.log('Hello World111!')
console.log('Hello World222!')


function component(){
    var element = document.createElement('div');
    var btn = document.createElement('button');

    // Lodash, now imported by this script
    // element.innerHTML = _.join(['Hello','Webpack','!']);
    // element.classList.add('hello');

    btn.innerHTML('Click me and check the console ');
    btn.onclick = printMe;

    element.appendChild(btn);

    // var myIcon = new Image();
    // myIcon.src = Icon;
    // element.appendChild(myIcon);

    // console.log(Data);
    return element;
}

document.body.appendChild(component());