function comments(arr){

    let users = []

    let articles = {}


    for (let commands of arr){
        let command = commands.split(" ")
        let name = command.slice(1)[0]

        if (command[0] === "user"){

            users.push(name);
            continue
        }


        if (command[0] === "article"){

            articles[name] = {} 
            continue
        }


        let command1 = commands.split(": ")

        if (command1.length > 1){

            let username_article = command1[0].split(' posts on ')

            let title_content = command1[1].split(', ');

            if (users.includes(username_article[0]) && articles.hasOwnProperty(username_article[1])){ // if error a user can make more than one comment on a atricle

                if (articles[username_article[1]].hasOwnProperty(username_article[0])){
                    articles[username_article[1]][username_article[0]].push(title_content[0])    
                    articles[username_article[1]][username_article[0]].push(title_content[1])
                }
                else{
                    articles[username_article[1]][username_article[0]] = [title_content[0], title_content[1]]
                }

            }


        }

    } 

    let sorted = Object.fromEntries(Object.entries(articles).sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length))


    for (let pr in sorted){

        console.log(`Comments on ${pr}`);

        let ordered = Object.fromEntries(Object.entries(sorted[pr]).sort((a, b) => a[0].localeCompare(b[0])))

        for (let pr1 in ordered){

            
            for (let i  = 0; i < ordered[pr1].length; i+=2){
                console.log(`--- From user ${pr1}: ${ordered[pr1][i]} - ${ordered[pr1][i + 1]}`)
            }
        }

    }

}

