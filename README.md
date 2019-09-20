# wpfxy
module.exports = cc.Class({
    extends: BaseClass,
    properties: {
        // 随机种子
        randomSeed: [],
        // 最大精度
        seedMax: 1000000
    },
    /**
     * 初始化随机种子
     */
    initRandomSeed: function () {
        for (var i = 0; i < this.seedMax; ++i) {
            this.randomSeed.push(i);
        }
        for (var i = 0; i < this.seedMax; ++i) {
            var random = Math.floor(Math.random() * this.seedMax);
            var t = this.randomSeed[random];
            this.randomSeed[random] = this.randomSeed[i];
            this.randomSeed[i] = t;
        }
    },
    /**
     * 获取一个区间的随机数
     * @param $from 最小值
     * @param $end 最大值
     * @returns {number}
     */
    limit: function ($from, $end) {
        if ($from != Math.min($from, $end)) {
            var min = $end;
            $end = $from;
            $from = min;
        }
        var range = $end - $from;
        var random = Math.floor(Math.random() * this.seedMax);
        var t = this.randomSeed[random];
        this.randomSeed[random] = this.randomSeed[0];
        this.randomSeed[0] = t;
        return $from + this.randomSeed[0] / this.seedMax * range;
    },

    /**
     * 获取一个区间的随机数(整数)
     * @param $from 最小值
     * @param $end 最大值
     * @returns {number}
     */
    limitInteger: function ($from, $end) {
        return Math.round(this.limit($from, $end));
    },

    /**
     * 在一个数组中随机获取一个元素
     * @param arr 数组
     * @param maxNum 元素个数
     * @returns {any} 随机出来的结果
     */
    randomArray: function (arr, maxNum) {
        maxNum = maxNum || 1;
        var dropAry = [];
        if (maxNum >= arr.length) {
            dropAry = arr;
        } else {
            for (var i = 0; i < maxNum && dropAry.length < maxNum; ++i) {
                var equipRandom = this.limitInteger(i, arr.length - 1);
                var t = arr[equipRandom];
                arr[equipRandom] = arr[i];
                arr[i] = t;
                dropAry.push(arr[i]);
            }
        }
        return dropAry;
    },
    /**
     * 数组乱序
     * @param arr 数组
     * @returns {any} 乱序出来的结果
     */
    shuffleArray: function (arr) {
        var rand;
        var index = 0;
        var shuffled = [];
        for (var i in arr) {
            rand = this.limitInteger(0, index++);
            shuffled[index - 1] = shuffled[rand];
            shuffled[rand] = arr[i];
        };
        return shuffled;
    },
});
