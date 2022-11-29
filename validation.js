var validation = {
    "nom":{
      "bsonType":"string",
      "description":"nom"
    },
    "prenom":{
      "bsonType":"string",
      "description":"prenom"
    },
    "adresse.codePostal":{
      "bsonType":"int",
      "description":"code postal"
    },
    "adresse.ville":{
      "bsonType":"string",
      "description":"code postal"
    },
    "adresse.pays":{
      "bsonType":"string",
      "description":"code postal"
    },
     "age":{
      "bsonType":"int",
      "minimum": 15,
      "maximum": 27,
      "description":"code postal"
    },
    "status":{
      "enum":["Inscris","NonInscris" ],
      "description":"Inscription"
    },
    "notes":{
        "bsonType":"array",
        "minItems": 1,
        "maxItems": 3,
        "items":{
          "required":["matiere","note"],
          "bsonType":"object",
          "properties":{
            "matiere":{
              "bsonType":"string",
              "description":"nom de la matiere"
            },
            "note":{
              "bsonType":"int",
              "minimum":0,
              "maximum":20,
              "description": "note de l'etudiant" 
            }
          }
        }
      }
  }

  etudiants =[
    {
      "nom":"Yves",
      "prenom":"Julien",
      "adresse":{
        "codePostal": 59000,
        "ville": "Lille",
        "pays":"France"
      },
      "age":NumberInt(18),
      "status":"Inscris"
    },
    {
      "nom":"Jules",
      "prenom":"Verdes",
      "adresse":{
        "codePostal": 59200,
        "ville": "Tourcoing",
        "pays":"France"
      },
      "age":NumberInt(23),
      "status":"Inscris"
    }
  ]