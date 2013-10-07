module.exports = Vector2D;
function normalizeArgs(x,y){
    if(y) return {x:x, y:y};
    return x;
}
function Vector2D(x,y){
    if(x === undefined) x = false;
    this.x = x.x || x || 0;    
    this.y = x.y || y || 0;
}

Vector2D.prototype = {

    clone: function(){
        return new Vector2D(this);
    },

    set: function(x, y){
        var v = normalizeArgs(x, y);
        this.x = v.x 
        this.y = v.y 
        return this;
    },

    add: function(x,y){
        var v = normalizeArgs(x, y);
        this.x += v.x  
        this.y += v.y  
        return this;
    },

    sub: function(x,y){
        var v = normalizeArgs(x, y);
        this.x -= v.x  
        this.y -= v.y  
        return this;
    },

    mult: function(x,y){
        var v = normalizeArgs(x, y);
        this.x *= v.x  
        this.y *= v.y  
        return this;
    },

    div: function(x,y){
        var v = normalizeArgs(x, y);
        this.x /= v.x 
        this.y /= v.y  
        return this;
    },

    scale: function(i){
        return this.mult(i,i);
    },

    equals: function(v){
        return this.x === v.x && this.y === v.y; 
    },

    length: function(){
        return Math.sqrt(this.lengthSq()); 
    },

    lengthSq: function(){
        return this.x*this.x + this.y*this.y;
    },

    distanceTo: function(x, y){
        return Math.sqrt(this.distanceToSq(x,y)); 
    },

    distanceToSq: function(x, y){
        var dX = (x.x || x) - this.x;
        var dY = (y.y || y) - this.y;
        return dX*dX + dY*dY;
    },

    normal: function(){
        var l = this.length();
        return new Vector2D(this.x/l, this.y/l);
    },

    dot: function(x, y){
        return (x.x ||x) * this.x + (x.y || y) * this.y;
    },

    angle: function(x, y){
        var Sx = (x.x || x) * this.x;
        var Sy = (x.y || y) * this.y;
        return Math.atan2(Sx - Sy, Sx + Sy);
    },

    angle2: function(x1, y1, x2, y2){
        if(!!x2){
            x1 = new Vector2D(x1, y1);
            y1 = new Vector2D(x2, y2);
        }
        return x1.clone().sub(this).angle(y1.clone().sub(this));
    },

    rotate: function(x, y, theta) {
        if(!theta) theta = y;
        var dX = this.x - (x.x || x);
        var dY = this.y - (x.y || y);
        return new Vector2D({
            x: x*Math.cos(theta) - y*Math.sin(theta) + (x.x || x),
            y: x*Math.sin(theta) - y*Math.cos(theta) + (x.y || y)
        });
    },

    toString: function(){
        return "Vector2D:: (" + this.x +", " + this.y + ")";
    }

};
