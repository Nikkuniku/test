(function ($) {
            $.fn.MakeCheckButton = function () {
                this.each(function () {
                    //�`�F�b�N�{�^����t��������ԍ���ݒ�
                    var colnum = 3
                    //�f�[�^�̒���
                    //var DataLength = 4
                    $(this).children('td').eq(colnum).html('<input type="checkbox" id="check"/>')  
                    //$(this).eq(i + 1).children('td').eq(3).html('<input type="checkbox" id="check"/>')
                });
            };
        })(jQuery);