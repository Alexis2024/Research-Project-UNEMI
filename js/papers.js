// Call the dataTables jQuery plugin
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url:"https://sga.unemi.edu.ec/api?a=apiarticulos",
        success: function(data) {
            for(u in data){
                name = data[u]["nombre"]
                magazine = data[u]["revista"]
                year = data[u]["anio"]
                doi = data[u]["doi"]
                if (doi==""){
                    link=""
                } else {
                    link = "<a target ='_blank' href='"+doi+"'><i class='fa fa-link' aria-hidden='true'></i></a>"
                }
                ln ="<tr><td>"+name+"</td><td>"+magazine+"</td><td>"+year+"</td><td>"+doi+"</td></tr>"
                $(ln).appendTo("#dataTable tbody")
            }
            $('#dataTable').DataTable();
        }
    });
});
