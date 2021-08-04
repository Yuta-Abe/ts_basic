type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type Dan = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
type Player = 'first' | 'second'

//駒の位置を表すクラス
class Position {
    constructor(private suji: Suji, private dan: Dan) {}

    //パラメータに渡された位置と現在の位置を比較するメソッド
    distanceFrom(position: Position, player: Player) {
        if (player == 'first') {
            return {
                suji: Math.abs(position.suji - this.suji),
                dan: Math.abs(Number(position.dan) - Number(this.dan)),
            }
        } else {
            return {
                suji: Math.abs(position.suji - this.suji),
                dan: -Math.abs(Number(position.dan) - Number(this.dan)), //段は正負反転
            }
        }
    }
}

new Position(1, '2')

//駒を表すクラス
abstract class Piece {
    //Pieceクラスとサブクラスでアクセスできる
    protected position: Position
    constructor(private readonly player: Player, suji: Suji, dan: Dan) {
        this.position = new Position(suji, dan)
    }

    //めすっどの定義
    moveTo(position: Position) {
        this.position = position
    }

    //移動可能かどうか反転するメソッド
    //abstractをつけておいて、サブクラスで具体的に実装。駒によって動きが違うからね
    abstract canMoveTo(position: Position, player: Player): boolean
}

class Osho extends Piece {
    //王将のcanMoveToメソッドを具体的に決定する
    canMoveTo(position: Position, player: Player): boolean {
        const distance = this.position.distanceFrom(position, player)
        return distance.suji < 2 && distance.dan < 2
    }
}

class Fu extends Piece {
    canMoveTo(position: Position, player: Player): boolean {
        const distance = this.position.distanceFrom(position, player)
        //移動先が1マス以内
        return distance.suji === 0 && distance.dan === 1
    }
}

class NariKin extends Fu {
    canMoveTo(position: Position, player: Player): boolean {
        const distance = this.position.distanceFrom(position, player)
        return (
            //移動先が１マスいない
            distance.suji < 2 &&
            distance.dan < 2 &&
            //左後方と右後方には進めない
            distance.suji !== 0 &&
            distance.dan === -1
        )
    }
}

class Game {
    private pieces = Game.makePieces()
    private static makePieces() {
        return [new Osho('first', 5, '1'), new Osho('second', 5, '9'), new Fu('first', 1, '7')]
    }
}
