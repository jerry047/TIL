data = [
    {
        name: 'John Doe',
        age: 28,
        gender: 'male',
        lookingfor: 'female',
        location: 'dharampur',
        image: 'https://randomuser.me/portraits/men/82.jpg'
    },
    {
        name: 'Hawas ki pujari',
        age: 30,
        gender: 'female',
        lookingfor: 'male',
        location: 'hawaspur',
        image: 'https://randomuser.me/portraits/women/82.jpg'
    },
    {
        name: 'Jiddi kto moh',
        age: 24,
        gender: 'male',
        lookingfor: 'female',
        location: 'Kirtipur',
        image: 'https://randomuser.me/portraits/men/80.jpg'
    }
];

const profiles = profileIterator(data);

//Call first profile
nextProfile();

//Next event
document.getElementById('next').addEventListener('click', nextProfile);

//Next profile display
function nextProfile() {
    const currentProfile = profiles.next().value;

    if(currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML =  `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>
        `;

        document.getElementById('imageDisplay').innerHTML = `
            <img src="${currentProfile.image}">
        `;
    } else {
        // NO more profiles
        window.location.reload();
    }

}

// Profile Iterator

function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < profiles.length ? 
            { value: profiles[nextIndex++], done: false } : 
            { done: true }
        }
    };
}