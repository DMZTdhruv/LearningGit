class Myclass{
    constructor(name,friends){
        this.name = name;
        this.friends = friends;
    }
    display(){
        console.log(`${this.name} your friends are: ${this.friends}`)
    }   
}

let Me = new Myclass("Dhruv","Shivam, Rekha");
Me.display();