import p5 from 'p5';

// Define array to hold snowflake objects
export let snowflakes = [];

export function setup(p) {
    p.createCanvas(p.windowWidth, p.windowHeight);

    p.angleMode(p.DEGREES);

    // Create snowflake objects
    for (let i = 0; i < 300; i++) {
        // Add a new snowflake object to the array
        snowflakes.push(new Snowflake(p));
    }

    // Create screen reader accessible description
    p.describe('Snowflakes falling on a black background.');
}

export function windowResized(p) {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
}

export function draw(p) {
    p.background(0);

    // Update and display each snowflake in the array
    let currentTime = p.frameCount / 60;

    for (let flake of snowflakes) {
        // Update each snowflake position and display
        flake.update(currentTime, p);
        flake.display(p);
    }
}

// Define the snowflake class
class Snowflake {
    constructor(p) {
        this.posX = 0;
        this.posY = p.random(-p.height, 0);
        this.initialAngle = p.random(0, 360);
        this.size = p.random(2, 5);
        this.radius = p.sqrt(p.random(p.pow(p.width / 2, 2)));
        this.color = p.color(p.random(200, 256), p.random(200, 256), p.random(200, 256));
    }

    update(time, p) {
        // Define angular speed (degrees / second)
        let angularSpeed = 35;

        // Calculate the current angle
        let angle = this.initialAngle + angularSpeed * time;

        // x position follows a sine wave
        this.posX = p.width / 2 + this.radius * p.sin(angle);

        // Different size snowflakes fall at different y speeds
        let ySpeed = 8 / this.size;
        this.posY += ySpeed;

        // When snowflake reaches the bottom, move it to the top
        if (this.posY > p.height) {
            this.posY = -50;
        }
    }

    display(p) {
        p.fill(this.color);
        p.noStroke();
        p.ellipse(this.posX, this.posY, this.size);
    }
}
