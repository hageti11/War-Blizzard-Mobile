// ===== Firebase 設定 (無料の Spark プラン) =====
// README の手順で Firebase プロジェクトを作り、下の値を貼り付けてください。
// (Firebase の Web 設定値は公開されても問題ない設計です。守るのは firestore.rules と認証です)
// null のままだと「この端末だけのローカルモード」で動きます(開発・試用用)。
window.FB_CFG = {
  apiKey: "AIzaSyDO-q78bl_n_VkOIo1_JdafrEo5BW_Qjdk",
  authDomain: "war-blizzard-mobile.firebaseapp.com",
  projectId: "war-blizzard-mobile",
  appId: "1:365286772776:web:59560d220affd20b96651d"
};
/* 例:
window.FB_CFG = {
  apiKey: "AIza...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  appId: "1:123:web:abc"
};
*/
// 厳しいNAT環境で対戦できない場合は、無料のTURNサーバー情報をここに追加できます(任意)
// window.ICE_SERVERS = [{urls:'turn:example.com:3478',username:'user',credential:'pass'}];
