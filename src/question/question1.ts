export default function question1(): void {
    //No.1  //15min
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

    const questionNo1 = (): void => {
        for (let i = 1; i <= num; i++) {
            let output = ''
            if (i % malt1.multiple == 0 && i % malt2.multiple == 0) {
                output += malt1.output + malt2.output
            } else if (i % malt1.multiple == 0) {
                output += malt1.output
            } else if (i % malt2.multiple == 0) {
                output += malt2.output
            } else {
                output += i.toString()
            }
            console.log(output)
        }
    }

    questionNo1()
}
