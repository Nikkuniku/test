(function ($) {
    $.fn.FixTable = function () {
        this.each(function () {
            //特定列の文字長を調整して表示する
            var col_num = 1
            var book_nm = $(this).children('td').eq(col_num - 1).text();
            if (getLen(book_nm) > 26) {
                var cut_book_nm = book_nm.slice(0, 25);
                cut_book_nm += '...'
                $(this).children('td').eq(col_num - 1).text(cut_book_nm);
            }
            $(this).children('td').eq(col_num - 1).css({
                'font-size': '90%'
            });

            //調整したい列番号を格納する。
            var col_array = [2, 3];
            for (var i = 0; i < col_array.length; i++) {
                var book_data = $(this).children('td').eq(col_array[i] - 1).text();
                if (getLen(book_nm) > 11) {
                    var cut_book_data = book_data.slice(0, 11);
                    cut_book_data += '...'
                    $(this).children('td').eq(col_array[i] - 1).text(cut_book_data);
                }
                $(this).children('td').eq(col_array[i] - 1).css({
                    'font-size': '90%'
                });
            };
        });
    };
})(jQuery);