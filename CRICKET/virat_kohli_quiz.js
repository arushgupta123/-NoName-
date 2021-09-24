//Creating an array shuffler
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
    
        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));
                    
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
        
    return array;
 }



//Preparing the question bank

console.log("question bank:")


var questionBank = {
    "questions": {
        "question1": {
            "question": "Which year was Virat Kohli born?",
            "options": {
                "1" : "1988",
                "2": "1989",
                "3": "1987",
                "4": "1986"
            }
        },

        "question2": {
            "question": "Virat Kohli holds the record for scoring 5th highest number of runs in T20. TRUE or FALSE?",
            "options": {
                "1": "TRUE",
                "2": "FALSE", //correct
                "3": "Do not know",
                "4": "Tough question"
            }            
        },

        "question3": {
            "question": "Virat Kohli holds the record for scoring 4th highest number of runs in a T20 calendar year. TRUE or FALSE?",
            "options": {
                "1": "TRUE",
                "2": "FALSE", //correct
                "3": "Do not know",
                "4": "I am baffled and blank! "
            }            
        },

        "question4": {
            "question": "Virat Kohli opened the batting on his India ODI debut v Sri Lanka, 2008. Who was his opening partner?",
            "options": {
                "1": "Gautam Gambhir",
                "2": "Sachin tendulkar",
                "3": "Rahul Dravid",
                "4": "Virender Sehwag"
            }            
        },

        "question5": {
            "question": "Kohli's first ODI hundred came in 2009 against Sri Lanka. Where was the match played?",
            "options": {
                "1": "Colombo",
                "2": "Kandy",
                "3": "Kolkata",
                "4": "Jaipur"
            }            
        },

        "question6": {
            "question": "Kohli started his World Cup journey with a century. Who were the opponents?",
            "options": {
                "1": "Australia",
                "2": "Bangladesh",
                "3": "Pakistan",
                "4": "England"
            }            
        },

        "question7": {
            "question": "Kohli holds the record of the most runs scored in a bilateral ODI series with 558 v South Africa in 2017/18. How many centuries did he score in the series            ",
            "options": {
                "1": "1",
                "2": "5",
                "3": "3", //correct
                "4": "2"
            }            
        },

        "question8": {
            "question": "Which year did Virat Kohli make his T20I debut?",
            "options": {
                "1": "2010", //correct
                "2": "2013",
                "3": "2008",
                "4": "2012"
            }            
        },

        "question9": {
            "question": "Which year did Kohli make One Day International debut?",
            "options": {
                "1": "2008",
                "2": "2009",
                "3": "2007",
                "4": "2010"
            }            
        },

        "question10": {
            "question": "In 2014, Virat Kohli became the co-owner of _______, a franchise in the Indian Super League",
            "options": {
                "1": "FC Goa",
                "2": "Chennaiyin FC",
                "3": "Bengaluru FC",
                "4": "Jamshedpur FC"
            }            
        },

        "question11": {
            "question": "What is the favourite shot of Virat Kohli? ",
            "options": {
                "1": "Cover Drive",
                "2": "Straight Drive",
                "3": "Flick",
                "4": "Leg glance"
            }            
        },

    }
}

