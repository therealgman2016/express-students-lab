const students = [
    {student: 'jimmy', pass: true},
    {student: 'tahlor', pass: false},
    {student: 'Gabe', pass: true}
]

module.exports = {
    getAll: function() {
        return students
    }
}