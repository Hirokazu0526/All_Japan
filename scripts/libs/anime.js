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
 


