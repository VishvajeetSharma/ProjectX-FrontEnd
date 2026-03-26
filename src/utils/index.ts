import Swal from "sweetalert2"

export const showALert = (title: string = '', text: string = '', icon: any = "success") => {
 return Swal.fire({ title, text, icon })
}

export const confirmAction = (message: string) => {
  return Swal.fire({
    title: 'Are you sure?',
    text: message,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'Cancel',
    reverseButtons: true,
    focusCancel: true,
  }).then((result) => result.isConfirmed);
};

export const stroreData = (key: any, value: any) => {
  const data = JSON.stringify(value)
  localStorage.setItem(key, data)
}