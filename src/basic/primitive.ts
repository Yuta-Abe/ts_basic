export default function primitiveSample() {
    const name = 'トラハック'
    console.log('primitive sample 1: ', typeof name, name)

    const age = 28
    console.log('primitive Sample 2: ', typeof age, age)

    const isSingle = true
    console.log('primitive Sample 3: ', typeof isSingle, isSingle)

    const isOver20: boolean = age >= 20
    console.log('primitive Sample 4: ', typeof isOver20, isOver20)
}
