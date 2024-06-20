function kadai1 (){//課題1:1~100までの整数について、それぞれを2乗した数を表示するプログラム
    let n = 1;//変数nを1と定義
    while(n <= 100){//nが100より大きくなるまでループ
        document.write(n**2 + "<br>");//nの2乗を表示した後改行
        n = n + 1;//変数nに1を足す
    }
}

function kadai2 (){//課題2:1~Nまでの整数のうち3の倍数だけを表示するプログラム
    let n = 0;//変数nを0と定義
    let a = document.getElementById("3hyouji").value;//htmlのテキストボックス（id=3hyouji）から入力された数字を変数a(javascript側)に入力
    while(n <= a){//aより大きくなるまでループ
        n = n + 3;//変数nに3を足す
        document.write(n + "<br>");//nを表示した後改行
    }
}

function kadai3(){//課題3:1~Nまでの整数のうち3の倍数だけを足し合わせた結果をアラート表示
    let n = document.getElementById("baisuu").value;//htmlのテキストボックス（id=baisuu）から入力された数字を変数n(javascript側)に入力
    while(n <= a){//aより大きくなるまでループ
    let plus = 1;//変数plusを1と定義（足す用の変数）
    let sum = 0;//変数sumを0と定義（合計値用の変数）
        while(plus <= n){//plusがnよりも大きくなるまでループ
            sum = sum + plus;//変数sum（合計値）に変数i（足す用）を足す
            plus = plus + 3;//変数plus（足す用）に1を足す
            }
    }
    alert(sum);//ループ後の変数sumをアラート
}

function kadai4(){//課題4:10階建てのTCUピラミッド
    for(n = 1; n <= 10; n = n + 1){//変数nを1と定義（初期値）、（条件：変数nが変数10以下の時）、for文内の処理が終わると変数nに1を足す
        for(a = 1; a <= n; a = a + 1){//変数aを1と定義（初期値）、（条件：変数nがa以下の時）、for文内の処理が終わると変数aに1を足す
            document.write("TCU")//TCUを表示
        }
        document.write("<br>");//1行分TCUを書き終えると改行
    }
}

function kadai5(){//課題5:N階建てのTCUピラミッド
    let n = document.getElementById("ntcu").value;//htmlのテキストボックス（id=ntcu）から入力された数字を変数n(javascript側)に入力
    for(a = 0; a <= n; a = a + 1){//変数aを1と定義（初期値）、（条件：変数aが入力された数以下の時）、for文内の処理が終わると変数aに1を足す
        for(b = 1; b <= a; b = b + 1){//変数bを1と定義（初期値）、（条件：変数bがa以下の時）、for文内の処理が終わると変数bに1を足す
          document.write("TCU");//TCUを表示
        }
        document.write("<br>");//1行分TCUを書き終えると改行
      }
}

function kadai6(){//課題6:N階建ての逆TCUピラミッド
    let n = document.getElementById("retcu").value;//htmlのテキストボックス（id=retcu）から入力された数字を変数n(javascript側)に入力
    for(a = n; a >= 1; a = a - 1){//変数aをnと定義（初期値）、（条件：変数aが1以上の時）、for文内の処理が終わると変数aから1を引く
        for(b = 1; b <= a; b = b + 1){//変数bを1と定義（初期値）、（条件：変数bがa以下の時）、for文内の処理が終わると変数bに1を足す
          document.write("TCU");//TCUを表示
        }
        document.write("<br>");//1行分TCUを書き終えると改行
    }
}

function kadai7(){//課題7:テキストボックスに入力された数をnとした時、n以下の素数を全て表示する
    let n = document.getElementById("sosuu").value;//htmlのテキストボックス（id=sosuu）から入力された数字を変数n(javascript側)に入力
    document.write(2 + "<br>");//nは2以上と設定しており、n以下の素数には2が確定で入るため、先に2を表示
    for(a = 2; a <= n; a = a + 1){//変数aを2と定義（初期値）、（条件：変数aがn以下の時）、for文内の処理が終わると変数aに1を足す
        for(b = 2; b < a; b = b + 1){//変数bを2と定義（初期値）、（条件：変数bがaより小さい時）、for文内の処理が終わると変数bに1を足す
            if(a % b == 0){//aとbの商が0の時
            break;//ループから脱出
            }else if(a - 1 == b){//1と自身以外で約数が存在しなかった時
            document.write(a +"<br>");//aを表示した後改行
            break;//ループから脱出
            }
        }
    }
}