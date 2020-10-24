import "./style.css"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import personFacade from "./personFacade.js"


//Fetch all persons
function showAllPersons() {
  personFacade.getAllPersons()
    .then(data => {
      const persons = data.all;
      const tableRows = persons.map(person => `
      <tr>
        <td>${person.id}</td>
        <td>${person.firstName}</td>
        <td>${person.lastName}</td>
        <td>${person.email}</td>
        <td>${person.address.street + " " + person.address.cityinfo.city}</td>  
      </tr>
    `)
      const tableRowsAsString = tableRows.join("");
      document.getElementById("tbody").innerHTML = tableRowsAsString;
    })
    .catch(err => {
      if (err.status) {
        err.fullError.then(e => {
          console.log(e.message)
          document.getElementById("error").innerHTML = e.message;
        })
      }
      else { console.log("Network error"); }
    })
};
//showAllPersons();

function showPersonsWithTel() {
  let num = document.getElementById("tel").value;
  personFacade.getPersonsByTel(num)
    .then(data => {
      const persons = data.all;
      const tableRows = persons.map(person => `
    <tr>
      <td>${person.id}</td>
      <td>${person.firstName}</td>
      <td>${person.lastName}</td>
      <td>${person.email}</td>
      <td>${person.address.street + " " + person.address.cityinfo.city}</td>  
    </tr>
  `)
      const tableRowsAsString = tableRows.join("");
      document.getElementById("tbody").innerHTML = tableRowsAsString;
    })
    .catch(err => {
      if (err.status) {
        err.fullError.then(e => {
          console.log(e.message)
          document.getElementById("error").innerHTML = e.message;
        })
      }
      else { console.log("Network error"); }
    })
}

document.getElementById("telBtn").addEventListener("click", function (e) {
  e.preventDefault();
  captionForPerson();
  showPersonsWithTel();
})


function showPersonsWithZip() {
  let zip = document.getElementById("zip").value;
  personFacade.getPersonsByZip(zip)
    .then(data => {
      const persons = data.all;
      const tableRows = persons.map(person => `
    <tr>
      <td>${person.id}</td>
      <td>${person.firstName}</td>
      <td>${person.lastName}</td>
      <td>${person.email}</td>
      <td>${person.address.street + " " + person.address.cityinfo.city}</td>  
    </tr>
  `)
      const tableRowsAsString = tableRows.join("");
      document.getElementById("tbody").innerHTML = tableRowsAsString;
    })
    .catch(err => {
      if (err.status) {
        err.fullError.then(e => {
          console.log(e.message)
          document.getElementById("error").innerHTML = e.message;
        })
      }
      else { console.log("Network error"); }
    })
}

document.getElementById("zipBtn").addEventListener("click", function (e) {
  e.preventDefault();
  captionForPerson();
  showPersonsWithZip();
})

function showPersonsWithStreetname() {
  let street = document.getElementById("street").value;
  personFacade.getPersonsByStreet(street)
    .then(data => {
      const persons = data.all;
      const tableRows = persons.map(person => `
    <tr>
      <td>${person.id}</td>
      <td>${person.firstName}</td>
      <td>${person.lastName}</td>
      <td>${person.email}</td>
      <td>${person.address.street + " " + person.address.cityinfo.city}</td>  
    </tr>
  `)
      const tableRowsAsString = tableRows.join("");
      document.getElementById("tbody").innerHTML = tableRowsAsString;
    })
    .catch(err => {
      if (err.status) {
        err.fullError.then(e => {
          console.log(e.message)
          document.getElementById("error").innerHTML = e.message;
        })
      }
      else { console.log("Network error"); }
    })
}

document.getElementById("streetBtn").addEventListener("click", function (e) {
  e.preventDefault();
  captionForPerson();
  showPersonsWithStreetname();
})



function showAddressWithEmail() {
  let email = document.getElementById("email").value;
  personFacade.getAddressByEmail(email)
    .then(data => {
      let info = `
    <tr>
      <td></td> 
      <td>${data[0].street}</td>
      <td>${data[0].additionalInfo}</td>
      <td>${data[0].cityinfo.zipCode}</td>
      <td>${data[0].cityinfo.city}</td>
       
    </tr>
  `
      //const tableRowsAsString = tableRows.join("");
      document.getElementById("tbody").innerHTML = info;
    })
    .catch(err => {
      if (err.status) {
        err.fullError.then(e => {
          console.log(e.message)
          document.getElementById("error").innerHTML = e.message;
        })
      }
      else { console.log("Network error"); }
    })
}

document.getElementById("emailBtn").addEventListener("click", function (e) {
  e.preventDefault();
  captionForAddress();
  showAddressWithEmail();
})




