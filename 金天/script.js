//js 新增一個Vue監看者

var vm = new Vue({
    el: "#app",
    data: {
        //使用的資料...
        text: "淡江大學",
        text2: "",
        counter: 0,
        htmlText: "<p>內文<b>粗體</b></p>",
        link: "https://www.tku.edu.tw/",
        fruits: [
            { name: "蘋果", price: 30, num: 100, quantity: 0 },
            { name: "香蕉", price: 20, num: 150, quantity: 0 },
            { name: "橘子", price: 25, num: 200, quantity: 0 }
        ],
        selectedFruit: { name: "", price: 0, num: 0 }
    },
    methods: {
        incrementCounter() {
            this.counter++;
        }
    },
    computed: {
        totalPrice() {
            return this.fruits.reduce((total, fruit) => {
                return total + fruit.price * fruit.quantity;
            }, 0);
        }
    }
});
