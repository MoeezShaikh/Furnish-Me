(function($) {
    "use strict";
    try {
        var contactFormWrapper = $('.js-contact-form');
        contactFormWrapper.each(function() {
            var that = $(this);
            that.on('submit', function(e) {
                var url = "includes/contact-form.php";
                $.ajax({
                    type: "POST",
                    url: url,
                    data: $(this).serialize(),
                    success: function(data) {
                        var result = JSON.parse(data);
                        var message = result.message;
                        var type = result.type;
                        if (type === 1) {
                            swal("Success", message, "success");
                        } else if (type === 0) {
                            swal("Success", message, "Message sent");
                        }
                    },
                    statusCode: {
                        404: function() {
                            swal("Message sent to Furnish Me. We will contact you soon");
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        swal("Message sent to Furnish Me. We will contact you soon");
                    }
                });
                return false;
            });
        });
    } catch (err) {
        console.log(err)
    }
})(jQuery);