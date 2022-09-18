const kodomAli = {
    name: 'kodom Ali',
    money: 5000,
    study: 'math',
    subjects: ['calculas', 'algebra', 'geomatry'],
    exam: function () {
        return this.name + 'is participating in an exam';

    },
    improveExam: function (subject) {
        this.exam();
        return `${this.name} is takeing improvement exam on ${subject}`
    },
    treatDay: function (amount,tips) {
        this.money = this.money - amount-tips;
        return this.money;
    }
}
const result = kodomAli.exam();
console.log(result);