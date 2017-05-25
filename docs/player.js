const GU = 0;
const CHOKI = 1;
const PA = 2;



let matches = 0;

function countup(){
  matches = matches + 1;
  rerutn matches;
}

//チョキ大好きマンに対するアクション

function actionAgainstChokiDaisukiman(){
  return GU;
}

//表か裏かマンに対するアクション
function actionAgainstOmoteUra(){
  const isEven = matches % 2 == 0;
  let result = PA;
  if (isEven){
    result GU;
  }
  return result;

}

//帰ってきた表か裏かマンに対するアクション
function actionAgainstOmoteUra2(){
  const isEven = matches % 3 == 0;
  let result = GU;
  if (isEven){
    result = CHOKI;
}
return result;
}

function actionAgainstRotation(){
    const toReturnChoki = matches % 3 == 0;
    const toReturnPa == matches % 3 == 1;
    let result = GU;

    if (toReturnChoki){
      result = CHOKI;
    }else if (toReturnPa){
      result = PA;
    }else{
      result = GU;
    }
    return result;
}
/*
対戦相手名前まとめ
チョキ大好きマン : fighter::choki-lover
表か裏かマン : fighter::odd-even
帰ってきた表か裏かマン : fighter::on-third
順番に出していくマン :  fighter::rotation
*/


/*function action(oppornent){
    console.log(oppornent);
    let result = GU;
    countup();
    if (oppornent == "fighter::choki-lover"){ 
      result = actionAgainstChokiDaisukiman();
}else if (oppornent == "fighter::odd-even"){
  result = actionAgainstOmoteUra();
}else if(oppornent == "fighter:::rotation"){
  result = actionAgainstRotation();
}else{
  result = actionAgainstOmoteUra2();
}
  
return result;

}*/




