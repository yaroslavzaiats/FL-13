function Student (name, email){
    const student = {
        name: name,
        email: email
    };
    const homeworkResults = [];
    this.getName = function (){
        return student.name;
    }
    this.getEmail = function(){
        return student.email;
    }
    this.addHomeworkResult = function(topic, success){
        let topicResult = {
            email: student.email,
            success: success
        };
        let newTopicResult = {
            topic: topic,
            results : [
                topicResult
            ]
        };
        let i;
        let j;
        let email = this.getEmail();
        if(homeworkResults.length === 0){
            homeworkResults.push(newTopicResult);
        } else{
            for (i = 0; i < homeworkResults.length; i++){
                if(homeworkResults[i].topic === topic){
                    for (j = 0; j < homeworkResults[i].results.length; j++){
                        if(homeworkResults[i].results[j].email === email){
                            console.log('Already rated');                                
                            break;
                        } else if(j === homeworkResults[i].results.length - 1){
                            homeworkResults[i].results.push(topicResult);
                            break;
                        }
                    }
                    break;
                } else if(i === homeworkResults.length - 1) {
                    homeworkResults.push(newTopicResult);
                    break;
                }   
            }
        }
    }
    this.getHomeworkResults = function () {
        let results = [];
        homeworkResults.forEach((el) => {
            let topicResult = {
                topic: el.topic,
                success: el.results[0].success
            }
            results.push(topicResult);
        })
        return results;
    }
}

function FronendLab (students, faildLimit){
    let studentsList = [];
    this.addHomeworkResults = function (homeworkResults){
        if (studentsList.length === 0) {
            for (let i = 0; i < students.length; i++){
                for (let j = 0; j < homeworkResults.results.length; j++){
                    if (students[i].email === homeworkResults.results[j].email){
                        let newStudent = new Student(students[i].name, students[i].email);
                        newStudent.addHomeworkResult(homeworkResults.topic, homeworkResults.results[j].success);
                        let result = newStudent.getHomeworkResults();
                        let ifNewStudent = {
                            name: students[i].name,
                            email: students[i].email,
                            result: result
                        };
                        studentsList.push(ifNewStudent);
                    }
                }
            }
        } else {
            for (let i = 0; i < students.length; i++){
                for (let j = 0; j < homeworkResults.results.length; j++){
                    if (students[i].email === homeworkResults.results[j].email){
                        let newStudent = new Student(students[i].name, students[i].email);
                        newStudent.addHomeworkResult(homeworkResults.topic, homeworkResults.results[j].success);
                        let result = newStudent.getHomeworkResults();
                        for (let y = 0; y < studentsList.length; y++){
                            if(studentsList[y].email === homeworkResults.results[j].email){
                                studentsList[y].result.push(result[0]);
                            }
                        }
                    }
                }
            }
        }
    }

    this.printHomeworkResults = function (){
        for (let i = 0; i < studentsList.length; i++){
            let studentData = `name: ${studentsList[i].name}, email: ${studentsList[i].email}`;
            let studentResults = studentsList[i].result;
            console.log(studentData);
            console.log(studentResults);
        }
    }

    this.printStudentsEligibleForTest = function (){
        let studentsProgress = [];
        //let studentsEligibleForTest = [];
        let count = 0;

        for (let i = 0; i < studentsList.length; i++){
            for (let j = 0; j < studentsList[i].result.length; j++){
                if(studentsList[i].result[j].success === false){
                    count++;
                }
            }
            studentsProgress.push(count);
            count = 0;
        }

        for (let i = 0; i < studentsProgress.length; i++){
            if(studentsProgress[i] <= faildLimit){
                let studentData = `name: ${studentsList[i].name}, email: ${studentsList[i].email}`;
                console.log(studentData);
            }
        }
    }
}