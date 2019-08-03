$("#print").on("click", function () {

    //the Action of print button
    $(function () {
        
        //印刷時にはテキストエリアの枠線を消す
        $("#textarea").css({
            "border": "none"
        });
        
        //印刷ダイアログの表示
        window.print();

        //テキストエリアの枠線を戻す
        $("#textarea").css({
            "border": "solid"
        });
    });
});