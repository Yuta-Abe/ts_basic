export default function question2(): void {
    //     //No.2 3h 少しだけ調査した
    //     const num = 100

    //     //エイリアス
    //     type Multiplier = {
    //         multiple: number
    //         output: string
    //     }

    //     const malt1: Multiplier = {
    //         multiple: 3,
    //         output: 'F',
    //     }

    //     const malt2: Multiplier = {
    //         multiple: 5,
    //         output: 'B',
    //     }

    //     //type1
    //     const questionNo2 = (): void => {
    //         //1から100の配列を作成
    //         const numArray: number[] = [...Array(num)].map((_, i) => i + 1)
    //         numArray.forEach((value) => {
    //             let output = ''
    //             //三項演算子で比較
    //             value % malt1.multiple == 0 ? (output += malt1.output) : null
    //             value % malt2.multiple == 0 ? (output += malt2.output) : null
    //             value % malt1.multiple != 0 && value % malt2.multiple != 0 ? (output += value.toString()) : null
    //             console.log(output)
    //         })
    //     }

    // //type2  mapで配列を変える

    // const num = 200

    // //クラス
    // class Multiplier {
    //     private multiple: number
    //     private output: string

    //     constructor(multiple: number, output: string) {
    //         this.multiple = multiple
    //         this.output = output
    //     }

    //     checkMultiple = (array: string[]): string[] => {
    //         return array.map((value, index) => ((index + 1) % this.multiple === 0 ? (value = this.output) : value))
    //     }
    // }

    // const mult1 = new Multiplier(3, 'F')
    // const mult2 = new Multiplier(5, 'B')
    // const mult3 = new Multiplier(15, 'FB')

    // const questionNo2 = (): void => {
    //     let numArray: string[] = [...Array(num)].map((_, i) => (i + 1).toString())
    //     numArray = mult1.checkMultiple(numArray)
    //     numArray = mult2.checkMultiple(numArray)
    //     numArray = mult3.checkMultiple(numArray)
    //     console.log(numArray)
    // }

    // tyep3    再帰関数で繰り返す

    const num = 100

    //エイリアス
    type Multiplier = {
        multiple: number
        output: string
    }

    const malt1: Multiplier = {
        multiple: 3,
        output: 'F',
    }

    const malt2: Multiplier = {
        multiple: 5,
        output: 'B',
    }

    const malt3: Multiplier = {
        multiple: 15,
        output: 'FB',
    }

    const divide = (i: number, max: number) => {
        i++
        i % malt3.multiple === 0
            ? console.log(malt3.output)
            : i % malt2.multiple === 0
            ? console.log(malt2.output)
            : i % malt1.multiple === 0
            ? console.log(malt1.output)
            : console.log(i)
        i < max ? divide(i, max) : null
    }

    const questionNo2 = (): void => {
        divide(0, num)
    }

    questionNo2()
}
