var a = 5;
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})
Vue.component('my-component', {
    template: '<p class="foo bar">Hi</p>'
})
Vue.component('example', {
    props: {
        // 基础类型检测 (`null` 指允许任何类型)
        propA: Number,
        // 可能是多种类型
        propB: [String, Number],
        // 必传且是字符串
        propC: {
            type: String,
            required: true
        },
        // 数值且有默认值
        propD: {
            type: Number,
            default: 100
        },
        // 数组/对象的默认值应当由一个工厂函数返回
        propE: {
            type: Object,
            default: function () {
                return { message: 'hello' }
            }
        },
        // 自定义验证函数
        propF: {
            validator: function (value) {
                return value > 10
            }
        }
    },
    template: '<input v-model="props"/>'
})
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!',
        condition: true
    },
    methods: {
        reverseMessage: function () {
            var b = 6;
            console.log(b * a);
            this.message = this.message.split('').reverse().join('');
        }
    }
})
var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: '蔬菜' },
            { id: 1, text: '奶酪' },
            { id: 2, text: '随便其它什么人吃的东西' }
        ],
        type: "submit",
        url: "http://www.baidu.com",
    },
    methods: {
        handle: function (params) {
            console.log("params");
        }
    }
})
// 我们的数据对象
var data = { a: 1 }

// 该对象被加入到一个 Vue 实例中
var vm = new Vue({
    data: data
})

// 获得这个实例上的属性
// 返回源数据中对应的字段
vm.a == data.a // => true
console.log(vm.a);
// 设置属性也会影响到原始数据
vm.a = 2
data.a // => 2

// ……反之亦然
data.a = 3
vm.a // => 3
var appCss = new Vue({
    el: "#appCss",
    data: {
        one: 'class1',
        two: 'class2',
        style: {
            color: "blue",
            transform: "scale(1.3,1.4)",
        },
        indexP: "index",
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ],
    },
    methods: {
        move: function (params) {
            console.log(params.touches["0"]);
        },
        setTime: function (params) {
            let a = 0;
            setInterval(() => {
                a = Math.random();
                console.log(a);
            }, 1000);
            return a;
        }
    }
});
var example1 = new Vue({
    el: "#example-1",
    data: {
        something: "",
        some: 0,
        checkedNames: [],
    }
})

// console.log(appCss.setTime())