(function ($) {
    $.fn.MakeCheckButton = function () {
        //.eachを使った定義
        this.each(function () {
            //チェックボックスを付けたい列番号
            var col_num = 3
            $(this).children('td').eq(col_num - 1).html('<input type="checkbox" id="check"/>')
        });

        ////for文を使った定義
        ////テーブルの行数
        //var DataLength = 6
        ////チェックボックスをつけたい列番号
        //var col_num = 3
        //for (var i = 0; i < DataLength; i++) {
        //    this.eq(i).children('td').eq(col_num - 1).html('<input type="checkbox" id="check"/>')
        //}
    };
})(jQuery);