/* For Our work tabs*/
    $("body").on("click",".row-hiw__nav-dots li",function(){
    var i = $(this).data('nav');
    var $tab = $('.main-hiw__item[data-tab = "' + i + '"]');
    var $img = $('.content-imgs[data-img = "' + i + '"]');
    $(this).addClass("active");
    $(".features-tabs_item").not(this).removeClass("active");
    $(".content-imgs").not(this).removeClass("active");
    $(".main-hiw__item").removeClass("active");
    $tab.addClass("active");
})
 /* for hamburger menu cross*/
$(function() {
  $('#ChangeToggle').click(function() {
    $('#navbar-hamburger').toggleClass('d-none');
    $('#navbar-close').toggleClass('d-none');  
  });
});



$(function() {
    $('#p1.btn.btn-link').click(function() {
      $('#p2.btn.btn-link').removeClass('active');
      $('#p2 a.btn.btn-dark.btn-black').text("Details");
      $('#p3.btn.btn-link').removeClass('active');
      $('#p3 a.btn.btn-dark.btn-black').text("Details");
      $('#p4.btn.btn-link').removeClass('active');
      $('#p4 a.btn.btn-dark.btn-black').text("Details");

      if (!$(this).hasClass('active')) {
        $(this).toggleClass('active');
        $('#p1 a.btn.btn-dark.btn-black').text("SELECTED");
        $('#radio_button').prop('checked', true);
      }
      else{
        $(this).removeClass('active');
        $('#p1 a.btn.btn-dark.btn-black').text("Details");
        $('#radio_button').prop('checked', false);
      }
    });
});
$(function() {
    $('#p2.btn.btn-link').click(function() {
      $('#p1.btn.btn-link').removeClass('active');
      $('#p1 a.btn.btn-dark.btn-black').text("Details");
      $('#p3.btn.btn-link').removeClass('active');
      $('#p3 a.btn.btn-dark.btn-black').text("Details");
      $('#p4.btn.btn-link').removeClass('active');
      $('#p4 a.btn.btn-dark.btn-black').text("Details");
      if (!$(this).hasClass('active')) {
        $(this).toggleClass('active');
        $('#p2 a.btn.btn-dark.btn-black').text("SELECTED");
        $('#radio_button2').prop('checked', true);
      }
      else{
        $(this).removeClass('active');
        $('#p2 a.btn.btn-dark.btn-black').text("Details");
        $('#radio_button2').prop('checked', false);
      }
    });
});
$(function() {
    $('#p3.btn.btn-link').click(function() {
      $('#p1.btn.btn-link').removeClass('active');
      $('#p1 a.btn.btn-dark.btn-black').text("Details");
      $('#p2.btn.btn-link').removeClass('active');
      $('#p2 a.btn.btn-dark.btn-black').text("Details");
      $('#p4.btn.btn-link').removeClass('active');
      $('#p4 a.btn.btn-dark.btn-black').text("Details");
      if (!$(this).hasClass('active')) {
        $(this).toggleClass('active');
        $('#p3 a.btn.btn-dark.btn-black').text("SELECTED");
        $('#radio_button3').prop('checked', true);
      }
      else{
        $(this).removeClass('active');
        $('#p3 a.btn.btn-dark.btn-black').text("Details");
        $('#radio_button3').prop('checked', false);
      }
    });
});
$(function() {
      $('#p1.btn.btn-link').removeClass('active');
      $('#p1 a.btn.btn-dark.btn-black').text("Details");
      $('#p2.btn.btn-link').removeClass('active');
      $('#p2 a.btn.btn-dark.btn-black').text("Details");
      $('#p3.btn.btn-link').removeClass('active');
      $('#p3 a.btn.btn-dark.btn-black').text("Details");
    $('#p4.btn.btn-link').click(function() {
      if (!$(this).hasClass('active')) {
        $(this).toggleClass('active');
        $('#p4 a.btn.btn-dark.btn-black').text("SELECTED");
        $('#radio_button4').prop('checked', true);
      }
      else{
        $(this).removeClass('active');
        $('#p4 a.btn.btn-dark.btn-black').text("Details");
        $('#radio_button4').prop('checked', false);
      }
    });
});




