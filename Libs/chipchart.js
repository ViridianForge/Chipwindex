
//This snippet here is where we actually render the table.

$(document).ready(function() {
  $('#chipcharttable').DataTable({
    "ajax": "Database/chartList.json",
    "order":[[2,"desc"]],
    "columns": [
      { "title": "Album" },
      { "title": "Artist" },
      { "title": "Release Date"}
    ]
    });
});
