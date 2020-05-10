function Fighter(properties){
    let currentHP = properties.hp;
    let wins = 0;
    let losses = 0;
    return {
        getName: function (){
            return properties.name;
        },
        getDamage: function (){
            return properties.damage;
        },
        getStrength: function (){
            return properties.strength;
        },
        getAgility: function (){
            return properties.agility;
        },
        getHealth: function (){
            return currentHP;
        },
        attack: function (myFighterN){
            let chance = 100 - (myFighterN.getStrength() + myFighterN.getAgility());
            let precision = Math.random();
            if(precision < chance/100){
                myFighterN.dealDamage(this.getDamage());
                return console.log(`${this.getName()} makes ${this.getDamage()} damage to ${myFighterN.getName()}`);
            } else {
                return console.log(`${this.getName()} attack missed`);
            }
        },
        dealDamage: function (damage){
            currentHP = this.getHealth() - damage;
            if (currentHP <= 0){
                currentHP = 0;
                return currentHP;
            } else {
                return currentHP;    
            }
        },
        logCombatHistory: function(){
            return `Name: ${this.getName()}, Wins: ${wins}, Losses: ${losses}`;
        },
        heal: function (hp){
            currentHP = this.getHealth() + hp;
            if(currentHP > 100){
                currentHP = 100;
                return currentHP;
            } else {
                return currentHP;
            }
        },
        addWin: function (){
            return ++wins;
        },
        addLoss: function (){
            return ++losses;
        }
    };
}

function battle (fighter1, fighter2){
    if(fighter1.getHealth() > 0 && fighter2.getHealth() > 0){
        for (let i = 0; i < 100; i++){
            fighter1.attack(fighter2);
            if(fighter2.getHealth() <= 0){
                fighter1.addWin();
                fighter2.addLoss();
                console.log(`${fighter1.getName()} has won!`);
                break;
            } else {
                fighter2.attack(fighter1);
            }
            if(fighter1.getHealth() <= 0){
                fighter2.addWin();
                fighter1.addLoss();
                console.log(`${fighter2.getName()} has won!`);
                break;
            }
        }
    } else if(fighter1.getHealth() <= 0 && fighter1.getHealth() <= 0){
        console.log(`${fighter1.getName()} and ${fighter1.getName()} are dead and can't fight.`);
    } else if(fighter1.getHealth() <= 0){
        console.log(`${fighter1.getName()} is dead and can't fight.`);
    } else if(fighter2.getHealth() <= 0){
        console.log(`${fighter2.getName()} is dead and can't fight.`);
    }
}


const myFighter = new Fighter({name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25}); 
const myFighter2 = new Fighter({name: 'Commodus', damage: 20, hp: 100, strength: 20, agility: 35});