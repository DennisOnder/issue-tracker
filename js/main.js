window.addEventListener('DOMContentLoaded', fetchIssues);
document.getElementById('submit').addEventListener('click', function () {
    var issue = new Issue();
    if (localStorage.getItem('issues') == null) {
        console.log(issue);
        var issues = [];
        issues.push(issue);
        localStorage.setItem('issues', JSON.stringify(issues));
    } else {
        console.log(issue);
        var issues = JSON.parse(localStorage.getItem('issues'));
        issues.push(issue);
        localStorage.setItem('issues', JSON.stringify(issues));
    }
    fetchIssues();
});

function Issue() {
    this.id = chance.guid();
    this.description = document.getElementById('issue-description').value;
    this.severity = document.getElementById('issue-severity').value;
    this.assignedTo = document.getElementById('issue-assigned').value;
    this.status = "Open";
};

function fetchIssues() {
    var issues = JSON.parse(localStorage.getItem('issues'));
    var issuesList = document.getElementById('issue-list');
    issuesList.innerHTML = '';
    for (var i = 0; i < issues.length; i++) {
        var id = issues[i].id;
        var desc = issues[i].description;
        var severity = issues[i].severity;
        var assignedTo = issues[i].assignedTo;
        var status = issues[i].status;
        issuesList.innerHTML +=
            '<div class="well">' +
            '<h5>Issue ID: ' + id + '</h5>' +
            '<h6><span class="label label-info">Status: ' + status + '</span></h6>' +
            '<p>Description: ' + desc + '</p>' +
            '<p><span class="glyphicon glyphicon-time"></span>Severity: ' + severity + '</p>' +
            '<p><span class="glyphicon glyphicon-user"></span>Assigned By: ' + assignedTo + '</p>' +
            '<a href="#" onclick="setStatusClosed(\'' + id + '\')" class="btn btn-warning" id="close">Close</a>' +
            '<a href="#" onclick="deleteIssue(\'' + id + '\')" class="btn btn-danger" id="delete">Delete</a>' +
            '</div>' + 
            '<br>';
    }
}

function addIssue() {
    if (localStorage.getItem('issues') == null) {
        console.log(issue);
        var issues = [];
        issues.push(issue);
        localStorage.setItem('issues', JSON.stringify(issues));
    } else {
        console.log(issue);
        var issues = JSON.parse(localStorage.getItem('issues'));
        issues.push(issue);
        localStorage.setItem('issues', JSON.stringify(issues));
    }
    document.getElementById('input-form');
    fetchIssues();
}

function setStatusClosed(id) {
    var issues = JSON.parse(localStorage.getItem('issues'));
    for (var i = 0; i < issues.length; i++) {
        if (issues[i].id == id) {
            issues[i].status = 'Closed';
        }
    }
    localStorage.setItem('issues', JSON.stringify(issues));
    fetchIssues();
}

function deleteIssue(id) {
    var issues = JSON.parse(localStorage.getItem('issues'));
    for (var i = 0; i < issues.length; i++) {
        if (issues[i].id == id) {
            issues.splice(i, 1);
        }
    }
    localStorage.setItem('issues', JSON.stringify(issues));
    fetchIssues();
}
