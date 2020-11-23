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
  	groups:[
    {
      id:"1",
      groupName:"A",
      name1:" A.S. WAKABA A ",
      name2:" SC TOKYO AXIS ",
      name3:" 阪神酒販 Dee's TC ",
      name4:" A.K tippler ",
      rsl:"順位",
      rsl2:"1位",
      rsl3:"2位",
      rsl4:"3位",
      rsl5:"4位",
      scr1:"２１-１９ ２１-１８",//全角数字で入力
      scr2:"２１-１６ ２１-１７",
      scr3:"２１-１５ ２１-１４",
      scr4:"２１-１２ ２１-１３",
      scr5:"２１-１１ ２１-１０",
      scr6:"２１-０９ ２１-０８"
    },
    {
      id:"2",
      groupName:"B",
      name1:" teamE ",
      name2:" teamF ",
      name3:" teamG ",
      name4:" teamH ",
      rsl:"順位",
      rsl2:"2位",
      rsl3:"1位",
      rsl4:"3位",
      rsl5:"4位",
      scr1:"２１-１９ ２１-１８",//全角数字で入力
      scr2:"２１-１６ ２１-１７",
      scr3:"２１-１５ ２１-１４",
      scr4:"２１-１２ ２１-１３",
      scr5:"２１-１１ ２１-１０",
      scr6:"２１-０９ ２１-０８"    
    },
    {
      id:"3",
      groupName:"C",
      name1:" teamE ",
      name2:" teamF ",
      name3:" teamG ",
      name4:" teamH ",
      rsl:"順位",
      rsl2:"2位",
      rsl3:"1位",
      rsl4:"3位",
      rsl5:"4位",
      scr1:"２１-１９ ２１-１８",//全角数字で入力
      scr2:"２１-１６ ２１-１７",
      scr3:"２１-１５ ２１-１４",
      scr4:"２１-１２ ２１-１３",
      scr5:"２１-１１ ２１-１０",
      scr6:"２１-０９ ２１-０８"
    }
    ]
  }
})