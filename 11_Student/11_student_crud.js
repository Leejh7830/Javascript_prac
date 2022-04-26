window.onload = () => {
    let name = document.querySelector("#name")
    let age = document.querySelector("#age")
    let num = document.querySelector("#num")

    let create = document.querySelector("#create")
    let read = document.querySelector("#read")
    let update = document.querySelector("#update")
    let my_delete = document.querySelector("#delete")
    let consolelog = document.querySelector("#consolelog")

    let students = []

    create.onclick = function() {
        // 공백 예외처리
        if (name.value =="" || age.value=="" || num.value=="") {
            console.log("공백이 있습니다.")
        }


        // 중복방지 2가지 방법

        // 1번
        // for(let i=0; i<students.length; i++) 
        // {
        //     if(students[i].number == num.value) {
        //         console.log("중복 번호(1)")
        //         return
        //     }
        // }

        // 2번
        console.log(students.findIndex(function(a){return a.number == num.value}))
        //console.log(students.findIndex(a => a.number == num.value))
        if (students.length>0 && students.findIndex( a => a.number == num.value) != -1)
        {
            console.log("중복 번호(2)")
            return
        }
        students.push(new Student(name.value,age.value,num.value))
        //students.push(Student3(name.value,age.value,num.value))
    }
    // 번호로 조회
    read.onclick = function() {
        // for of 구문
       for(let item of students)  
       {
            if(item.number == num.value) 
            {
                console.log(`${item.number}번 학생은 ${item.name}이며, ${item.age}살 입니다.`)
                break;
            }
       }
    }

    update.onclick = function() {
        for (let item of students) {
            if (num.value == item.number) { 
                // 입력된 num이 객체의 번호와 같다면
                item.name = name.value
                item.age = age.value
                // 객체의 이름과 아이디를 입력된 이름과 아이디로 바꿈
            }
        }
    }
    // 삭제
    my_delete.onclick = function() {
        let idx = students.findIndex( a => a.number == num.value)
        if (idx != -1) {
            students.splice(idx,1)
        }
    }
    // 전체조회
    consolelog.onclick = function() {
        console.log(students)
    }

    // 객체 생성 테스트
    document.querySelector("#test").onclick = () => {
        let a = new Student('오은영',30,1)
        let b = Student3('라스푸틴',1000,2)
        let c = Student2('데드풀',50,3)
        a.registerInfo()
        b.registerInfo()
        c.registerInfo()
        console.log(a)
        console.log(b)
        console.log(c)

    }

}