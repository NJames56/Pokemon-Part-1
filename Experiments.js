function myFuction() {
    let input, filter, ul, li, a, i, txtValue;

    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = document.getElementById("name");
    
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementById("name") [0];
        txtValue = a.textContent || a.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";}
        else { 
            li[i].style.display = "none";
        }

        }
    }


