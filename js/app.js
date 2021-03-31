function IspisTablice()
{
	document.getElementById("table").innerHTML += '<tr><td>' + document.getElementById("NazivPredmeta").value + '</td><td>' + document.getElementById("Godina").value + '</td><td>' + document.getElementById("BrojECTS").value + '</td></tr>' ;
}