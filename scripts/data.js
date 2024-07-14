document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('card1');
    const signupForm = document.getElementById('card2');
    const profileLink = document.getElementById('profile');

    if (profileLink) {
        profileLink.addEventListener('click', () => {
            window.location.href = '../index.html';
        });
    }

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const loginData = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
            accountType: document.getElementById('type').value,
        };

        const user = randomEntries.find(entry => entry.username === loginData.username && entry.password === loginData.password);

        if (user) {
            alert('Login Successful!');
            window.location.href = '../pages/main.html';
        } else {
            alert('Invalid username or password');
        }
    });

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const signupData = {
            firstName: document.getElementById('firstname').value,
            lastName: document.getElementById('lasttname').value,
            mobileNumber: document.getElementById('mobilenumber').value,
            location: document.getElementById('location').value,
            username: document.getElementById('uniqueusername').value,
            password: document.getElementById('password1').value,
            accountType: document.getElementById('sign_up_type').value,
            itemsToBuy: Array.from(document.querySelectorAll('.check input[type="checkbox"]:checked')).map(checkbox => checkbox.nextElementSibling.innerText)
        };

        randomEntries.push(signupData);

        console.log('Updated Random Entries:', randomEntries);
        alert('Signup successful! You can now log in.');
    });
});

const randomEntries = [
    {
        firstName: 'Ravi',
        lastName: 'Sharma',
        mobileNumber: '9876543210',
        location: 'Karnal',
        username: 'ravi123',
        password: 'password123',
        accountType: 'seller',
        itemsToBuy: ['Ferrous Iron Scrap', 'Plastic Scrap']
    },
    {
        firstName: 'Sita',
        lastName: 'Kumari',
        mobileNumber: '9123456789',
        location: 'Panipat',
        username: 'sita456',
        password: 'mypassword456',
        accountType: 'ragpicker',
        itemsToBuy: ['Vehicle Scrap', 'Glass Scrap', 'Mixed Iron Scrap']
    },
    {
        firstName: 'Amit',
        lastName: 'Verma',
        mobileNumber: '9988776655',
        location: 'Yamunanagar',
        username: 'amit789',
        password: 'pass789',
        accountType: 'seller',
        itemsToBuy: ['Raddi Paper Scrap', 'Non-Ferrous Iron Scrap']
    },
    {
        firstName: 'Geeta',
        lastName: 'Yadav',
        mobileNumber: '8877665544',
        location: 'Kurukshetra',
        username: 'geeta007',
        password: 'secure007',
        accountType: 'ragpicker',
        itemsToBuy: ['Specialized Iron Scrap', 'Obsolete Iron Scrap']
    },
    {
        firstName: 'Rajesh',
        lastName: 'Kumar',
        mobileNumber: '7766554433',
        location: 'Kaithal',
        username: 'rajesh999',
        password: 'strong999',
        accountType: 'seller',
        itemsToBuy: ['Ferrous Iron Scrap', 'Glass Scrap']
    },
    {
        firstName: 'Pooja',
        lastName: 'Singh',
        mobileNumber: '6655443322',
        location: 'Sonipat',
        username: 'pooja111',
        password: 'secure111',
        accountType: 'ragpicker',
        itemsToBuy: ['Plastic Scrap', 'Raddi Paper Scrap']
    },
    {
        firstName: 'Manoj',
        lastName: 'Bansal',
        mobileNumber: '5566778899',
        location: 'Jind',
        username: 'manoj222',
        password: 'mypassword222',
        accountType: 'seller',
        itemsToBuy: ['Vehicle Scrap', 'Non-Ferrous Iron Scrap']
    },
    {
        firstName: 'Anita',
        lastName: 'Rao',
        mobileNumber: '4455667788',
        location: 'Rohtak',
        username: 'anita333',
        password: 'pass333',
        accountType: 'ragpicker',
        itemsToBuy: ['Specialized Iron Scrap', 'Mixed Iron Scrap']
    },
    {
        firstName: 'Vikram',
        lastName: 'Thakur',
        mobileNumber: '3344556677',
        location: 'Ambala',
        username: 'vikram444',
        password: 'secure444',
        accountType: 'seller',
        itemsToBuy: ['Obsolete Iron Scrap', 'Plastic Scrap']
    },
    {
        firstName: 'Sunita',
        lastName: 'Gupta',
        mobileNumber: '2233445566',
        location: 'Hisar',
        username: 'sunita555',
        password: 'mypassword555',
        accountType: 'ragpicker',
        itemsToBuy: ['Ferrous Iron Scrap', 'Vehicle Scrap']
    },
    {
        firstName: 'Rakesh',
        lastName: 'Mishra',
        mobileNumber: '1122334455',
        location: 'Faridabad',
        username: 'rakesh777',
        password: 'secure777',
        accountType: 'seller',
        itemsToBuy: ['Glass Scrap', 'Plastic Scrap']
    },
    {
        firstName: 'Priya',
        lastName: 'Sharma',
        mobileNumber: '9988776655',
        location: 'Gurgaon',
        username: 'priya888',
        password: 'mypassword888',
        accountType: 'ragpicker',
        itemsToBuy: ['Mixed Iron Scrap', 'Raddi Paper Scrap']
    },
    {
        firstName: 'Aryan',
        lastName: 'Singh',
        mobileNumber: '8877665544',
        location: 'Rewari',
        username: 'aryan999',
        password: 'pass999',
        accountType: 'seller',
        itemsToBuy: ['Obsolete Iron Scrap', 'Non-Ferrous Iron Scrap']
    },
    {
        firstName: 'Deepa',
        lastName: 'Verma',
        mobileNumber: '7766554433',
        location: 'Palwal',
        username: 'deepa111',
        password: 'secure111',
        accountType: 'ragpicker',
        itemsToBuy: ['Specialized Iron Scrap', 'Vehicle Scrap']
    },
    {
        firstName: 'Kunal',
        lastName: 'Goyal',
        mobileNumber: '6655443322',
        location: 'Bhiwani',
        username: 'kunal222',
        password: 'mypassword222',
        accountType: 'seller',
        itemsToBuy: ['Ferrous Iron Scrap', 'Glass Scrap']
    }
];

export default randomEntries;
