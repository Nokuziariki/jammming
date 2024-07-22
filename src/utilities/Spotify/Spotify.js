const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const redirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
// const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
let accessToken = "";
// let clientAccessToken = '';


const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        const accessTokenUrl = window.location.href.match(/access_token=([^&]*)/);
        const expiresInUrl = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenUrl && expiresInUrl) {
            accessToken = accessTokenUrl[1];
            const expiresIn = Number(expiresInUrl[1]);

            window.setTimeout(() =>{
                accessToken = '';
            }, expiresIn * 1000);
            
            window.history.pushState('Access Token', null, '/');
            return accessToken;

        } else {
            const accessUri = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUri;
        }
    },
   
    async search(term) {
        try {
            const accessToken = Spotify.getAccessToken();
            const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
                headers: { Authorization: `Bearer ${accessToken}` },
            });
            const jsonResponse = await response.json();
            
            if (!jsonResponse.tracks) {
                return [];
            }
    
            return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                albumArt: track.album.images[0] ? track.album.images[0].url : '',
                uri: track.uri
            }));
        } catch (error) {
            console.error('Error searching tracks:', error);
            return [];
        }
    },

    savePlaylistName(name, trackURI) {
        if (!name || !trackURI.length) {
            return;
        }

        const accessToken = Spotify.getAccessToken();
        const headers = { Authorization: `Bearer ${accessToken}` };
        let userID = "";

        return fetch(`https://api.spotify.com/v1/me`, {
            headers: headers,
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            userID = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({ name: name }),
            });
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            const playlistID = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({ uris: trackURI }),
            });
        });
    }
};

export { Spotify };
