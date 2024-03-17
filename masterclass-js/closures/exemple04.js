const object1 = {};

for (var variable1 = 0; variable1 < 3; variable1++) {
    object1[variable1] = function() {
        console.log(variable1);
    }
}

object1[0]();
object1[1]();
object1[2]();