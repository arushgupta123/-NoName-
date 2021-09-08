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
                "2": "FALSE"
            }            
        },

        "question3": {
            "question": "Virat Kohli holds the record for scoring 5th highest number of runs in T20. TRUE or FALSE?",
            "options": {
                "1": "TRUE",
                "2": "FALSE"
            }            
        },

        "question3": {
            "question": "Virat Kohli opened the batting on his India ODI debut v Sri Lanka, 2008. Who was his opening partner?",
            "options": {
                "1": "Gautam Gambhir",
                "2": "Sachin tendulkar",
                "3": "Rahul Dravid",
                "4": "Virender Sehwag"
            }            
        },

        "question4": {
            "question": "Kohli's first ODI hundred came in 2009 against Sri Lanka. Where was the match played?",
            "options": {
                "1": "Colombo",
                "2": "Kandy",
                "3": "Kolkata",
                "4": "Jaipur"
            }            
        },

        "question5": {
            "question": "Kohli started his World Cup journey with a century. Who were the opponents?",
            "options": {
                "1": "Australia",
                "2": "Bangladesh",
                "3": "Pakistan",
                "4": "England"
            }            
        },

        "question6": {
            "question": "Kohli holds the record of the most runs scored in a bilateral ODI series with 558 v South Africa in 2017/18. How many centuries did he score in the series            ",
            "options": {
                "1": "1",
                "2": "5",
                "3": "3", //correct
                "4": "2"
            }            
        },

        "question7": {
            "question": "Which year did Virat Kohli make his T20I debut?",
            "options": {
                "1": "2010", //correct
                "2": "2013",
                "3": "2008",
                "4": "2012"
            }            
        },

        "question8": {
            "question": "Which year did Kohli make One Day International debut?",
            "options": {
                "1": "2008",
                "2": "2009",
                "3": "2007",
                "4": "2010"
            }            
        },

        "question9": {
            "question": "In 2014, Virat Kohli became the co-owner of _______, a franchise in the Indian Super League",
            "options": {
                "1": "FC Goa",
                "2": "Chennaiyin FC",
                "3": "Bengaluru FC",
                "4": "Jamshedpur FC"
            }            
        },

        "question10": {
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

var parent_questions_array = [
    questionBank.questions.question1,
    questionBank.questions.question2,
    questionBank.questions.question3,
    questionBank.questions.question4,
    questionBank.questions.question5,
    questionBank.questions.question6,
    questionBank.questions.question7,
    questionBank.questions.question8,
    questionBank.questions.question9,
    questionBank.questions.question10, 
]

var parent_questions_array_shuffler_int = Math.floor(Math.random() * parent_questions_array.length);

console.log(parent_questions_array_shuffler_int)

console.log(questionBank)


function startQuiz() {
    document.getElementsByTagName("button")[0].innerText = "NEXT >>";

    document.getElementById("questionHeading").innerHTML = parent_questions_array[parent_questions_array_shuffler_int].question

    console.log(parent_questions_array[parent_questions_array_shuffler_int].question)
}
