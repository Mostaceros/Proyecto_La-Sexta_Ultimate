document.addEventListener('DOMContentLoaded', function () {
    const purchaseDetails = JSON.parse(localStorage.getItem('lastPurchase')); // Obtener los detalles de la compra
    const voucherContainer = document.getElementById('voucher-container');

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('es-PE', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    const formattedTime = currentDate.toLocaleTimeString('es-PE', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    // Mostrar fecha y hora
    document.getElementById('purchase-date').textContent = formattedDate;
    document.getElementById('purchase-time').textContent = formattedTime;

    // Datos de contacto de la tienda
    const storeName = "La Sexta"; // Nombre de la tienda
    const storeAddress = "Av. Ejemplo 1234, Lima - Perú"; // Dirección de la tienda
    const storePhone = "+51 917859378"; // Teléfono de contacto
    const storeEmail = "LaSextDeport@gmail.com"; // Correo de contacto

    if (!purchaseDetails) {
        voucherContainer.innerHTML += '<p>No hay datos de la compra.</p>';
        return;
    }

    // Mostrar datos del cliente
    voucherContainer.innerHTML += `<div class="text-align"><p><strong>CLIENTE:</strong> ${purchaseDetails.clientName}</p></div>`;
    voucherContainer.innerHTML += `<div class="text-align"><p><strong>CORREO:</strong> ${purchaseDetails.clientEmail}</p></div>`;
    voucherContainer.innerHTML += `<hr>`;

    // Agregar encabezados
    voucherContainer.innerHTML += `
        <p><strong>Producto - Precio - Cantidad - Total</strong></p>
        <hr>`;

    // Mostrar productos en formato de línea
    purchaseDetails.items.forEach(item => {
        voucherContainer.innerHTML += `
            <p>${item.name} - S/${item.price.toFixed(2)} - ${item.quantity} - S/${item.total}</p>`;
    });

    // Mostrar subtotal, IGV y total
    voucherContainer.innerHTML += `<hr>`;
    voucherContainer.innerHTML += `<p class="text-align"><strong>Subtotal:</strong> S/${purchaseDetails.subtotal.toFixed(2)}</p>`;
    voucherContainer.innerHTML += `<p class="text-align"><strong>IGV (18%):</strong> S/${purchaseDetails.igv.toFixed(2)}</p>`;
    voucherContainer.innerHTML += `<p class="text-align"><strong>Total:</strong> S/${purchaseDetails.total.toFixed(2)}</p>`;

    // Mostrar información de contacto de la tienda al final
    voucherContainer.innerHTML += `<hr>`;
    voucherContainer.innerHTML += `<p>Gracias por tu compra!</p>`;
    voucherContainer.innerHTML += `<p><strong>Nombre de la tienda:</strong> ${storeName}</p>`;
    voucherContainer.innerHTML += `<p><strong>Dirección de la tienda:</strong> ${storeAddress}</p>`;
    voucherContainer.innerHTML += `<p><strong>Teléfono de contacto:</strong> ${storePhone}</p>`;
    voucherContainer.innerHTML += `<p><strong>Correo de contacto:</strong> ${storeEmail}</p>`;
});

function downloadvoucher() {
    const voucherContent = document.getElementById('voucher-container').innerText; // Obtener el texto del voucher
    const blob = new Blob([voucherContent], { type: 'text/plain' }); // Crear un blob de texto
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob); // Crear un enlace para descargar
    link.download = 'voucher.txt'; // Nombre del archivo
    link.click(); // Simular clic para descargar
}