window.onload = () => {
    const name = document.querySelector('#name')
    const gender = document.querySelector('#gender')
    const beonho = document.querySelector('#beonho')

    const print = document.querySelector('#print')
    const reset = document.querySelector('#reset')
    const printOrderBy = document.querySelector('#printOrderBy')
    const information = document.querySelector('#information')

    function resetInfo() {
        information.innerHTML = '' // 화면(div information) 리셋하는 함수
    }

    // onclick도 가능
    reset.addEventListener('click', () => {
        resetInfo() // 화면리셋
        students = [] // 배열리셋
    })

    print.onclick = () => {
        const student = new Student(name.value, gender.value, Number(beonho.value))
        let newStudentInfo = document.createElement('h1')
        newStudentInfo.textContent = student.toString() // h1태그만들고 그안에 텍스트 뭐넣을지 정하는것
        if(student.성별 == "남") 
        {
            newStudentInfo.style.backgroundColor = 'gray'
            newStudentInfo.style.color = 'cyan'
        } else
        {
            newStudentInfo.style.backgroundColor = 'yellow'
            newStudentInfo.style.color = 'orange'
        }
        information.appendChild(newStudentInfo)
        
    }
    printOrderBy.onclick = function() {
        const idx = students.findIndex(item => item.번호 === Number(beonho.value))
        if(idx != -1)
        {
            alert('번호 중복')
            return
        }

        resetInfo() // 화면리셋
        students.push(new Student(name.value, gender.value, Number(beonho.value)))

        students.sort((a,b) => a.번호-b.번호)

        for(let item of students) {
            console.log(item)
        }

        for(let i=0; i<students.length; i++) {
            let newStudentInfo = document.createElement('h1')
            newStudentInfo.textContent = students[i].toString()
            if(students[i].성별 == "남") {
                newStudentInfo.style.backgroundColor = 'springgreen'
                newStudentInfo.style.color = 'green'
            } else {
                newStudentInfo.style.backgroundColor = 'salmon'
                newStudentInfo.style.color = 'pink'
            }
            information.appendChild(newStudentInfo)
        }

    }


}