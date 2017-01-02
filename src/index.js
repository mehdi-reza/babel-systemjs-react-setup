import React from 'react';
import {render} from 'react-dom';
import TestComponent from './module1';

render(<TestComponent name="Mehdi Raza" />,
	document.getElementById("test-component"));
