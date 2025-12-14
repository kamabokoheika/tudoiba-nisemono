/*menuが変わったときにいちいち打つのがめんどくさかったから作ったやつ*/

function menu() {
  menudiv = document.getElementsByClassName("menu")[0];
  menudiv.innerHTML = `
    <div class="menutitle">メニュー</div>
    ・<a href="https://maicra999.cc/" target="_blank">本家サイト</a><br>
    ・<a href="/index.html">ホーム</a><br>
    ・<a href="/join.html">参加方法</a><br>
    ・<a href="/rules.html">ルール</a><br>
    ・<a href="/faq.html">よくある質問</a><br>
    ・<a href="/vote.html">投票</a><br>
    ・<a href="/server.html">加盟サーバー</a><br>
    ・<a href="/wiki/index.html">wiki</a><br>
    ┣<a href="/wiki/kihon.html">基本的なやつ</a><br>
    ┣<a href="/wiki/command.html">コマンド</a><br>
    ┣<a href="/wiki/economy.html">経済関連</a><br>
    ┣<a href="/wiki/db.html">構造物&ﾊﾞｲｵｰﾑ関連</a><br>
    ┣<a href="/wiki/enchant.html">エンチャント関連</a><br>
    ┗<a href="/wiki/other.html">その他</a><br>
    ・<a href="https://map.maicra999.cc/" target="_blank">マップ</a><br>
  `;
}