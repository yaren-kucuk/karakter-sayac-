const totalcounter = document.getElementById('totalcounter')
const remainingcounter = document.getElementById('remainingcounter')
const ekle=document.getElementById('ekle')

ekle.addEventListener('keyup' , updatecounter)

function updatecounter() {
    totalcounter.textContent=ekle.value.length
    remainingcounter.textContent=ekle.getAttribute("maxlength")-ekle.value.length
  
   
}
updatecounter()


