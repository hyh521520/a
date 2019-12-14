$('#addCategory').on('submit', function () {
    var formData = $(this).serialize();



    $.ajax({
        type: 'post',
        url: '/categories',
        data: 'formData',

        success: function () {
            location.reload();
        }
    })
    return false;




});

$.ajax({
    type: 'get',
    url: '/categories',
    success: function (response) {
        console.log(response);
        var html=templata('categoryListTpl',{data:response})
        
        $('#categoryBox').html(html)
        
    }
});
