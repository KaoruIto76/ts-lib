/**
 * Option of typescipt
 */

export interface Optional<A> {
  isEmpty:  boolean
  nonEmpty: boolean
  get(): A
  getOrElse<B>(a: B): B | A  // fix when null, undefined
  map<B>(f: (a: A) => B): Optional<B>
  fold<B>(ifEmpty: B, f: (a: A) => B): B
  flatten(): Optional<A>
  filter(f: (a: A) => boolean): Optional<A>
  contains<B extends A>(b: B): boolean
  exists(f: (a: A) => boolean): boolean
  forall(f: (a: A) => boolean): boolean
  flatMap<B>(f: (a: A) => Optional<B>): Optional<B>
  foreach(f: (a: A) => void): void
  orElse<B extends A>(ob: Optional<B>): Optional<A>
  // add methods
  test():A
  apply1<B, C>(ob: Optional<B>, f: (a: A, b: B) => C): Optional<C>
  apply2<B, C, D>(ob: Optional<B>, oc: Optional<C>, f: (a: A, b: B, c: C) => D): Optional<D>
}

export function Optional<A>(a: A): Optional<A> {
  return (a !== undefined && a !== null) ? new SomeImpl<A>(a) : None;
}

export function Some<A>(a: A): Optional<A> {
  return new SomeImpl(a);
}


class OptionalImpl<A> implements Optional<A> {

  isEmpty: boolean
  nonEmpty: boolean

  get(): A {
    throw 'err'
  }

  test(): A {
    return this.get()
  }

  // nn~~~~~
  getOrElse<B>(elseValue: B): B | A {
    return this.isEmpty ? elseValue : this.get()
  }

  map<B>(f: (a: A) => B): Optional<B> {
    return this.isEmpty ? None : new SomeImpl(f(this.get()))
  }

  fold<B>(ifEmpty: B, f: (a: A) => B): B {
    return this.isEmpty ? ifEmpty : f(this.get())
  }

  flatten(): Optional<A> {
    throw 'TODO'
  }

  filter(f: (a: A) => boolean): Optional<A> {
    return (this.isEmpty || f(this.get())) ? this : None
  }

  contains<B extends A>(b: B): boolean {
    return !this.isEmpty && this.get() === b
  }

  exists(f: (a: A) => boolean): boolean {
    return !this.isEmpty && f(this.get())
  }

  forall(f: (a: A) => boolean): boolean {
    return this.isEmpty || f(this.get())
  }

  flatMap<B>(f: (a: A) => Optional<B>): Optional<B> {
    return this.isEmpty ? None : f(this.get())
  }

  foreach(f: (a: A) => void): void {
    if (!this.isEmpty) { f(this.get()) }
  }

  orElse<B extends A>(d: Optional<B>): Optional<A> {
    return this.isEmpty ? d : this
  }

  apply1<B, C>(ob: Optional<B>, f: (a: A, b: B) => C): Optional<C> {
    return this.flatMap(a => ob.map(b => f(a, b)))
  }

  apply2<B, C, D>(ob: Optional<B>, oc: Optional<C>, f: (a: A, b: B, c: C) => D): Optional<D> {
    return this.flatMap(a => ob.flatMap(b => oc.map(c => f(a, b, c))))
  }
}

class SomeImpl<A> extends OptionalImpl<A> implements Optional<A> {
  isEmpty:  boolean = false
  nonEmpty: boolean = true

  get(): A {
    return this.value
  }

  constructor(private value: A) {
    super()
  }

  toString(): string {
    return 'Some(' + this.value + ')'
  }
}

class NoneImpl extends OptionalImpl<any> implements Optional<any> {
  isEmpty: boolean = true
  nonEmpty: boolean = false

  get(): any {
    throw new TypeError('None can not #get')
  }

  toString(): string {
    return 'None'
  }
}

export const None: Optional<any> = new NoneImpl()
