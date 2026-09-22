(function(){
  var PWD = '4lmAW0lf';
  var SK  = 'aw_lab_auth';

  function unlock(){
    document.getElementById('gate').style.display = 'none';
    document.getElementById('content').style.display = 'block';
  }

  function check(){
    var v = document.getElementById('pwd').value;
    if(v === PWD){
      sessionStorage.setItem(SK,'1');
      unlock();
    } else {
      document.getElementById('pwd-err').textContent = 'Contraseña incorrecta.';
      document.getElementById('pwd').value = '';
      document.getElementById('pwd').focus();
    }
  }

  if(sessionStorage.getItem(SK) === '1') unlock();

  document.getElementById('btn-enter').addEventListener('click', check);
  document.getElementById('pwd').addEventListener('keydown', function(e){
    if(e.key === 'Enter') check();
    if(e.key !== 'Enter') document.getElementById('pwd-err').textContent = '';
  });
})();
