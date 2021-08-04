let themeDots = document.getElementById('theme-dot')

	themeDots.addEventListener('click', function(){
        let theme = localStorage.getItem('theme')
        if(theme == 'light'){
        console.log('light to dark')
        setTheme('dark')
        }
        else if(theme == null){
            console.log('dark to light')
        setTheme('light')
        }
        else if(theme == 'dark'){
        console.log('dark to light')
        setTheme('light')
        }
	})

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
	}
	else{
		document.getElementById('theme-style').href = 'blue.css'
	}

	localStorage.setItem('theme', mode)
}