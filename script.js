document.addEventListener('DOMContentLoaded', function () {
    const purchaseDetails = JSON.parse(localStorage.getItem('lastPurchase')); // Obtener los detalles de la compra
    const voucherContainer = document.getElementById('voucher-container');

    if (!purchaseDetails) {
        voucherContainer.innerHTML = '<p>No hay datos de la compra.</p>';
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
});

function downloadvoucher() {
    const voucherContent = document.getElementById('voucher-container').innerText; // Obtener el texto del voucher
    const blob = new Blob([voucherContent], { type: 'text/plain' }); // Crear un blob de texto
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob); // Crear un enlace para descargar
    link.download = 'voucher.txt'; // Nombre del archivo
    link.click(); // Simular clic para descargar
}