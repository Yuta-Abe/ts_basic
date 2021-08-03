export default function notExistSample() {
    let name = null
    console.log('notExist Sample 1:', typeof name, name)

    name = 'abe'
    if (name) {
        console.log('notExist Sample 3:', '吾輩は猫である。名前は' + name)
    } else {
        console.log('notExist Sample 2:', '吾輩は猫である。名前はまだ' + name)
    }

    let age = undefined
    console.log('notExist Sample 4:', typeof age, age)

    age = 25
    if (age) {
        console.log('notExist Sample 6:', '年齢は' + age + 'です。')
    } else {
        console.log('notExist Sample 5:', '年齢は秘密です')
    }
}
