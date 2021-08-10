export default function question() {
    //No.1  //15min
    const num = 100

    const malt1 = 3
    const malt2 = 5
    const smalt1 = 'F'
    const smalt2 = 'B'

    const questionNo1 = (): void => {
        for (let i = 1; i <= num; i++) {
            let output = ''
            if (i % malt1 == 0 && i % malt2 == 0) {
                output += smalt1 + smalt2
            } else if (i % malt1 == 0) {
                output += smalt1
            } else if (i % malt2 == 0) {
                output += smalt2
            } else {
                output += i.toString()
            }
            console.log(output)
        }
    }

    //No.2 3h
    //type1
    const questionNo2 = (): void => {
        //1から100の配列を作成
        const numArray: number[] = [...Array(num)].map((_, i) => i + 1)
        numArray.forEach((value) => {
            let output = ''
            //参考演算子で比較
            value % malt1 == 0 ? (output += smalt1) : null
            value % malt2 == 0 ? (output += smalt2) : null
            value % malt1 != 0 && value % malt2 != 0 ? (output += value.toString()) : null
            console.log(output)
        })
    }

    //type2 //他の方法がないか模索中
    // const divide = (i: number, malt: number):boolean => {
    //     return i % malt == 0
    // }

    // const output = (i:number,max:number)=>{
    //     divide
    // }

    // const questionNo2 = (): void => {
    //     divide(30,malt1)?
    // }

    // questionNo1()
    questionNo2()
}
