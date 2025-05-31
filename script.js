// Datos de productos
const productos = [
    {
        id: 1,
        nombre: "Elegance Noir",
        marca: "CSS Luxury",
        precio: 289000,
        categoria: "mujer",
        tipo: "perfume",
        descripcion: "Una fragancia sofisticada con notas de rosa y vainilla",
        notas: ["Rosa", "Vainilla", "Sándalo"]
    },
    {
        id: 2,
        nombre: "Urban Legend",
        marca: "CSS Men",
        precio: 245000,
        categoria: "hombre",
        tipo: "perfume",
        descripcion: "Fragancia masculina con notas amaderadas y especiadas",
        notas: ["Cedro", "Pimienta", "Bergamota"]
    },
    {
        id: 3,
        nombre: "Mystic Essence",
        marca: "CSS Unisex",
        precio: 320000,
        categoria: "unisex",
        tipo: "perfume",
        descripcion: "Una mezcla única para todos los gustos",
        notas: ["Lavanda", "Ámbar", "Musgo"]
    },
    {
        id: 4,
        nombre: "Golden Dreams",
        marca: "CSS Luxury",
        precio: 375000,
        categoria: "mujer",
        tipo: "perfume",
        descripcion: "Fragancia floral con toques dorados",
        notas: ["Jazmín", "Oro", "Pachulí"]
    },
    {
        id: 5,
        nombre: "Storm Breaker",
        marca: "CSS Men",
        precio: 265000,
        categoria: "hombre",
        tipo: "perfume",
        descripcion: "Intenso y poderoso como una tormenta",
        notas: ["Ozono", "Vetiver", "Cuero"]
    },
    {
        id: 6,
        nombre: "Sunset Vibes",
        marca: "CSS Unisex",
        precio: 230000,
        categoria: "unisex",
        tipo: "perfume",
        descripcion: "Captura la esencia de un atardecer perfecto",
        notas: ["Naranja", "Canela", "Almizcle"]
    },
    {
        id: 7,
        nombre: "Royal Bloom",
        marca: "CSS Luxury",
        precio: 350000,
        categoria: "mujer",
        tipo: "perfume",
        descripcion: "Elegancia real en cada gota",
        notas: ["Peonía", "Iris", "Cachemira"]
    },
    {
        id: 8,
        nombre: "Dark Knight",
        marca: "CSS Men",
        precio: 295000,
        categoria: "hombre",
        tipo: "perfume",
        descripcion: "Misterioso y seductor",
        notas: ["Oud", "Tabaco", "Cuero"]
    },
    // Accesorios
    {
        id: 9,
        nombre: "Atomizador de Viaje",
        marca: "CSS Accessories",
        precio: 45000,
        categoria: "accesorios",
        tipo: "accesorio",
        descripcion: "Atomizador recargable de 10ml para llevar tu fragancia favorita",
        caracteristicas: ["Recargable", "10ml", "Aluminio"]
    },
    {
        id: 10,
        nombre: "Estuche de Lujo",
        marca: "CSS Accessories",
        precio: 85000,
        categoria: "accesorios",
        tipo: "accesorio",
        descripcion: "Estuche de cuero para proteger tus fragancias favoritas",
        caracteristicas: ["Cuero genuino", "Interior acolchado", "Cierre magnético"]
    },
    {
        id: 11,
        nombre: "Set de Muestras Premium",
        marca: "CSS Collection",
        precio: 120000,
        categoria: "accesorios",
        tipo: "accesorio",
        descripcion: "Colección de 8 muestras de nuestras fragancias más exclusivas",
        caracteristicas: ["8 fragancias", "2ml cada una", "Presentación de lujo"]
    },
    {
        id: 12,
        nombre: "Difusor de Ambiente",
        marca: "CSS Home",
        precio: 95000,
        categoria: "accesorios",
        tipo: "accesorio",
        descripcion: "Difusor de varillas para perfumar tu hogar con elegancia",
        caracteristicas: ["200ml", "Varillas de ratán", "Duración 3 meses"]
    }
];

// Carrito de compras
let carrito = [];

