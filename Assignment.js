function insertemp(){
        document.getElementById("tblemploye").style.display='';
    var name=document.getElementById("txtname").value;
    var address=document.getElementById("txtadd").value;
    var salary=document.getElementById("salary").value;
    var technology="";
    if(document.getElementById("chkhtml").checked == true){
        technology += "HTML"
    }
    if(document.getElementById("chkcss").checked == true){
        technology += "CSS"
    }
    if(document.getElementById("chkjs").checked == true){
        technology += "JS"
    }
    if(document.getElementById("chkreact").checked == true){
        technology += "REACT"
    }
    if(document.getElementById("chkangular").checked == true){
        technology += "ANGULAR"
    }
    var Qualification="";
    if(document.getElementById("rdoug").checked==true){
        Qualification += "UG"
    }
    else if(document.getElementById("rdopg").checked==true){
        Qualification += "PG"
    }
    else if(document.getElementById("rdophd").checked==true){
        Qualification += "PHD"
    }

    var table=document.getElementById("tblemploye");
            var x=table.insertRow(0);
            var e=table.rows.length-1;
            var rowcount=table.rows.length+1;
            var l=table.rows[e].cells.length;

            for (var c=0,m=l;c<m;c++){
                table.rows[0].insertCell(c);
                if(c==0){
                    table.rows[0].cells[c].innerHTML=name;
                }
                if(c==1){
                    table.rows[0].cells[c].innerHTML=address;
                }
                if(c==2){
                    table.rows[0].cells[c].innerHTML=salary;
                }
                if(c==3){
                    table.rows[0].cells[c].innerHTML=technology;
                }
                if(c==4){
                    table.rows[0].cells[c].innerHTML=Qualification;
                }

console.log(name,address,salary,technology,Qualification)            }
}