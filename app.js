// JavaScript source code

let n_cnt = 0;
let h_cnt = 0;
let city_cnt = 0;
let boss_cnt = 0;

//南海先生カウント変数
let n_upButton = document.getElementById("n_cntUp");
let n_downButton = document.getElementById("n_cntDown");
let n_up10Button = document.getElementById("n_cnt10Up");
let n_down10Button = document.getElementById("n_cnt10Down");
let n_currentCnt = document.getElementById("n_cnt");

//肥前くんカウント変数
let h_upButton = document.getElementById("h_cntUp");
let h_downButton = document.getElementById("h_cntDown");
let h_up10Button = document.getElementById("h_cnt10Up");
let h_down10Button = document.getElementById("h_cnt10Down");
let h_currentCnt = document.getElementById("h_cnt");

//城下町ボスカウント変数
let city_upButton = document.getElementById("city_cntUp");
let city_downButton = document.getElementById("city_cntDown");
let city_up10Button = document.getElementById("city_cnt10Up");
let city_down10Button = document.getElementById("city_cnt10Down");
let city_currentCnt = document.getElementById("city_cnt");

//高知城ボスカウント変数
let boss_upButton = document.getElementById("boss_cntUp");
let boss_downButton = document.getElementById("boss_cntDown");
let boss_up10Button = document.getElementById("boss_cnt10Up");
let boss_down10Button = document.getElementById("boss_cnt10Down");
let boss_currentCnt = document.getElementById("boss_cnt");

//ドロップ率計算用変数
let n_currendrop=document.getElementById("nankai_drop");
let h_currendrop=document.getElementById("hizen_drop");

//localStorage.clear();

//webstarageに値があるか確認
//南海先生webstarage
if(localStorage.getItem("str_n_cnt")!= null){
    //値があればwebstrageでカウント数読み込む
    n_cnt = Number(localStorage.getItem("str_n_cnt"));
    //ページに表示
    n_currentCnt.innerHTML = n_cnt;

}else{
    //値がなければ0をセット
    Number(localStorage.setItem("str_n_cnt", 0));
}
//肥前くんwebstarage
if(localStorage.getItem("str_h_cnt")!= null){
    //値があればwebstrageでカウント数読み込む
    h_cnt = Number(localStorage.getItem("str_h_cnt"));
    //ページに表示
    h_currentCnt.innerHTML = h_cnt;
}else{
    //値がなければ0をセット
    Number(localStorage.setItem("str_h_cnt", 0));
}
//城下町ボスwebstarage
if(localStorage.getItem("str_city_cnt")!= null){
    //値があればwebstrageでカウント数読み込む
    city_cnt = Number(localStorage.getItem("str_city_cnt"));
    //ページに表示
    city_currentCnt.innerHTML = city_cnt;
}else{
    //値がなければ0をセット
    Number(localStorage.setItem("str_city_cnt", 0));
}
//高知城ボスwebstarage
if(localStorage.getItem("str_boss_cnt")!= null){
    //値があればwebstrageでカウント数読み込む
    boss_cnt = Number(localStorage.getItem("str_boss_cnt"));
    //ページに表示
    boss_currentCnt.innerHTML = boss_cnt;
}else{
    //値がなければ0をセット
    Number(localStorage.setItem("str_boss_cnt", 0));
}

//ドロップ率を計算して表示
n_drop=(n_cnt/city_cnt)*100;
n_currendrop.innerHTML = n_drop.toFixed(2);
h_drop=(h_cnt/boss_cnt)*100;
h_currendrop.innerHTML = h_drop.toFixed(2);

//南海先生ドロップ率計算+webstarage保存
function calc_nDrop(){
    n_drop=(n_cnt/city_cnt)*100;
    n_currendrop.innerHTML = n_drop.toFixed(2);
    //localStorageにstr_n_cntという名前でn_currentCntの変数を保存
    localStorage.setItem("str_n_cnt", n_currentCnt.innerHTML);
    //localStorageにstr_city_cntという名前でcity_currentCntの変数を保存
    localStorage.setItem("str_city_cnt", city_currentCnt.innerHTML);
}

