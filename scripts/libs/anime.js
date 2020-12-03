/* ========================================================
スクロールでトップに戻るボタンを表示
=========================================================*/
// スクロールして何ピクセルでアニメーションさせるか
var px_change = 600;
// スクロールのイベントハンドラを登録
window.addEventListener('scroll', function(e) {
	// 変化するポイントまでスクロールしたらクラスを追加
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if ( scrollTop > px_change ) {
		document.getElementById( "btn-backtotop" ).classList.add( "toTop" );
 
	// 変化するポイント以前であればクラスを削除
	} else {
		document.getElementById( "btn-backtotop" ).classList.remove( "toTop" );
	}
});

/* ========================================================
スクロールでSNSiconを表示
=========================================================*/
 
// スクロールして何ピクセルでアニメーションさせるか
var px_change1 = 400;
// スクロールのイベントハンドラを登録
window.addEventListener('scroll', function(e) {
	// 変化するポイントまでスクロールしたらクラスを追加
	var scrollTop1 = window.pageYOffset || document.documentElement.scrollTop1;
	if ( scrollTop1 > px_change1 ) {
		document.querySelector( ".left" ).classList.add( "invew" );
		document.querySelector( ".right" ).classList.add( "invew" );
 
	// 変化するポイント以前であればクラスを削除
	} else {
		document.querySelector( ".left" ).classList.remove( "invew" );
		document.querySelector( ".right" ).classList.remove( "invew" );
	}
});
 

