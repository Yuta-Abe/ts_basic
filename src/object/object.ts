export default function objectSample() {
    // const a: object = {
    //     name: 'abe',
    //     age: 25,
    // }
    //a.name

    //オブジェクトリテラル記法で型定義
    let country: {
        language: string
        name: string
    } = {
        language: 'Japanease',
        name: 'Japan',
    }

    console.log('Object objectSample 1:', country)

    country = {
        language: 'English',
        name: 'United States of Americ',
    }

    console.log('Object objectSample 2:', country)

    // オプショナルとreadonry
    const torahack: {
        age: number
        lastName: string
        readonly firstName: string
        gender?: string
    } = {
        age: 28,
        lastName: 'Yamada',
        firstName: 'Tarou',
    }

    torahack.gender = 'male'
    torahack.lastName = 'kamado'
    // torahack.firstName = "Tanfiro"

    console.log('Object objectSample 3:', torahack)

    // インデックスシグネチャ
    const capitals: {
        [countryName: string]: string
    } = {
        Japan: 'Tokyo',
        Koria: 'Seoul',
    }

    capitals.China = 'Beijing'
    capitals.Canada = 'Ottawa'

    console.log('Object objectSample 4:', capitals)
}
