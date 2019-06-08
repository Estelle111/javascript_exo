window.onload=function(){
    let firstChecked = '1';
    let secondChecked = null;

    let headerConfig = {title: 'Select all', checked: false};

    let checkboxes = [
        {id: '1', title: 'cehcked', checked: false},
        {id: '2', title: 'Hello', checked: false},
        {id: '3', title: 'Coucou', checked: false},
        {id: '4', title: 'Bonjour', checked: false},
        {id: '5', title: 'Salut', checked: false},
        {id: '6', title: 'Ciao', checked: false},
        {id: '7', title: 'Bye', checked: false},
        {id: '8', title: 'Salud', checked: false},
        {id: '9', title: 'Tchin', checked: false},
        {id: '10', title: 'Hep', checked: false},
    ]

    function displayTodo(){
        let todos = document.querySelector('.inbox');

        if(todos) todos.remove()

        let inbox = document.createElement('div');
        inbox.className = 'inbox';

        let header = document.createElement('div');
        header.classList.add('allItems');
        header.classList.add('item');

        let headerInput = document.createElement('input');
        headerInput.setAttribute('type', 'checkbox');
        headerInput.addEventListener('click', checkAll);

        let headerParagraphe = document.createElement('p');
        headerParagraphe.textContent = headerConfig.title

        if(headerConfig.checked) headerInput.checked = true
        else headerInput.checked = false 

        let form = document.createElement('form');

        let formText = document.createElement('input');
        formText.setAttribute('type', 'text');
        formText.setAttribute('name', 'todoName');

        let formSubmit = document.createElement('input')
        formSubmit.setAttribute('type', 'submit');



        form.addEventListener('submit', addTodo);

        

        document.body.appendChild(inbox);
        inbox.appendChild(header);
        header.appendChild(headerInput)
        header.appendChild(headerParagraphe)
        header.appendChild(form)
        form.appendChild(formText)
        form.appendChild(formSubmit)
        
        
        checkboxes.forEach(checkbox => {
            let item = document.createElement('div');
            item.className = 'item';

            let close = document.createElement('div');
            close.className = 'close';
            close.textContent = 'X'

            input = document.createElement('input');
            input.setAttribute('type', 'checkbox');
            if(checkbox.checked){
                input.checked = true
                item.classList.add('checked');
            }else{
                input.checked = false
                item.classList.remove('checked');
            } 
            input.addEventListener('click', (e) => checkedOrUnchecked(e, checkbox.id));
            close.addEventListener('click', (e) => deleteTodo(e, checkbox.id));

            paragraph = document.createElement('p');
            paragraph.textContent = checkbox.title;
            
            inbox.appendChild(item);
            item.appendChild(input);
            item.appendChild(paragraph); 
            item.appendChild(close); 

        });
    }

    function checkedOrUnchecked(e, id){
        if(e.shiftKey){
            secondChecked = id
            const firstIndex = checkboxes.findIndex(check => check.id === firstChecked)
            const secondIndex = checkboxes.findIndex(check => check.id === secondChecked)
            for(let i = firstIndex; secondIndex >= i; i ++){
                checkboxes[i].checked = true
            }
        }else{
            firstChecked = id
            secondChecked = null
            const index = checkboxes.findIndex(check => check.id === id)
            checkboxes[index].checked = e.target.checked
        }
        displayTodo()
    }

    function addTodo(e){
        e.preventDefault();
        console.log(e.target.todoName.value)
        checkboxes.push({id: Math.random(), title: e.target.todoName.value, checked: false})
        displayTodo()
    }

    function deleteTodo(e, id){
        const index = checkboxes.findIndex(check => check.id === id)
        checkboxes.splice(index, 1)
        displayTodo()
    }

    function checkAll(e){
        headerConfig.checked = e.target.checked
        for(let i in checkboxes){
            checkboxes[i].checked = e.target.checked
        }
        displayTodo()
    }

    displayTodo()

    // let item;
    // let paragraph = document.querySelector('p');
    // let paragraphTab = [];
    // let inbox = document.createElement('div');
    // inbox.className = 'inbox';
    // document.body.appendChild(inbox);

    // checkboxes.forEach(checkbox => {
    //     item = document.createElement('div');
    //     checkbox.input = document.createElement('input');
    //     paragraph = document.createElement('p');
    //     paragraphTab.push(paragraph);

    //     paragraph.textContent = checkbox.title;
    //     checkbox.input.setAttribute('type', 'checkbox');
    //     item.className = 'item';
        
    //     inbox.appendChild(item);
    //     item.appendChild(checkbox.input);
    //     item.appendChild(paragraph);    
    // });
    // inbox.firstChild.classList.add('allItems');
    
    // function checkedOrUnchecked(){
    //     let inputTempos = document.querySelectorAll('input');
    //     console.log(inputTempos)
        
    //     for(i=0;i<inputTempos.length;i++){
    //         checkboxes[i].checked = inputTempos[i].checked;
    //         if(inputTempos[0].checked){
    //             paragraphTab[i].classList.add('checked');
    //         }else{
    //             if(inputTempos[i].checked){
    //                 console.log(i);
    //                 console.log(inputTempos[i].checked);
    //                 paragraphTab[i].classList.add('checked');
    //             }else{
    //                 paragraphTab[i].classList.remove('checked');
    //                 console.log(inputTempos[i].checked);
    //             }
    //         }
    //     };  
    // };

    // let inputs = document.querySelectorAll('input');
    // for(i=0; i<inputs.length; i++){
    //     inputs[i].addEventListener('click', checkedOrUnchecked);
    // };
    
    
        
    
    

    /* if(e.target.checked===true){
            paragraph.classList.add('checked');
        }else {
            paragraph.classList.remove('checked');
        } */
    
    /* const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
    const itemTitle = document.querySelector('.itemTitle');
    let lastChecked;
    function checkedOrUncheckedAll(e){
        console.log(e.target.checked)
        checkboxes.forEach(checkbox => {
            checkbox.checked = e.target.checked 
        });
        console.log(checkboxes);
    }
    function handleCheck(e){
        let inBetween = false;
        // check if they had the shift key down
        // AND check that they are checking it
        if(this.checked && e.shiftKey){
            // go ahead and do what we please
            // loop over every single checkbox
            checkboxes.forEach(checkbox => {
                console.log(checkbox) 
                if(checkbox === this || checkbox === lastChecked){
                    inBetween = !inBetween;
                }
                if(inBetween){
                    checkbox.checked = true;
                }
            });
        }
        lastChecked = this;
        console.log(this)
    }
    itemTitle.addEventListener('click', checkedOrUncheckedAll);
    checkboxes.forEach(checkbox => { checkbox.addEventListener('click', handleCheck)}); */
}