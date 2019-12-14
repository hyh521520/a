$('#modeifyForm').on('submit', function () {
var formData=$(this).serialize();

$.ajax({
    type: '/users/password',
    url: 'put',
    data: 'formData',
  
    success: function () {
        location.href="/admin/login.html"


    }
})
    return false
});

