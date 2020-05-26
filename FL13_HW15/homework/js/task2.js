const OVERHEAT = 30;
const DRIVE_INTERVAL = 2000;
const STOP_INTERVAL = 1500;

function Vehicle (color, engine){
    let maxSpeedDuringDrive = 0;
    let isDrive = true;
    let isStop = true;
    let currentSpeed = 0;

    this.name = 'vehicle';
    this.color = color;
    this.engine = engine;
    this.model = 'Unknown model';
    this.defaultMaxSpeed = 70;

    this.upgradeEngine = function (newEngine, maxSpeed){
        if(currentSpeed === 0){
            this.engine = newEngine;
            this.defaultMaxSpeed = maxSpeed;
        }
    };

    this.getInfo = function (){
        return {
            engine: this.engine, 
            color: this.color,
            maxSpeed: this.defaultMaxSpeed,
            model: this.model
        }
    };

    this.drive = function (){
        if (isDrive){
            let speedIncrease = 20;
            isDrive = false;
            isStop = true;
            clearInterval(this.stoping);
            if (this.name === 'motorcycle'){
                console.log('Let’s drive');                
            }

            this.driving = setInterval(() => {
                currentSpeed += speedIncrease;
                if (maxSpeedDuringDrive < currentSpeed){
                    maxSpeedDuringDrive = currentSpeed;
                }
                if(currentSpeed > this.defaultMaxSpeed){
                    console.log('speed is too high, SLOW DOWN!');
                }
                if(currentSpeed >= this.defaultMaxSpeed+OVERHEAT && this.name === 'motorcycle'){
                    console.log('Engine overheating');                    
                    this.stop();
                }
                console.log(currentSpeed);
            }, DRIVE_INTERVAL);
        } else {
            console.log('Already driving');            
        }
    };

    this.stop = function (){
        if (isStop){
            clearInterval(this.driving);
            isStop = false;
            isDrive = true;
            let speedDecrease = 20;
            this.stoping = setInterval(() => {
                currentSpeed -= speedDecrease;
                if (currentSpeed <= 0){
                    if (this.name === 'vehicle'){
                        console.log(`Vehicle is stopped. Maximum speed during the drive was ${maxSpeedDuringDrive}`);
                    } else if (this.name === 'car'){
                        console.log('Car ' + this.model + 
                        ' is stopped. Maximum speed during the drive was '+ maxSpeedDuringDrive);
                    } else {
                        console.log(`Motorcycle ${this.model} is stopped. Good drive`);
                    }
                    clearInterval(this.stoping);
                } else {
                    console.log(currentSpeed);
                }
            }, STOP_INTERVAL);
        } else {
            console.log('Already slows down');            
        }
    };
}

function Car (model, color, engine){
    Vehicle.call(this, color, engine);
    this.model = model;
    this.defaultMaxSpeed = 80;
    this.name = 'car';

    this.changeColor = function (newColor){
        if (this.color !== newColor){
            this.color = newColor;
        }
    };
}

function Motorcycle (model, color, engine){
    Vehicle.call(this, color, engine);
    this.model = model;
    this.name = 'motorcycle';
    this.defaultMaxSpeed = 90;
}