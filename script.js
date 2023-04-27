//(API_KEYには、”取得したAPIキーを記述)
connst API_KEY = "aec412cd28e1bc45783b476953d50643"

$(function(){
  $('#btn').on('click',function(){
    //入力された都市名でWebAPIに天気情報をリクエスト
    $.ajax({
      url:"https://api.openweathermap.org/data/2.5/weather?q=tokyo&units=metric&appid=aec412cd28e1bc45783b476953d50643" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      dateType:'jsonp',
    }).done(function (date){
      //通信成功
      //位置
      $('#place').text(date.name);
      //最高気温
      $('#temp_max').text(date.main.temp_max);
      //最低気温
      $('#temp_min').text(date.main.temp_min);
      //湿度
      $('#humidity').text(date.main.humidity);
      //風速
      $('#speed').text(date.wind.speed);
      //天気
      $('#weather').text(date.weather[0].main);
      //天気アイコン
      $('img').attr("src","http://openweathermap.org/img/w/" + date.weather[0].icon + ".png")
      $('img').attr("alt",date.weather[0].main);
    }).fail(function (date){
      //通信失敗
      alert('通信に失敗しました')
    });
  });
});