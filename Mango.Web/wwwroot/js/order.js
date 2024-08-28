﻿var dataTable;

$(document).ready(function () {
    var url = new URL(window.location.href);
    var status = url.searchParams.get("status");

    switch (status) {
        case "Xác nhận":
            loadDataTable("Xác nhận");
            break;
        case "Đang giao":
            loadDataTable("Đang giao");
            break;
        case "Hủy đơn":
            loadDataTable("Hủy đơn");
            break;
        case "Đang chờ":
            loadDataTable("Đang chờ");
            break;
        case "Hoàn thành":
            loadDataTable("Hoàn thành");
            break;
        default:
            loadDataTable("all");
            break;
    }
});

function loadDataTable(status) {
    dataTable = $('#tblData').DataTable({
        order: [[0, 'desc']],
        "ajax": { url: "/order/getall?status=" + encodeURIComponent(status) },
        "columns": [
            { data: 'orderHeaderId', "width": "5%" },
            { data: 'email', "width": "25%" },
            { data: 'name', "width": "20%" },
            { data: 'phone', "width": "10%" },
            { data: 'status', "width": "10%" },
            {
                data: 'orderTotal',
                "render": function (data) {
                    return data.toLocaleString('vi-VN');
                },
                "width": "10%"
            },
            {
                data: 'orderHeaderId',
                "render": function (data) {
                    return `<div class="w-75 btn-group" role="group">
                    <a href="/order/orderDetail?orderId=${data}" class="btn btn-primary mx-2"><i class="bi bi-pencil-square"></i></a>
                    </div>`;
                },
                "width": "10%"
            }
        ],
    });
}