//肥前くんドロップ率計算+webstarage保存
function calc_hDrop(){
    h_drop=(h_cnt/boss_cnt)*100;
    h_currendrop.innerHTML = h_drop.toFixed(2);
    //localStorageにstr_h_cntという名前でh_currentCntの変数を保存
    localStorage.setItem("str_h_cnt", h_currentCnt.innerHTML);
    //localStorageにstr_boss_cntという名前でboss_currentCntの変数を保存
    localStorage.setItem("str_boss_cnt", boss_currentCnt.innerHTML);
}

/*南海先生カウント*/
n_upButton.addEventListener("click", () => {
  n_cnt++;
  n_currentCnt.innerHTML = n_cnt;
  calc_nDrop();
});

n_downButton.addEventListener("click", () => {
  n_cnt--;
  if(n_cnt<0){
      n_cnt++;
  }else{
      n_currentCnt.innerHTML = n_cnt;
  }
  calc_nDrop();
});

n_up10Button.addEventListener("click", () => {
  n_cnt=n_cnt+10;
  n_currentCnt.innerHTML = n_cnt;
  calc_nDrop();
});

n_down10Button.addEventListener("click", () => {
  n_cnt=n_cnt-10;
  if(n_cnt<0){
      n_cnt=n_cnt+10;
  }else{
      n_currentCnt.innerHTML = n_cnt;
  }
  calc_nDrop();
});

/*肥前くんカウント*/
h_upButton.addEventListener("click", () => {
  h_cnt++;
  h_currentCnt.innerHTML = h_cnt;
  calc_hDrop();
});

h_downButton.addEventListener("click", () => {
  h_cnt--;
  if(h_cnt<0){
      h_cnt++;
  }else{
      h_currentCnt.innerHTML = h_cnt;
  }
  calc_hDrop();
});

h_up10Button.addEventListener("click", () => {
  h_cnt=h_cnt+10;
  h_currentCnt.innerHTML = h_cnt;
  calc_hDrop();
});

h_down10Button.addEventListener("click", () => {
  h_cnt=h_cnt-10;
  if(h_cnt<0){
      h_cnt=h_cnt+10;
  }else{
      h_currentCnt.innerHTML = h_cnt;
  }
  calc_hDrop();
});

/*城下町ボスカウント*/
city_upButton.addEventListener("click", () => {
  city_cnt++;
  city_currentCnt.innerHTML = city_cnt;
  calc_nDrop();
});

city_downButton.addEventListener("click", () => {
  city_cnt--;
  if(city_cnt<0){
      city_cnt++;
  }else{
      city_currentCnt.innerHTML = city_cnt;
  }
  calc_nDrop();
});

city_up10Button.addEventListener("click", () => {
  city_cnt=city_cnt+10;
  city_currentCnt.innerHTML = city_cnt;
  calc_nDrop();
});

city_down10Button.addEventListener("click", () => {
  city_cnt=city_cnt-10;
  if(city_cnt<0){
      city_cnt=city_cnt+10;
  }else{
      city_currentCnt.innerHTML = city_cnt;
  }
  calc_nDrop();
});

/*高知城ボスカウント*/
boss_upButton.addEventListener("click", () => {
  boss_cnt++;
  boss_currentCnt.innerHTML = boss_cnt;
  calc_hDrop();
});

boss_downButton.addEventListener("click", () => {
  boss_cnt--;
  if(boss_cnt<0){
      boss_cnt++;
  }else{
      boss_currentCnt.innerHTML = boss_cnt;
  }
  calc_hDrop();
});

boss_up10Button.addEventListener("click", () => {
  boss_cnt=boss_cnt+10;
  boss_currentCnt.innerHTML = boss_cnt;
  calc_hDrop();
});

boss_down10Button.addEventListener("click", () => {
  boss_cnt=boss_cnt-10;
  if(boss_cnt<0){
      boss_cnt=boss_cnt+10;
  }else{
      boss_currentCnt.innerHTML = boss_cnt;
  }
  calc_hDrop();
});
