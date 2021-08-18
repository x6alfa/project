class Paper {
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = bodies.circle(x, y, width, radius, options);
        this.radius = radius

        World.add(world, this.body);
    }
    display(){
        rectMode(RADIUS);

        Fill(yellow);

        circle(this.body.position.x, this.body.position.y, this.radius)
    }
};