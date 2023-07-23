setInterval(() => {
  let date = new Date();
  let time = date.toLocaleString("default", {timeStyle: "medium"});
  document.title = time;
});