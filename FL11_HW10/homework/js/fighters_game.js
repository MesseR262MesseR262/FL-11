let MinHealth = 0;

function Fighter (fighterData) {

  this.wins = 0;
  this.losses = 0;
  let absoluteProbability = 100;

  this.getWins = () => this.wins;
  this.getLosses = () => this.losses;
  this.getName = () => fighterData.name;
  this.getDamage = () => fighterData.damage;
  this.getAgility = () => fighterData.agility;
  this.getHealth = () => fighterData.hp;

  this.attack = function(defender) {

    let rel = parseInt( Math.random() * absoluteProbability);

    if (rel < defender.getAgility()) {

      defender.dealDamage(this.getDamage());

      console.log(`${this.getName()} make ${this.getDamage()} damage to ${defender.getName()}`);

    } else {

      console.log(`${this.getName()} attack missed`);

    }
  }

  this.logCombatHistory = function() {

    console.log(`Name: ${fighterData.name}, Wins: ${this.wins}, Losses: ${this.losses}`);

  }

  this.dealDamage = function(attackDamage) {

    fighterData.hp < attackDamage ? fighterData.hp = 0 : fighterData.hp -= attackDamage;

  }

  this.addWin = function() {

    this.wins = this.getWins() + 1 || 1;

  }

  this.addLoss = function() {

      this.losses = this.getLosses() + 1 || 1;

  }
}

const myFighter = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
const myFighter2 = new Fighter({name: 'Jack', damage: 10, hp: 120, agility: 40});  

function battle (myFighter, myFighter2) {

    while (myFighter.getHealth() > MinHealth && myFighter2.getHealth() > MinHealth) {

        myFighter.attack(myFighter2);
        myFighter2.attack(myFighter);

        if (myFighter.getHealth() === MinHealth & myFighter2.getHealth() > MinHealth) {

          myFighter.addLoss();
          myFighter2.addWin();
          console.log(`${myFighter2.getName()} win in fight!`);
          console.log(`${myFighter.getName()} is dead and cant't fight.`);

        } else if (myFighter2.getHealth() === MinHealth & myFighter.getHealth() > MinHealth) {

          myFighter.addWin();
          myFighter2.addLoss();
          console.log(`${myFighter.getName()} win in fight!`);
          console.log(`${myFighter2.getName()} is dead and cant't fight.`);

        }
    }
}