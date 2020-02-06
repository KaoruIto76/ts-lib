import { Optional,Some,None } from "./Option/Optional"


export interface Test {
  name: Optional<string>
  age:  Optional<number>
}

const a:Test = {
  name: Some('kaoru'),
  age:  None
}

console.log(a.age.getOrElse(1))

/**

function a<T>(x: T)

function a(x: string)

function a(x: number)
 */
