$(document).ready(function() {
    $('#form').ajaxForm({
        beforeSubmit: function() {
            $('.wrap').attr('id', 'transparent-background');
            $('#loading-text').css('display', 'block');
            $('#loading-text ul').attr('id', 'loader');
        },
        success: function(response) {
            $('.wrap').removeAttr('id');
            $('#loading-text').css('display', 'none');
            alert(response);
            window.location.href = '/colleges';
        },
        error: function(err) {
            $('.wrap').removeAttr('id');
            $('#loading-text').css('display', 'none');
            alert('Error try again');
            window.location.reload();
        }
    })
});
