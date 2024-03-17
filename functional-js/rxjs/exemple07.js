const { XMLHttpRequest} = require('xmlhttprequest');
const { ajax } = require('rxjs/ajax');
const { map, concatAll } = require('rxjs/operators');

ajax({
    createXHR: () => new XMLHttpRequest(),
    url: 'https://api.github.com/users/gabrielDpadua21/repos'
})
    .pipe(
        map(resp => JSON.parse(resp.xhr.responseText)),
        concatAll(),
        map(repo => `Repo: ${repo.full_name}, Lang: ${repo.language}`)
    )
    .subscribe(console.log)


