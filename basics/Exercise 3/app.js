new Vue({
    el: '#exercise',
    data: {
        value: 0
    },
    computed: {
        result: function () {
            return this.value === 37 ? 'done' : '';
        }
    },
    watch: {
        /*
        この書き方だと，ボタンを押すたびに，setTimeout関数が走る
        なぜなら，watchしているresultはボタンを押すたびに見た目が変わっているから．
        value: function () {
         */
        result: function () {
            var vm = this;
            setTimeout(function () {
                console.log("offered")
                vm.value = 0;
                console.log("done")
            }, 5000)
        }

    },
});