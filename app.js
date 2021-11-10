window.addEventListener('DOMContentLoaded',()=>{
    //正解のボタンを決定
    const targetKnife = Math.floor( Math.random() * 8)+1;

    //class knifeのボタンを取得
    const btns = document.querySelectorAll('.knife');

    //海賊のDIVを取得
    const kaizoku = document.querySelector('#kaizoku');

    //メッセージを初期化
    const message = document.querySelector('#message');
    message.innerHTML = "ボタンを押してみて";

    //ゲームの有効無効
    let gameMode = true;

    //各ボタンに動きを仕込む
    btns.forEach((btn)=>{
        btn.addEventListener('click',()=>{
            if(gameMode){
                if(btn.innerHTML == targetKnife){
                    //正解
                    message.innerHTML = "当たり〜";
                    kaizoku.classList.add("active");
                    gameMode = false;
                }else{
                    //不正解
                    message.innerHTML = "セーフ！";
                }
                btn.disabled = true;
            }
        })
    })
})