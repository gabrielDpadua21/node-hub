function function1() {
    let variable1 = 10;
    return {
        method1() {
            console.log(++variable1);
        },
        method2() {
            console.log(--variable1);
        }
    }
}

const object1 = function1();
object1.method1();
object1.method2();