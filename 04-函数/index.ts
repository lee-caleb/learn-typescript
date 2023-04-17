namespace Function04 {

    // 函数的定义方法
    // 1. 函数声明
    function sum(x: number, y: number): number {
        return x + y
    }

    console.log('1. sum', sum(1, 2));


    // 2. 函数表达式
    let mySum = function (x: number, y: number): number {
        return x + y
    }

    console.log('2. mySum', sum(1, 2));

    // 3. 使用接口定义函数的形状
    interface SearchFunc {
        (source: string, subString: string): boolean
    }

    let search: SearchFunc = function (source: string, subString: string): boolean {
        return source.search(subString) !== -1
    }

    console.log('3. search', search('hello', 'll'));

    // 4. 箭头函数
    let search2: SearchFunc = (source: string, subString: string): boolean => {
        return source.search(subString) !== -1
    }

    console.log('4. search2', search2('hello', 'll'));

    // 5. 可选参数
    function buildName(firstName: string, lastName?: string) {
        if (lastName) {
            return firstName + ' ' + lastName
        } else {
            return firstName
        }
    }

    console.log('5. buildName', buildName('zhang'));

    // 6. 参数默认值
    function buildName2(firstName: string, lastName: string = 'Smith') {
        return firstName + ' ' + lastName
    }

    console.log('6. buildName2', buildName2('zhang'));

    // 7. 剩余参数
    function push(array: any[], ...items: any[]) {
        items.forEach(function (item) {
            array.push(item)
        })
    }

    let a: Array<any> = []
    push(a, 1, 2, 3)
    console.log('7. push', a);

    // 8. 重载
    function reverse(x: number): number
    function reverse(x: string): string
    function reverse(x: number | string): number | string | undefined {
        if (typeof x === 'number') {
            return Number(x.toString().split('').reverse().join(''))
        } else if (typeof x === 'string') {
            return x.split('').reverse().join('')
        }
    }

    console.log('8. reverse', reverse(123));

    // 9. 函数类型
    let mySum2: (x: number, y: number) => number = function (x: number, y: number): number {
        return x + y
    }

    console.log('9. mySum2', mySum2(1, 2));

    // 10. 类型推断
    let mySum3 = function (x: number, y: number) {
        return x + y
    }

    console.log('10. mySum3', mySum3(1, 2));

}