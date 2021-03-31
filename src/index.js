import _ from 'lodash';
import className  from './style.css';


function component(){
	const element = document.createElement('div');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add(className.hello);
	return element;
}

document.body.appendChild(component());