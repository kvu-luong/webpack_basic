import _ from 'lodash';
import className  from './style.css';
import Icon from './jisoo.png';

function component(){
	const element = document.createElement('div');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add(className.hello);

	const myIcon = new Image();
	myIcon.src = Icon;
	element.appendChild(myIcon);
	
	return element;
}

document.body.appendChild(component());