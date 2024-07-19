fetch('https://jsonplaceholder.typicode.com/posts')

.then(response => response.json())
    .then(data => data.forEach(pos => {

        var Api = document.getElementById('Api');
        var data = document.createElement('div');
        data.classList.add('post', 'col-md-6');
        data.innerHTML = `
        <div class = " pb-2 mb-4 border-bottom border-danger">
            <h2 class="text-danger" >${pos.title}</h2>
            <p> ${pos.body} </p>
        </div>
            `;
        Api.appendChild(data);
    }))