var request = require("request");
var axios = require("axios");

api_key = 'RGAPI-fa2c03ca-6014-4a87-b445-580642b0fbea';

function champ_name(name){
  switch (name) {
      case 266:
        return "Aatrox"; // 챔피언 영어 이름
      case 412:
        return "Thresh";
      case 23:
        return "Tryndamere";
      case 79:
        return "Gragas";
      case 69:
        return "Cassiopeia";
      case 136:
        return "AurelionSol";
      case 13:
        return "Ryze";
      case 78:
        return "Poppy";
      case 14:
        return "Sion";
      case 1:
        return "Annie";
      case 202:
        return "Jhin";
      case 43:
        return "Karma";
      case 111:
        return "Nautilus";
      case 240:
        return "Kled";
      case 99:
        return "Lux";
      case 103:
        return "Ahri";
      case 2:
        return "Olaf";
      case 112:
        return "Viktor";
      case 34:
        return "Anivia";
      case 27:
        return "Singed";
      case 86:
        return "Garen";
      case 127:
        return "Lissandra";
      case 57:
        return "Maokai";
      case 25:
        return "Morgana";
      case 28:
        return "Evelynn";
      case 105:
        return "Fizz";
      case 74:
        return "Heimerdinger";
      case 238:
        return "Zed";
      case 68:
        return "Rumble";
      case 82:
        return "Mordekaiser";
      case 37:
        return "Sona";
      case 96:
        return "KogMaw";
      case 55:
        return "Katarina";
      case 117:
        return "Lulu";
      case 22:
        return "Ashe";
      case 30:
        return "Karthus";
      case 12:
        return "Alistar";
      case 122:
        return "Darius";
      case 67:
        return "Vayne";
      case 110:
        return "Varus";
      case 77:
        return "Udyr";
      case 89:
        return "Leona";
      case 126:
        return "Jayce";
      case 134:
        return "Syndra";
      case 80:
        return "Pantheon";
      case 92:
        return "Riven";
      case 121:
        return "Khazix";
      case 42:
        return "Corki";
      case 268:
        return "Azir";
      case 51:
        return "Caitlyn";
      case 76:
        return "Nidalee";
      case 85:
        return "Kennen";
      case 3:
        return "Galio";
      case 45:
        return "Veigar";
      case 432:
        return "Bard";
      case 150:
        return "Gnar";
      case 90:
        return "Malzahar";
      case 104:
        return "Graves";
      case 254:
        return "Vi";
      case 10:
        return "Kayle";
      case 39:
        return "Irelia";
      case 64:
        return "LeeSin";
      case 420:
        return "Illaoi";
      case 60:
        return "Elise";
      case 106:
        return "Volibear";
      case 20:
        return "Nunu";
      case 4:
        return "TwistedFate";
      case 24:
        return "Jax";
      case 102:
        return "Shyvana";
      case 429:
        return "Kalista";
      case 36:
        return "DrMundo";
      case 427:
        return "Ivern";
      case 131:
        return "Diana";
      case 63:
        return "Brand";
      case 113:
        return "Sejuani";
      case 8:
        return "Vladimir";
      case 154:
          return "Zac";
      case 421:
        return "RekSai";
      case 133:
        return "Quinn";
      case 84:
        return "Akali";
      case 163:
        return "Taliyah";
      case 18:
        return "Tristana";
      case 120:
        return "Hecarim";
      case 15:
        return "Sivir";
      case 236:
        return "Lucian";
      case 107:
        return "Rengar";
      case 19:
        return "Warwick";
      case 72:
        return "Skarner";
      case 54:
        return "Malphite";
      case 157:
        return "Yasuo";
      case 101:
        return "Xerath";
      case 17:
        return "Teemo";
      case 75:
        return "Nasus";
      case 58:
        return "Renekton";
      case 119:
        return "Draven";
      case 35:
        return "Shaco";
      case 50:
        return "Swain";
      case 91:
        return "Talon";
      case 40:
        return "Janna";
      case 115:
        return "Ziggs";
      case 245:
        return "Ekko";
      case 61:
        return "Orianna";
      case 114:
        return "Fiora";
      case 9:
        return "Fiddlesticks";
      case 31:
        return "ChoGath";
      case 33:
        return "Rammus";
      case 7:
        return "Leblanc";
      case 16:
          return "Soraka";
      case 26:
        return "Zilean";
      case 56:
        return "Nocturne";
      case 222:
        return  "Jinx";
      case 83:
        return "Yorick";
      case 6:
        return "Urgot";
      case 203:
        return  "Kindred";
      case 21:
        return "MissFortune";
      case 62:
        return  "MonkeyKing";
      case 53:
        return "Blitzcrank";
      case 98:
        return "Shen";
      case 201:
        return "Braum";
      case 5:
        return "XinZhao";
      case 29:
        return "Twitch";
      case 11:
        return "MasterYi";
      case 44:
        return "Taric";
      case 32:
        return "Amumu";
      case 41:
          return "Gangplank";
      case 48:
        return "Trundle";
      case 38:
        return "Kassadin";
      case 161:
        return "Velkoz";
      case 143:
        return "Zyra";
      case 267:
        return "Nami";
      case 59:
        return "JarvanIV";
      case 81:
        return "Ezreal";
      case 350:
        return "Yuumi";
      case 145:
        return "Kaisa";
      case 518:
        return "Neeko";
      case 142:
        return "Zoe";
      case 498:
        return "Xayah";
      case 517:
        return "Sylas";
      case 141:
        return "Kayn";
      case  516:
        return "Ornn";
      case 555:
        return "Pyke";
      case 164:
        return "Camille";
      case 246:
        return "Qiyana";
      case 497:
        return "Rakan";
      case 777:
        return  "Yone";
      case 876:
        return "Lillia";
      case 235:
        return "Senna";
      case 875:
        return "Sett";
      case 523:
        return "Aphelios";
      case 223:
        return "TahmKench";
      case 360:
        return "Samira";
      case 147:
        return"Seraphine";
      default:
        return -1;
  }
};

