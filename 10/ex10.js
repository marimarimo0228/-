function kadai1 (){//課題1（配列の要素を順番にアラート表示するプログラム）
    let f = ["apple", 'banana', 'melon', 'orange','mango'];
    //配列の要素番号0から4まで順にアラート
    for(let i = 0; i < f.length; i = i + 1){
        alert(f[i]);
    } 
}

function kadai2 (){//課題2 （課題1の配列を逆順にアラート表示するプログラム）
    let f = ["apple", 'banana', 'melon', 'orange','mango'];
    //配列の要素番号4から0まで順にアラート
    for(let i = f.length - 1; i >= 0; i = i - 1){
        alert(f[i]);
    } 
}

function kadai3 (){//課題3（0~99までの配列を2乗してアラートするプログラム）
    //0から100までの配列を作成
    let n = [];
    for(let a = 0;a <= 100;a = a + 1){
        n.push(a);
    }

    //上記の配列をそれぞれを2乗して新たな配列を生成
    let b = 0;
    let nijou = [];
    for(let a = 0;a <= 100;a = a + 1){
        b = n[a]**2;
        nijou.push(b);
    }
    //最後の配列をアラート
    alert(nijou);
}

function kadai4(p_number) {//課題4（じゃんけんプログラム）
    let janken = ['ぐー','ちょき','ぱー',];//アラートを楽にするためのリスト
    let com = Math.floor( Math.random() * 3);//Math.random() でcom用の乱数作成

            //以下勝ち負けの判定プログラム
            //0=ぐー　1=ぱー　2=ちょき
            if (com == p_number) {
                alert("あなたの手は「"+ janken[p_number] + "」でCOMの手も「"+ janken[com] +"」なので、「あいこ」です")
            } else if(p_number == 0 && com == 1) {
                alert("あなたの手は「"+ janken[p_number] + "」でCOMの手は「"+ janken[com] +"」なので、あなたの「勝ち」");
            }else if(p_number == 1 && com == 2) {
                alert("あなたの手は「"+ janken[p_number] + "」でCOMの手は「"+ janken[com] +"」なので、あなたの「勝ち」");
            }else if(p_number == 2 && com == 0) {
                alert("あなたの手は「"+ janken[p_number] + "」でCOMの手は「"+ janken[com] +"」なので、あなたの「勝ち」");
            }else {
                alert("あなたの手は「"+ janken[p_number] + "」でCOMの手は「"+ janken[com] +"」なので、あなたの「負け」");
            }
}

function kadai5(){//課題5（素数判定）
    let numbers = [3177, 6191, 123, 7651, 57, 101, 9111, 1111];//判定する数字のリスト
    let sosuu = [];//素数の数を入れる配列
    for(a = 0; a < numbers.length; a = a + 1){//配列の要素分だけ繰り返す
    for (n = 2; n < numbers[a];n = n + 1){//2から判定する数字の値まで繰り返す
        if(numbers[a] % n == 0){//変数sosuuが変数nで割り切れる時（素数でない時）
            break;//ループから脱出
        }else if(n == numbers[a] -1){//変数nが変数sosuuから1引いた数と同じ時（素数の時）
            sosuu.push(numbers[a])//素数用の配列に追加
            break;//ループから脱出
        }//以上のif文に収まらない場合は存在しない
        }
    }
    alert(sosuu);//判定後の素数リストをアラート
}