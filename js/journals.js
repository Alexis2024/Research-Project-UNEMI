// Call the dataTables jQuery plugin
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url:"https://sga.unemi.edu.ec/api?a=apirevistas",
        success: function(data) {
            for(a in data){
                name = data[a]["nombre"]
                type = data[a]["tipo"]
                code = data[a]["codigoissn"]
                l = data[a]["enlace"]
                if (l==""){
                    link=""
                } else {
                    link = "<a target ='_blank' href='"+l+"'><i class='fa fa-link' aria-hidden='true'></i></a>"
                }
                ln ="<tr><td>"+name+"</td><td>"+type+"</td><td>"+code+"</td><td>"+link+"</td></tr>"
                $(ln).appendTo("#dataTable tbody")
            }
            $('#dataTable').DataTable();
        }
    });
});
