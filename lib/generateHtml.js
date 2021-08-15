const renderManagerCard = (member) => {
    return `<div>
    <h1 class="name">${member.name}</h1>
    <h2 class="role">${member.getRole()}</h2>
</div>
<div class="info">
    <table>
        <tr>
            <td>ID:${member.id}</td>
        </tr>
        <tr>
            <td>Email: ${member.email}</td>
        </tr>
        <tr>
            <td>Office Number: ${member.getOfficeNum()}</td>
        </tr>
    </table>
</div>`
}






const generateHtml = (member1,member2,member3,member4,member5) => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dream Team</title>
        <link rel="stylesheet" href="../src/style.css">
    </head>
    
    <nav class="navbar">
        <h1>My Team</h1>
    </nav>
    
    <body>
        <div class="cards">
            <div class="level1">
                <div class="card1">
                    
                </div>
                <div class="card1">
                    
                </div>
                <div class="card1">
                    
                </div>
            </div>
            <div class="level2">
                <div class="card1">
                    
                </div>
                <div class="card1">
                    
                </div>
            </div>
    
    
        </div>
    </body>
    
    </html>`
};

module.exports = generateHtml;