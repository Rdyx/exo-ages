var classe1 = [
{ nom: 'Pierre', age: 40, sexe: 'M' },
{ nom: 'Marie', age: 18, sexe: 'F' },
{ nom: 'Louise', age: 16 , sexe: 'F' },
{ nom: 'Damien', age: 55, sexe: 'M' },
{ nom: 'Louis', age: 19, sexe: 'M' }
];

var classe2 = [
{ nom: 'Elodie', age: 27, sexe: 'F' },
{ nom: 'Christophe', age: 48, sexe: 'M' },
{ nom: 'Aurelie', age: 32, sexe: 'F' },
{ nom: 'Jeanne', age: 15, sexe: 'F' },
{ nom: 'Martin', age: 77, sexe: 'M' },
{ nom: 'Eric', age: 18, sexe: 'M' },
{ nom: 'Jacques', age: 35, sexe: 'M' },
{ nom: 'Eric', age: 47, sexe: 'M' }
];
console.log(typeof classe1[2].age);
function nombreHomme(classe){
	var nbHomme = 0;
	for (var i = 0; i < classe.length; i++){
		if ('M' === classe[i].sexe) {
			nbHomme ++;
		}
	}
	return nbHomme;
};

console.log(
	"Nombre homme dans classe1 : "
	 + nombreHomme(classe1)
	);
console.log("Nombre homme dans classe2 : "
	+ nombreHomme(classe2)
	);

//2eme partie
function pourcentHomme(classe){
	var nombreHomme2 = 0;
	var pourcentHomme = 0;
		for (var i = 0; i < classe.length; i++){
			if ("M" === classe[i].sexe) {
				nombreHomme2++
			};
		};
		return pourcentHomme = (nombreHomme2*100)/classe.length;
		};

console.log(
	"Il y a " + pourcentHomme(classe1) + " % d'hommes dans classe1");
console.log(
	"Il y a " + pourcentHomme(classe2) + " % d'hommes dans classe2");

//3eme partie

function pourcentFemme(classe){
	var pourcentFemme = 0;
	return pourcentFemme = 100 - pourcentHomme(classe);
}

console.log(
	"Il y a " + pourcentFemme(classe1) + " % de femmes dans classe1");
console.log(
	"Il y a " + pourcentFemme(classe2) + " % de femmes dans classe1");

//4eme partie

function moyenneAge(classe,sexe = "T"){
	var nbFemme = classe.length - nombreHomme(classe);
	var ageTotal = 0;
	var ageTotalM = 0;
	var ageTotalF = 0;
	
	//Age de tout le monde
		if(sexe === "T"){
			for(var i = 0; i < classe.length; i++){
			ageTotal = ageTotal + classe[i].age;
			};
		var moyenne = ageTotal/classe.length;
		return moyenne;
		};

		//Age des hommes
		if(sexe === "M"){
			for(var i = 0; i < classe.length; i++){
				if(classe[i].sexe === "M"){
				ageTotalM = ageTotalM + classe[i].age;
				};
			};
		var moyenneM = ageTotalM/nombreHomme(classe);
		return moyenneM;
		};

		//Age des femmes
		if(sexe === "F"){
			for(var i = 0; i < classe.length; i++){
				if(classe[i].sexe === "F"){
				ageTotalF = ageTotalF + classe[i].age;
				};
			};
		var moyenneF = ageTotalF/nbFemme;
		return moyenneF;
		};

		if(sexe !== "M" || sexe !== "F" || sexe !== "T"){
			alert("Error69 : Sex not found.");
		}
};
console.log("La moyenne d'age des hommes dans classe1 est de " + moyenneAge(classe1, "M"));
console.log("La moyenne d'age des femmes dans classe1 est de " + moyenneAge(classe1, "F"));
console.log("La moyenne d'age totale dans classe1 est de " + moyenneAge(classe1));

console.log("La moyenne d'age des hommes dans classe2 est de " + moyenneAge(classe2, "M"));
console.log("La moyenne d'age des femmes dans classe2 est de " + moyenneAge(classe2, "F"));
console.log("La moyenne d'age totale dans classe2 est de " + moyenneAge(classe2));


function plusVieux(classe){
	var ageMax = [];
		for(i = 0; i < classe.length; i++){
			ageMax.push(classe[i].age);
		};

  return Math.max(...ageMax);
};
console.log("Le personne la plus agée de classe1 a " + plusVieux(classe1) + " ans.");
console.log("Le personne la plus agée de classe2 a " + plusVieux(classe2) + " ans.");
