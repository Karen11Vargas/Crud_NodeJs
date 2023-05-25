function confirmarDelte(id){
    Swal.fire({
        icon: 'warning',
        text: 'Seguro que quieres incativar este registro '+ id +'?' ,
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
      }).then((result) => {
        if (result.isConfirmed) {
          window.location = '/delete/' +id;
        }
      })
}

function openModal(id, usuario, rol) {
  // Crear los elementos de la modal
  const modalContainer = document.createElement('div');
  modalContainer.className = 'modal';
  modalContainer.id = 'dynamicModal';

  const modalDialog = document.createElement('div');
  modalDialog.className = 'modal-dialog';

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  const modalHeader = document.createElement('div');
  modalHeader.className = 'modal-header modal-title fs-5';
  modalHeader.textContent = 'Actualizar Usuario';

  const modalBody = document.createElement('div');
  modalBody.className = 'modal-body col-10';

  
  //Crear los titulos de cada input
  const nombreTitulo = document.createElement('label')
  nombreTitulo.textContent= 'Nombre'

  const nombreRol = document.createElement('label')
  nombreRol.textContent= 'Rol'

  // Crear los campos de entrada (input)
  const nombreInput = document.createElement('input');
  nombreInput.type = 'text';
  nombreInput.className = 'form-control m-2';
  nombreInput.value = usuario;
  nombreInput.name = 'usuario';

    // Crear los campos de entrada (input)
    const idInput = document.createElement('input');
    idInput.type = 'hidden';
    idInput.value = id;
    idInput.name = 'id';

  const rolInput = document.createElement('select');
  rolInput.className = 'form-select m-2';
  nombreInput.name = 'rol';


  const option1 = document.createElement('option');
  option1.textContent = 'Usuario';
  option1.value = 'Usuario';


const option2 = document.createElement('option');
option2.value = 'Admin';
option2.textContent = 'Admin';


option1.selected = true;
option2.selected = true;


  const buttom = document.createElement('button');
  buttom.type = 'submit';
  buttom.className = 'btn btn-primary m-2';
  buttom.textContent = 'Actualizar';
  
  buttom.addEventListener('click', function() {
        const id = idInput.value;
      const usuario = nombreInput.value;
      const rol = rolInput.value;

      const url = '/edit/' + id  + '/' + usuario + '/' + rol

      fetch(url, {
        method: 'POST'
      })
      .then(response => {
        if (response.ok) {
          // La solicitud fue exitosa
          // Muestra un mensaje de éxito con SweetAlert
          Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'La actualización se realizó correctamente',
            confirmButtonText: 'Aceptar'
          }).then(() => {
            // Redirige a otra página después de cerrar el mensaje de éxito
            window.location.href = '/';
          });

          
        } else {
          // Hubo un error en la solicitud
          console.log(response);
        
          // Muestra un mensaje de error con SweetAlert
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un error al realizar la actualización',
            confirmButtonText: 'Aceptar'
          });
        }
      })
      .catch(error => {
        // Hubo un error de red u otro tipo de error
        console.log(error)
        // Realiza las acciones necesarias para manejar el error
      });
    });
  

  // Agregar los campos de entrada a la modal

  modalBody.appendChild(idInput);

  modalBody.appendChild(nombreTitulo);
  modalBody.appendChild(nombreInput);

  modalBody.appendChild(nombreRol);
  rolInput.appendChild(option1);

  rolInput.appendChild(option2);

  modalBody.appendChild(rolInput);

  modalBody.appendChild(buttom);


  const modalFooter = document.createElement('div');
  modalFooter.className = 'modal-footer';
  const closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.className = 'btn btn-secondary';
  closeButton.textContent = 'Cerrar';
  closeButton.setAttribute('data-bs-dismiss', 'modal');
  modalFooter.appendChild(closeButton);


  // Construir la estructura de la modal
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);
  

  modalDialog.appendChild(modalContent);

  modalContainer.appendChild(modalDialog);

  // Agregar la modal al documento
  document.body.appendChild(modalContainer);

  // Mostrar la modal (si estás utilizando Bootstrap)
  const modal = new bootstrap.Modal(modalContainer);
  modal.show();
}
