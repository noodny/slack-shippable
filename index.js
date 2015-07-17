var status = process.argv[0],
    statusText = status ? 'succeeded' : 'failed',
    color = status ? 'good' : 'danger',
    buildUrl = process.env.BUILD_URL,
    buildNumber = process.env.BUILD_NUMBER,
    project = process.env.PROJECT || process.env.REPO_NAME,
    branch = process.env.BRANCH,
    commit = process.env.COMMIT,
    text = '<' + buildUrl + '|Build #' + buildNumber + '> ' + statusText + ' for project ' + project + ' on branch ' + branch;

function getAuthor(commit) {
    return commit;
}

function getDate(commit) {
    return commit;
}

function getTitle(commit) {
    return commit;
}

function getFullMessage(commit) {
    return commit;
}

var message = {
    'username': 'Shippable',
    'fallback': text,
    'pretext': text,
    'color': color,
    'fields': [
        {
            'title': getAuthor(commit),
            'value': getDate(commit)
        },
        {
            'title': getTitle(commit),
            'value': getFullMessage(commit)
        }
    ]
};
