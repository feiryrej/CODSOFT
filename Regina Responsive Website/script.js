// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Active navbar links
            navLinks.forEach((link) => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove icon when clicking navbar link
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});

// Form submission
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = {
            full_name: form.querySelector('input[name="full_name"]').value,
            email: form.querySelector('input[name="email"]').value,
            mobile_number: form.querySelector('input[name="mobile_number"]').value,
            email_subject: form.querySelector('input[name="email_subject"]').value,
            message: form.querySelector('textarea').value,
        };

        // Store formData in local storage
        localStorage.setItem('formData', JSON.stringify(formData));

        // Optionally, you can provide user feedback
        alert('Form data has been stored locally.');

        // Clear the form
        form.reset();
    });
});
