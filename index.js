'use strict'
// a simple application which prints data to screen.

const userData={
	name:'Churchill Nnanna',
	height:"5'8 ft.",
	country:"Nigeria"
}

for (const key in userData){
	printDataToScreen([key, userData[key]])
}


function printDataToScreen(data){
	const screen=document.querySelector('.data')
	screen.innerHTML+=`<h1>${data[0]}:  ${data[1]}</h1>`
}