// Contenido educativo
const contenidoEducativo = {
    notas: {
        titulo: "Notas Olfativas",
        contenido: `
            <h3>¿Qué son las notas olfativas?</h3>
            <p>Las notas olfativas son los diferentes aromas que percibes cuando usas un perfume. Se dividen en tres categorías:</p>
            
            <div style="margin: 20px 0;">
                <h4>🌸 Notas de Salida (Top Notes)</h4>
                <p>Son las primeras que percibes al aplicar el perfume. Duran entre 15-30 minutos. Suelen ser frescas y ligeras como cítricos, hierbas aromáticas o frutas.</p>
            </div>
            
            <div style="margin: 20px 0;">
                <h4>❤️ Notas de Corazón (Heart Notes)</h4>
                <p>Aparecen después de las notas de salida y forman el cuerpo principal del perfume. Duran 2-4 horas. Incluyen flores, especias y frutas más complejas.</p>
            </div>
            
            <div style="margin: 20px 0;">
                <h4>🌿 Notas de Fondo (Base Notes)</h4>
                <p>Son las últimas en aparecer y las que más duran (6-8 horas). Proporcionan profundidad y fijación. Incluyen maderas, resinas, almizcles y vainilla.</p>
            </div>
        `
    },
    familias: {
        titulo: "Familias Olfativas",
        contenido: `
            <h3>Principales Familias Olfativas</h3>
            <p>Los perfumes se clasifican en diferentes familias según sus características aromáticas:</p>
            
            <div style="margin: 20px 0;">
                <h4>🌸 Florales</h4>
                <p>Basados en flores como rosa, jazmín, lirio. Son románticos y femeninos.</p>
            </div>
            
            <div style="margin: 20px 0;">
                <h4>🍋 Cítricos</h4>
                <p>Frescos y energizantes. Incluyen limón, naranja, bergamota.</p>
            </div>
            
            <div style="margin: 20px 0;">
                <h4>🌲 Amaderados</h4>
                <p>Cálidos y sofisticados. Contienen cedro, sándalo, vetiver.</p>
            </div>
            
            <div style="margin: 20px 0;">
                <h4>🌿 Orientales</h4>
                <p>Exóticos y sensuales. Con especias, resinas y ámbar.</p>
            </div>
            
            <div style="margin: 20px 0;">
                <h4>🌱 Frescos</h4>
                <p>Limpios y revitalizantes. Con notas acuáticas y verdes.</p>
            </div>
        `
    },
    aplicacion: {
        titulo: "Cómo Aplicar Perfume Correctamente",
        contenido: `
            <h3>Técnica de Aplicación</h3>
            <p>La forma correcta de aplicar perfume puede hacer que dure más y huela mejor:</p>
            
            <div style="margin: 20px 0;">
                <h4>📍 Puntos de Pulso</h4>
                <p>Aplica en muñecas, cuello, detrás de las orejas y en el escote. Estos puntos emiten calor y ayudan a difundir la fragancia.</p>
            </div>
            
            <div style="margin: 20px 0;">
                <h4>💧 Cantidad Correcta</h4>
                <p>2-3 pulverizaciones son suficientes. Menos es más en el mundo de los perfumes.</p>
            </div>
            
            <div style="margin: 20px 0;">
                <h4>🚫 No Frotes</h4>
                <p>Nunca frotes las muñecas después de aplicar. Esto rompe las moléculas del perfume.</p>
            </div>
            
            <div style="margin: 20px 0;">
                <h4>⏰ Momento Ideal</h4>
                <p>Aplica después de la ducha sobre piel limpia y ligeramente húmeda para mejor fijación.</p>
            </div>
            
            <div style="margin: 20px 0;">
                <h4>👕 Distancia</h4>
                <p>Mantén el frasco a 15-20 cm de la piel al pulverizar.</p>
            </div>
        `
    }
};

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    cargarProductos();
    configurarFiltros();
    configurarAnimaciones();
    configurarFormularioPago();
});

// Cargar productos en la página
function cargarProductos(filtro = 'all') {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';
    
    const productosFiltrados = filtro === 'all' 
        ? productos 
        : productos.filter(producto => producto.categoria === filtro);
    
    productosFiltrados.forEach((producto, index) => {
        const card = crearTarjetaProducto(producto);
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
        grid.appendChild(card);
    });
}

// Crear tarjeta de producto
function crearTarjetaProducto(producto) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Determinar si es perfume o accesorio para mostrar diferente diseño
    const esPerfume = producto.tipo === 'perfume';
    
    card.innerHTML = `
        <div class="product-image ${esPerfume ? 'perfume' : 'accesorio'}"></div>
        <span class="category-tag">${producto.categoria}</span>
        <h3 class="product-name">${producto.nombre}</h3>
        <p class="product-brand">${producto.marca}</p>
        <p class="product-price">$${formatearPrecio(producto.precio)} COP</p>
        <p class="product-description">${producto.descripcion}</p>
        <div class="product-notes">
            <small>${esPerfume ? 'Notas: ' + producto.notas.join(', ') : 'Características: ' + producto.caracteristicas.join(', ')}</small>
        </div>
        <button class="add-to-cart" onclick="agregarAlCarrito(${producto.id})">
            Agregar al Carrito
        </button>
    `;
    
    // Agregar evento de click para mostrar detalles
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('add-to-cart')) {
            mostrarDetallesProducto(producto);
        }
    });
    
    return card;
}

