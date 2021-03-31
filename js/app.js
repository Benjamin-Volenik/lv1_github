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