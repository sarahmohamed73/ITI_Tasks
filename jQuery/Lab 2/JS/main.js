$.ajax({
  url: "https://jsonplaceholder.typicode.com/posts?userId=1&userId=2",
  success: function (resposive) {
    for(let item in resposive){
      $('tbody').append(`
      <tr>
        <td>${resposive[item].id}</td>
        <td>${resposive[item].title}</td>
        <td>${resposive[item].body}</td>
      </tr>
    `);
    }
  }
})