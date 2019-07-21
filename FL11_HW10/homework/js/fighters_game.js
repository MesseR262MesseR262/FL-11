let winsOne = 0;

let winsTwo = 0;

let loosesOne = 0;

let loosesTwo = 0;

let MaxHealth = 0;

let MinHealth = 0;

function Fighter(obj) {

	obj.getName = function() {

		return this.name;

	}

    function getMaxHealth(obj) {

		return obj.hp;

	}

	MaxHealth = getMaxHealth(obj);

	obj.getDamage = function() {

		return this.damage;

	}

	obj.getAgility = function() {

		return this.agility;

	}

	obj.getHealth = function() {

		return this.hp;

	}

	obj.attack = function(defender) {

		let max = 101;

		let absoluteProbability = 100;

		let rel = Math.floor(Math.random() * max);

		if (rel <= absoluteProbability - defender.agility) {

			defender.hp = defender.hp - this.damage;

			return this.name + ' make ' + this.damage + ' ' + defender.name;

		} else {

			return this.name + ' attack missed ';

		}

	}

	obj.heal = function(points) {

		if (this.hp + points > MaxHealth) {

			this.hp = MaxHealth;

			return this.hp;

		} else {

			this.hp += points;

			return this.hp;
		}

	}

	obj.dealDamage = function(points) {

		if (this.hp <= MinHealth) {

			this.hp = MaxHealth;

			return this.hp;

		} else {

			this.hp -= points;
		}
	}

	obj.logCombatHistory = function() {

		let history = 'Name: ' + this.name + ', Wins: 0' + ', Losses: 0';

		return history;

	}

	return obj;

}

const myFighter = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
const myFighter2 = new Fighter({name: 'Jack', damage: 10, hp: 120, agility: 40});  

function battle (myFighter, myFighter2) {

	if (myFighter.getHealth() === 0) {
		
		return console.log(myFighter.getName() + ' is dead and cant fight.');
	} else if (myFighter2.getHealth() === 0) {

		return console.log(myFighter2.getName() + ' is dead and cant fight.');

	}

	for (let i = 0; ; i++) {

		console.log(myFighter.attack(myFighter2));

		console.log(myFighter2.attack(myFighter));

		if (myFighter.getHealth() === 0) {

			myFighter.logCombatHistory = function() {

				loosesTwo = loosesTwo + 1;

				let historyOne = 'Name: ' + this.name + ', Wins: ' + winsTwo + ', Losses: ' + loosesTwo;

				return historyOne;

			}

			myFighter2.logCombatHistory = function() {

				loosesTwo = 0;

				winsTwo = winsTwo + 1;

				let historyTwo = 'Name: ' + this.name + ', Wins: ' + winsTwo + ', Losses: ' + loosesTwo;

				return historyTwo;

			}

			break;

		} else if (myFighter2.getHealth() === 0) {

			myFighter.logCombatHistory = function() {

				winsTwo = winsTwo + 1;

				let historyOne = 'Name: ' + this.name + ', Wins: ' + winsTwo + ', Losses: ' + loosesTwo;

				return historyOne;

			}

			myFighter2.logCombatHistory = function() {

				loosesTwo = loosesTwo + 1;

				let historyTwo = 'Name: ' + this.name + ', Wins: ' + winsOne + ', Losses: ' + loosesTwo;

				return historyTwo;

			}

			break;

		}
	}

}

battle(myFighter, myFighter2);

console.log(myFighter.getHealth());

console.log(myFighter2.getHealth());

battle(myFighter, myFighter2);

// addWin, addLoss, 2 нулі