//freeze
const school={
    staff:'teacher',
    vehicle:'bus'
};
const freezing=Object.freeze(school)
freezing.staff='principal'
freezing.break=1
// console.log(freezing) //{staff:'teacher',vehicle:'bus'}

const sealing=Object.seal(school)
sealing.staff='parents';
sealing.library='central'
console.log(sealing)
// Initialize an object
const user = {
	username: 'AzureDiamond',
	password: 'hunter2'
};

// Seal the object
const newUser = Object.seal(school);

newUser.staff = '*******';
newUser.active = true;

console.log(newUser);