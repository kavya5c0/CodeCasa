 <script>
        var sidemenu = document.getElementById("sidemenu");

        function openmenu() {
            sidemenu.style.right = "0";
        }

        function closemenu() {
            sidemenu.style.right = "-200px";
        }
    </script>
    <script>
        // Smooth scroll to sections when clicking navigation links
        const navLinks = document.querySelectorAll('nav ul li a');
    
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
    
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth',
                });
            });
        });
    
        // Form submission handling
        const contactForm = document.querySelector('form');
    
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // You can add code here to handle the form submission, e.g., sending an email or saving to a database.
            alert('Form submitted!');
        });
    
        // Mobile navigation toggle
        const sideMenu = document.getElementById('sidemenu');
        const openMenuBtn = document.querySelector('.fa-bars');
        const closeMenuBtn = document.querySelector('.fa-times');
    
        openMenuBtn.addEventListener('click', () => {
            sideMenu.style.right = '0';
        });
    
        closeMenuBtn.addEventListener('click', () => {
            sideMenu.style.right = '-200px';
        });
    </script>