// Formatear precio con separadores de miles
function formatearPrecio(precio) {
    return precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Configurar filtros
function configurarFiltros() {
    const filtros = document.querySelectorAll('.filter-btn');
    
    filtros.forEach(filtro => {
        filtro.addEventListener('click', () => {
            // Remover clase activa de todos los filtros
            filtros.forEach(f => f.classList.remove('active'));
            // Agregar clase activa al filtro clickeado
            filtro.classList.add('active');
            
            // Cargar productos filtrados
            const categoria = filtro.getAttribute('data-filter');
            cargarProductos(categoria);
        });
    });
}

// Agregar producto al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    const itemExistente = carrito.find(item => item.id === id);
    
    if (itemExistente) {
        itemExistente.cantidad++;
    } else {
        carrito.push({...producto, cantidad: 1});
    }
    
    actualizarContadorCarrito();
    mostrarNotificacion(`${producto.nombre} agregado al carrito`);
}

// Actualizar contador del carrito
function actualizarContadorCarrito() {
    const contador = document.querySelector('.cart-count');
    const total = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    contador.textContent = total;
}

// Toggle del carrito
function toggleCart() {
    const modal = document.getElementById('cart-modal');
    const isVisible = modal.style.display === 'block';
    
    if (isVisible) {
        modal.style.display = 'none';
    } else {
        mostrarCarrito();
        modal.style.display = 'block';
    }
}

// Mostrar contenido del carrito
function mostrarCarrito() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    if (carrito.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; padding: 2rem;">Tu carrito está vacío</p>';
        cartTotal.textContent = '0';
        return;
    }
    
    cartItems.innerHTML = '';
    let total = 0;
    
    carrito.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <div>
                <h4>${item.nombre}</h4>
                <p>${item.marca}</p>
                <p>Cantidad: ${item.cantidad}</p>
            </div>
            <div>
                <p>$${formatearPrecio(item.precio * item.cantidad)}</p>
                <button onclick="eliminarDelCarrito(${item.id})" style="background: #ff4444; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;">
                    Eliminar
                </button>
            </div>
        `;
        cartItems.appendChild(itemElement);
        total += item.precio * item.cantidad;
    });
    
    cartTotal.textContent = formatearPrecio(total);
}

// Eliminar del carrito
function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    actualizarContadorCarrito();
    mostrarCarrito();
}

// Toggle del menú móvil
function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('active');
}

// Scroll suave a productos
function scrollToProducts() {
    document.getElementById('productos').scrollIntoView({
        behavior: 'smooth'
    });
}

// Mostrar modal educativo
function showEducationModal(tipo) {
    const modal = document.getElementById('education-modal');
    const titulo = document.getElementById('education-title');
    const contenido = document.getElementById('education-content');
    
    const info = contenidoEducativo[tipo];
    titulo.textContent = info.titulo;
    contenido.innerHTML = info.contenido;
    
    modal.style.display = 'block';
}

// Cerrar modal educativo
function closeEducationModal() {
    document.getElementById('education-modal').style.display = 'none';
}

// Mostrar detalles del producto
function mostrarDetallesProducto(producto) {
    const modal = document.getElementById('education-modal');
    const titulo = document.getElementById('education-title');
    const contenido = document.getElementById('education-content');
    
    const esPerfume = producto.tipo === 'perfume';
    
    titulo.textContent = producto.nombre;
    contenido.innerHTML = `
        <div style="text-align: center;">
            <div style="width: 150px; height: 200px; background: linear-gradient(145deg, #e8ddd4, #d4c4b0); border-radius: ${esPerfume ? '10px' : '50%'}; margin: 0 auto 20px; position: relative;">
                ${esPerfume ? '<div style="position: absolute; top: 10px; left: 50%; transform: translateX(-50%); width: 30px; height: 20px; background: #d4af37; border-radius: 5px;"></div>' : ''}
            </div>
            <h3>${producto.marca}</h3>
            <p style="font-size: 1.2rem; margin: 10px 0;">${producto.descripcion}</p>
            <p style="font-size: 1.5rem; color: #d4af37; font-weight: bold;">$${formatearPrecio(producto.precio)} COP</p>
            <div style="margin: 20px 0;">
                <h4>${esPerfume ? 'Notas Olfativas:' : 'Características:'}</h4>
                <p>${esPerfume ? producto.notas.join(' • ') : producto.caracteristicas.join(' • ')}</p>
            </div>
            <button onclick="agregarAlCarrito(${producto.id}); closeEducationModal();" style="background: #1a1a1a; color: white; border: none; padding: 12px 24px; border-radius: 25px; cursor: pointer; font-weight: 600;">
                Agregar al Carrito - $${formatearPrecio(producto.precio)} COP
            </button>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Mostrar notificación
