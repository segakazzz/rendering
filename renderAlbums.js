
function renderAlbums(albums) {
    console.log(albums[0])
    let artist = `<h1>${albums[0].artist}</h1>`
    let albumGroup = albums[0].albums.map(function(album){
        let songs = album.songs.map(function(song){
            return `
                <div class="album-song">
                    <div><span><i class="fas fa-play"></i></span>${song.title}</div>
                    <div>${song.length}</div>
                </div>
            `
        })

        return `
            <div class="album-title">
                <div><img src="${album.albumCover}"></div>
                <h3>${album.title}</h3>
            </div>
            <div class="album-songs">
                <hr>
                ${songs.join('<hr>')}
                <hr>
            </div>
            
        `
    })
    return `
        <div class="text-center mt-5">
            <code>${JSON.stringify(albums)}</code>
            <div id="albums">
                ${artist}
                <hr>
                ${albumGroup.join('')}
            </div>
        </div>
    `
}

function albums() {
    var content = document.getElementById('content');

    var albumsAbstraction = [
        {
            artist: "Creed",
            albums: [
                {
                    title: "My Own Prison",
                    albumCover: "https://images-na.ssl-images-amazon.com/images/I/51Y5ZCMV2QL.jpg",
                    songs: [
                        {
                            title: "Torn",
                            length: "6:25"
                        },
                        {
                            title: "Ode",
                            length: "4:58"
                        },
                        {
                            title: "My Own Prison",
                            length: "5:00"
                        },
                        {
                            title: "Pity for a Dime",
                            length: "4:37"
                        },
                        {
                            title: "In America",
                            length: "3:38"
                        },
                        {
                            title: "Illusion",
                            length: "5:29"
                        }
                    ]

                },
                {
                    title: "Weathered",
                    albumCover: "https://is5-ssl.mzstatic.com/image/thumb/Music22/v4/b1/a4/a9/b1a4a9dd-ecda-6233-07da-f53848d37bdf/mzm.qakvcpwo.jpg/1200x630bb.jpg",
                    songs: [
                        {
                            title: "Bullets",
                            length: "6:25"
                        },
                        {
                            title: "Freedom Fighter",
                            length: "4:58"
                        },
                        {
                            title: "Who's Got My Back?",
                            length: "5:00"
                        },
                        {
                            title: "Signs",
                            length: "4:37"
                        },
                        {
                            title: "One Last Breath",
                            length: "3:38"
                        },
                        {
                            title: "My Sacrifice",
                            length: "5:29"
                        }
                    ]
                }
            ]
        }
    ]

    content.innerHTML = renderAlbums(albumsAbstraction);

}