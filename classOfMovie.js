class Movie{
    constructor(title,studio,rating = "PG"){
        this.title = title
        this.studio = studio
        this.rating = rating
       

    }
    getPG(){
        let filtered = []
        for(let i = 0;i<movies.length;i++){
            if(movies[i].rating == "PG"){
                filtered.push(movies[i])
            }
        }
        return filtered
    
    }
        
}

movieA = new Movie("avengers","marvel","PG");
movieB = new Movie("topGunMaverick","paramount","R")
movieC = new Movie("frozen","disney","PG13")
movieD = new Movie("vikram","rajKamal","PG")


let movies = []
movies.push(movieA,movieB,movieC,movieD)
console.log(movies)


movieE = new Movie("best","bestStudio")
console.log(movieE.getPG(movies))



movieF = new Movie("Casino Royale","Eon Productions","PG13")
console.log(movieF)