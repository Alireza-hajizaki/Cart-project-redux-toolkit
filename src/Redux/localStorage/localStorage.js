export function setToLocalStorage (data){
  localStorage.setItem('shopping_cart' , JSON.stringify(data))
}

export function getToLocalStorage (){
  if(typeof window !== 'undefined'){
    return(
        localStorage.getItem('shopping_cart') ?
            JSON.parse(localStorage.getItem('shopping_cart'))
            :
            []
    )
  }
}

