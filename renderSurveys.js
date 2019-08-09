
function renderSurveys(surveys) {
    let multipleSurvey = surveys.map(function(survey){
        let singleSurvey = survey.fields.map(function(field){
            let content = function(field){
                if (field.type === 'radio'){
                    let options = field.options.map(function(option, index){
                        return `
                            <div class="form-check">
                                <input type="${field.type}" id="radio-${index}" class="form-check-input" ${index === 0 && "checked"}> 
                                <label class="form-check-label">${option}</label>
                            </div>
                        `
                    })
                    return `
                        ${options.join('')}
                    `
                }
                else if (field.type === 'text'){
                    return `
                        <div class="form-group">
                            <textarea class="form-control" rows="3"></textarea>
                        </div>
                    `
                }
                else {
                    return ''
                }
            }   
            return `
                <div class="field">
                    <h4>${field.label}</h4>
                    ${content(field)}
                </div>
            `
        })

        return `
            <form>
                <h2>${survey.title}</h2>
                <hr>
                ${singleSurvey.join('')}
                <button class="btn btn-primary">${survey.submitButtonText}</button>
            </form>
        `
    })

    return `
        <div class="text-center mt-5">
            <code>${JSON.stringify(surveys)}</code>
            <div id="surveys">
                ${multipleSurvey.join('')}
            </div>
        </div>
    `
}

function surveys() {
    var content = document.getElementById('content');

    var surveysAbstraction = [
        {
            title: "Movie Goer Survey",
            fields: [
                {
                    label: "Have you gone to the movies in the last month?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "On a scale of 1 to 5, Did you enjoy your last theater experience?",
                    type: "radio",
                    options: [
                        1,
                        2,
                        3,
                        4,
                        5
                    ]
                },
            ],
            submitButtonText: "Submit Survey"
        },
        {
            title: "DigitalCrafts Survey",
            fields: [
                {
                    label: "Are you currently enrolled in a DigitalCrafts class?",
                    type: "radio",
                    options: [
                        "yes",
                        "no"
                    ]
                },
                {
                    label: "In 3000 words or more, explain what's so great about Adam?",
                    type: "text"
                }
            ],
            submitButtonText: "I'm Done"
        }
    ]

    content.innerHTML = renderSurveys(surveysAbstraction);

}