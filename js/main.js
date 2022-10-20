        let dropdownBtn = document.querySelector('.menu-btn');
        let menuContent = document.querySelector('.menu-content');
        dropdownBtn.addEventListener('click', () => {
            if (menuContent.style.display === "") {
                menuContent.style.display = "block";
            } else {
                menuContent.style.display = "";
            }
        })


<script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>