// 클래스 만들기
// jq와 js 모두 쓰일 파일

class Student {
    constructor(이름, 성별, 번호) {
        this.이름 = 이름
        this.성별 = 성별
        this.번호 = 번호
    }
    toString() {
        return `'${this.이름}' 학생은 '${this.성별}'학생이며, '${this.번호}'번 이다.`
    }
}

let students = []