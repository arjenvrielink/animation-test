var image = $("#image"),
    title = $("#title"),
    startBtn = $("#start"),
    stopBtn = $("#stop"),
    resetBtn = $("#reset"),
    speed = $("#speed"),
    nr = 1,
    intervalId;

var newImage = function () {
    console.log(nr);    
    title.html(nr);
    image.attr('src', "http://placehold.it/412x512.png&text=" + nr);
    nr++;
}

var animate = function () {
  intervalId = setInterval(newImage, speed.val());
  console.log(intervalId);
  setTimeout(function () {
    clearInterval(intervalId);
  }, 10000);
}

startBtn.click(animate);
stopBtn.click(function () {clearInterval(intervalId);});
resetBtn.click(function () {nr = 0; newImage();})
