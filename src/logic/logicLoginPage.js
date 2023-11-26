
async function getUsers () {

    const res = await fetch('https://v1.appbackend.io/v1/rows/TGhCyxkKr8Ap');

    const users = res.json();

    return users

}

export async function handleLogin (name) {

    const {data} = await getUsers();

    console.log(data)

    for ( const user of data ) {

        if ( name === user.name ) {

            return true

        }

    }

    return false

}

