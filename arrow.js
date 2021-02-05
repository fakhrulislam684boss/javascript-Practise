

class A  {

    constructor(a,b,c){
      this.a = a,
      this.b= b
      this.c = c
    }

    add(){
      console.log(this)
    }

    pub(){
      console.log("Tania")
    }

}
class B  extends A {
  constructor(a,b,c,d,e,f){
    super(a,b,c)
    this.d = d,
    this.e = e,
    this.f = f
  }
  pb(){
    this.pub()
  }
}


let b = new B(1,2,3,5,6,7)


b.pb()