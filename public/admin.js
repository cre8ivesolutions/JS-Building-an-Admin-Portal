async function admin(){
    // retrieve a list of ooks from ServiceWorkerRegistrationdisplay list of book titiles
    const bookListResponse = await fetch ('http://localhost:3001/listBooks');
    const bookList = await bookListResponse.json();
    
    const ul = document.createElement("ul");
    
    bookList.forEach(book => {

        
        const li = document.createElement = ('li')
        li.textContent = book.title;

        const textInput = document.createElement('li');
        textInput.type = 'text';
        textInput.value = book.quantity;
        li.append(textInput);

        const button = document.createElement('input');
        button.type = 'button';
        button.value = 'save';
        button.addEventListener('click', async()=>{
            await fetch('http://localhost:3001/updateBook'), {
                method: 'PATCH',
                headers:{
                    'Content-Type': 'application.json',
                },
                body: JSON.stringify({
                    id: book.id,
                    quantity: textInput.value
                })
            }
        })
        li.append(button);
        ul.append(li)
    })
    // place text input next to each boook titilesgive each text input a value 
    // place submit button next to each bookwhen submit button clicked, retrieve quantity
}
admin()