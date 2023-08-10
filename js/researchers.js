// Call the dataTables jQuery plugin
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url:"https://sga.unemi.edu.ec/api?a=apiinvestigadores",
        success: function(data) {
            for(i in data){
                name = data[i]["nombrecompleto"]
                m = data[i]["correoinstitucional"]
                email = "<a href='mailto:"+m+"?subject=Contactar'>"+m+"<a/>"
                orcid = data[i]["orcid"]
                if (orcid==""){
                    link=""
                } else {
                    link = "<a target ='_blank' href='"+orcid+"'><i class='fa fa-link' aria-hidden='true'></i></a>"
                }
                ln ="<tr><td>"+name+"</td><td>"+email+"</td><td>"+link+"</td></tr>"
                $(ln).appendTo("#dataTable tbody")
            }
            $('#dataTable').DataTable();
        }
    });
});
