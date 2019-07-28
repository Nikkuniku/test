(function ($) {
            $.fn.MakeCheckButton = function () {
                this.each(function () {
                    //チェックボタンを付けたい列番号を設定
                    var colnum = 3
                    //データの長さ
                    //var DataLength = 4
                    $(this).children('td').eq(colnum).html('<input type="checkbox" id="check"/>')  
                    //$(this).eq(i + 1).children('td').eq(3).html('<input type="checkbox" id="check"/>')
                });
            };
        })(jQuery);