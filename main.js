let title = document.querySelector('#titolo')
let textArea = document.querySelector('#articolo')
let  article = document.querySelector('.article')
let pubblisherBtn = document.querySelector('#creatArticle')
let date = new Date( )
let formatDate = date.toLocaleDateString();


pubblisherBtn.addEventListener('click', () => {    
    
  let title_text = document.createTextNode(title.value)
  let area_text = document.createTextNode( textArea.value)
  let dataText = document.createTextNode(formatDate)
   article.appendChild( document.createElement('h1')  ).appendChild(title_text)
  article.appendChild( document.createElement('p')).appendChild(area_text);
  article.appendChild( document.createElement('p')).appendChild(dataText)
   if ( title.value === ''){
    alert('campo obbligario!')
    article.innerHTML = ''
   };
   if ( textArea.value === ''){
    alert('campo obbligario!')
    article.innerHTML = ''
   }

   

  title.value= '';
  textArea.value= '';


   });

   


 