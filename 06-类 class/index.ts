namespace learn_class {
    // 类 class

    class Cat {
        name: string  // public 属性 默认
        age: number

        // 构造函数 constructor
        public constructor(name: string, age: number) {
            this.name = name
            this.age = age  // this 指向当前实例 也就是 new 出来的对象
            // this. 属性必须先在类中声明
            // this.sayasdasds  // error
            
        }
        
        // 方法
        sayHi() {
            console.log(`My name is ${this.name}`)
        }
    }

    const cat = new Cat('Tom', 18)
    cat.sayHi()

    // 继承
    class Animal {
        name: string
        constructor(name: string) {
            this.name = name
        }
        sayHi() {
            return `My name is ${this.name}`
        }
    }

    class Dog extends Animal {
        age: number
        constructor(name: string, age: number) {
            super(name)  // 调用父类的构造函数
            this.age = age
        }
        sayHi() {
            return `My name is ${this.name}, age ${this.age}`
        }
    }

    const dog = new Dog('wangcai', 3)
    console.log(dog.sayHi())

    // 类的修饰符
    // public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
    // private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
    // protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
    class Animal2 {
        public name: string
        public constructor(name: string) {
            this.name = name
        }
    }

    class Cat2 extends Animal2 {

        public constructor(name: string) {
            super(name)
            console.log(this.name)
        }
    }

    // readonly 修饰符
    // 只读属性关键字，只允许出现在属性声明或索引签名或构造函数中
    class Animal3 {
        public readonly name: string
        public constructor(name: string) {
            this.name = name
        }
    }
    
    // 参数属性
    // 参数属性可以方便地让我们在一个地方定义并初始化一个成员
    class Animal4 {
        public constructor(public name: string) {
            this.name = name
        }
    }

    // 存取器
    // 使用 getter 和 setter 可以改变属性的赋值和读取行为
    class Animal5 {
        private _name: string
        public get name() {
            return this._name
        }
        public set name(value) {
            this._name = value
        }

        public constructor(name: string) {
            this._name = name
        }
    }

    // 静态属性
    // 静态属性指的是类本身的属性，而不是类的实例的属性
    class Animal6 {
        public static isAnimal(a:Animal6) {
            return a instanceof Animal6
        }
        public name: string
        public constructor(name: string) {
            this.name = name
        }
    }

    const a = new Animal6('Jack')
    Animal6.isAnimal(a)  // true

    // 抽象类
    // abstract 用于定义抽象类和其中的抽象方法
    abstract class Animal7 {
        public name: string
        public constructor(name: string) {
            this.name = name
        }
        public abstract sayHi(): string
    }

    // 抽象类不能被实例化
    // const a = new Animal7('Jack')  // error

    // 抽象类中的抽象方法必须被子类实现
    class Cat7 extends Animal7 {
        public sayHi() {
            return `Meow, My name is ${this.name}`
        }
    }

    // 多态
    // 多态是面向对象三大特性之一
    // 允许将父类的指针或引用指向子类的对象
    // 父类定义一个方法不去实现，让继承它的子类去实现，每个子类有不同的表现
    /* 下面是上面代码的解释:
        1. 公共构造函数用于初始化公共属性名。
        2. public关键字用于定义公共属性。
        3.该类的任何实例都可以访问公共属性。
    */
    class Animal8 {
        public name: string
        public constructor(name: string) {
            this.name = name
        }
        public sayHi() {
            return `My name is ${this.name}`
        }
    }

    class Cat8 extends Animal8 {
        public sayHi() {
            return `Meow, My name is ${this.name}`
        }
    }

    class Dog8 extends Animal8 {
        public sayHi() {
            return `Woof, My name is ${this.name}`
        }
    }

    let animal: Animal8 = new Cat8('Tom')
    console.log(animal.sayHi())  // Meow, My name is Tom

    animal = new Dog8('Jerry')
    console.log(animal.sayHi())  // Woof, My name is Jerry

    // this 类型
    // this 表示当前类的类型
    class Animal9 {
        public name: string
        public constructor(name: string) {
            this.name = name
            // return this.name  // error
        }
        public sayHi(): string {
            return `My name is ${this.name}`
        }
    }

    class Cat9 extends Animal9 {
        public sayHi(): string {
            return `Meow, ${super.sayHi()}`
        }
    }

    // 类型推论
    // 如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型
    class Animal10 {
        public name = 'Jack'
        public constructor() {
            // ...
        }
    }

    // 类型兼容性
    // TypeScript 中的类型兼容性是基于结构子类型的
    // 结构类型是一种只使用其成员来描述类型的方式
    // 它正好与名义类型形成对比
    // 在 TypeScript 中，接口的兼容性是基于其定义的方式而不是接口名字
    interface Named {
        name: string
    }

    class Person {
        public name: string = ''
    }

    let p: Named
    // OK, because of structural typing
    p = new Person()
    // 类的兼容性
    // 类的兼容性是基于其结构的，而不是基于名字
}