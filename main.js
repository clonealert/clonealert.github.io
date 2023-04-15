document.getElementById('logonButton').addEventListener('click', function() {
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('logonPortal').style.display = 'block';
});

document.querySelector('#logonPortal form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('This is a mockup page. Logon functionality is not implemented.');
});

