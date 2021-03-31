import _ from 'lodash';
import className  from './style.css';
import Icon from './jisoo.png';
import printMe from './print.js';

function component(){
	const element = document.createElement('div');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add(className.hello);

	const myIcon = new Image();
	myIcon.src = Icon;
	element.appendChild(myIcon);

	const btn = document.createElement('button');
	btn.innerHTML = 'click me and check the console';
	btn.onclick = printMe;
	element.appendChild(btn);
	
	return element;
}

document.body.appendChild(component());