import Swal from "sweetalert2"

export const showALert = (title: string = '', text: string = '', icon: any = "success") => {
 return Swal.fire({ title, text, icon })
}

export const confirmDeletion = (itemName: string = 'item') => {
  return Swal.fire({
    title: `Delete ${itemName}?`,
    text: `Are you sure you want to delete this ${itemName}? This action cannot be undone.`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it',
    cancelButtonText: 'Cancel',
    reverseButtons: true,
    focusCancel: true,
  }).then((result) => result.isConfirmed)
}

export const stroreData = (key: any, value: any) => {
  const data = JSON.stringify(value)
  localStorage.setItem(key, data)
}