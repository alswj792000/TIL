# Uncatched TypeError : this.'X' is not a function

함수에서 값을 호출하려고 했지만 값이 실제로는 함수가 아닌 경우 발생하는 error

## 1. 함수 이름에 오타가 있는 경우

<pre>
    <code>
        const x = document.getElementByID('foo'); // // TypeError: document.getElementByID is not a function

        const x = document.getElementById('foo');
    </code>
</pre>

## 2. 잘못된 객체에서 호출된 함수

특정 메서드의 경우 콜백 함수를 제공해야 하며, 특정 개체에서만 작동한다.<br>
<br>
아래 코드에서는 `Array.prototype.map()`을 사용했으며 해당 함수는 `Array` 개체에서만 작동하기때문에 `TypeError`가 발생한다.

<pre>
    <code>
        const obj = { a: 13, b: 37, c: 42 };

        obj.map(function (num) {
        return num * 2;
        });   // TypeError: obj.map is not a function

        const numbers = [1, 4, 9];

        numbers.map(function (num) {
        return num * 2;
        }); // [2, 8, 18]
    </code>
</pre>

## 3. 같은 이름의 속성과 함수가 있는 경우

같은 이름의 속성과 함수가 있을 경우, 함수를 호출하면 컴파일러는 함수가 더이상 존재하지 않는다고 생각하기때문에 오류가 발생한다.

<pre>
    <code>
        function Dog() {
            this.age = 11;
            this.color = "black";
            this.name = "Ralph";
            return this;
        }

        Dog.prototype.name = function (name) {
            this.name = name;
            return this;
        }

        const myNewDog = new Dog();
        myNewDog.name("Cassidy"); //Uncaught TypeError: myNewDog.name is not a function
    </code>
</pre>

<pre>
    <code>
        function Dog() {
            this.age = 11;
            this.color = "black";
            this.dogName = "Ralph"; //Using this.dogName instead of .name
            return this;
        }

        Dog.prototype.name = function (name) {
            this.dogName = name;
            return this;
        }

        const myNewDog = new Dog();
        myNewDog.name("Cassidy"); //Dog { age: 11, color: 'black', dogName: 'Cassidy' }
    </code>
</pre>

## 4. 곱셈에 대괄호 사용시 오류 발생

수학에서는 대괄호를 사용해 곱셈을 표현할 수 있지만, JavaScript에서는 그렇게 사용하면 오류가 발생한다.
대괄호 대신 `*`연산자를 추가해 곱셈을 표현해야 한다.

<pre>
    <code>
        const sixteen = 2(3+5);
        console.log(`2 x (3 + 5) is ${sixteen}`); // Uncaught TypeError: 2 is not a function

        const sixteen = 2 * (3 + 5);
        console.log(`2 x (3 + 5) is ${sixteen}`);  // 2 x (3 + 5) is 16
    </code>
</pre>

## 5. 내보낸 모듈을 올바르게 가져오고 있지 않은 경우 오류 발생

모듈을 가져올때는 `import`를 사용하는 방법이 옳은 방법이다.

---

# References.

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_a_function>
