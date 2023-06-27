const students = [
    {name: "student a", graduation: true, commuteStatus: "off campus"},
    {name: "student b", graduation: false, commuteStatus: "on campus"},
    {name: "student c", graduation: false, commuteStatus: "commute"},
    {name: "student d", graduation: true, commuteStatus: "off campus"},
    {name: "student e", graduation: false, commuteStatus: "off campus"},
    {name: "student f", graduation: true, commuteStatus: "on campus"},
    {name: "student g", graduation: false, commuteStatus: "on campus"},
    {name: "student h", graduation: false, commuteStatus: "off campus"},
    {name: "student i", graduation: true, commuteStatus: "commute"},
    {name: "student j", graduation: false, commuteStatus: "commute"},
    {name: "student k", graduation: true, commuteStatus: "on campus"},
    {name: "student l", graduation: true, commuteStatus: "on campus"},
    {name: "student m", graduation: true, commuteStatus: "off campus"},
    {name: "student n", graduation: false, commuteStatus: "off campus"},
    {name: "student o", graduation: true, commuteStatus: "commute"},
    {name: "student p", graduation: true, commuteStatus: "off campus"},
    {name: "student q", graduation: false, commuteStatus: "commute"},
    {name: "student r", graduation: true, commuteStatus: "commute"},
    {name: "student s", graduation: true, commuteStatus: "commute"},
    {name: "student t", graduation: true, commuteStatus: "on campus"},
    {name: "student u", graduation: false, commuteStatus: "on campus"},
    {name: "student v", graduation: true, commuteStatus: "on campus"},
    {name: "student w", graduation: true, commuteStatus: "off campus"},
    {name: "student x", graduation: true, commuteStatus: "off campus"},
    {name: "student y", graduation: true, commuteStatus: "commute"},
    {name: "student z", graduation: false, commuteStatus: "off campus"},
];

module.exports = {
    getAll: function() {
      return students;
    },
};