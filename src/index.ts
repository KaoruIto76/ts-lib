import { Optional } from "./Option/Optional"

export default () => {

  
  const a = Optional(1).map(x => x + 2).get()
  const b = Optional(null)
  
  console.log(a)
  console.log(b)

  submit(Optional(null))

  function submit(some: Optional<any>) {
    if(some.isEmpty) {
      return some.get()
    } else {
      return null
    }
  }
}