function spell_info(spell){
  switch (spell) {
      case 1:
          return "SummonerBoost";
      case 3:
          return "SummonerExhaust";
      case 4:
          return "SummonerFlash";
      case 6:
          return "SummonerHaste";
      case 7:
          return "SummonerHeal";
      case 11:
          return "SummonerSmite";
      case 12:
          return "SummonerTeleport";
      case 13:
          return "SummonerMana";
      case 14:
          return "SummonerDot";
      case 21:
          return "SummonerBarrier";
      case 30:
          return "SummonerPoroRecall";
      case 31:
          return "SummonerPoroThrow";
      case 32:
          return "SummonerSnowball";
      case 39:
          return "SummonerSnowURFSnowball_Mark";
      default:
          return -1;
  }
};

async function item_info(item){
    let info;
    await axios({
      url: `http://ddragon.leagueoflegends.com/cdn/10.25.1/data/ko_KR/item.json`,
      method: "GET"
    }).then((res) => {
      info = res.data.data[item];
    }).catch((err) => {
      console.error(err)
    })
    return info;
};

exports.search_user = async function(name){
  let player;
  n = encodeURIComponent(name);
  summoner = "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + n + '?api_key=' + api_key;
  console.log(summoner);
  await axios({
    url: `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${n}?api_key=${api_key}`,
    method: "GET"
  }).then((res) => {
    player = res.data;
  }).catch((err) => {
    console.error(err)
    player = "찾을수없음"
  })
  return player;
};

exports.user_tier = async function(id){
  let tier;
  await axios({
    url: `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${api_key}`,
    method: "GET"
  }).then((res) => {
    tier = res.data;
  }).catch((err) => {
    console.error(err)
  })
  return tier;
};

