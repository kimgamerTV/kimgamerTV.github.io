var select = document.getElementsByName("Episode")[0]
var optionElement = document.createElement('option')
optionElement.value = "-1";
optionElement.innerHTML = "-";
optionElement.className = "test";
select.appendChild(optionElement);
for (var i = 0; i <= 30; i++)
{
    var optionElement = document.createElement('option')
    optionElement.value = ""+i;
    optionElement.innerHTML = ""+i;
    optionElement.className = "test";
    select.appendChild(optionElement);
}

var select = document.getElementsByName("Watch_Episode")[0]
var optionElement = document.createElement('option')
optionElement.value = "-1";
optionElement.innerHTML = "-";
select.appendChild(optionElement);
for (var i = 0; i <= 30; i++)
{
    var optionElement = document.createElement('option')
    optionElement.value = ""+i;
    optionElement.innerHTML = ""+i;
    optionElement.className = "test";
    select.appendChild(optionElement);
}