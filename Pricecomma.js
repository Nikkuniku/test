(function ($) {
    $.fn.Pricecomma = function () {
        this.each(function () {
            //テーブルのカンマをつけたい行番号
            var col_num = 4
            var num = $(this).children('td').eq(col_num - 1).text();
            num = (num - 0).toLocaleString();
            $(this).children('td').eq(col_num - 1).text(num)
        });
    };
})(jQuery);