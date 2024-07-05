const clientId = '901bc34308404734a13ff76c7478b3aa';
const redirectUri = 'http://localhost:3001/';
let accessToken = "";

const Spotify = {
    getAccessToken() {
        if(accessToken){
            return accessToken;
        }

        const accesTokenUrl = window.location.href.match(/access_token=([^&]*)/);
        const expiresInUrl = window.location.href.match(/expires_in=([^&]*)/);
        if(accesTokenUrl && expiresInUrl){
            accessToken = accesTokenUrl[1];
            const expiresIn = Number(expiresInUrl[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
        } else {
            const accessUri = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUri;
        }
    },

    search(term){
        const accessToken = Spotify.getAccessToken()
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          }).then(response => {
            return response.json()
        }).then(jsonResponse => {
            if(!jsonResponse.tracks) {
                return []
            }
            return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
            }))
        })
    }
};




export { Spotify };