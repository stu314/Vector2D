var Vector2D = require("../Vector2D");
var assert = require("assert");
describe("Vector2D", function(){

    describe(".clone()", function(){
        it("should return copy of self", function(){
            var self = new Vector2D(1, 2);
            var clone  = self.clone();
            assert(self.equals(clone), "self values equal clone values");
            assert(self !== clone, "self object is not clone object");
        });
    });

    describe(".add()", function(){

        it("should modify self", function(){
            var vec = new Vector2D(1,2);
            vec.add(2,3);
            assert(vec.x === 3, "vec.x === 3");
            assert(vec.y === 5, "vec.y === 5");
        });

        it("should accept Integers", function(){
            var vec = new Vector2D(1,2);
            vec.add(2,3);
            assert(vec.x === 3, "vec.x === 3");
            assert(vec.y === 5, "vec.y === 5");
        });

        it("should accept an Object", function(){
            var vec = new Vector2D(1,2);
            vec.add({x:2,y:3});
            assert(vec.x === 3, "vec.x === 3");
            assert(vec.y === 5, "vec.y === 5");
        });

        it("should accept a Vector2D", function(){
            var vec = new Vector2D(1,2);
            var vecToAdd = new Vector2D(2,3);
            vec.add(vecToAdd);
            assert(vec.x === 3, "vec.x === 3");
            assert(vec.y === 5, "vec.y === 5");
        });

        it("should allow for 0 as param", function(){
            var vec = new Vector2D(1,2);
            vec.add(0, 4);
            assert(vec.x === 1, "vec.x should === 1");
            assert(vec.y === 6, "vec.x should === 6");
        });

        it("should allow for 0 as obj prop", function(){
            var vec = new Vector2D(1,2);
            vec.add({x:0, y:4});
            assert(vec.x === 1, "vec.x should === 1");
            assert(vec.y === 6, "vec.x should === 6");
        });

        it("should allow for 0 as obj prop", function(){
            var vec = new Vector2D(1,2);
            vec.add(new Vector2D());
            assert(vec.x === 1, "vec.x should === 1");
            assert(vec.y === 2, "vec.x should === 2");
        });
    });

    describe(".sub()", function(){

        it("should modify self", function(){
            var vec = new Vector2D(1,2);
            vec.sub(2,3);
            assert(vec.x === -1, "vec.x === -1");
            assert(vec.y === -1, "vec.y === -1");
        });

        it("should accept Integers", function(){
            var vec = new Vector2D(1,2);
            vec.sub(2,3);
            assert(vec.x === -1, "vec.x === -1");
            assert(vec.y === -1, "vec.y === -1");
        });

        it("should accept an Object", function(){
            var vec = new Vector2D(1,2);
            vec.sub({x:2,y:3});
            assert(vec.x === -1, "vec.x === -1");
            assert(vec.y === -1, "vec.y === -1");
        });

        it("should accept a Vector2D", function(){
            var vec = new Vector2D(1,2);
            var vecToSub = new Vector2D(2,3);
            vec.sub(vecToSub);
            assert(vec.x === -1, "vec.x === -1");
            assert(vec.y === -1, "vec.y === -1");
        });

    });

    describe(".mult()", function(){

        it("should modify self", function(){
            var vec = new Vector2D(1,2);
            vec.mult(2,3);
            assert(vec.x === 2, "vec.x === 2");
            assert(vec.y === 6, "vec.y === 6");
        });

        it("should accept Integers", function(){
            var vec = new Vector2D(1,2);
            vec.mult(2,3);
            assert(vec.x === 2, "vec.x === 2");
            assert(vec.y === 6, "vec.y === 6");
        });

        it("should accept an Object", function(){
            var vec = new Vector2D(1,2);
            vec.mult({x:2,y:3});
            assert(vec.x === 2, "vec.x === 2");
            assert(vec.y === 6, "vec.y === 6");
        });

        it("should accept a Vector2D", function(){
            var vec = new Vector2D(1,2);
            var vecToMult = new Vector2D(2,3);
            vec.mult(vecToMult);
            assert(vec.x === 2, "vec.x === 2");
            assert(vec.y === 6, "vec.y === 6");
        });

    });

});
