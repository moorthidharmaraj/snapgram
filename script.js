// Specify the number of users you want to generate
const numUsers = 6;

// Make a GET request to the Random User Generator API
fetch(`https://randomuser.me/api/?results=${numUsers}`)
  .then((response) => response.json())
  .then((data) => {
    const users = data.results;

    users.forEach((user) => {
      const name = `${user.name.first} ${user.name.last}`;
      const email = user.email;
      const profileImageURL = user.picture.large;

      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Profile Image URL: ${profileImageURL}`);
      console.log("\n");
      //
     let usrUl=document.getElementById('userUl');
     let sideList=document.getElementById('sideList');
     let li= document.createElement('li');
     let sideLi=document.createElement('li');
     li.style.boxSizing='border-box';
     li.style.textAlign='center';
     li.style.width='100px';
     usrUl.appendChild(li);
     sideList.appendChild(sideLi);
      let img = document.createElement('img');
      img.style.height='85px';
      img.style.width='85px';
      img.style.borderRadius='50%';
      img.style.marginTop='15px';
      img.style.border='double 1px transparent';
      img.style.backgroundImage='linear-gradient(white, white), radial-gradient(circle at bottom left, #f00,yellow)';
      img.style.padding='2px';
      img.style.backgroundOrigin='border-box';
      img.style.backgroundClip='content-box,border-box';
      img.src=profileImageURL;
      img.width=50;
      li.appendChild(img);
      let uname=document.createElement('p');
      uname.innerText=user.name.first;
      uname.style.overflow='hidden';
      uname.style.textOverflow='ellipsis';
      li.appendChild(uname);
      //
    });
  })
  .catch((error) => console.error("Error fetching data:", error));

 