function mostrarNotificacion(mensaje) {
    // Crear elemento de notificación
    const notificacion = document.createElement('div');
    notificacion.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #d4af37;
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        z-index: 3000;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    `;
    notificacion.textContent = mensaje;
    
    document.body.appendChild(notificacion);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notificacion.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notificacion);
        }, 300);
    }, 3000);
}

// Configurar animaciones de scroll
function configurarAnimaciones() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    });
    
    // Observar elementos que necesitan animación
    document.querySelectorAll('.education-card, .about-content, .product-card').forEach(el => {
        observer.observe(el);
    });
}

// Iniciar proceso de pago
function iniciarPago() {
    if (carrito.length === 0) {
        mostrarNotificacion('Tu carrito está vacío');
        return;
    }
    
    // Mostrar modal de pago
    const modal = document.getElementById('payment-modal');
    modal.style.display = 'block';
    
    // Cargar resumen de compra
    cargarResumenCompra();
    
    // Cerrar modal de carrito
    document.getElementById('cart-modal').style.display = 'none';
}

// Cargar resumen de compra en el modal de pago
function cargarResumenCompra() {
    const itemsContainer = document.getElementById('payment-items');
    const subtotalElement = document.getElementById('payment-subtotal');
    const totalElement = document.getElementById('payment-total');
    
    itemsContainer.innerHTML = '';
    
    let subtotal = 0;
    const envio = 12000; // Costo fijo de envío
    
    carrito.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'payment-item';
        itemElement.innerHTML = `
            <div>${item.nombre} x ${item.cantidad}</div>
            <div>$${formatearPrecio(item.precio * item.cantidad)}</div>
        `;
        itemsContainer.appendChild(itemElement);
        subtotal += item.precio * item.cantidad;
    });
    
    subtotalElement.textContent = formatearPrecio(subtotal);
    totalElement.textContent = formatearPrecio(subtotal + envio);
}

// Configurar formulario de pago
function configurarFormularioPago() {
    // Mostrar/ocultar detalles según método de pago seleccionado
    const metodoPago = document.getElementsByName('payment-method');
    const tarjetaDetails = document.getElementById('tarjeta-details');
    const transferenciaDetails = document.getElementById('transferencia-details');
    
    if (metodoPago && metodoPago.length > 0) {
        metodoPago.forEach(metodo => {
            metodo.addEventListener('change', function() {
                if (this.value === 'tarjeta') {
                    tarjetaDetails.style.display = 'block';
                    transferenciaDetails.style.display = 'none';
                } else if (this.value === 'transferencia') {
                    tarjetaDetails.style.display = 'none';
                    transferenciaDetails.style.display = 'block';
                } else {
                    tarjetaDetails.style.display = 'none';
                    transferenciaDetails.style.display = 'none';
                }
            });
        });
    }
    
    // Manejar envío del formulario
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validar formulario
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const telefono = document.getElementById('telefono').value;
            const direccion = document.getElementById('direccion').value;
            const ciudad = document.getElementById('ciudad').value;
            
            if (!nombre || !email || !telefono || !direccion || !ciudad) {
                mostrarNotificacion('Por favor, completa todos los campos');
                return;
            }
            
            // Simular proceso de pago
            mostrarNotificacion('Procesando pago...');
            
            setTimeout(() => {
                mostrarNotificacion('¡Compra realizada con éxito!');
                carrito = [];
                actualizarContadorCarrito();
                document.getElementById('payment-modal').style.display = 'none';
            }, 2000);
        });
    }
}

// Agregar estilos de animación dinámicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Funcionalidad de búsqueda (opcional)
function buscarProductos(termino) {
    const productosFiltrados = productos.filter(producto => 
        producto.nombre.toLowerCase().includes(termino.toLowerCase()) ||
        producto.marca.toLowerCase().includes(termino.toLowerCase()) ||
        producto.descripcion.toLowerCase().includes(termino.toLowerCase())
    );
    
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';
    
    productosFiltrados.forEach((producto, index) => {
        const card = crearTarjetaProducto(producto);
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
        grid.appendChild(card);
    });
}