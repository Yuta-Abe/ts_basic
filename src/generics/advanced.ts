export default function genericsAdvancedSample() {
    //map関数のシグネチャ
    type Map<T, U> = (array: T[], fn: (item: T) => U) => U[]

    const mapStringsToNumber: Map<string, number> = (array, fn) => {
        const result = []
        for (let i = 0; i < array.length; i++) {
            const item = array[i]
            result[i] = fn(item)
        }
        return result
    }

    const numbers = mapStringsToNumber(['123', '456', '789'], (item) => Number(item))
    console.log('Generics advanced sample 1', numbers)

    const mapNumberToString: Map<number, string> = (array, fn) => {
        const result = []
        for (let i = 0; i < array.length; i++) {
            const item = array[i]
            result[i] = fn(item)
        }
        return result
    }

    const strings = mapNumberToString(numbers, (item) => String(item))
    console.log('Generics advanced sample 2', numbers)
}
