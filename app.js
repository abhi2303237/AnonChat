// UI Components
const name = document.getElementById('name'),
    form = document.querySelector('form');
const register_api = '<REGISTER API>'

const registerUser = function() {
    let username = name.value;
    fetch(register_api)
        .then((resp) => {
        if (resp.ok) {
                console.log('registered');
            }
        })
        .catch((err) => {
            console.log('something went wrong');
        });
        
    }
form.addEventListener('submit', registerUser);