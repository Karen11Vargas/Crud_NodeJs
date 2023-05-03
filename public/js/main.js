function confirmarDelte(id) {
  Swal.fire({
    icon: 'warning',
    title: 'Seguro que quieres incativar este registro ' + id + '?',
    showCancelButton: true,
    confirmButtonText: 'Confirmar',
  }).then((result) => {
    if (result.isConfirmed) {
      window.location = '/delete/' + id;
    }
  })
}


const id = document.getElementById("usuario");
id.value = "dsakdñas"

