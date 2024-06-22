document.addEventListener('contextmenu', function(e){
    e.preventDefault();
    alert('Sorry, Inspect option is desabled!')

});

document.addEventListener('keydown', function(e){

    // windows and linux
    if(e.key ==='F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.ctrlKey && e.key === 'u') || (e.ctrlKey && e.key === 'U'))
        {
            e.preventDefault()
            alert('Sorry, Inspect option is desabled!')
        }

    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        alert('Sorry, Inspect option is desabled!')
    }

    if (e.ctrlKey && e.shiftKey && e.key === 'j') {
        e.preventDefault();
        alert('Sorry, Inspect option is desabled!')
    }

    if(e.ctrlKey && e.shiftKey && e.key == 'C') {
        e.preventDefault();
        alert('Sorry, Inspect option is desabled!')
    }

    if(e.ctrlKey && e.shiftKey && e.key == 'c') {
        e.preventDefault();
        alert('Sorry, Inspect option is desabled!')
    }

    if (e.ctrlKey && e.shiftKey && e.key === 'i') {
        e.preventDefault();
        alert('Sorry, Inspect option is desabled!')
    }

    // mac os
    if (e.metaKey && e.altKey && e.key === 'I') {
        e.preventDefault();
        alert('Sorry, Inspect option is desabled!')
    }

    if (e.metaKey && e.altKey && e.key === 'i') {
        e.preventDefault();
        alert('Sorry, Inspect option is desabled!')
    }

    if (e.metaKey && e.altKey && e.key === 'J') {
        e.preventDefault();
        alert('Sorry, Inspect option is desabled!')
    }

    if (e.metaKey && e.altKey && e.key === 'j') {
        e.preventDefault();
        alert('Sorry, Inspect option is desabled!')
    }

    if (e.metaKey && e.altKey && e.key === 'C') {
        e.preventDefault();
        alert('Sorry, Inspect option is desabled!')
    }

    if (e.metaKey && e.altKey && e.key === 'c') {
        e.preventDefault();
        alert('Sorry, Inspect option is desabled!')
    }

    if (e.metaKey && e.key === 'U') {
        e.preventDefault();
        alert('Sorry, Inspect option is desabled!')
    }

    if (e.metaKey && e.key === 'u') {
        e.preventDefault();
        alert('Sorry, Inspect option is desabled!')
    }

});