exports.user_match = async function(ac_id){
  let match;
  await axios({
    url: `https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/${ac_id}?api_key=${api_key}`,
    method: "GET"
  }).then((res) => {
    match = res.data;
  }).catch((err) => {
    console.error(err)
  })
  return match;
};

exports.champion_name = async function(name){
  return(champ_name(name));
};

exports.match_champ = async function(match_id){
  let champions = new Array();
  let champion = new Object();
  await axios({
    url: `https://kr.api.riotgames.com/lol/match/v4/matches/${match_id}?queue=420&api_key=${api_key}`,
    method: "GET"
  }).then((res) => {
    for(var i = 0; i < res.data.participants.length; i++){
      name = champ_name(res.data.participants[i].championId)
      champion = {playerId : res.data.participants[i].participantId, name};
      champions.push(champion);
    }
  }).catch((err) => {
    console.error(err)
  })
  return(champions);
};

exports.player_stat = async function(match_id, champ){
  let stat = new Object();
  let team1_kills = 0
  let team2_kills = 0
  let team_kills
  await axios({
    url: `https://kr.api.riotgames.com/lol/match/v4/matches/${match_id}?queue=420&api_key=${api_key}`,
    method: "GET"
  }).then((res) => {
    for(var i = 0; i < res.data.participants.length; i++){
        if(i < 5){
            team1_kills = team1_kills + res.data.participants[i].stats.kills;
        }else{
            team2_kills = team2_kills + res.data.participants[i].stats.kills;
        }
    }
    for(var i = 0; i < res.data.participants.length; i++){
        if(res.data.participants[i].championId == champ){
            if(i < 5){
                team_kills = team1_kills;
            }else{
                team_kills = team2_kills;
            }
        spell1 = spell_info(res.data.participants[i].spell1Id);
        spell2 = spell_info(res.data.participants[i].spell12d);
        stat = {team_kills : team_kills, gameDuration : res.data.gameDuration, spell1Id : spell1, spell2Id : spell2, playerId : res.data.participants[i].participantId, win : res.data.participants[i].stats.win, item0 : res.data.participants[i].stats.item0, item1 : res.data.participants[i].stats.item1, item2 : res.data.participants[i].stats.item2, item3 : res.data.participants[i].stats.item3, item4 : res.data.participants[i].stats.item4, item5 : res.data.participants[i].stats.item5, item6 : res.data.participants[i].stats.item6, kills : res.data.participants[i].stats.kills, deaths : res.data.participants[i].stats.deaths, assists : res.data.participants[i].stats.assists, largestMultiKill : res.data.participants[i].stats.largestMultiKill, champLevel : res.data.participants[i].stats.champLevel, goldEarned : res.data.participants[i].stats.goldEarned, totalMinionsKilled : res.data.participants[i].stats.totalMinionsKilled, neutralMinionsKilled : res.data.participants[i].stats.neutralMinionsKilled, visionWardsBoughtInGame : res.data.participants[i].stats.visionWardsBoughtInGame, wardsPlaced : res.data.participants[i].stats.wardsPlaced, wardsKilled : res.data.participants[i].stats.wardsKilled};
        break;
      }
    }
  }).catch((err) => {
    console.error(err)
  })
  return(stat);
};


exports.user_duo_match = async function(ac_id){
  let match;
  await axios({
    url: `https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/${ac_id}?queue=420&api_key=${api_key}`,
    method: "GET"
  }).then((res) => {
    match = res.data;
  }).catch((err) => {
    console.error(err)
  })
  return match;
};

exports.user_trio_match = async function(ac_id){
  let match;
  await axios({
    url: `https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/${ac_id}?queue=420&api_key=${api_key}`,
    method: "GET"
  }).then((res) => {
    match = res.data;
  }).catch((err) => {
    console.error(err)
  })
  return match;
};