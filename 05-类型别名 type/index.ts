namespace TypeAlias {

    // 类型别名 type alias 用来给一个类型起个新名字
    type Name = string
    type NameResolver = () => string
    type NameOrResolver = Name | NameResolver

    function getName(n: NameOrResolver): Name {
        if (typeof n === 'string') {
            return n
        } else {
            return n()
        }
    }

    // 元组
    type NameAndAge = [string, number]

    // 对象约束
    type Person = {
        name: string
        age: number
    }

    // 类型别名与字符串字面量类型都是使用 type 进行定义
    type EventNames = 'click' | 'scroll' | 'mousemove'


    // 类型别名也可以是泛型
    type Container<T> = { value: T }

    // 类型别名不能出现在声明右侧的任何地方
    // type Yikes = Array<Yikes> // error

    // 接口 vs 类型别名
    // 1. 类型别名不能被 extends 和 implements（自己也不能 extends 和 implements 其他类型）
    // 2. 当你需要使用联合类型或元组类型的时候，类型别名会是十分有用的
    type LinkedList<T> = T & { next: LinkedList<T> }

    // 3. 类型别名不能出现在声明右侧的任何地方

    // 4. 接口创建了一个新的名字，可以在其它任何地方被调用。类型别名并不创建新名字 —— 比如，错误信息就不会使用别名

    // 5. 类型别名可以使用 computed properties
    type Obj = {
        [x: string]: any
        foo: number

        // [x: string]: any  // error

        [z: number]: number
    }

    // 6. 接口可以被多次合并，而类型别名不能

    // 函数约束
    type GetPerson = () => Person
    const g: GetPerson = () => {
        return <Person>{
            name: 'zhangsan',
            age: 12
        }
    }
}