/* for where add details page */
$(".bg .detail-form:nth-child(2)").css({"pointer-events": "none", "opacity": "0.5", "opacity": "0.5"});
$(".bg .detail-form:nth-child(3)").css({"pointer-events": "none", "opacity": "0.5"});
$(".bg .detail-form:nth-child(4)").css({"pointer-events": "none", "opacity": "0.5"});
$(function() {
    $('.address ul.loca li p').click(function() {
        
        var address = $(this).html();
        $("#address-val").val(address);
        $("#address").modal('hide');

        if($("#address-val").val() == ''){
            $(".detail-form .btn-hide").show();
        }
        else{
            $(".detail-form .after-fill1").show();
            $(".detail-form .btn-hide").hide();

        }
        if($("#address-val").val() != '' && $("#date-time-val").val() != '' && $("#tellus").val() != '' ){
        $(".save").show();
      }

      $(".bg .detail-form:nth-child(2)").css({"pointer-events": "initial", "opacity": "1"});
      $(".bg .detail-form:nth-child(2) .btn-green").css({"display": "initial"});
   });
    
    
});

$(".btn.btn-success.cont").click(function(){
  var select_type = $("#select-type").find(":selected").text();
  var set_time = $("#set_time").find(":selected").text();
  var future_date = $("#datepicker").val();
  var end_date = $("#datepicker2").val();
  var recurring = $("#recurring").find(":selected").text();
   var s = select_type + ', ' +  future_date + ', ' + set_time  + ', ' + recurring + ', ' + end_date ;

  $('#date-time-val').val(s);
  $("#date-time").modal('hide');

  if($("#date-time-val").val() == ''){
        $(".detail-form .btn-hide2").show();
    }
    else{
        $(".detail-form .after-fill2").show();
        $(".detail-form .btn-hide2").hide();
        
    }
  if($("#address-val").val() != '' && $("#date-time-val").val() != '' && $("#tellus").val() != '' ){
    $(".save").show();
  }
  $(".bg .detail-form:nth-child(3)").css({"pointer-events": "initial", "opacity": "1"});
   $(".bg .detail-form:nth-child(3) .btn-green").css({"display": "initial"});
});


/*for upload multiple photos*/



$(function() {
    // Multiple images preview in browser
    var imagesPreview = function(input, placeToInsertImagePreview) {
        if (input.files) {
            var filesAmount = input.files.length;
            var loopcount = (filesAmount > 3) ? 3 : filesAmount;
            var all = new Array();
            $(".detail-form .after-fill3").show();
            $(".detail-form .btn-hide3").hide();
            for (i = 0; i <= 2; i++) {
                var reader = new FileReader();
                all[i]=filesAmount;
                var total = all[i];
                
                
                reader.onload = function(event) {
                    var tHtml = '<div class="alert thumb_uploaded  fade show">\
                    <img src="'+event.target.result+'" class="img-thumbnail img-fluid" width="100" height="100">\
                    <span class="close-thmb-up"><a href="javascript:void(0);" data-dismiss="alert"><i class="fas fa-times"></i></a></span>\
                                            </div>';
                    $("#pictures").hide();
                    $(".bg .detail-form:nth-child(4)").css({"pointer-events": "initial", "opacity": "1"});
                     $(".bg .detail-form:nth-child(4) .btn-green").css({"display": "initial"});
                    $(tHtml).appendTo(placeToInsertImagePreview);
                }
                // if(total >3){
                //    $('.showImage .thumb_uploaded:last-child').text('Faizan');
                // }
                // else{
                //     console.log('kaam');
                // }
                reader.readAsDataURL(input.files[i]);
            }
            
            // $(placeToInsertImagePreview).html($(placeToInsertImagePreview).html() + tHtml);

            return filesAmount;


             
                 
        }

    };

    $('.uploadImage').on('change', function() {
        $(".showImage").html('');
        var length = imagesPreview(this, '.showImage');
        // alert(length);
        var tHtml = '';
        if(length <= 3) {
          tHtml = '';
        } else {
          tHtml = '<span class="circ">+ ';
          tHtml += length - 3;
          tHtml += '</span>';
        }
        var imgs = $('.showImage').html();
        $('.showImage').html('');
        $('.showImage').html(imgs + tHtml);
        
    });
});

/*tell us job text*/
$(".btn.btn-success.tellusbtn").click(function(){
  var why = $("#telljob").val();
  $('#tellus').val(why);
  $(".tellus").modal('hide');
  $(".detail-form .after-fill4").show();
  $(".detail-form .btn-hide4").hide();
  if($("#address-val").val() != '' && $("#date-time-val").val() != '' && $("#tellus").val() != '' ){
    $(".save").show();
  }
  
  
});

/* after adding details successpop up shows and redirects to next page*/

