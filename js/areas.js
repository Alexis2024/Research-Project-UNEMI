// Call the dataTables jQuery plugin
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url:"https://sga.unemi.edu.ec/api?a=apiareasconocimiento",
        success: function(data) {
            for(e in data){
                id = data[e]["codigo"]
                name = data[e]["nombre"]
                ln ="<tr><td>"+id+"</td><td>"+name+"</td></tr>"
                $(ln).appendTo("#dataTable tbody")
            }
            $('#dataTable').DataTable();
        }
    });
});
