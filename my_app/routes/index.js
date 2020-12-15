var express = require('express');
var router = express.Router();

var model = require('../model/riot');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs', {
  });
});

router.post('/', async function(req, res){
  var paramName = req.body.name || req.query.name;
  console.log(paramName);
  if(paramName){
    player = await model.search_user(paramName);
    if(player == "찾을수없음"){
      console.log("플레이어 찾을 수 없음");
      res.redirect('/');
    }else{
      tier = await model.user_tier(player.id);
      if(tier[0]){
        trio = tier[0];
      }else{
        trio = "언랭"
      }
      if(tier[1]){
        solo = tier[1];
      }else{
        solo = "언랭"
      }
      match = await model.user_match(player.accountId);
      for(var i = 0; i < 10; i++){
        match_info = await model.match_champ(match.matches[i].gameId);
        match.matches[i].info = match_info;
      }
      for(var i = 0; i < 10; i++){
        stat = await model.player_stat(match.matches[i].gameId, match.matches[i].champion);
        match.matches[i].stat = stat;
      }
      for(var i = 0; i < 10; i++){
        champ_name = await model.champion_name(match.matches[i].champion);
        match.matches[i].champion = champ_name;
      }
      req.session.user =
      {
        player: player,
        trio: trio,
        solo: solo,
        match: match,
        authorized: true
      };
      res.redirect('/info');
    }
  }else{
    console.log("입력없음");
    res.redirect('/');
  }
});


module.exports = router;