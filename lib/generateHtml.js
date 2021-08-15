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

const renderMemberOption = (member) => {
    if (member.getRole() === 'Intern'){
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
            <td>School: ${member.school}</td>
        </tr>
    </table>
</div>`
    } else {
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
            <td>Github: ${member.github}</td>
        </tr>
    </table>
</div>`
    }
}

const renderMemberCard = (member) => {
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
            <td>Github: ${member.github}</td>
        </tr>
    </table>
</div>`
}




const generateHtml = (manager,member2,member3,member4,member5) => {
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
                    ${renderManagerCard(manager)}
                </div>
                <div class="card1">
                    ${renderMemberOption(member2)}
                </div>
                <div class="card1">
                    ${renderMemberCard(member3)}
                </div>
            </div>
            <div class="level2">
                <div class="card1">
                ${renderMemberCard(member4)}
                </div>
                <div class="card1">
                ${renderMemberOption(member5)}
                </div>
            </div>
    
    
        </div>
    </body>
    
    </html>`
};

module.exports = generateHtml;