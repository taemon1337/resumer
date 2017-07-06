(function () {
  let results = document.getElementById('results');
  let form = document.getElementById('form');
  let selectsize = document.getElementById('selectSize');
  let sizeinput = document.getElementById('sizeInput');

  function _arrayBufferToString(buf) {
    return String.fromCharCode.apply(null, buf);
  }

  function _arrayBufferToBase64( buffer ) {
      var binary = '';
      var bytes = new Uint8Array( buffer );
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
          binary += String.fromCharCode( bytes[ i ] );
      }
      return window.btoa( binary );
  }

  function createResultDiv (title) {
    var message = document.createElement('div');
    message.className = 'column';

    message.wrapper = document.createElement('div');
    message.wrapper.className = 'message';
    message.wrapper.style.height = '400px;'
    message.header = document.createElement('div')
    message.header.className = 'message-header';
    message.header.style.overflow = 'auto';
    message.header.innerHTML = title;
    message.header.delete = document.createElement('button')
    message.header.delete.className = 'delete'
    message.header.delete.style.position = 'relative';
    message.header.delete.style.right = '10px;';
    message.header.delete.addEventListener('click', function () { message.remove(); });
    message.body = document.createElement('div')
    message.body.className = 'message-body';
    message.body.style.height = (400 - message.header.style.height) + 'px';
    message.body.style.width = '100%';
    message.body.innerHTML = '<span class="fa fa-spinner fa-spin"></span>';

    message.wrapper.appendChild(message.header);
    message.header.appendChild(message.header.delete);
    message.wrapper.appendChild(message.body);
    message.appendChild(message.wrapper);

    return message;
  }

  function buildNotice (text) {
    var notice = document.createElement('div');
    notice.className = 'notification is-danger';
    notice.innerHTML += text;
    notice.style.overflow = 'auto';
    return notice;
  }

  function buildImage (data, type, formdata) {
    var f = formdata.get('format').toString().split('/').pop();
    var a = document.createElement('a');
    a.setAttribute('target', '_blank');
    a.setAttribute('href', data);
    a.setAttribute('download', formdata.get('url') + '.' + f);
    var obj = document.createElement('img');
    obj.setAttribute('src', data)
    a.appendChild(obj);
    return a;
  }
  
  function buildObject (data, type, formdata) {
    var obj = document.createElement('object');
    obj.setAttribute('type', type)
    obj.setAttribute('data', data)
    obj.setAttribute('toolbar', '0')
    obj.setAttribute('statusbar', '0')
    obj.setAttribute('messages', '0')
    obj.setAttribute('navpanes', '0')
    // obj.style.float = 'left';
    obj.style.height = '90%';
    obj.style.width = '100%';
    return obj;
  }

  function buildOutput (data, type, formdata) {
    switch (type) {
      case 'image/png':
      case 'image/jpg':
      case 'image/jpeg':
        return buildImage(data, type, formdata)
        break;
      default:
        return buildObject(data, type, formdata)
    }
  }

  selectsize.addEventListener('change', function (e) {
    sizeinput.value = e.target.value;
  })

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var div = createResultDiv(form.elements[0].value);
    results.appendChild(div);
    var fd = new FormData();
    var http = new XMLHttpRequest();
    http.responseType = 'arraybuffer';
    for (var i = 0; i < form.elements.length - 1; i++) {
      if (form.elements[i].name) {
        fd.append(form.elements[i].name, form.elements[i].value)
      }
    }
    http.open(form.method, form.action, true);
    // http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.onreadystatechange = function() {//Call a function when the state changes.
      if (http.readyState === 4) {
        div.body.innerHTML = '';
        var abuffer = new Uint8Array(this.response);
        if (http.status === 200) {
          var format = fd.get('format');
          var datauri = 'data:' + format + ';base64,' + _arrayBufferToBase64(abuffer);
          var out = buildOutput(datauri, format, fd);
          div.body.appendChild(out)
        } else {
          div.body.appendChild(buildNotice(_arrayBufferToString(abuffer)));
          setTimeout(function () {
            div.remove();
          }, 5000)
        }
      }
    }
    http.send(fd);
  })
})();