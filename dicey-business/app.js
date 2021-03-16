document.addEventListener("DOMContentLoaded", function () {
    var f = 0;
    var con = document.querySelector(".con");
    var sums = document.querySelector(".sum");
    var Die = /** @class */ (function () {
        function Die() {
            var _this = this;
            var div = document.createElement("div"); //could have added this. instead of let to pretty much everything
            div.className = "die";
            var val = this.Roll();
            div.textContent = val;
            div.nodeValue = val;
            con.appendChild(div);
            div.addEventListener("click", function () {
                var val = _this.Roll();
                div.textContent = val;
            });
            div.addEventListener("dblclick", function () {
                con.removeChild(div);
            });
            var btn2 = document.querySelector(".roll"); //rerolls
            btn2.addEventListener("click", function () {
                val = _this.Roll();
                div.textContent = val;
                div.nodeValue = val;
            });
        }
        Die.prototype.Roll = function () {
            return randomVal(1, 7);
        };
        return Die;
    }());
    var btn1 = document.querySelector(".btn"); //adds die
    btn1.addEventListener("click", function () {
        var create = new Die();
    });
    var btn3 = document.querySelector(".sumDice");
    btn3.addEventListener("click", function () {
        if (f == 1) {
            var g = document.querySelector(".sums");
            sums.removeChild(g);
        }
        var sum = 0;
        var die = document.querySelectorAll(".die");
        for (var i = 0; i < die.length; i++) {
            sum += parseFloat(die[i].innerHTML);
        }
        var div = document.createElement("div");
        div.className = "sums";
        div.textContent = "Sum: " + sum;
        sums.appendChild(div);
        f = 1;
    });
    function randomVal(min, max) {
        return Math.floor(Math.random() * (max - min)) + min; //random num in between 2 numbers
    }
});
