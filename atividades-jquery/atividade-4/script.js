
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = $("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady(id, idVideo) {
   player = new YT.Player(id, {
      height: '360',
      width: '640',
      videoId: idVideo,
      events: {
         'onReady': onPlayerReady,
         'onStateChange': onPlayerStateChange
      }
   });
}
const getMetadata = async (title, author, video_id, duration) => {
   const videoUrl = `https://www.youtube.com/watch?v=${video_id}`;
   const requestUrl = `http://youtube.com/oembed?url=${videoUrl}&format=json`;
   const result = await fetch(requestUrl);
   const resultJson = await result.json();
   const indexTabe = $("#tabs").tabs('option', 'active');
   let tabID = "";
   if (indexTabe === 0) {
      tabID = "video-1";
   }
   if (indexTabe === 1) {
      tabID = "video-2";
   }
   if (indexTabe === 2) {
      tabID = "video-3";
   }
   if (indexTabe === 3) {
      tabID = "video-4";
   }
   if (indexTabe === 4) {
      tabID = "video-5";
   }
   $(`#${tabID}`).find(".accordion").find("div:nth-child(2)").html(title);
   $(`#${tabID}`).find(".accordion").find("div:nth-child(4)").html(`<img src="${resultJson.thumbnail_url}">`);
   $(`#${tabID}`).find(".accordion").find("div:nth-child(6)").html(`${resultJson.author_name}`);
   $(`#${tabID}`).find(".accordion").find("div:nth-child(8)").html(duration);


   console.log(resultJson);

};
function onPlayerReady(event) {
   event.target.playVideo();
   
   const durationMin = parseInt(player.getDuration()/60);
   const durationSec = String(player.getDuration()%60);
   const duration = `${durationMin}: ${(durationSec).padStart(2, '0')}`;
   console.log(duration);
   const title = player.getVideoData().title;
   const author = player.getVideoData().author;
   const video_id = player.getVideoData().video_id;
   console.log(title);
   console.log(author);
   console.log(video_id);


   getMetadata(title, author, video_id, duration);



}
let done = false;
function onPlayerStateChange(event) {
   if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo, 6000);
      done = true;
   }
}
function stopVideo() {
   player.stopVideo();
}

$(document).ready(function () {


   $("#tabs").tabs({
      //collapsible: true,
      active: false,
      show: { effect: "blind", duration: 400 },
      hide: { effect: "blind", duration: 400 },
   });
   $(".accordion").accordion({
      collapsible: true,
      active: false,
      animate: 800,
      heightStyle: 'content'
   });

   $("#tabs").on("tabsactivate", function (event, ui) {

      const tabCurrentID = ui.newPanel.attr("id");
      const tabOldID = ui.oldPanel.attr("id");
      console.log(tabCurrentID);
      console.log(tabOldID)

      let urlVideo = "";
      let playerID = "";
      let oldPlayerID = "";




      switch (tabOldID) {
         case "video-1":
            oldPlayerID = "player1";
            break;
         case "video-2":
            oldPlayerID = "player2";
            break;
         case "video-3":
            oldPlayerID = "player3";
            break;
         case "video-4":
            oldPlayerID = "player4";
            break;
         case "video-5":
            oldPlayerID = "player5";
            break;
      }

      switch (tabCurrentID) {
         case "video-1":
            urlVideo = "RFP6AKQXX_I";
            playerID = "player1";
            break;
         case "video-2":
            urlVideo = "XS-N8KfZ5EU";
            playerID = "player2";
            break;
         case "video-3":
            urlVideo = "HrE6LjIwK84";
            playerID = "player3";
            break;
         case "video-4":
            urlVideo = "XwJEFzsqNoY";
            playerID = "player4";
            break;
         case "video-5":
            urlVideo = "XnEqtcWs1rQ";
            playerID = "player5";
            break;
      }

      console.log(oldPlayerID);

      $("iframe").remove();
      ui.oldPanel.prepend(`<div id="${oldPlayerID}"></div>`);
      onYouTubeIframeAPIReady(playerID, urlVideo);



   });


   setTimeout(() => {
      onYouTubeIframeAPIReady("player1", "RFP6AKQXX_I");
   }, 1000);

})
