//Conditional Typesの例題
//参考：https://qiita.com/ringtail003/items/733aff32ddad7d4fda90

export default function conditionalTypesSample(): void {
    interface Animal {
        name: string
        color: string
    }

    class Dog implements Animal {
        //interfaceをclassに含める場合はimplementsを使う。classの継承extendsみたいなもの
        constructor(public name: string, public color: string) {}
    }

    class Cat implements Animal {
        constructor(public name: string, public color: string) {}
    }
    //
    //
    //
    interface Virus {
        name: string
        type: string //Virusインタフェースはcolorでなくtypeを持つ
    }

    class Influenza implements Virus {
        constructor(public name: string, public type: string) {}
    }

    type Creature = Dog | Cat | Influenza

    //arg1のインスタンスの中からarg2で指定したnameプロパティをもつものを抜き出す
    const filterByName = (creatures: Creature[], name: string) => {
        return creatures.filter((creature) => creature.name === name)
    }

    filterByName(
        [
            new Dog('Bob', 'white'),
            new Cat('Steve', 'white'),
            new Influenza('H1N1', 'A'),
            new Influenza('H3N2', 'A'),
            new Influenza('H7Np', 'A'),
        ],
        'H1N1'
    )
    // [ {name: "H1N1", type: "A"} ]

    //
    //
    //

    //型引数がアニマル型かどうか判断。アニマル型であるDogやCatはT型になり、
    //Animal型でないInfluenzaなどはneverになる
    //つまり、Animal型のみ抽出される。返されるのもAnimal型
    type IsAnimal<T> = T extends Animal ? T : never
    //ここで、Animal型のみを構造に持つ型ができる
    type AnimalType = IsAnimal<Creature>

    //Animal型をもつ型から指定したcolorを持つものを抽出してその配列を返す
    //AnimalTypeを作っておいたのでarg1にはAnimal型の配列が入ることが保証されている
    //互換性のない型を渡すことはできない
    const filterByColor = (animals: AnimalType[], color: string): AnimalType[] => {
        return animals.filter((v) => v.color === color)
    }

    filterByColor([new Dog('Bob', 'white'), new Dog('Steve', 'brown'), new Dog('Mel', 'brown')], 'white')
    //OK: [ {name: 'Bob', color: 'white'} ]

    //以下はエラー！
    // filterByColor(
    //     [
    //         // Error: Type 'Influenza' is not assignable to type 'Dog | Cat'.
    //         new Influenza('H1N1', 'A'),
    //         new Dog('Bob', 'white'),
    //     ],
    //     'white'
    // )
}
