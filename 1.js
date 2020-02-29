const data = {
  "name": "Arvy Renardi",
  "age": 25,
  "address":{
    "street": "Jalan Jati Indah 6 no. 2",
    "city": "Depok",
    "state": "Indonesia"
  },
  "hobbies": ["reading", "jogging", "push-up"],
  "is_married": false,
  "list_school":[
    {
      "name": "SD Charitas",
      "year_in": 2001,
      "year_out": 2007
    },
    {
      "name": "SMP Pangudi Luhur",
      "year_in": 2007,
      "year_out": 2010
    },
    {
      "name": "SMA Pangudi Luhur",
      "year_in": 2010,
      "year_out": 2013
    },
    {
      "name": "UPN Veteran Jakarta",
      "year_in": 2014,
      "year_out": 2019
    }
  ],
  "skills":[
    {
      "skill_name":"HTML5 & CSS3",
      "level":"Beginner"
    },
    {
      "skill_name":"JavaScript",
      "level":"Beginner"
    },
    {
      "skill_name":"Management",
      "level":"Beginner"
    },
    {
      "skill_name":"Analysis",
      "level":"Beginner"
    },
    {
      "skill_name":"QC 7 Tools",
      "level":"Beginner"
    },
    {
      "skill_name":"Microsoft Office (word, excel, visio, power point)",
      "level":"Advanced"
    },
    {
      "skill_name":"Boxing",
      "level":"Beginner"
    },
    {
      "skill_name":"English Language",
      "level":"Beginner"
    }
  ],
"interest_in_coding": true    
}

const dataJSON = JSON.stringify(data);

fetch('https:///jsonplaceholder.typicode.com/users')
      .then((resp) => resp.json())
      .then((json) => {
        console.log(dataJSON)
      })