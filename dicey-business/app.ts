document.addEventListener("DOMContentLoaded", () => {
    let f = 0;
    let con: HTMLElement = document.querySelector(".con");
    let sums: HTMLElement = document.querySelector(".sum");
    class Die {
        constructor() {
            let div: HTMLElement = document.createElement("div"); //could have added this. instead of let to pretty much everything
            div.className = "die";
            let val : any = this.Roll();
            div.textContent = val; 
            div.nodeValue = val;
            con.appendChild(div);
            div.addEventListener("click", () => {
                let val : any = this.Roll();
                div.textContent = val;
            })
            div.addEventListener("dblclick", () => {
                con.removeChild(div);
            })
            let btn2: HTMLElement = document.querySelector(".roll"); //rerolls
            btn2.addEventListener("click", () => {
                val = this.Roll();
                div.textContent = val;
                div.nodeValue = val;
            })
        }
        Roll() {
            return randomVal(1, 7);
        }
    }
    
    let btn1: HTMLElement = document.querySelector(".btn"); //adds die
    btn1.addEventListener("click", () => {
        let create = new Die();
    })
    
    let btn3: HTMLElement = document.querySelector(".sumDice");
    btn3.addEventListener("click", () => {
        if(f == 1){
            let g: HTMLElement = document.querySelector(".sums");
            sums.removeChild(g);
        }
        let sum = 0;
        let die : NodeListOf<HTMLElement> = document.querySelectorAll(".die");
        for(let i: any = 0; i < die.length; i++){
            sum += parseFloat(die[i].innerHTML);
        }
        let div = document.createElement("div");
        div.className = "sums";
        div.textContent = `Sum: ${sum}`;
        sums.appendChild(div);
        f = 1;
    })
    
    
    function randomVal(min: number, max: number) {
        return Math.floor(Math.random() * (max - min)) + min; //random num in between 2 numbers
    }
})