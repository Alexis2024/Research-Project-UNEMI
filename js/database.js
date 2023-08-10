// Call the dataTables jQuery plugin
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url:"https://sga.unemi.edu.ec/api?a=apibasesindexadas",
        success: function(data) {
            for(o in data){
                name = data[o]["nombre"]
                type = data[o]["tipo"]
                ln ="<tr><td>"+name+"</td><td>"+type+"</td><</tr>"
                $(ln).appendTo("#dataTable tbody")
            }
            $('#dataTable').DataTable();
        }
    });
});
