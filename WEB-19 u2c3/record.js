// fill in javascript code here

document.querySelector("form").addEventListener("submit",myEvaluation)
function myEvaluation(){
    event.preventDefault()
    var name = document.querySelector("#name").value
    var id = document.querySelector("#employeeID").value
    var department = document.querySelector("#department").value
    var experience = document.querySelector("#exp").value
    var email = document.querySelector("#email").value
    var mbl = document.querySelector("#mbl").value


    var tr = document.createElement("tr")

    var td1 = document.createElement("td")
    var heading = document.createElement("h3")
    heading.innerText = name
     td1.append(heading)

    var td2 = document.createElement("td")
    var heading2 = document.createElement("h3")
    heading2.innerText = id
    td2.append(heading2)

    var td3 = document.createElement("td")
    var heading3 = document.createElement("h3")
    heading3.innerText = department
    td3.append(heading3)

    var td4 = document.createElement("td")
    var heading4 = document.createElement("h3")
    heading4.innerText = experience
    td4.append(heading4)


    var td5 = document.createElement("td")
    var heading5 = document.createElement("h3")
    heading5.innerText = email
    td5.append(heading5)


    var td6 = document.createElement("td")
    var heading6 = document.createElement("h3")
    heading6.innerText = mbl
    td6.append(heading6)


    var td7 = document.createElement("td")
    var itag = document.createElement("i")
    
    if(experience>5)
    {
        itag.innerText = "Senior"
    }
    else if(experience>1 && experience<6)
    {
        itag.innerText = "Junior"
    }
    else if(experience<=1)
    {
        itag.innerText = "Fresher"
    }
    td7.append(itag)


    var td8 = document.createElement("td")
    td8.innerText = "DELETE"
    td8.style.backgroundColor="rgb(16, 16, 181)"
    td8.style.color = "white"
    td8.style.cursor = "pointer"
    td8.addEventListener("click", deleteRow)
    

    tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
    document.querySelector("tbody").append(tr)


    

}
function deleteRow(){
    event.target.parentNode.remove()
}