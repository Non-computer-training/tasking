function loadAllScore() {
    return [{
        name: "张三",
        id: "TWA20190101",
        chinese: 95,
        english: 80,
        math: 95,
        programming: 80
    },
    {
        name: "小明",
        id: "TWA20190102",
        chinese: 50,
        english: 78,
        math: 86,
        programming: 56
    },
    {
        name: "小红",
        id: "TWA20190103",
        chinese: 73,
        english: 97,
        math: 85,
        programming: 88
    },
    {
        name: "小黑",
        id: "TWA20190104",
        chinese: 66,
        english: 63,
        math: 73,
        programming: 93
    }]
}

function showStudentScores(studentIds) {
    const studentScores = getStudentScores(studentIds);
    const summary = summaryStudentScoresTotal(studentScores);
    console.log(summary);
}

function getStudentScores(studentIds) {
    const studentInfo = loadAllScore();
    const SUBJECT_NUMBER = 4;
    const studentScores = studentIds.map(studentId => {
        const findStudentInfo = studentInfo.find(student => student.id === studentId);
        findStudentInfo.summary = findStudentInfo.chinese + findStudentInfo.english + findStudentInfo.math + findStudentInfo.programming;
        findStudentInfo.average = findStudentInfo.summary / SUBJECT_NUMBER;
        return findStudentInfo;
    });
    return studentScores;
}

function summaryStudentScoresTotal(studentScores) {
    const studentScoreSummarys = studentScores.map(studentScore => studentScore.summary);
    const totalAverage = studentScoreSummarys.reduce((sum, studentScoreSummary) => sum + studentScoreSummary) / studentScoreSummarys.length;
    const totalMax = Math.max(...studentScoreSummarys);
    const summary = { totalAverage: totalAverage, totalMax: totalMax };
    return summary
}

const studnetIds = ["TWA20190101", "TWA20190102"]
showStudentScores(studnetIds);