$(".successpop-trigger").click(function(){
    $(".successpop").modal('show');
    var delay = 3000; 
    var URL = 'scheduled-services.php';
    setTimeout(function(){ window.location = URL; }, delay);
});
/* after adding payment successpop up shows and redirects to next page*/

$(".payment-success-pop-trigger").click(function(){
    $(".payment-success-pop").modal('show');
    var delay = 3000; 
    var URL = '';
    setTimeout(function(){ window.location = URL; }, delay);
});

/* cancel service popup*/
$(".cancelpop #close").click(function(){
    $(".cancelpop").modal('hide');
});

/* after successfull reschdule task*/

$("#date-time-re a").click(function(){
    $("#date-time-re").modal('hide');
    $("#reschedulepop").modal('hide');
    $("#reschedulepopsuccess").modal('show');
    var delay = 3000; 
    var URL = '';
    setTimeout(function(){ $("#reschedulepopsuccess").modal('hide'); }, delay);
});

/* add tip and rate button remove*/
$(".payit").click(function(){
    if($(".tip-dollar").val() != ''){
      var tip = $('.tip-dollar').val();
      $("#tipprice").html('$'+ tip);
      $("#addtipbtn").hide();
      $(".tip-desc").css('display','flex');
      $("#tip").modal('hide');
  }
});

$(".review-sub").click(function(){
    if($(".enter-review").val() != ''){
      var rev = $('.enter-review').val();
      $(".rev-dis").html(rev);
      $("#ratebtn").hide();
      $(".summary .review").show();
      $("#rate").modal('hide');
  }
});

/* star rating*/
$(".my-rating").starRating({
    starSize: 40,
     hoverColor: '#FFB900',
     starShape: 'rounded',
    callback: function(currentRating, $el){
        // make a server call here
    }
});

/*tooltip*/
$(function () {
  $('[data-toggle="tooltip"]').tooltip({
    html: true
  })
})

/*** image picture upload **/
function readURL(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function(e) {
      $('.image-upload-wrap').hide();

      $('.file-upload-image').attr('src', e.target.result);
      $('.file-upload-content').show();

      $('.image-title').html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeUpload();
  }
}

function removeUpload() {
  $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  $('.file-upload-content').hide();
  $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
        $('.image-upload-wrap').addClass('image-dropping');
    });
    $('.image-upload-wrap').bind('dragleave', function () {
        $('.image-upload-wrap').removeClass('image-dropping');
});


$(".complete-prof .detail-form:nth-child(2)").css({"pointer-events": "none", "opacity": "0.5", "opacity": "0.5"});
$(".complete-prof .detail-form:nth-child(3)").css({"pointer-events": "none", "opacity": "0.5"});
$(".complete-prof .detail-form:nth-child(4)").css({"pointer-events": "none", "opacity": "0.5"});
$(".cont1").click(function(){
    $(".aboutme").modal('hide');
    $(".complete-prof .after-fill1").show();
    $(".complete-prof .btn-hide").hide();
    $(".complete-prof .detail-form:nth-child(2)").css({"pointer-events": "initial", "opacity": "1"});
    $(".complete-prof .detail-form:nth-child(2) .btn-green").css({"display": "initial"});
});


/* identitiy verified*/
$("#numbersubmit").click(function(){
 $("#identityverification").modal('hide');
 $("#identity").modal('show');
    var delay = 3000; 
    var URL = '';
    setTimeout(function(){ 
      $("#identity").modal('hide'); 
      $("#identityverified").modal('show'); 
    }, delay);
});

$(function() {
    $('#location ul.loca li p').click(function() {
      $(".complete-prof .after-fill3").show();
      $(".complete-prof .btn-hide2").hide();
      $("#location").modal('hide');
      $(".bg .detail-form:nth-child(4)").css({"pointer-events": "initial", "opacity": "1"});
      $(".bg .detail-form:nth-child(4) .btn-green").css({"display": "initial"});
   });
    
    
});

$(function() {
    $('#addpaymentdetails').click(function() {
      $(".complete-prof .after-fill4").show();
      $(".complete-prof .btn-hide4").hide();
      $(".submitcompleteprofile").show();
   });
    
    
});

$('.lists').click(function(e) {
    e.preventDefault();
  
    var $this = $(this);
  
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
      
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});

$(function() {
    $('#addskillpopbtn').click(function() {
      $("#addskillpop").modal('hide');
      $("#skillsuccess").modal('show');
   });
    
    
});