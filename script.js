const arr = [
      {
            userImage: 'https://plus.unsplash.com/premium_photo-1691784778805-e1067ac42e01?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8',
            userName: 'Asha',
            profession: 'Doctor',
            skills: 'Ortho, Gyno, ENT, Surgery',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero hic enim inventore ea aliquid officiis vel explicabo voluptate suscipit culpa?'
      },
      // {
      //       userImage: 'https://plus.unsplash.com/premium_photo-1691784781482-9af9bce05096?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8',
      //       userName: 'Kriti',
      //       profession: 'Software Engineer',
      //       skills: 'JavaScript, React, MogoDB, NodeJs, Express',
      //       description: 'A full-stack engineer is a high-level software engineer who works to design, test, and implement various software applications. They create software, applications, and scalable web services, whilst also providing leadership for coding teams. '  
      // },
      {
            userImage: 'https://plus.unsplash.com/premium_photo-1689562473471-6e736b8afe15?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU0fHx8ZW58MHx8fHx8',
            userName: 'Vicky',
            profession: 'Mechanical Engineer',
            skills: 'AutoCad, Designing, project managment, team work',
            description: 'manufacture, and evaluate mechanical devices, such as industrial machinery, heating, and cooling systems, transportation systems, robotics, and tools.'  
      },
      {
            userImage: 'https://plus.unsplash.com/premium_photo-1731385782662-0dcf644b6e25?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc4fHx8ZW58MHx8fHx8',
            userName: 'Guru Bhai',
            profession: 'Electronic Enginner',
            skills: 'Micro Eng, Circuts, Communication, Logic Gate',
            description: 'An Electronics Engineer designs, develops, tests, and maintains electronic systems and components, ensuring they meet performance specifications and safety requirements. '  
      },
]
let sum =''
arr.forEach( function(elm){
    sum+=`<div class="card">
            <div class="profile_pic">
                  <img src="${elm.userImage}" alt="">
            </div>
       <h2>${elm.userName}</h2>
       <p class="desegination">${elm.profession}</p>
    <div class="skills">
      <p>${elm.skills}</p>
    </div>
    <div class="description">${elm.description}</div>
    <hr>
    <div class="view_profile">
      <h4>View Profile</h4>
    </div>
      </div>`
})


document.querySelector('.container').innerHTML = sum;
