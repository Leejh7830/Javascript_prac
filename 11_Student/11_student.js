function Student(n,a,nm) 
{
    this.name = n
    this.age = a
    this.number = nm
    
}

Student.prototype.registerInfo = function()
{
    alert(this.name+'학생 등록 완료')
}


// 객체를 생성하는 다양한 방법들
function Student2(n,a,nm) 
{
    return {
        name : n,
        age : a,
        number : nm,
        registerInfo : function() {
            alert(n+" 학생 등록")
        }
    }
}

function Student3(n,a,nm) 
{
    return new Student(n,a,nm)
}