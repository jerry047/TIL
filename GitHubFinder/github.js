class Github {
    constructor() {
        this.client_id = 'a734615e211d3c2b036d';
        this.client_secret = 'b033810c165fc871d5ad69c8d80e163aa6354650';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
             profile
        }
    }
}