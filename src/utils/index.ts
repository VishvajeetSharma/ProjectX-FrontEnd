import Swal from "sweetalert2"

export const showALert=(title:string='',text:string='',icon:any="success")=>{
 return  Swal.fire({  title,   text ,   icon   })
}

export const stroreData=(key:any,value:any)=>{
  const data=JSON.stringify(value)
  localStorage.setItem(key,data)
}