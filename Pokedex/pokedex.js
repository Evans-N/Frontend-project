console.log(`hey its working`)

const content = document.querySelector(`.content`)

var pokeList = []

var pokeNext = "http://pokeapi.co/api/v2/pokemon/?offset=0&limit=50";

var xhr = new XMLHttpRequest();
         


function readyState() {
    if (this.readyState === this.DONE) {
        
        var parseData = JSON.parse(this.responseText)
        
        pokeNext = parseData.next
        
        pokeList = pokeList.concat(parseData.results)
        
        console.log(pokeList);
        
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
                
                pokeList = sortList();
                
                function getPokemon(index) {
                    var list = [];
                    for(var num = index; num < index+20; num++){
                        list.push(pokeList[num])
                        console.log(pokeList)
                    }
                    return list;
                }
                
                var Pokemon = function() {
                    this.$indexNum = $('.pokeContainer').data("item-id") * 20;
                    let count = 0;
                    // console.log(this.$indexNum)
                    this.setPage = () => {
                        count = 0;
                        this.$indexNum = $('.pokeContainer').data("item-id") * 20;
                        this.visablePokemon = getPokemon(this.$indexNum);
                        return this.$indexNum
                    }
                    this.visablePokemon = getPokemon(this.$indexNum);
                    
                    
                    // console.log(getPokemon(1))
                    this.nextPokemon = () => {
                        
                        if (count<20) {
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
                        
                        var newDiv = document.createElement('div');
                        var pokeImgCont = document.createElement('img');
                        
                        // newDiv.addEventListener('click', displayPokemonInfo);
                        newDiv.classList.add('pokemonIcon');
                        
                        pokeImgCont.setAttribute('src', pokeImg)
                        
                        newDiv.appendChild(pokeImgCont);
                        
                        pokeContainer.appendChild(newDiv);
                        
                        xhr2.removeEventListener('readystatechange',displayPokeImg)
                        PokemonStored.nextPokemon();
                    }
                    
                }
                PokemonStored.nextPokemon();
                $('.nextPage').on('click',()=>{
                    $pokeContainer = $('.pokeContainer')
                    if($pokeContainer.data('item-id')<49) {    
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
            }
        }
        
        checkPokeNext();
        
        
        
        
        
        
        