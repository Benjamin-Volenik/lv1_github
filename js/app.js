function IspisTablice()
{
	document.getElementById("table").innerHTML += '<tr><td>' + document.getElementById("NazivPredmeta").value + '</td><td>' + document.getElementById("Godina").value + '</td><td>' + document.getElementById("BrojECTS").value + '</td><td><img src="images/delete.png" onclick="DeleteImage(this)"></td><td><input type="checkbox" id="PredmetPolozen" name="PredmetPolozen" onclick="ColorChange(this)"></td></tr>' ;
}

function DeleteImage(r)
{
	document.getElementById("table").deleteRow(r.parentNode.parentNode.rowIndex);
}

function ColorChange(r)
{
	document.getElementById("table").rows[r.parentNode.parentNode.rowIndex].style.backgroundColor = "green";
}

function PretraziTablicu()
{
	  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("Pretraga");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}