(function ($) {
    $.fn.MakeCheckButton = function () {
        //.each���g������`
        this.each(function () {
            //�`�F�b�N�{�b�N�X��t��������ԍ�
            var col_num = 3
            $(this).children('td').eq(col_num - 1).html('<input type="checkbox" id="check"/>')
        });

        ////for�����g������`
        ////�e�[�u���̍s��
        //var DataLength = 6
        ////�`�F�b�N�{�b�N�X����������ԍ�
        //var col_num = 3
        //for (var i = 0; i < DataLength; i++) {
        //    this.eq(i).children('td').eq(col_num - 1).html('<input type="checkbox" id="check"/>')
        //}
    };
})(jQuery);