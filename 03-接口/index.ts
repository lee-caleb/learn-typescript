
namespace Interface {
    interface Person {
        name: string
        age: number
    }

    let p1: Person = {
        name: 'zhangsan',
        age: 12
    }

    // 接口可选参数
    interface Person2 {
        name: string
        age?: number
    }

    let p2: Person2 = {
        name: 'zhangsan'
    }

    // 接口只读属性
    interface Person3 {
        readonly id: number
        name: string
        age?: number
    }

    let p3: Person3 = {
        id: 1,
        name: 'zhangsan'
    }  
    // p3.id = 2 // 报错

    // 接口额外属性
    interface Person4 {
        readonly id: number
        name: string
        age?: number
        [propName: string]: any  // 必须使用Any，否则报错
    }

    let p4: Person4 = {
        id: 1,
        name: 'zhangsan',
        eat() {  // 额外的函数属性
            console.log(this.name, 'eat');
        }
    }

    // 接口函数类型
    interface SearchFunc {
        (source: string, subString: string): boolean
    }

    // 接口继承
    interface Person5 {
        name: string
        age: number
    }

    interface Student extends Person5 {
        id: number
        class: string
    }

    let s1: Student = {
        id: 1,
        class: '一班',
        name: 'zhangsan',
        age: 12
    }

    // 接口继承多个接口
    interface Student2 extends Person5, Person3 {
        name: string
        age: number
    }

    // 接口继承类
    class Person6 {
        name: string = 'zhangsan'
        age: number = 12
    }

    interface Student3 extends Person6 {
        id: number
        class: string
    }

    // 接口重名  合并名字相同的接口
    interface Person7 {
        name: string
        age: number
    }

    interface Person7 {
        id: number
        class: string
    }

    let p7: Person7 = {
        name: 'zhangsan',
        age: 12,
        id: 1,
        class: '一班'
    }


}

