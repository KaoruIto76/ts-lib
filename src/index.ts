import { Optional,Some,None } from "./Option/Optional"


export interface Test {
  name: Optional<string>
  age:  Optional<number>
}

const str = 'kaoru'
const num = str.includes('g') ? Some(1) : None

const a:Test = {
  name: Some('kaoru'),
  age:  num
}

const opt = Optional(Optional(1))

console.log(a)
console.log([Optional(1),Optional('a')])
console.log(opt.flatMap(x => x.map(x => x + 1)))
