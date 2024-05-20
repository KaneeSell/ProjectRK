var loginContainer = document.querySelector('.login-container');
var cadastroContainer = document.querySelector('.cadastro-container');
var menuContainer = document.getElementById('menu-container');
var usernameInput = document.getElementById('username');
var passwordInput = document.getElementById('password');

document.getElementById('cadastro-btn').addEventListener('click', function() {
  loginContainer.style.display = 'none';
  cadastroContainer.style.display = 'block';
});

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var username = usernameInput.value;
  var password = passwordInput.value;

  var storedUsers = parseCookie('users');

  // Mudar de !== para ===, volta a funcionar o login
  var user = storedUsers.find(function(user) {
    return user.username === username && user.password === password;
  });

  if (user) {
    alert('Login feito com sucesso!');
    window.location.href = "pagina2/pagina2.html";
  } else {
    alert('Usuário ou senha inválidos');
    usernameInput.value = ''; // Limpa o campo de usuário
    passwordInput.value = ''; // Limpa o campo de senha
  }
});

document.getElementById('cadastro-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var newUsername = document.getElementById('new-username').value;
  var newPassword = document.getElementById('new-password').value;

  var storedUsers = parseCookie('users') || [];
  var newUser = { username: newUsername, password: newPassword };
  storedUsers.push(newUser);
  createCookie('users', JSON.stringify(storedUsers));

  alert('Usuário cadastrado com sucesso!');
  cadastroContainer.style.display = 'none';
  loginContainer.style.display = 'block';
});

document.getElementById('voltar-login').addEventListener('click', function() {
  cadastroContainer.style.display = 'none';
  loginContainer.style.display = 'block';
});

document.getElementById('voltar-login-menu').addEventListener('click', function() {
  menuContainer.style.display = 'none';
  loginContainer.style.display = 'block';
});

function createCookie(name, value, days) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + value + expires + '; path=/';
}

function parseCookie(name) {
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(name + '=') == 0) {
      return JSON.parse(cookie.substring(name.length + 1, cookie.length));
    }
  }
  return null;
}

function addEvent() {
    var eventInput = document.getElementById("eventInput");
    var eventText = eventInput.value;
    if (eventText.trim() !== "") {
        var eventList = document.getElementById("eventList");
        var li = document.createElement("li");
        li.textContent = eventText;
        eventList.appendChild(li);
        eventInput.value = "";
    } else {
        alert("Por favor, insira um evento válido!");
    }
}