function showPersonsWithHobby() {
  let hobbyname = document.getElementById("hobby").value;
  personFacade.getPersonByHobbyName(hobbyname)
    .then(data => {
      const persons = data.all;
      const tableRows = persons.map(person => `
    <tr>
      <td>${person.id}</td>
      <td>${person.firstName}</td>
      <td>${person.lastName}</td>
      <td>${person.email}</td>
      <td>${person.address.street + " " + person.address.cityinfo.city}</td>  
    </tr>
  `)
      const tableRowsAsString = tableRows.join("");
      document.getElementById("tbody").innerHTML = tableRowsAsString;
    })
    .catch(err => {
      if (err.status) {
        err.fullError.then(e => {
          console.log(e.message)
          document.getElementById("error").innerHTML = e.message;
        })
      }
      else { console.log("Network error"); }
    })
}

document.getElementById("hobbyBtn").addEventListener("click", function (e) {
  e.preventDefault();
  captionForPerson();
  showPersonsWithHobby();
})


function showCountPeopleWithHobby() {
  let hobbyCount = document.getElementById("count").value;
  personFacade.countPersonByHobbyName(hobbyCount)
    .then(data => {
      let info = data.count;
      //const tableRowsAsString = tableRows.join("");
      document.getElementById("countText").innerHTML = "There are " + info +
        " people with this hobby";
    })
    .catch(err => {
      if (err.status) {
        err.fullError.then(e => {
          console.log(e.message)
          document.getElementById("error").innerHTML = e.message;
        })
      }
      else { console.log("Network error"); }
    })
}

document.getElementById("countBtn").addEventListener("click", function (e) {
  e.preventDefault();
  captionForPerson();
  showCountPeopleWithHobby();
})





//Add New Person
function addPerson() {
  let email = document.getElementById("userEmail").value;
  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  let id = document.getElementById("sbody").selectedIndex + 1;
  console.log("LOL0: " + id)
  let hobbies = document.getElementById(id).value;
  console.log("lol1" + hobbies)
  let singleHobby;
  let street = document.getElementById("userStreet").value;
  let additionalInfo = document.getElementById("additionalInfo").value;
  let zipCode = document.getElementById("zipCode").value;
  let city = document.getElementById("city").value;
  let phone = document.getElementById("phone").value;
  let desc = document.getElementById("desc").value;
  
  const cityinfo = {
    "zipCode": zipCode,
    "city": city
  }

  const address = {
    "street": street,
    "additionalInfo": additionalInfo,
    "cityinfo": cityinfo
  }

  const phones = {
    "number": phone,
    "description": desc
  }

  personFacade.getSingleHobbyName(hobbies)
  .then(data => {
    singleHobby = data;
    console.log("lol2" + singleHobby)
  
    const newPerson = {
      "email": email,
      "firstName": firstName,
      "lastName": lastName,
      "hobbies": [
        {
          "name": singleHobby.name,
          "link": singleHobby.link,
          "type": singleHobby.type,
          "description": singleHobby.description
        }
      ],
      "address": address,
      "phones": [
        {
          "number": phones.number,
          "description": phones.description
        }
      ]
    }
  
    personFacade.addPerson(newPerson)
    .catch(err => {
      if (err.status) {
        err.fullError.then(e => document.getElementById("error").innerHTML = e.msg)
      }
      else { console.log("Network Error") }
    });
  
  
  })
  
  
  
}


document.getElementById("savebtn").addEventListener("click", function (e) {
  e.preventDefault();
  addPerson();
})


//Fetch all persons
function showAllHobbies() {
  personFacade.getAllHobbies()
    .then(data => {
      const hobbies = data;
      const tableRows = hobbies.map(hobby =>
        `<option id="${hobby.id}">${hobby.name}</option>`
      )
      
      const tableRowsAsString = tableRows.join("");
      document.getElementById("sbody").innerHTML = tableRowsAsString;
    })
    .catch(err => {
      if (err.status) {
        err.fullError.then(e => {
          console.log(e.message)
          document.getElementById("error").innerHTML = e.message;
        })
      }
      else { console.log("Network error"); }
    })
};


showAllHobbies();

function captionForPerson() {
  document.getElementById("error").innerHTML = "";
  document.getElementById("caption").innerHTML = "Person";
  document.getElementById("capFirstName").innerHTML = "First name";
  document.getElementById("capLastName").innerHTML = "Last name";
  document.getElementById("capEmail").innerHTML = "Email";
  document.getElementById("capAddress").innerHTML = "Address";

}

function captionForAddress() {
  document.getElementById("error").innerHTML = "";
  document.getElementById("caption").innerHTML = "Address";
  document.getElementById("capFirstName").innerHTML = "Street";
  document.getElementById("capLastName").innerHTML = "Additional Info";
  document.getElementById("capEmail").innerHTML = "Zip Code";
  document.getElementById("capAddress").innerHTML = "City";
}
