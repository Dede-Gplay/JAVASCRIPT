class rectangle {
    constructor (Length, Width){
        this.Length = Length;
        this.Width = Width;
    }
    calculateArea(){
        return this.Length * this.Width;
    }
    calculatePerimeter(){
        return 2 * (this.Length + this.Width)
    }
}
const rect = new rectangle(10,5);
console.log(rect.calculateArea());
console.log(rect.calculatePerimeter());