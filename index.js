const fs = require('fs');

const dir = `${__dirname}/../../RTDBmock.json`;

fs.access(dir, fs.F_OK, (err) => {
	console.log(err)
	if(err){
		throw new Error('failed to find mock database file');
	}
});

const database = require(dir);

function child(reference, child) {
	return ref(`${reference}/${child}`);
}

function val(reference) {
	let layers = reference.split('/');
	layers = layers.filter(item => Boolean(item))
	let currentValue = database;
	for(const layer of layers){
		currentValue = currentValue[layer];
	}
	return currentValue;
}

function ref(reference){
	return {
		child: (c) => child(reference, c),
		once: _ => Promise.resolve({ val: _ => val(reference), exists: _ => Boolean(val(reference)) }),
		set: _ => Promise.resolve(),
		remove: _ => Promise.resolve(),
		update: _ => Promise.resolve()
	};
}

module.exports = ref;
