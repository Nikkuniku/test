(function ($) {
    $.fn.FixTable = function () {
        this.each(function () {
            //テーブルの金額セルにカンマ,円マークを付ける
            //値段の列番号
            var col_num_price = 4
            var price = $(this).children('td').eq(col_num_price - 1).text();
            price = (price - 0).toLocaleString();
            $(this).children('td').eq(col_num_price - 1).text('\xA5' + price);

            //ISBNコードの長さに合わせてハイフンをつける
            //ISBNコードを表示する列の番号
            var col_num_isbn = 5
            var isbn_cd = $(this).children('td').eq(col_num_isbn - 1).text();
            isbn_cd.length == 10 ?
                $(this).children('td').eq(col_num_isbn - 1).text(isbn_cd.replace(/^(\d{2})(\d{7})(\d)$/, "$1-$2-$3")) :
                $(this).children('td').eq(col_num_isbn - 1).text(isbn_cd.replace(/^(\d{3})(\d{3})(\d{6})(\d)$/, "$1-$2-$3-$4"))

            //特定列の文字長を調整して表示する
            //調整したい列番号
            var col_num = 2
            var book_nm = $(this).children('td').eq(col_num - 1).text();
            if (getLen(book_nm) > 26) {
                var cut_book_nm = book_nm.slice(0, 25);
                cut_book_nm += '...'
                $(this).children('td').eq(col_num - 1).text(cut_book_nm);
            }
            $(this).children('td').eq(col_num - 1).css({
                'font-size': '90%'
            });

            //調整したい列番号を格納する。（同縮尺）
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