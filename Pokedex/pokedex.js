console.log(`hey its working`)

const content = document.querySelector(`.content`)

var newPokeList = []

var pokeNext = "http://pokeapi.co/api/v2/pokemon/?offset=0&limit=50";

var xhr = new XMLHttpRequest();
         


function readyState() {
    if (this.readyState === this.DONE) {
        
        var parseData = JSON.parse(this.responseText)
        
        pokeNext = parseData.next
        
        newPokeList = newPokeList.concat(parseData.results)
        
        console.log(newPokeList);
        
        xhr.removeEventListener("readystatechange",readyState)
        checkPokeNext();
    }
}


function checkPokeNext() {
    var data = null;
            console.log(pokeNext)
            if (pokeNext != null){
                xhr.open("GET", pokeNext);
                xhr.send(data);
                xhr.addEventListener("readystatechange", readyState)
            }else {
                var searchBar = document.querySelector('.pokeSearchBarinput') 
                var pokeList = newPokeList

                function sortList() {
                    $pokeContainer = $('.pokeContainer')
                    var searchInput = searchBar.value;
                    sortListval = [];
                    newPokeList.forEach(element => {
                        if(element.name.includes(searchInput)) {
                            sortListval.push(element);
                        }
                    });
                    console.log(sortListval);
                    pokeList = sortListval;
                    $pokeContainer.data("item-id",0);
                    $pokeContainer.html('')
                    PokemonStored.setPage();
                    PokemonStored.nextPokemon();
                }
                 searchBar.onsearch = sortList;
                
                function getPokemon(index) {
                    var list = [];
                    for(var num = index; num < index+24; num++){
                        list.push(pokeList[num])
                        console.log(pokeList)
                    }
                    return list;
                }
                
                var Pokemon = function() {
                    this.$indexNum = $('.pokeContainer').data("item-id") * 24;
                    let count = 0;
                    // console.log(this.$indexNum)
                    this.setPage = () => {
                        count = 0;
                        this.$indexNum = $('.pokeContainer').data("item-id") * 24;
                        this.visablePokemon = getPokemon(this.$indexNum);
                        return this.$indexNum
                    }
                    this.visablePokemon = getPokemon(this.$indexNum);
                    
                    
                    // console.log(getPokemon(1))
                    this.nextPokemon = () => {
                        $('.pageNumber').html($('.pokeContainer').data('item-id')+1)
                        if (count<24) {
                            console.log(this.visablePokemon)
                            let url = this.visablePokemon[count]['url'];
                            
                            count++
                            xhr2.open("GET", url);
                            xhr2.send(data);
                            xhr2.addEventListener("readystatechange", displayPokeImg)
                        }
                    }
                }
                var PokemonStored = new Pokemon(getPokemon());
                
                
                var xhr2 = new XMLHttpRequest();
                
                function displayPokeImg() {
                    
                    if (this.readyState === this.DONE) {
                        var pokeContainer = document.querySelector('.pokeContainer')
                        
                        var parseData = JSON.parse(this.responseText);
                        console.log(parseData)
                        var pokeImg = parseData.sprites['front_default']
                        var pokeName = parseData.species['name']
                        
                        var newDiv = document.createElement('div');
                        var pokeImgCont = document.createElement('img');
                        var text = document.createElement('div');

                        // newDiv.addEventListener('click', displayPokemonInfo);
                        newDiv.classList.add('pokemonIcon');
                        text.classList.add('pokeName')
                        
                        pokeImgCont.setAttribute('src', pokeImg)
                        text.innerHTML = pokeName;
                        
                        newDiv.appendChild(pokeImgCont);
                        newDiv.appendChild(text);
                        
                        pokeContainer.appendChild(newDiv);
                        
                        xhr2.removeEventListener('readystatechange',displayPokeImg)
                        PokemonStored.nextPokemon();
                    }
                    
                }
                PokemonStored.nextPokemon();
                $('.nextPage').on('click',()=>{
                    $pokeContainer = $('.pokeContainer')
                    if($pokeContainer.data('item-id')<41) {    
                        $pokeContainer.html('')
                        $pokeContainer.data("item-id", $pokeContainer.data("item-id")+ 1) 
                        console.log(PokemonStored.setPage())
                        PokemonStored.nextPokemon();
                    }
                })
                $('.prevPage').on('click',()=>{
                    $pokeContainer = $('.pokeContainer')
                    if($pokeContainer.data('item-id')>0)
                        $pokeContainer.html('')
                        $pokeContainer.data("item-id", $pokeContainer.data("item-id")- 1) 
                        console.log(PokemonStored.setPage())
                        PokemonStored.nextPokemon();
                })

                // var xhr3 = new XMLHttpRequest();

                // function getData() {
                //     var pokemonDisplay = $('.pokemonIdentify')
                //     if (this.readyState === this.DONE) {
                        
                //         var parseData = JSON.parse(this.responseText)
                        
                //         displayData(parseData)
                //     }
                // }
                // function displayData([name=species.name,img=sprites.front_default,moves=move]) {

                // }

                // function pokeIconClick(e) {
                //     var URL = e.target.url;
                //     xhr3.open("GET",URL)
                //     xhr3.addEventListener('readystatechange',getData)
                // }
            }
        }
        
        checkPokeNext();
        
        
        
        
        
        
        