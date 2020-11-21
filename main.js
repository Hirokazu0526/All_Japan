// $(window).on('load', function() {
//     // リストを非表示
//     $('ul.main_kv li').hide();
//     // 繰り返し処理
//     $('ul.main_kv li').each(function(i) {
//     // 遅延させてフェードイン
//     $(this).delay(500 * i).fadeIn(2000);
//     });
// });

var app = new Vue({
	el:"#app",
  data:{
  	groupA:{
        team1:"A.S.WAKABA A",
        team2:"SC TOKYO AXIS",
        team3:"阪神酒販Dees'TC",
        team4:"A.K Tipplar",
        result:["1位","2位","3位","4位"]
    },
  	groupB:{
        team1:"A.S.WAKABA A",
        team2:"SC TOKYO AXIS",
        team3:"阪神酒販Dees'TC",
        team4:"A.K Tipplar",
        result:["1位","2位","3位","4位"]
    }
  }
  
})
