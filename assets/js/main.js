// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.querySelector('button.md\\:hidden');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'md:hidden fixed inset-0 bg-gray-800 bg-opacity-50 hidden';
    
    const menuContent = document.createElement('div');
    menuContent.className = 'bg-white w-64 h-full transform -translate-x-full transition-transform duration-300 ease-in-out';
    
    // Add menu items
    menuContent.innerHTML = `
        <div class="p-4 space-y-4">
            <a href="#tentang" class="block py-2 hover:text-primary">Tentang</a>
            <a href="#jadwal" class="block py-2 hover:text-primary">Jadwal</a>
            <a href="#daftar" class="block py-2 hover:text-primary">Daftar</a>
            <a href="#donasi" class="block py-2 hover:text-primary">Donasi</a>
        </div>
    `;
    
    mobileMenu.appendChild(menuContent);
    document.body.appendChild(mobileMenu);
    
    let isMenuOpen = false;
    
    mobileMenuButton.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        mobileMenu.classList.toggle('hidden');
        menuContent.style.transform = isMenuOpen ? 'translateX(0)' : 'translateX(-100%)';
    });
    
    // Close menu when clicking outside
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            isMenuOpen = false;
            mobileMenu.classList.add('hidden');
            menuContent.style.transform = 'translateX(-100%)';
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form handling
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const nama = formData.get('nama');
            const gender = formData.get('gender');
            const usia = formData.get('usia');
            const pekerjaan = formData.get('pekerjaan');
            const wilayah = formData.get('wilayah');
            
            // Create WhatsApp message
            const message = `Assalamu'alaikum, saya ingin mendaftar Kelas Tahsin Online.%0A%0A*Data Pendaftar*%0A▪️ Nama: ${nama}%0A▪️ Jenis Kelamin: ${gender === 'L' ? 'Laki-laki' : 'Perempuan'}%0A▪️ Usia: ${usia} tahun%0A▪️ Pekerjaan: ${pekerjaan}%0A▪️ Wilayah: ${wilayah}`;
            
            // WhatsApp number (replace with actual number)
            const waNumber = '62881322456';
            
            // Redirect to WhatsApp
            window.location.href = `https://wa.me/${waNumber}?text=${message}`;
        });
    }
}); 